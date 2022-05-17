import React, { useContext, useReducer } from 'react';
import { useState, useEffect, createContext } from 'react';
//import logo from './logo.svg';

export let intervalID: any;

type TimerData = {
    hours: number;
    minutes: number;
    seconds: number;
}

const defaultTimerData: TimerData = {
    hours: 0,
    minutes: 0,
    seconds: 0,
}

export type TimerDataState = TimerData & {
    //метод расширяем, принимает св-во data (тип TimerData) и возвращает void (ничего возвращаем)
    dispatchAction: (action: TimerDataAction) => void;
}

//Создаем Action. Это тип 
type SetTimerStartAction = {
    type: "SET_TIMER_START_ACTION";
    playload: number;
};

type SetTimerStopAction = {
    type: "SET_TIMER_STOP_ACTION";
};

//TimerDataAction - тип создаем для удобства, 2-ва типа SetTimerStartAction или SetTimerStopAction
type TimerDataAction = SetTimerStartAction | SetTimerStopAction;

//Reducer - принимает Action (Событие) и возвращает State (состояние)
export const TimerStateReducer = (
    state: TimerData,
    action: TimerDataAction
): TimerData => {
    switch (action.type) {
        case 'SET_TIMER_START_ACTION':
            return {
                ...state
                , seconds: state.seconds < 60 ? state.seconds + action.playload : 0
                , minutes: state.seconds > 59 ? state.minutes + action.playload : state.minutes
                , hours: state.minutes > 59 ? state.hours + action.playload : state.hours
            };
        case 'SET_TIMER_STOP_ACTION':
            clearInterval(intervalID);
            return {
                ...state
            };  //---{ ...state, onBench: false };
    }
}

export const TimerDataCtx = createContext<TimerDataState>({
    ...defaultTimerData,
    dispatchAction: () => { }
});


export const TimerCard = () => {
    const { hours, minutes, seconds, dispatchAction } = useContext(TimerDataCtx);
    return (
        <div>
            <h2>Timer</h2>
            <div><h4>{hours} : {minutes} : {seconds} </h4>
                <button onClick={() => intervalID = setInterval(() => dispatchAction({ type: 'SET_TIMER_START_ACTION', playload: 1 }), 1000)
                }
                >Start</button>
                <button onClick={() => dispatchAction({ type: 'SET_TIMER_STOP_ACTION' })
                }
                >Stop
                </button>
            </div>
        </div>
    )
}