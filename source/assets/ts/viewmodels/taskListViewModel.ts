import { default as actions } from "../actions/actions";
import * as ko from "knockout";
import store from "../store/app-store";
import { IAppState } from "../infrastructure/IAppState";
import { IAction } from "../infrastructure/IAction";

class taskListViewModel
{
	appState:KnockoutObservable<IAppState>;
	newTask:KnockoutObservable<string>;

	private unsubscribe:Function;

	constructor(){
		this.appState = ko.observable(this.getState());


		this.unsubscribe = store.subscribe(() => {
			console.info("store changed");
			this.appState(this.getState());
			console.info(this.getState());
		});

		this.newTask = ko.observable('');
	}

	addTaskToList()
	{
		console.log('adding');
		store.dispatch(actions.addTask(this.newTask()));
	}

	deleteTaskToList(data:string)
	{
		console.log('deleting');
		store.dispatch(actions.deleteTask(data));
	}

	modifyList(data:string, actionCreator:Function):void
	{
		this.dispatch(actionCreator(data));
	}

	private getState():IAppState
	{
		return store.getState();
	}

	dispatch(action:IAction)
	{
		return store.dispatch(action);
	}
}

export var vm = new taskListViewModel();