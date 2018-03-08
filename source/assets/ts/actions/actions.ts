import {ActionTypes} from "../infrastructure/ActionType";
import {IAction} from "../infrastructure/IAction";

function addTask(task:string):IAction
{
	return{
		type: ActionTypes.ADD_TASK,
		payload:task
	}
}

function deleteTask(task:string):IAction
{
	return{
		type: ActionTypes.DELETE_TASK,
		payload: task
	}
}

export default {
	addTask,
	deleteTask
};