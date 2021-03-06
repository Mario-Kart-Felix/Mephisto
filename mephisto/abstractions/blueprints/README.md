# Blueprints
## Overview
Blueprints serve to package tasks (and groups of similar tasks) into a reusable format. They can be used to work through piloting tasks, collecting data, testing different formats, etc. They're also used by the architecture to simplify the data accumulation and review processes. The `StaticBlueprint` is a good starting example of how to implement a blueprint.

## Implementation Details
### `AgentState`
The agent state is responsible for defining the data that is important to store for a specific `Unit`, as well as methods for writing that locally to disk. To abstract this, it must implement the following methods:
- `set_init_state(data)`: given data provided by the `get_init_data_for_agent` method, initialize this agent state to whatever starting state is relevant for this `Unit`.
- `get_init_state()`: Return the initial state to be sent to the agent for use in the frontend.
- `load_data()`: Load data that is saved to file to re-initialize the state for this `AgentState`. Generally data should be stored in `self.agent.get_data_dir()`, however any storage solution will work as long as it remains consistent.
- `get_data()`: Return the stored data for this task in the format containing everything the frontend needs to render and run the task.
- `get_parsed_data()`: Return the stored data for this task in the format that is relevant for review or packaging the data.
- `save_data()`: Save data to a file such that it can be re-initialized later. Generally data should be stored in `self.agent.get_data_dir()`, however any storage solution will work as long as it remains consistent, and `load_data()` will be able to find it.
- `update_data()`: Update the local state stored in this `AgentState` given the data sent from the frontend. Given your frontend is what packages data to send, this is entirely customizable by the task creator.

### `TaskBuilder`
`TaskBuilder`s exist to abstract away the portion of building a frontend to however one would want to, allowing Mephisto users to design tasks however they'd like. They also can take build options to customize what ends up built. They must implement the following:
- `build_in_dir(build_dir)`: Take any important source files and put them into the given build dir. This directory will be deployed to the frontend and will become the static target for completing the task.
- `get_extra_options()`: Return the specific task options that are relevant to customize the frontend when `build_in_dir` is called.

### `TaskRunner`
The `TaskRunner` component of a blueprint is responsible for actually stepping `Agent`s through the task when it is live. It is, in short, able to set up task control. A `TaskRunner` needs to implement the following:
- `get_init_data_for_agent`: Provide initial data for an assignment. If this agent is reconnecting (and as such attached to an existing task), update that task to point to the new agent (as the old agent object will no longer receive data from the frontend).
- `run_assignment`: Handle setup for any resources required to get this assignment running. It will be launched in a background thread, and should be tolerant to being interrupted by cleanup_assignment.
- `cleanup_assignment`: Send any signals to the required thread for the given assignment to tell it to terminate, then clean up any resources that were set within it.
- `get_data_for_assignment` (optional): Get the data that an assignment is going to use when run. By default, this pulls from `assignment.get_assignment_data()` however if a task has a special storage mechanism or data type, the assignment data can be fetched here. 

## Implementations
### `StaticBlueprint`
The `StaticBlueprint` class allows a replication of the interface that MTurk provides, being able to take a snippet of `HTML` and a `.csv` file and deploy tasks that fill templates of the `HTML` with values from the `.csv`.

You can also specify the task data in a `.json` file, or by passing the data array or a generator to `SharedStaticTaskState.static_task_data`.

### `MockBlueprint`
The `MockBlueprint` exists to test other parts of the Mephisto architecture, and doesn't actually provide a real task.
