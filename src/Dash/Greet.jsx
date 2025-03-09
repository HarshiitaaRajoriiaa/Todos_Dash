import React, { useState, useEffect } from "react";
import { SlCalender } from "react-icons/sl";

export default function Greet() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formattedDate = currentDateTime.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const formattedTime = currentDateTime.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  const day = currentDateTime.toLocaleDateString("en-US", { weekday: "long" });

  return (
    <div className="bg-[#1E293B] shadow-lg rounded-xl p-4 flex flex-col sm:flex-row justify-between items-center w-full overflow-hidden">
      <h1 className="text-3xl font-bold text-[#EC7FA9] hover:scale-110 transition-transform text-center sm:text-left">
        HEY HARSHITA!
        <span className="inline-block [animation:waving-hand_1.5s_ease-in-out_infinite] origin-[70%_70%]">
          👋
        </span>
      </h1>

      {/* Time component shifts below in mobile view */}
      <div className="text-lg text-gray-300 bg-gray-600 px-4 py-2 rounded-lg shadow-md flex items-center mt-2 sm:mt-0">
        <SlCalender className="text-pink-400 mr-2" /> {day}, {formattedDate} | {formattedTime}
      </div>
    </div>
  );
}
