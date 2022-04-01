import React from "react";
import ThemOn from '../../assets/images/themeOn.svg'
import ThemOff from '../../assets/images/themeOff.svg'
import { Icone } from "../Ui/index";

export const claro = <Icone src={ThemOn} alt="temaClaro" />
export const escuro = <Icone src={ThemOff} alt="temaEscuro" />

export default (({tema}) => (tema ? escuro : claro))