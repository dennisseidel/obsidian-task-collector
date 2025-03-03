export interface TaskCollectorSettings {
    completedAreaHeader: string;
    removeExpression: string;
    appendDateFormat: string;
    incompleteTaskValues: string;
    supportCanceledTasks: boolean;
    rightClickComplete: boolean;
    rightClickMove: boolean;
    rightClickReset: boolean;
    rightClickToggleAll: boolean, 
    completedAreaRemoveCheckbox: boolean;
}

export const DEFAULT_SETTINGS: TaskCollectorSettings = {
    completedAreaHeader: '## Log',
    removeExpression: '',
    appendDateFormat: '',
    incompleteTaskValues: '',
    supportCanceledTasks: false,
    rightClickComplete: false,
    rightClickMove: false,
    rightClickReset: false,
    rightClickToggleAll: false,
    completedAreaRemoveCheckbox: false
}

export interface CompiledTasksSettings {
    removeRegExp: RegExp;
    resetRegExp: RegExp;
    incompleteTaskRegExp: RegExp;
    rightClickTaskMenu: boolean;
}

