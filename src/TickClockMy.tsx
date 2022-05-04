export const TickMy1 = () => (
    <div>
        <h2>It is {new Date().toLocaleTimeString()} </h2>
    </div>
);

export default () => TickMy1;

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

