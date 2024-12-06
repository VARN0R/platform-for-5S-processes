import { Header } from "../../components/Header/Header";
import { Line } from "../../components/Line";
import { TaskForm } from "../../components/TaskForm/TaskForm";
import { Task } from "../../types/task";

const Tasks = () => {
  return (
    <div>
      <Header />
      <Line />
      <TaskForm
        onAddTask={function (task: Task): void {
          throw new Error("Function not implemented.");
        }}
      />
      <Line />
    </div>
  );
};

export default Tasks;
