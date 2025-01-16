import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function TaskDetailsModal({ isOpen, setIsOpen, item }) {
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        {/* Overlay */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-30" />
        </Transition.Child>

        {/* Modal Content */}
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-lg bg-white shadow-lg transition-all">
                <div className="p-6">
                  {/* Title */}
                  <Dialog.Title
                    as="h3"
                    className="text-xl font-bold text-gray-800 flex items-center gap-2"
                  >
                    <span className="inline-block bg-blue-100 text-blue-600 rounded-full px-3 py-1 text-sm">
                      Task Details
                    </span>
                  </Dialog.Title>

                  {/* Task Content */}
                  <div className="mt-4 space-y-6">
                    <div className="p-4 rounded-lg bg-gray-100 flex flex-col gap-3">
                      <h2
                        className={`text-lg font-semibold ${
                          item?.priority === "High"
                            ? "text-red-600"
                            : item?.priority === "Medium"
                            ? "text-yellow-600"
                            : "text-green-600"
                        }`}
                      >
                        {item?.title || "Untitled Task"}
                      </h2>
                      <p className="text-gray-700">
                        {item?.description || "No description available."}
                      </p>
                      <div className="mt-2 text-sm text-gray-600 space-y-2">
                        <p>
                          <span className="font-medium">Assigned To:</span>{" "}
                          {item?.assignedTo || "N/A"}
                        </p>
                        <p>
                          <span className="font-medium">Deadline:</span>{" "}
                          {item?.dateline || "No deadline set"}
                        </p>
                        <p>
                          <span className="font-medium">Priority:</span>{" "}
                          {item?.priority || "N/A"}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-6 flex justify-end gap-3">
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
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
