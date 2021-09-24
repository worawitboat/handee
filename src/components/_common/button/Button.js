import React from 'react'
import {
    Button,
    Card
} from 'antd';
import styled from '@emotion/styled';

const StyledButton = styled(Button)`
  width: 500px
`

export default function styledButton() {
    return (
        <StyledButton>AUN</StyledButton>
    )
}
