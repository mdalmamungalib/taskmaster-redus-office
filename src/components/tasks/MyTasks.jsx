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
import { useEffect, useState } from "react";

const MyTasks = () => {
  const dispatch = useDispatch();
  const { name } = useSelector((state) => state.userSlice);
  console.log(name);
  const { userSpecificTasks } = useSelector(
    (state) => state.taskSlice
  );

  console.log("userSpecificTasks", userSpecificTasks);

  const [taskId, setTaskId] = useState(0);
  let [isOpen, setIsOpen] = useState(false);

  const handleModal = (id) => {
    setTaskId(id);
    setIsOpen(!isOpen);
  };

  // function openModal() {
  //   setIsOpen(true);
  // }

  useEffect(() => {
    if (name) {
      dispatch(userTasks(name));
    }
  }, [name, dispatch]);

  return (
    <div>
      <TaskDetailsModal
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        id={taskId}
      />
      <h1 className="my-3 text-xl">My Tasks</h1>
      <div className="h-[750px] overflow-auto space-y-3">
        {userSpecificTasks.length > 0 ? (
          userSpecificTasks.map((item) => (
            <div
              key={item.id}
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
                        id: item?.id,
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
