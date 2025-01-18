import { ArrowRightIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { removeTask, statusUpdate } from "../../Redux/features/task/taskSlice";

const TaskCard = ({ task }) => {
  const dispatch = useDispatch();
  console.log(task)

  // Determine the next status
  const nextStatus =
    task.status === "pending"
      ? "running"
      : task.status === "running"
      ? "done"
      : "archived";

  return (
    <div className="p-6 transition-shadow duration-200 bg-gray-100 rounded-lg shadow-sm hover:shadow-md">
      {/* Task Priority and Title */}
      <div className="flex items-center justify-between">
        <h1
          className={`text-lg font-semibold ${
            task.priority === "High"
              ? "text-red-600"
              : task.priority === "Medium"
              ? "text-yellow-500"
              : task.priority === "Low"
              ? "text-green-500"
              : "text-gray-700"
          }`}
        >
          {task?.title}
        </h1>
        <span
          className={`px-2 py-1 text-xs font-medium rounded-full ${
            task.priority === "High"
              ? "bg-red-100 text-red-600"
              : task.priority === "Medium"
              ? "bg-yellow-100 text-yellow-600"
              : task.priority === "Low"
              ? "bg-green-100 text-green-600"
              : "bg-gray-200 text-gray-600"
          }`}
        >
          {task.priority}
        </span>
      </div>

      {/* Task Description */}
      <p className="mt-3 text-gray-700">{task?.description}</p>

      {/* Task Details */}
      <div className="mt-4 text-sm text-gray-500">
        <p>
          <strong>Assigned to:</strong> {task?.assignedTo}
        </p>
        <p>
          <strong>Deadline:</strong> {task?.dateline || "N/A"}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-between mt-5">
        {/* Status Display */}
        <span
          className={`text-sm font-medium ${
            task.status === "pending"
              ? "text-blue-500"
              : task.status === "running"
              ? "text-orange-500"
              : task.status === "done"
              ? "text-green-500"
              : "text-gray-500"
          }`}
        >
          {task.status.charAt(0).toUpperCase() + task.status.slice(1)}
        </span>

        {/* Buttons */}
        <div className="flex gap-2">
          {/* Delete Button */}
          <button
            onClick={() => dispatch(removeTask(task.id))}
            title="Delete Task"
            className="p-2 text-red-600 bg-red-100 rounded-full hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <TrashIcon className="w-5 h-5" />
          </button>

          {/* Update Status Button */}
          <button
            onClick={() =>
              dispatch(statusUpdate({ id: task.id, status: nextStatus }))
            }
            title={`Mark as ${nextStatus}`}
            className="p-2 text-blue-600 bg-blue-100 rounded-full hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <ArrowRightIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
