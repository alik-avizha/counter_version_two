import React from 'react';

type MonitorPropsType = {
    count: number
    maxValue: number
}
export const Monitor = (props: MonitorPropsType) => {

    const score = props.count === props.maxValue ? 'score-red' : 'score'

    return (
        <div className={'counter'}>
            <p className={score}>{props.count}</p>
        </div>
    )
}