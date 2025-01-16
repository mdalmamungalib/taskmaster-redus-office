import {
  CheckIcon,
  DocumentMagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { statusUpdate } from "../../Redux/features/task/taskSlice";
import TaskDetailsModal from "./TaskDetailsModal";
import { useState } from "react";

const MyTasks = () => {
  const dispatch = useDispatch();

  let [isOpen, setIsOpen] = useState(false)
  function openModal() {
    setIsOpen(true)
  }

  const { tasks } = useSelector((state) => state.taskSlice);


  return (
    <div>
      <h1 className="my-3 text-xl">My Tasks</h1>
      <div className=" h-[750px] overflow-auto space-y-3">
        {tasks.map((item) => (
          <div
            key={item.id}
            className="flex justify-between p-3 rounded-md bg-secondary/10"
          >
            <h1>{item.title}</h1>
            <div className="flex gap-3">
              <button
              onClick={openModal}
                className="grid place-content-center"
                title="Details"
              >
                <DocumentMagnifyingGlassIcon className="w-5 h-5 text-primary" />
              </button>
              <TaskDetailsModal setIsOpen={setIsOpen} isOpen={isOpen} item={item}/>
              <button
              onClick={()=>dispatch(statusUpdate({id: item?.id, status: "done"})) }
                className="grid place-content-center"
                title="Done"
              >
                <CheckIcon className="w-5 h-5 text-primary" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyTasks;
