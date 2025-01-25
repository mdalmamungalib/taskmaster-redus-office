import React from "react";
import { useSelector } from "react-redux";
import TaskCard from "../components/tasks/TaskCard";

const Archive = () => {
  // Extract tasks from Redux state
  const { tasks } = useSelector((state) => state.taskSlice);

  // Filter archived tasks
  const archiveTasks = tasks.filter((item) => item.status === "archived");

  return (
    <div className="col-span-9 px-10 pt-10">
      <h1 className="mb-4 text-2xl font-bold">Archived Tasks</h1>
      {archiveTasks.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {archiveTasks.map((item) => (
            <TaskCard key={item.id} task={item} />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500">
          <p className="text-lg">No archived tasks available.</p>
        </div>
      )}
    </div>
  );
};

export default Archive;
