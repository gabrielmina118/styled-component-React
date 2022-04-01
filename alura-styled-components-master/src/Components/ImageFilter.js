import React from "react"
import alimentacao from '../assets/images/alimentacao.svg'
import saude from '../assets/images/saude.svg'
import transporte from '../assets/images/transporte.svg'
import utilidades from '../assets/images/utilidades.svg'
import outros from '../assets/images/outros.svg'
import { Icone , IconeTema} from './Ui/index'

export const ImagemFilter = (type) => {
    const Imagens = {
        Restaurante: <IconeTema src={alimentacao} alt="restaurante" />,
        Saude: <IconeTema src={saude} alt="saude" />,
        Transporte: <IconeTema src={transporte} alt="transporte" />,
        Utilidades: <IconeTema src={utilidades} alt="utilidades" />,
        defaut: <IconeTema src={outros} alt="outros" />
    }

    return Imagens[type] || Imagens.defaut;
}

export default ImagemFilter