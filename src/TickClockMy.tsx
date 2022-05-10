import React, { useState } from 'react';

export const TickMy1 = () => {
    let datte = new Date().toLocaleTimeString();
    const [theTime, setTime] = useState<string>(datte);
    /*
        React.useEffect(() => {
            setTimeout(() => setTime(new Date().toLocaleTimeString()), 3000)
        }, [])
        */
    /*
     React.useEffect(() => {
         setInterval(() => setTime(new Date().toLocaleTimeString()), 1000)
     }, [])
     */
    setInterval(() => setTime(new Date().toLocaleTimeString()), 1000)
    return (
        <>
            <div>
                <h2> It is {new Date().toLocaleTimeString()} </h2>
                <h3> {theTime}</h3>
            </div>
        </>
    )
};

//export default () => TickMy1;

/*import { PureComponent } from "react";

class Clock extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }
    render() {
        return (
            <div>
                <h1>Привет, мир!</h1>
                <h2>Сейчас {this.props.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

export default () => Clock;
*/

