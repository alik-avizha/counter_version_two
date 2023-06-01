import React from 'react';

type ButtonPropsType = {
    name: string
    callBack: () => void
    disabled?: boolean
}
export const Button = (props: ButtonPropsType) => {

    const onClickHandler = () => {
        props.callBack()
    }
    return (
        <button className={'button'} onClick={onClickHandler} disabled={props.disabled}>{props.name}</button>
    )
}