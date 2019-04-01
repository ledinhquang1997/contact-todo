import { ITodo } from '../../service/typing/ITodo';

export interface IToDoState {
    todos: ITodo[];
    isLoading: boolean;
    isFirstLoaded: boolean;
}