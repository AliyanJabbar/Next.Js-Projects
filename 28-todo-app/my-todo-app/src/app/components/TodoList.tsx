"use client";
import { useEffect, useRef, useState } from "react";
// importing icon from react icon
import { IoIosAddCircle } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit, FaLess } from "react-icons/fa";

const TodoList = () => {
  const [error, setError] = useState<string>("");
  //first time fetching from API
  useEffect(() => {
    async function fetchTodos() {
      try {
        const response = await fetch("/api/todos");
        if (!response.ok) {
          throw new Error("Failed to fetch todos");
        }
        const data = await response.json();
        setTodos(data.sort((a: any, b: any) => a.id - b.id));
      } catch (err) {
        setError("Unable to load todos. Please check your connection.");
        // Auto-hide error after 5 seconds
        setTimeout(() => setError(""), 5000);
      }
    }

    fetchTodos();
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  //state to manage modal(popup) for taking input
  const [inputData, setInputData] = useState(""); //state for input data

  // functions for handeling closing and opening of modal(popup)
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // state for changing todo
  const [isChanging, setIsChanging] = useState(false);

  // for focusing the input when opening the modal
  let inputRef = useRef<HTMLInputElement>(null);

  // to focus the input when modal open
  useEffect(() => {
    if (isModalOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isModalOpen, inputRef.current]);

  //state for id
  const [id, setId] = useState(1);
  // state array for todos
  const [todos, setTodos] = useState<any[]>([]);

  async function addItem() {
    //for changing a todo
    if (isChanging) {
      if (inputRef.current) {
        const response = await fetch("/api/todos", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: id,
            text: inputRef.current.value,
          }),
        });
        const updatedTodo = await response.json();
        const newTodos = todos.map((todo) =>
          todo.id === id ? updatedTodo : todo
        );
        setTodos(newTodos.sort((a, b) => a.id - b.id));
        setIsModalOpen(false);
        setIsChanging(false);
        setInputData("");
      }
    }
    //for adding a new todo
    else {
      if (inputData.trim() !== "") {
        try {
          const response = await fetch("/api/todos", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              text: inputData,
              id: todos.length + 1,
            }),
          });

          if (!response.ok) {
            throw new Error("Failed to add todo");
          }

          const newTodo = await response.json();
          setTodos([...todos, newTodo]);
          setInputData("");
          closeModal();
        } catch (error) {
          setError(`ERROR ADDING A TODO : ${error}`);
          setTimeout(() => setError(""), 5000);
        }
      } else {
        setError("Task Should not be Empty!");
        setTimeout(() => setError(""), 5000);
      }
    }
  }

  //function for editing a todo

  async function delItem(id: number) {
    try {
      const response = await fetch(`/api/todos?id=${id}`, {
        method: "DELETE"
      });
  
      if (!response.ok) {
        throw new Error(`Delete failed with status: ${response.status}`);
      }
  
      const updatedTodos = await response.json();
      setTodos(updatedTodos.sort((a: any, b: any) => a.id - b.id));
  
    } catch (error) {
      setError("Failed to delete todo. Please try again.");
      setTimeout(() => setError(""), 5000);
    }
  }
    

  function editItem(id: number) {
    setIsChanging(true);
    setIsModalOpen(true);
    let obj = todos.find((item) => item.id === id);
    setInputData(obj.text);
    setId(obj.id);
  }

  // handling the Shift + Enter functionality to add a todo
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter" && event.shiftKey && !isChanging) {
        event.preventDefault();
        openModal();
        setIsChanging(false);
        setInputData("");
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);
  return (
    <div>
      {error && (
        <div className="fixed top-4 right-4 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 fade-in ">
          {error}
        </div>
      )}
      {/* button for adding a new task */}
      <button
        onClick={() => {
          openModal();
          setIsChanging(false);
          setInputData("");
        }}
        className="relative inline-flex items-center justify-center font-bold text-2xl text-white bg-blue-700 w-[300px] sm:w-[500px] md:w-[650px] lg:w-[800px] xl:w-[900px] px-5 py-3 rounded-xl gap-2 hover:bg-blue-800 active:scale-95 transition-all duration-150"
      >
        Add New Task
        <IoIosAddCircle className="mt-[2px] ml-1" size={30} />
        <div className="absolute bottom-0 right-1 text-[20px] font-thin">
          Shift + Enter
        </div>
      </button>

      {/* popup for taking input */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-xl shadow-lg w-[500px]">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl font-bold">
                {isChanging ? "Changing Todo" : "Add a New Task"}
              </h1>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 "
              >
                ✕
              </button>
            </div>
            <input
              ref={inputRef}
              type="text"
              value={inputData}
              placeholder="Your Task"
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  event.preventDefault();
                  addItem();
                }
              }}
              onChange={(e) => {
                setInputData(e.target.value);
              }}
              className="w-full p-2 border-2 border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
            />
            <div className="mt-4 flex justify-end">
              <button
                onClick={closeModal}
                className="mr-2 px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  addItem();
                  setIsChanging(false);
                }}
                className="px-4 py-2 bg-blue-700 text-white text-nowrap rounded-lg hover:bg-blue-800 active:bg-blue-700"
              >
                {isChanging ? "Change Task" : "Add Task"}
              </button>
            </div>
          </div>
        </div>
      )}
      {/* generated todos */}
      <div className="grid grid-cols-1 mt-10 lg:grid-cols-2 lg:gap-7">
        {todos.map((item, i) => {
          //returning each todo generated dynamically
          return (
            <div
              key={i}
              className="h-[70px] inline-flex items-center justify-between text-[20px] bg-gray-100 px-5 py-3 my-[5px] rounded-xl"
            >
              <span className="font-bold mr-2">{`${item.id}.`}</span>
              <span className="font-bold text-xl items-center w-[180px] sm:w-[350px] md:w-[500px] lg:w-[250px] xl:w-[300px] truncate mr-4">
                {item.text}
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    editItem(item.id);
                  }}
                  className="text-blue-600 hover:text-blue-700 active:text-blue-600"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => delItem(item.id)}
                  className="text-red-600 hover:text-red-700 active:text-red-600"
                >
                  <MdDeleteForever size={25} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;
