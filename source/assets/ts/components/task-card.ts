import * as ko from "knockout";

export const componentName = "task-card";
export const component = {
	viewModel:function(params:any){
			this.taskName = ko.pureComputed(() =>
			{
				return params.taskName;
			});
		},

	template: `
		<div class="row">
          <div class="col-md-6 offset-md-3 mt40">
            <div class="task-card"><span class="fa fa-close" data-bind="click:$root.deleteTaskToList.bind($data)"></span>
              <h2 class="task-name" data-bind="text:taskName"></h2>
            </div>
          </div>
        </div>
	`
	}
