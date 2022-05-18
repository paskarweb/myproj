import React, { useContext, useReducer } from 'react';
import { createContext } from 'react';

let intervalID: any; //иднентификатор метода старт таймера

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

type TimerDataState = TimerData & {
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
const TimerStateReducer = (
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

const TimerDataCtx = createContext<TimerDataState>({
    ...defaultTimerData,
    dispatchAction: () => { }
});


const TimerCard = () => {
    const { hours, minutes, seconds, dispatchAction } = useContext(TimerDataCtx);
    return (
        <div>
            <div><h4>{hours} : {minutes} : {seconds} </h4>
                <button
                    className="btn"
                    onClick={() => intervalID = setInterval(() => dispatchAction({ type: 'SET_TIMER_START_ACTION', playload: 1 }), 1000)
                    }
                >Start</button>
                <button
                    className="btn"
                    onClick={() => dispatchAction({ type: 'SET_TIMER_STOP_ACTION' })
                    }
                >Stop
                </button>
            </div>
        </div>
    )
}

//компонент
export const TimerV1 = () => {
    //---old--- const [employee, setEmployeeData] = useState({ salary: 100, onBench: true })
    //---useReducer
    //for timer
    const [timer, dispatchAction] = useReducer(TimerStateReducer, {
        hours: 0,
        minutes: 0,
        seconds: 0,
    })
    return (
        < div >
            <h3>Timer context+reduce</h3>
            <TimerDataCtx.Provider value={{ ...timer, dispatchAction }}>
                <TimerCard />
            </TimerDataCtx.Provider>
        </div >
    )
}