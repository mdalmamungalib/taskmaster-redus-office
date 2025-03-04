import {
  BellIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import MyTasks from "../components/tasks/MyTasks";
import TaskCard from "../components/tasks/TaskCard";
import { useState } from "react";
import AddTaskModal from "../components/tasks/AddTaskModal";
import DropDown from "../components/ui/DropDown";
import { useGetTasksQuery } from "../Redux/features/api/baseApi";

const Tasks = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: tasks, isLoading, isError } = useGetTasksQuery();
  console.log(tasks,"data");
  console.log(isError,"isError");

  // Handle API loading and errors
  if (isLoading) {
    return <div className="flex items-center justify-center h-screen">Loading tasks...</div>;
  }
  
  
  if (isError) return <p>Error fetching tasks: {isError.message}</p>;
  
  // if (isError) {
  //   return <div className="mt-10 text-center text-red-500">Failed to load tasks. Please try again later.</div>;
  // }

  // Filter tasks based on status
  const pendingTasks = tasks?.filter((item) => item.status === "pending") || [];
  const runningTasks = tasks?.filter((item) => item.status === "running") || [];
  const doneTasks = tasks?.filter((item) => item.status === "done") || [];

  return (
    <div className="grid h-screen grid-cols-12">
      {/* Left Side */}
      <div className="col-span-9 px-10 pt-10">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-semibold">Tasks</h1>
          <div className="flex gap-5">
            {/* Search & Notification Buttons */}
            <button className="grid w-10 h-10 transition-all border-2 border-secondary/20 hover:border-primary hover:bg-primary rounded-xl place-content-center text-secondary hover:text-white">
              <MagnifyingGlassIcon className="w-6 h-6" />
            </button>
            <button className="grid w-10 h-10 transition-all border-2 border-secondary/20 hover:border-primary hover:bg-primary rounded-xl place-content-center text-secondary hover:text-white">
              <BellIcon className="w-6 h-6" />
            </button>
            
            {/* Add Task Button */}
            <button onClick={() => setIsOpen(true)} className="btn btn-primary">
              Add Task
            </button>
            <AddTaskModal setIsOpen={setIsOpen} isOpen={isOpen} />

            {/* Dropdown */}
            <DropDown />
          </div>
        </div>

        {/* Tasks Board */}
        <div className="grid grid-cols-3 gap-5 mt-10">
          {/* Pending Tasks */}
          <TaskColumn title="Up Next" tasks={pendingTasks} />

          {/* Running Tasks */}
          <TaskColumn title="In Progress" tasks={runningTasks} />

          {/* Completed Tasks */}
          <TaskColumn title="Complete" tasks={doneTasks} />
        </div>
      </div>

      {/* Right Side */}
      <div className="col-span-3 px-10 pt-10 border-l-2 border-secondary/20">
        <h1 className="text-xl">Members</h1>
        <div className="flex gap-3 mt-3">
          {memberImages.map((imgUrl, index) => (
            <div key={index} className="w-10 h-10 overflow-hidden rounded-xl">
              <img src={imgUrl} alt="Member" className="object-cover w-full h-full" />
            </div>
          ))}
        </div>
        <MyTasks />
      </div>
    </div>
  );
};

// Task Column Component
const TaskColumn = ({ title, tasks }) => (
  <div className="relative h-[800px] overflow-auto">
    <div className="flex sticky top-0 justify-between bg-[#D3DDF9] p-5 rounded-md mb-3">
      <h1>{title}</h1>
      <p className="grid w-6 h-6 text-white rounded-md bg-primary place-content-center">
        {tasks.length}
      </p>
    </div>
    <div className="space-y-3">
      {tasks.map((item) => (
        <TaskCard key={item?.id} task={item} />
      ))}
    </div>
  </div>
);

// Dummy Member Images
const memberImages = [
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
];

export default Tasks;
