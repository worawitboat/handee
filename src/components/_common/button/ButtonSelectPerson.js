import React from 'react'
import {Button} from 'antd'
import styled from '@emotion/styled';
import router from 'next/router';

const BTN = styled(Button)`
    height:150px;
    width:120px;    
    font-size:20px;
    border-radius: 25px;
`

export default function StyledButton(props) {
    const {btnName} = props
    const {RouterWay}  = props

    return (
        <div style={{padding:10}}>
            <BTN type="primary" danger onClick={()=>{router.push(RouterWay)}}><b>{btnName}</b></BTN>
        </div>

    )
}
