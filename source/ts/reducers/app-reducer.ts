import {default as objectAssign} from "object-assign";
import {ActionTypes} from "../infrastructure/ActionType";
import {IAction} from "../infrastructure/IAction";
import {IAppState} from "../infrastructure/IAppState";


const reducerMap:Map<ActionTypes, Function> = new Map<ActionTypes, Function>();

function addTask(initialState:IAppState, taskItem:string):IAppState
{
	let task = initialState.task.concat(taskItem);
	return objectAssign({}, initialState, {task});
}

function deleteTask(initialState:IAppState, taskItem:string):IAppState
{
	let index:number = initialState.task.indexOf(taskItem);
	let task = [].concat(initialState.task.slice(0,index), initialState.task.slice(index+1)); 
	return objectAssign({},initialState,{task});
}

reducerMap.set(ActionTypes.ADD_TASK, addTask);
reducerMap.set(ActionTypes.DELETE_TASK, deleteTask);

export default function rootReducer(initialState:IAppState = {}, action:IAction):IAppState
{
	return reducerMap.has(action.type) ? reducerMap.get(action.type)(initialState, action.payload) : initialState;
}