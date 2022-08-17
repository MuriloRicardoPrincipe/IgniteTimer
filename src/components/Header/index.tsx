import { HeaderConteiner } from "./styles";

import logo from '../../assets/Logo.svg';
import { Scroll, Timer  } from "phosphor-react";
import { NavLink } from "react-router-dom";

export function Header(){
    return(
        <HeaderConteiner>
            <img src={logo} alt="" />
            <nav>
                <NavLink to="/" title="Timer"><Timer size={24}/></NavLink>
                <NavLink to="/history" title="Hostórico"><Scroll size={24}/></NavLink>
            </nav>
        </HeaderConteiner>
    )
}