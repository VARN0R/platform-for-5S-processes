import React, { useState } from "react";
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

export const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("New");
  const [date, setDate] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTask: Task = {
      id: Date.now(),
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
      <ModalButton onClick={() => setIsModalOpen(true)}>Add task</ModalButton>

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
              <Button type="submit">Add</Button>
            </FormStyled>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};
