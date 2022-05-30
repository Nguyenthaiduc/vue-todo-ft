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