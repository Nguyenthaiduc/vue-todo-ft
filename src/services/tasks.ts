import { fetchApi } from "./api";

export const onFetchTasks = async () => {
    const result = await fetchApi.get('task')

    return result?.data.tasks;
}