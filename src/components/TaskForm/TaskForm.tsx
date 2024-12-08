import React, { useEffect, useState } from "react";
import TaskFormProps from "../../types/task-form-props";
import { Task } from "../../types/task";
import {
  Button,
  FormStyled,
  Input,
  Select,
  ModalOverlay,
  ModalContent,
  CloseButton,
  ModalButton,
} from "./TaskForm.style";

export const TaskForm: React.FC<TaskFormProps> = ({
  onAddTask,
  nameButton,
  taskName,
  taskStatus,
  taskDate,
  taskId,
}) => {
  const [name, setName] = useState<string>(() => taskName || "");
  const [status, setStatus] = useState(() => taskStatus || "New");
  const [date, setDate] = useState(() => taskDate || "");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (taskId) {
      setIsModalOpen(true);
    } else {
      setIsModalOpen(false);
    }
  }, [taskId]);

  useEffect(() => {
    setName(taskName || "");
    setStatus(taskStatus || "New");
    setDate(taskDate || "");
  }, [taskName, taskStatus, taskDate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTask: Task = {
      id: taskId || Date.now(),
      name,
      status,
      createdAt: date,
    };
    onAddTask(newTask);
    setName("");
    setStatus("New");
    setDate("");
    setIsModalOpen(false);
  };

  const handleModalClose = () => setIsModalOpen(false);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleModalClose();
    }
  };

  return (
    <>
      {!taskId && (
        <ModalButton onClick={() => setIsModalOpen(true)}>Add task</ModalButton>
      )}

      {isModalOpen && (
        <ModalOverlay onClick={handleOverlayClick}>
          <ModalContent>
            <CloseButton onClick={handleModalClose}>&times;</CloseButton>
            <FormStyled onSubmit={handleSubmit}>
              <Input
                type="text"
                placeholder="Task name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <Select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="New">New</option>
                <option value="In progress">In progress</option>
                <option value="Done">Done</option>
              </Select>
              <Input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
              <Button type="submit">{nameButton}</Button>
            </FormStyled>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};
