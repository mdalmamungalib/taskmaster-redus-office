import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import Modal from "../ui/Modal";

export default function TaskDetailsModal({
  isOpen,
  setIsOpen,
  id,
}) {
  const { tasks } = useSelector((state) => state.taskSlice);
  const task = tasks.find((task) => task.id === id);
  console.log(task);
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title={task?.title}
    >
      <div className="p-6">
        {/* Task Content */}
        <div className="mt-4 space-y-6">
          <div className="flex flex-col gap-3 p-4 bg-gray-100 rounded-lg">
            <h2
              className={`text-lg font-semibold ${
                task?.priority === "High"
                  ? "text-red-600"
                  : task?.priority === "Medium"
                  ? "text-yellow-600"
                  : "text-green-600"
              }`}
            >
              {task?.title || "Untitled Task"}
            </h2>
            <p className="text-gray-700">
              {task?.description || "No description available."}
            </p>
            <div className="mt-2 space-y-2 text-sm text-gray-600">
              <p>
                <span className="font-medium">Assigned To:</span>{" "}
                {task?.assignedTo || "N/A"}
              </p>
              <p>
                <span className="font-medium">Deadline:</span>{" "}
                {task?.dateline || "No deadline set"}
              </p>
              <p>
                <span className="font-medium">Priority:</span>{" "}
                {task?.priority || "N/A"}
              </p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3 mt-6">
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 focus:ring-2 focus:ring-offset-2"
            onClick={closeModal}
          >
            Cancel
          </button>
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            onClick={closeModal}
          >
            Done
          </button>
        </div>
      </div>
    </Modal>
  );
}
