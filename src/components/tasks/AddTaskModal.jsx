import React from "react";
import { useForm } from "react-hook-form";
import Modal from "../ui/Modal";
import { useDispatch, useSelector } from "react-redux";
import { addtask } from "../../Redux/features/task/taskSlice";


const AddTaskModal = ({ isOpen, setIsOpen, title }) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(addtask(data));
    reset();
    setIsOpen(false); 
  };

  const { name } = useSelector((state) => state.userSlice);

    console.log("user name",name)

  const assign = [
    { id: 1, name: "Arman Khan" },
    { id: 2, name: "Sumaiya Akter" },
    { id: 3, name: "Faruk Ahmed" },
    { id: 4, name: "Sam Wilson" },
    { id: 5, name: "Jane Smith" },
    { id: 6, name: "John Doe" },
    { id: 6, name: "Tad Lopez" },
    { id: 7, name: name },
    // ...rest of the options
  ];

  const priority = [
    { id: 1, name: "High" },
    { id: 2, name: "Medium" },
    { id: 3, name: "Low" },
  ];

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title={title || "Add Task"}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-6 space-y-6 bg-white rounded-lg shadow-md"
      >
        {/* Title */}
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            {...register("title", {
              required: "Title is required",
            })}
            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.title && (
            <p className="mt-2 text-sm text-red-600">
              {errors.title.message}
            </p>
          )}
        </div>

        {/* Description */}
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            {...register("description")}
            placeholder="Add a brief description"
            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Dateline */}
        <div>
          <label
            htmlFor="dateline"
            className="block text-sm font-medium text-gray-700"
          >
            Dateline
          </label>
          <input
            type="date"
            id="dateline"
            {...register("dateline", {
              required: "Dateline is required",
            })}
            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.dateline && (
            <p className="mt-2 text-sm text-red-600">
              {errors.dateline.message}
            </p>
          )}
        </div>

        {/* Assign To */}
        <div>
          <label
            htmlFor="assignTo"
            className="block text-sm font-medium text-gray-700"
          >
            Assign to
          </label>
          <select
            {...register("assignedTo")}
            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            {assign.map((item) => (
              <option key={item.id} value={item.name}>
                {item.name}
              </option>
            )) }
          </select>
        </div>

        {/* Priority */}
        <div>
          <label
            htmlFor="priority"
            className="block text-sm font-medium text-gray-700"
          >
            Priority
          </label>
          <select
            {...register("priority")}
            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            {priority.map((item) => (
              <option key={item.id} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3">
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md shadow-sm hover:bg-gray-200 focus:ring-2 focus:ring-gray-300"
            onClick={() => (setIsOpen(false), reset())}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddTaskModal;
