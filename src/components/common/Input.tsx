import React, {ChangeEvent} from 'react';

type InputPropsType = {
    error: string
    title: string
    callback: (value: string)=>void
    value: number
}

export const Input = (props: InputPropsType) => {

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.callback(event.currentTarget.value)
    }

    return (
        <div className={'inputAndText'}>
            <input type={'number'} className={props.error} onChange={onChangeHandler} value={props.value}/>
            <span className={'text'}>{props.title}</span>
        </div>
    );
};