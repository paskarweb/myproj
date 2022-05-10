import { NavLink } from 'react-router-dom'

export const NavbarFC = () => (
    <nav>
        <div className="nav-wrapper purple darken-1">
            <a href="/" className="brand-logo right">React+TypeScript</a>
            <a href="/" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
                <li>
                    <NavLink to="/">React Beginner</NavLink>
                </li>
                <li>
                    <NavLink to="/about">Lessons</NavLink>
                </li>
                <li>
                    <NavLink to="/localstrorage">LocalStrorage</NavLink>
                </li>
            </ul>
        </div>
    </nav>
);

export default () => NavbarFC;