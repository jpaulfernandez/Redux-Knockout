import {ActionTypes} from "./ActionType";


export interface IAction
{
	type: ActionTypes,
	payload: any
}