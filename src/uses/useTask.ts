import type { AccordionItemsTypes } from "../types"
import  { onCreateTask, onFetchTasks } from '../services';

export const useTask = () => {
    async function createNewTask(dto: AccordionItemsTypes) {
        //check title in valid ? show flash message 
        if(!!dto.title){ // không bằng rỗng , không bằng null , không bằng undefined
            await onCreateTask(dto)
            await onFetchTasks();

        }
    }
    return {createNewTask}
}