import React, {useState} from 'react';
import {Button} from '../common/Button';
import {Input} from '../common/Input';
import {changeEditModeAC, changeValuesTC} from '../../bll/reducers/counterReducer';
import {useAppDispatch, useAppSelector} from '../../hooks/hooks';


export const SettingsOfCounter = () => {

    const state = useAppSelector(state => state.counter)
    const dispatch = useAppDispatch()

    const [titleMin, setTitleMin] = useState<number>(state.minValue);
    const [titleMax, setTitleMax] = useState<number>(state.maxValue);
    const [disabled, setDisabled] = useState<boolean>(true)

    const maxValueHandler = (value: string) => {
        setTitleMax(+value)
        if (+value < 0 || +value <= titleMin) {
            setDisabled(true)
        } else {
            setDisabled(false)
        }
    }
    const minValueHandler = (value: string) => {
        setTitleMin(+value)
        if (+value < 0 || +value >= titleMax) {
            setDisabled(true)
        } else {
            setDisabled(false)
        }
    }

    const errorMaxInput = titleMax < 0 || titleMin >= titleMax ? 'input-error' : 'input'
    const errorMinInput = titleMin < 0 || titleMin >= titleMax ? 'input-error' : 'input'
    const disabledButtonSettings = disabled

    const onSetHandler = () => {
        dispatch(changeValuesTC(titleMin, titleMax))
        dispatch(changeEditModeAC())
    }

    return (
        <div className={'general'}>
            <div className={'input-settings'}>
                <Input error={errorMaxInput} title={'max value'} callback={maxValueHandler} value={titleMax}/>
                <Input error={errorMinInput} title={'start value'} callback={minValueHandler} value={titleMin}/>
            </div>
            <div className={'buttons'}>
                <Button name="SET" callBack={onSetHandler} disabled={disabledButtonSettings}/>
            </div>
        </div>
    )
}