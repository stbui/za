import { useReducer } from 'react';

export type TAction =
    | { type: 'ADD'; toast: any }
    | { type: 'REMOVE'; id: string }
    | { type: 'REMOVE_ALL' };

interface IState {
    toasts: any[];
}

const initialState: IState = {
    toasts: [],
};

const toastReducer = (state: IState, action: TAction): IState => {
    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                toasts: [...state.toasts, action.toast],
            };
        case 'REMOVE': {
            return {
                ...state,
                toasts: [
                    ...state.toasts.filter(toast => toast.id !== action.id),
                ],
            };
        }
        case 'REMOVE_ALL':
            return {
                ...state,
                toasts: [],
            };
        default:
            throw new Error();
    }
};

export const useToast = () => {
    const [state, dispatch] = useReducer(toastReducer, initialState);

    return { ...state, dispatch };
};
