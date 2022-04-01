import React from 'react'
import {Box,Botao} from '../../Components/Ui/index'
import { extratoLista } from '../../info'
import Itens from '../Itens'

const Extrato = () => {
    const extratoTela =  extratoLista.updates.map(({id,type,from,value,date})=>{
        return(
           <Itens
            key={id}
            type={type}
            from={from}
            value={value}
            date={date}
           />
        )
    })

    return (
        <Box>
            {extratoTela}
            <Botao>Ver mais</Botao>
        </Box>
    )
}
export default Extrato