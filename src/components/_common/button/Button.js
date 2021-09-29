import React from 'react'
import { Button } from 'antd'
import styled from '@emotion/styled';

const Buttonn = styled(Button)`
    width: 500px
`

export default function StyledButton(props) {
    const { btnName } = props

    return (
        <Buttonn>{btnName}</Buttonn>
    )
}
