import { Header } from "../../components/Header/Header";
import { Line } from "../../components/Line";
import { TaskTable } from "../../components/TaskTable/TaskTable";

const Tasks = () => {
  return (
    <div>
      <Header />
      <Line />
      <TaskTable />
      <Line />
    </div>
  );
};

export default Tasks;
