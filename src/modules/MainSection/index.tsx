import { JSX } from "react";
import "../MainSection/styles/style.css"
import {LogIn} from "../MainSection/features/LogIn"
import { MainText } from "./features/MainText";

export const MainSection = (): JSX.Element => {
    return (
        <section className="section-wrapper">
        <MainText/>
        <LogIn/>    
        </section>

);
};