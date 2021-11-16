import React, {useState} from 'react';
import {Input} from 'antd';
import styled from '@emotion/styled';

const Inputer = styled(Input)`
    width:100%;
    margin-Top:20px;    
    font-size:12px;
    border-radius: 50px;
    padding:5px 5px 5px 85px;
`


const Div = styled.div `
    position:relative;
    
    `

const Labels = styled.label
`
    position:absolute;
	left:10px;
	font-weight:bold;
	font-size:0.75em;
	color:#444;
	top:28px;
`


export default function StyledButton(props) {
    const {labelName} = props;

    return (
    <Div>
        <Inputer type="text"/>
        <Inputer type="text"/>
        <Inputer type="text"/>
        <Inputer type="text"/>
        <Labels>{labelName} : </Labels>
    </Div>
    )
}
