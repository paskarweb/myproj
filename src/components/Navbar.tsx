export const NavbarFC = () => (
    <nav>
        <div className="nav-wrapper purple darken-1">
            <a href="/" className="brand-logo right">React+TypeScript</a>
            <a href="/" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
                <li><a href="/">React Beginner</a></li>
                <li><a href="/">Lessons</a></li>
                <li><a href="/">Other</a></li>
            </ul>
        </div>
    </nav>
);

export default () => NavbarFC;