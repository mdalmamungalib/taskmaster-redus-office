import {
  CheckIcon,
  DocumentMagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";

const MyTasks = () => {
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
                className="grid place-content-center"
                title="Details"
              >
                <DocumentMagnifyingGlassIcon className="w-5 h-5 text-primary" />
              </button>
              <button
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
