import { JSX } from "react";
import "../NavBar/styles/style.css"

export const NavBar = (): JSX.Element => {
    return (

<nav>
            <ul className="navbar">
                <li>Про курс</li>
                <li>Ментор</li>
                <li>Контакти</li>
                <li>Програма</li>
            </ul>
        </nav>

);
};