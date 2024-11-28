import React from 'react';
import {MoneyType} from "./App";
import styled from "styled-components";

/*type CurrentBankomatPropsType = {
    money: MoneyType
}*/

export const CurrentBankomat = ({banknote, nominal, id}: MoneyType) => {
    // с деструктуризацией пожалуйста
    return (

        // ВНАЧАЛЕ НАПИШЕМ СОВСЕМ НЕКРАСИВО
        // props.money.banknote==='USD'
        //     ? ЗЕЛЕНАЯ
        //     : СИНЯЯ

/*    money.banknote === 'USD'
            ? <BanknoteGreen>
                <Name>{money.banknote}</Name>
                <Nominal>{money.nominal}</Nominal>
            </BanknoteGreen>
            : <BanknoteBlue>
                <Name>{money.banknote}</Name>
                <Nominal>{money.nominal}</Nominal>
            </BanknoteBlue>*/


        <div>
            <Banknote color={banknote==='USD'? 'aquamarine' : 'lightskyblue'}>
                <Name>{banknote}</Name>
                <Nominal>{nominal}</Nominal>
            </Banknote>
        </div>


    )
}

type BanknotesType = {
    color : 'aquamarine' | 'lightskyblue'
}


const BanknoteGreen = styled.div`
    background-color: aquamarine;
    width: 200px;
    height: 100px;
    margin: 10px;
`

const BanknoteBlue = styled.div`
    background-color: lightskyblue;
    width: 200px;
    height: 100px;
    margin: 10px;
`

const Banknote = styled.div<BanknotesType>`
    background-color: ${props => props.color};
    width: 200px;
    height: 100px;
    margin: 5px;
`


const Name = styled.span`
    display: flex;
    justify-content: center;
    font-size: 15px;
`

const Nominal = styled.span`
    display: flex;
    justify-content: center;
    margin-top: 15px;
    font-size: 45px;
`
