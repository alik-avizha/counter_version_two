import {AppThunk} from '../store/store';

export type CounterType = {
    count: number,
    minValue: number,
    maxValue: number,
    editMode: boolean
}

const initialState: CounterType = {count: 0, minValue: 0, maxValue: 5, editMode: true}

export const counterReducer = (state: CounterType = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'SET-VALUES':
            return {...state, count: action.payload.valueMin, minValue: action.payload.valueMin, maxValue: action.payload.valueMax}
        case 'CHANGE-VALUES':
            return {...state, count: action.payload.valueMin, minValue: action.payload.valueMin, maxValue: action.payload.valueMax}
        case 'INC':
            return {...state, count: state.count + 1}
        case 'RESET':
            return {...state, count: state.minValue}
        case 'CHANGE-EDIT':
            return {...state, editMode: !state.editMode}
        default:
            return state
    }
}
export type ActionsType = ChangeValuesACType | IncACACType | ResetACType | ChangeEditModeType | SetValueType

type ChangeValuesACType = ReturnType<typeof changeValuesAC>
export const changeValuesAC = (valueMin: number, valueMax: number) => {
    return {
        type: 'CHANGE-VALUES',
        payload: {
            valueMin,
            valueMax
        }
    } as const
}

type IncACACType = ReturnType<typeof incAC>
export const incAC = () => {
    return {
        type: 'INC'
    } as const
}

type ResetACType = ReturnType<typeof resetAC>
export const resetAC = () => {
    return {
        type: 'RESET'
    } as const
}

type ChangeEditModeType = ReturnType<typeof changeEditModeAC>
export const changeEditModeAC = () => {
    return {
        type: 'CHANGE-EDIT'
    } as const
}

type SetValueType = ReturnType<typeof setValuesAC>
export const setValuesAC = (valueMin: number, valueMax: number) => {
    return {
        type: 'SET-VALUES',
        payload: {
            valueMin,
            valueMax
        }
    } as const
}

//thunk
export const changeValuesTC = (valueMin: number, valueMax: number): AppThunk => (dispatch) => {
    localStorage.setItem('max', JSON.stringify(valueMax))
    localStorage.setItem('min', JSON.stringify(valueMin))
    dispatch(changeValuesAC(valueMin, valueMax))
}

export const getValuesFromLocalStorageTC = (): AppThunk => (dispatch) => {
    const min = localStorage.getItem('min') || '0'
    const max = localStorage.getItem('max') || '5'
    dispatch(setValuesAC(+min, +max))
}
