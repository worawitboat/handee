import React from 'react';
import {Card} from 'antd';
import {Flex, Box} from 'reflexbox';
import styled from '@emotion/styled';

const Cards = styled(Card)`
    height:550px;
    width:750px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); 
`

export default function StyledCards(props) {
    const {Src, Title, Subtitle} = props
    return (
        <Cards hoverable >
            <Box>
                <img alt={Title} src={Src}>
                </img>
                <h1>{Title}</h1>
                <p>{Subtitle}</p>
            </Box>

        </Cards>
    )
}
