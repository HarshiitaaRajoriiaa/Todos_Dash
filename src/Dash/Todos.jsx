import React, { useState, useEffect } from "react";
import Checkbox from "@mui/material/Checkbox";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

export default function Todos() {
  const tasks = [
    "✅ Complete React assignment",
    "📖 Revise DSA concepts",
    "📚 Read 10 pages of a book",
    "💻 Work on web development project",
    "🧠 Practice coding problems",
    "🪥Brush your Teeth *specially for you"
  ];

  const [completedTasks, setCompletedTasks] = useState(
    new Array(tasks.length).fill(false)
  );

  const handleCheck = (index) => {
    const updatedTasks = [...completedTasks];
    updatedTasks[index] = !updatedTasks[index];
    setCompletedTasks(updatedTasks);
  };

  const completedCount = completedTasks.filter(Boolean).length;
  const totalCount = tasks.length;
  const completionPercentage = Math.round((completedCount / totalCount) * 100);

  const pieData = [
    { name: "Completed", value: completedCount },
    { name: "Remaining", value: totalCount - completedCount },
  ];

  const COLORS = ["#6B7280", "#D1D5DB"];

  useEffect(() => {
    const now = new Date();
    const timeUntilMidnight =
      new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0) -
      now;

    const resetTimer = setTimeout(() => {
      setCompletedTasks(new Array(tasks.length).fill(false));
    }, timeUntilMidnight);

    return () => clearTimeout(resetTimer);
  }, [completedTasks]);

  return (
    <div className="bg-gradient-to-r from-[#1a1a2e] to-[#16213e] m-3 shadow-xl rounded-xl p-6  text-white border border-gray-700 overflow-hidden">
      <h2 className="text-2xl font-bold   mb-4">
        📝 Your Tasks
      </h2>

      <div className="flex flex-col sm:flex-row justify-between " >
        {/* Task List */}
        <div className="space-y-3 w-full sm:w-2/3">
          {tasks.map((task, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 bg-gray-800 p-3 rounded-lg shadow-md hover:shadow-xl transition"
            >
              <Checkbox
                sx={{
                  color: "white",
                  "&.Mui-checked": { color: "#3DC2EC" },
                }}
                checked={completedTasks[index]}
                onChange={() => handleCheck(index)}
              />
              <span className="text-gray-300 font-medium">{task}</span>
            </div>
          ))}
        </div>

        {/* Pie Chart */}
        <div className="flex flex-col items-center w-full sm:w-1/3 mt-4 sm:mt-0">
          <h3 className="text-xl font-semibold   mb-2">
            📊 Task Completion: {completionPercentage}%
          </h3>
          <PieChart width={180} height={180}>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              outerRadius={70}
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={index === 0 ? "#FFB8E0" : "#BE5985"}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>
      </div>
    </div>
  );
}
