import React from 'react'
import { Button } from 'antd'
import styled from '@emotion/styled';
import router from 'next/router';

const Buttonn = styled(Button)`
    width: 120px;
`

export default function StyledButton(props) {
    const { btnName } = props
    const {type} = props
    const {RouterWay} = props

    return (
        <Buttonn type={type} onClick={()=>{router.push(RouterWay)}}>{btnName}</Buttonn>
    )
}
