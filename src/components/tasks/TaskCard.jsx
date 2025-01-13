import { ArrowRightIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useDispatch } from 'react-redux';
import { statusUpdate } from '../../features/counter/taskSlice';

const TaskCard = ({task}) => {
  const dispatch = useDispatch();
console.log(task.status)
  let updateStatus;
  if (task.status === "pendding") {
    updateStatus = "running";
  } else if (task.status === "running") {
    updateStatus = "done";
  } else {
    updateStatus = "arcive";
  }
  // const task = {
  //   id: 1,
  //   status: 'pending',
  //   title: 'Remove Button',
  //   description:
  //     'We need a remove button in our task card. Meke the button red and use Heroicon for tashbin icon.',
  //   date: '2023-08-28',
  //   assignedTo: 'Mir Hussain',
  //   priority: 'high',
  // };

  return (
    <div className="bg-secondary/10 rounded-md p-5">
      <h1
        className={`text-lg font-semibold mb-3  ${
          task.priority === "High" ? "text-red-700" : task.priority === "Medium" ? "text-green-600": task.priority === "Low" ? "text-neutral-700" : "" }`}
      >
        {task?.title}
      </h1>
      <p className="mb-3">{task?.description}</p>
      <p className="text-sm">Assigned to - {task?.assignedTo}</p>
      <div className="flex justify-between mt-3">
        <p>{task?.dateline}</p>
        <div className="flex gap-3">
          <button  title="Delete">
            <TrashIcon className="h-5 w-5 text-red-500" />
          </button>
          <button
            onClick={() => dispatch(statusUpdate({id:task.id, status: updateStatus}))}
            title="In progress"
          >
            <ArrowRightIcon className="h-5 w-5 text-primary" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
