"use client";

import { useState, useEffect, useRef, ChangeEvent } from "react";

export default function CountdownTimer() {
  const [duration, setDuration] = useState<number | string>("");
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const timeRef = useRef<any>(null);

  const forSetDuration = (): void => {
    if (typeof duration === "number" && duration > 0) {
      setTimeLeft(duration);
      setIsActive(false);
      setIsPaused(false);
      if (timeRef.current) {
        clearInterval(timeRef.current);
      }
    }
  };

  const forStart = (): void => {
    if (timeLeft > 0) {
      setIsActive(true);
      setIsPaused(false);
    }
  };

  const forPaused = () => {
    if (isActive) {
      setIsPaused(true);
      setIsActive(false);

      if (timeRef.current) {
        clearInterval(timeRef.current);
      }
    }
  };

  const forReset = () => {
    setIsActive(false);
    setIsPaused(false);
    setTimeLeft(typeof duration === "number" && Math.sign(duration)===1 ? duration : 0); //means ager humen duration mila hoa hai number me to usko hi set kr den ge wrna 0 kr den ge set. phir check kr rhe ke duration negative to nhi
    if (timeRef.current) {
      clearInterval(timeRef.current);
    }
  };

  useEffect(() => {
    if (isActive && !isPaused) {
      timeRef.current = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timeRef.current);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000); //every second it will deduct one second from the previous time
    }
    return () => {
      if (timeRef.current) {
        clearInterval(timeRef.current); //Cancels a Timeout object created by setInterval()
      }
    };
  }, [isActive, isPaused]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60; //If time is 125 seconds, 125 % 60 would be 5, so second would be 5 as we are showing seconds after MINUTES
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  const forDurationChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDuration(Number(event.target.value) || "");
  };

  return (
    <main className="bg-gradient-to-tl from-blue-600 to-cyan-400 w-full shadow-xl p-7 mx-auto my-48 rounded-lg max-w-md ">
      <div className="flex flex-col items-center">
        <h1 className="bg-gradient-to-r from-red-600 to-purple-700 bg-clip-text text-transparent text-center text-2xl md:text-3xl font-extrabold text-gray-800">
          Countdown Timer
          <div className="bg-gradient-to-r from-purple-700 to-red-600 mt-1 h-2 border-none rounded-full underlineAnimation"></div>
        </h1>
      </div>

      <div className="flex my-5">
        <input
          className="min-w-0 p-3 outline-none text-sm hover:border-[2px] hover:border-red-600 focus:border-red-600 focus:shadow-lg focus:shadow-red-400 focus:scale-105 border-2 border-white text-gray-800 rounded-xl h-9 w-[420px] mx-auto transition-all duration-300"
          type="number"
          id="duration"
          value={duration}
          placeholder="Enter time in seconds"
          onChange={forDurationChange}
        />
        <button
          onClick={forSetDuration}
          className="w-fit h-8 outline-none px-3 rounded-lg mx-3 bg-gray-900 text-slate-50 hover:cursor-pointer hover:scale-110 hover:shadow-md hover:shadow-black active:bg-slate-50 active:text-gray-900 border-[1px] text-xl font-bold transition-all duration-200"
        >
          Set
        </button>
      </div>
      <h1 className="text-7xl font-bold text-center text-transparent bg-gradient-to-r from-red-600 to-purple-700  bg-clip-text">
        {formatTime(timeLeft)}
      </h1>

      <div className="flex justify-center mt-10 gap-3 md:gap-5">
        <button
          onClick={forStart}
          className="w-fit h-8 outline-none px-3 rounded-lg mx-3 bg-gray-900 text-slate-50 hover:cursor-pointer hover:scale-110 hover:shadow-md hover:shadow-black active:bg-slate-50 active:text-gray-900 border-[1px] text-xl font-bold transition-all duration-200"
        >
          {!isPaused ? "Start" : "Resume"}
        </button>
        <button
          onClick={forPaused}
          className="w-fit h-8 outline-none px-3 rounded-lg mx-3 bg-gray-900 text-slate-50 hover:cursor-pointer hover:scale-110 hover:shadow-md hover:shadow-black active:bg-slate-50 active:text-gray-900 border-[1px] text-xl font-bold transition-all duration-200"
        >
          Pause
        </button>
        <button
          onClick={forReset}
          className="w-fit h-8 outline-none px-3 rounded-lg mx-3 bg-gray-900 text-slate-50 hover:cursor-pointer hover:scale-110 hover:shadow-md hover:shadow-black active:bg-slate-50 active:text-gray-900 border-[1px] text-xl font-bold transition-all duration-200"
        >
          Reset
        </button>
      </div>
    </main>
  );
}
