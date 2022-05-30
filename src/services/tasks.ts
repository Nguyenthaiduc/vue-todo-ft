import { fetchApi } from "./api";
import type { AccordionItemsTypes } from '../types'

export const onFetchTasks = async () => {
    const result = await fetchApi.get('tasks/list')

    return result?.data.tasks;
};

export const onCreateTask = async (dto: AccordionItemsTypes) => {
    const result = await fetchApi.post('/tanks/new',dto)

    return result?.data.task;
}

export const onCompleteTask = (id: string, status: boolean) => {
    return fetchApi.patch(`/tasks/${id}`, {
      completed: status,
    });
  };
//create new task
  export const onCreateNewTask = (dto: AccordionItemsTypes) => {
    return fetchApi.post(`/tasks/new`, dto);
  };
//delete task
  export const onDeleteTask = (id: string) => {
    return fetchApi.delete(`/tasks/${id}`);
  };
//update task
  export const onUpdateTask = (id: string, dto: AccordionItemsTypes) => {
    return fetchApi.patch(`/tasks/${id}`, dto);
  };