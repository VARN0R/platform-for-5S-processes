import React, { useState, useEffect } from "react";

import { Task } from "../../types/task";
import { TaskForm } from "../TaskForm/TaskForm";
import {
  Button,
  FilterSelect,
  ModalOverlay,
  ModalContent,
  GridContainer,
  GridRow,
  GridHeader,
  GridActions,
  TaskTableHeaderWrapper,
  ImportButtonWrapper,
  StyledButton,
  ButtonsWrapper,
  DeleteButtonsWrapper,
  Icon,
} from "./TaskTable.style.ts";
import LocalStorageService from "../../utils/services/local-storage-service.ts";
import { TASKS_KEY } from "../../constants/index.ts";
import Container from "../Container/index.ts";
import images from "../../assets/images.ts";

export const TaskTable: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = LocalStorageService.getItem<Task[]>(TASKS_KEY) || [];
    return savedTasks;
  });
  const [filterStatus, setFilterStatus] = useState<string | null>(null);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState<Task | null>(null);

  useEffect(() => {
    LocalStorageService.setItem(TASKS_KEY, tasks);
  }, [tasks]);

  const addTask = (task: Task) => setTasks((prev) => [...prev, task]);

  const editTask = (updatedTask: Task) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
    LocalStorageService.setItem(TASKS_KEY, tasks);
    setEditingTask(null);
  };

  const confirmDeleteTask = (task: Task) => {
    setTaskToDelete(task);
    setIsDeleteConfirmOpen(true);
  };

  const deleteTask = () => {
    if (taskToDelete) {
      setTasks((prev) => prev.filter((task) => task.id !== taskToDelete.id));
      setTaskToDelete(null);
    }
    setIsDeleteConfirmOpen(false);
  };

  const filteredTasks =
    filterStatus && filterStatus !== "All"
      ? tasks.filter((task) => task.status === filterStatus)
      : tasks;

  const handleExport = () => {
    const json = JSON.stringify(tasks);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "tasks.json";
    a.click();
  };

  const handleImport = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const text = await file.text();
      const importedTasks = JSON.parse(text) as Task[];
      setTasks(importedTasks);
    }
  };

  const handleEditTask = (task: Task) => {
    setEditingTask(null);
    setTimeout(() => setEditingTask(task), 0);
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsDeleteConfirmOpen(false);
    }
  };

  return (
    <>
      <Container>
        <TaskTableHeaderWrapper>
          <div>
            <TaskForm onAddTask={addTask} nameButton="Add" />
            <ButtonsWrapper>
              <ImportButtonWrapper>
                <input
                  type="file"
                  accept="application/json"
                  onChange={handleImport}
                />
                Import JSON
              </ImportButtonWrapper>
              <StyledButton onClick={handleExport}>Export JSON</StyledButton>
            </ButtonsWrapper>
          </div>

          <FilterSelect
            onChange={(e) => setFilterStatus(e.target.value)}
            value={filterStatus || "All"}
          >
            <option value="All">All</option>
            <option value="New">New</option>
            <option value="In progress">In progress</option>
            <option value="Done">Done</option>
          </FilterSelect>
        </TaskTableHeaderWrapper>

        <GridContainer>
          <GridHeader>
            <div>ID</div>
            <div>Name</div>
            <div>Status</div>
            <div>Created At</div>
            <div>Actions</div>
          </GridHeader>

          {filteredTasks.map((task) => (
            <GridRow key={task.id}>
              <div>{task.id}</div>
              <div>{task.name}</div>
              <div>{task.status}</div>
              <div>{task.createdAt}</div>
              <GridActions>
                <button onClick={() => handleEditTask(task)}>
                  <Icon src={images.edit}></Icon>
                </button>
                <button onClick={() => confirmDeleteTask(task)}>
                  <Icon src={images.trash}></Icon>
                </button>
              </GridActions>
            </GridRow>
          ))}
        </GridContainer>

        {editingTask && (
          <TaskForm
            onAddTask={editTask}
            nameButton="Save"
            taskName={editingTask.name}
            taskDate={editingTask.createdAt}
            taskStatus={editingTask.status}
            taskId={editingTask.id}
          />
        )}

        {isDeleteConfirmOpen && (
          <ModalOverlay onClick={handleOverlayClick}>
            <ModalContent>
              <p>Are you sure you want to delete this task?</p>
              <DeleteButtonsWrapper>
                <Button onClick={deleteTask}>Yes</Button>
                <Button onClick={() => setIsDeleteConfirmOpen(false)}>
                  No
                </Button>
              </DeleteButtonsWrapper>
            </ModalContent>
          </ModalOverlay>
        )}
      </Container>
    </>
  );
};
