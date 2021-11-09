import React from 'react';
import { Flex, Box } from 'reflexbox';
import { BtnSelectPerson } from '../../_common';

export default function SelectPerson(props) {
    return (
        <>
            <Flex justifyContent="center" style={{ marginTop: 250 }}>
                <BtnSelectPerson btnName="คนฝากหิ้ว" RouterWay="/SelectHandOrder" />
                <BtnSelectPerson btnName="คนรับหิ้ว" RouterWay="/SelectOrderHand" />
            </Flex>
        </>
    )
}
