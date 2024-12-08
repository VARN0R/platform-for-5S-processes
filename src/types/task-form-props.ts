import { Task } from "./task";

export default interface TaskFormProps {
  onAddTask: (task: Task) => void;
  nameButton: string;
  taskName?: string;
  taskStatus?: string;
  taskDate?: string;
  taskId?: number;
  openModal?: boolean;
}
