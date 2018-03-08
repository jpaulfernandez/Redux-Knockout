import * as ko from "knockout";
import { vm } from "./viewmodels/taskListViewModel";
import {componentName, component} from "./components/task-card";

(function(){
	'use strict';

	ko.components.register(componentName, component);

	var node:HTMLElement = document.getElementById("app");
	ko.applyBindings(vm,node);

})();

