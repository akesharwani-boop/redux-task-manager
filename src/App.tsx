import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { loadTasks } from "./features/tasks/tasks.thunks";
import {
  taskAdded,
  taskDeleted,
  taskToggled,
} from "./features/tasks/tasks.actions";

function App() {
  const dispatch = useAppDispatch();
  const { items, status } = useAppSelector((state) => state.tasks);
  const [title, setTitle] = useState("");

  useEffect(() => {
    dispatch(loadTasks());
  }, [dispatch]);

  const addTask = () => {
    if (!title.trim()) return;

    dispatch(
      taskAdded({
        id: Date.now(),
        title,
        completed: false,
      })
    );

    setTitle("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex justify-center p-6">
      <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-4">
          Redux Task Manager
        </h1>

        <div className="flex gap-2 mb-4">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Add a task..."
            className="flex-1 border rounded px-3 py-2"
          />
          <button
            onClick={addTask}
            className="bg-blue-500 text-white px-4 rounded"
          >
            Add
          </button>
        </div>

        {status === "loading" && (
          <p className="text-center text-gray-500">Loading tasks...</p>
        )}

        <ul className="space-y-2">
          {items.map((task) => (
            <li
              key={task.id}
              className="flex justify-between items-center bg-gray-100 px-3 py-2 rounded"
            >
              <span
                onClick={() => dispatch(taskToggled(task.id))}
                className={`cursor-pointer ${
                  task.completed ? "line-through text-gray-500" : ""
                }`}
              >
                {task.title}
              </span>

              <button
                onClick={() => dispatch(taskDeleted(task.id))}
                className="text-red-500"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
