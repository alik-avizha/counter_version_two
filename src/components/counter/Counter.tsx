import React from 'react';
import {Monitor} from './monitor/Monitor';
import {Button} from '../common/Button';
import {changeEditModeAC, incAC, resetAC} from '../../bll/reducers/counterReducer';
import {useAppDispatch, useAppSelector} from '../../hooks/hooks';


export const Counter = () => {

    const state = useAppSelector(state => state.counter)
    const dispatch = useAppDispatch()

    const disabledReset = state.count === state.minValue
    const disabledINC = state.count === state.maxValue

    const callBackHandler = () => {
        dispatch(changeEditModeAC())
    }
    const incrementHandler = () => {
        const action = incAC()
        dispatch(action)
    }
    const resetHandler = () => {
        const action = resetAC()
        dispatch(action)
    }

    return (
        <div className={'general'}>
            <Monitor count={state.count} maxValue={state.maxValue}/>
            <div className={'buttons'}>
                <Button name="INC" disabled={disabledINC} callBack={incrementHandler}/>
                <Button name="RESET" disabled={disabledReset} callBack={resetHandler}/>
                <Button name="SET" callBack={callBackHandler}/>
            </div>
        </div>
    )
}