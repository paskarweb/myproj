import { NavLink } from 'react-router-dom'

export const NavbarFC = () => (
    <nav>
        <div className="nav-wrapper purple darken-1">
            <a href="/" className="brand-logo right">React+TypeScript</a>
            <a href="/" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
                <li>
                    <NavLink to="/">React Home</NavLink>
                </li>
                <li>
                    <NavLink to="/timer">Timer(context+reduce)</NavLink>
                </li>
                <li>
                    <NavLink to="/TodosInput">UseState Input</NavLink>
                </li>
                <li>
                    <NavLink to="/about">Back-button</NavLink>
                </li>
                <li>
                    <NavLink to="/clock">Clock</NavLink>
                </li>
                <li>
                    <NavLink to="/localstrorage">LocalStrorage</NavLink>
                </li>
            </ul>
        </div>
    </nav>
);

//export default () => NavbarFC;