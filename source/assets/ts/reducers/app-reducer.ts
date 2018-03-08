import * as objectAssign from "object-assign";
import {ActionTypes} from "../infrastructure/ActionType";
import {IAction} from "../infrastructure/IAction";
import {IAppState} from "../infrastructure/IAppState";
import { TSMap } from "typescript-map";


//const reducerMap:Map<ActionTypes, Function> = new Map<ActionTypes, Function>();
const reducerMap:TSMap<ActionTypes, Function> = new TSMap<ActionTypes, Function>();
function addTask(initialState:IAppState, taskItem:string):IAppState
{
	let taskList = initialState.taskList.concat(taskItem);
	return objectAssign({}, initialState, {taskList});
}

function deleteTask(initialState:IAppState, taskItem:string):IAppState
{
	let index:number = initialState.taskList.indexOf(taskItem);
	let taskList = [].concat(initialState.taskList.slice(0,index), initialState.taskList.slice(index+1)); 
	return objectAssign({},initialState,{taskList});
}

reducerMap.set(ActionTypes.ADD_TASK, addTask);
reducerMap.set(ActionTypes.DELETE_TASK, deleteTask);

export default function rootReducer(initialState:IAppState = { taskList: []}, action:IAction):IAppState
{
	return reducerMap.has(action.type) ? reducerMap.get(action.type)(initialState, action.payload) : initialState;
}