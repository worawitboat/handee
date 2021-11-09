import React from 'react'
import {Input, Button} from 'antd'
import styled from '@emotion/styled';
import router from 'next/router';

const Inputer = styled(Input)`
    width:100%;    
    font-size:12px;
    border-radius: 50px;
    padding:5px 5px 5px 70px;
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
	top:7px;
`


export default function StyledButton(props) {
    const {id} = props;
    const {labelName} = props;

    return (
    <Div>
        <Inputer type="text" id={id}/>
        <Labels>{labelName} : </Labels>
    </Div>
    )
}
