import React from "react";
import styled from "styled-components";

const ItemWrapper = styled.div`
    display: flex;
    flex-direction: column;

    span:first-child{
        font-weight: bold;
    }
`

const Item = ({type,from,value}) => {
    return (
        <ItemWrapper>
            <span>
                {type}
            </span>
            <span>
                {from}
            </span>
            <span>
                {value}
            </span>
        </ItemWrapper>
    )
}

export default Item