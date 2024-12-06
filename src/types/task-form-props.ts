import { Task } from "./task";

export default interface TaskFormProps {
  onAddTask: (task: Task) => void;
}
