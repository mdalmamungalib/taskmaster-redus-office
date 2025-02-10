import {
  CheckIcon,
  DocumentMagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import {
  statusUpdate,
  userTasks,
} from "../../Redux/features/task/taskSlice";
import TaskDetailsModal from "./TaskDetailsModal";
import { useEffect, useState, useCallback } from "react";
import { useLocation } from "react-router-dom";

const MyTasks = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { name } = useSelector((state) => state.userSlice);
  const { userSpecificTasks } = useSelector(
    (state) => state.taskSlice
  );

  console.log("User Name:", name);
  console.log("User Tasks:", userSpecificTasks);

  const [taskId, setTaskId] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = useCallback((id) => {
    setTaskId(id);
    setIsOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    if (
      name &&
      typeof name === "string" &&
      name.trim() !== ""
    ) {
      dispatch(userTasks(name));
    } else {
      console.warn(
        "Skipping userTasks dispatch: Invalid name",
        name
      );
    }
  }, [name, location.pathname, dispatch]);

  return (
    <div>
      <TaskDetailsModal
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        id={taskId}
      />
      <h1 className="my-3 text-xl">My Tasks</h1>
      <div className="h-[750px] overflow-auto space-y-3">
        {Array.isArray(userSpecificTasks) &&
        userSpecificTasks.length > 0 ? (
          userSpecificTasks.map((item, index) => (
            <div
              key={item.id || index}
              className="flex justify-between p-3 rounded-md bg-secondary/10"
            >
              <h1>{item.title}</h1>
              <div className="flex gap-3">
                <button
                  onClick={() => handleModal(item.id)}
                  className="grid place-content-center"
                  title="Details"
                >
                  <DocumentMagnifyingGlassIcon className="w-5 h-5 text-primary" />
                </button>
                <button
                  onClick={() =>
                    dispatch(
                      statusUpdate({
                        id: item.id,
                        status: "done",
                      })
                    )
                  }
                  className="grid place-content-center"
                  title="Done"
                >
                  <CheckIcon className="w-5 h-5 text-primary" />
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center mt-5">
            No tasks assigned yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default MyTasks;
