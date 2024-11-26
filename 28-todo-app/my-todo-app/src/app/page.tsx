import TodoList from "./components/TodoList";

export default function Home() {
  return (
    <main className="mt-7 flex justify-center items-center bg-white shadow-2xl shadow-slate-600 w-fit mx-auto p-5 rounded-lg">
      <div>
        <h1 className="text-center font-bold text-4xl my-5 mb-7">
          ToDo List App
        </h1>
        <TodoList />
      </div>
    </main>
  );
}
