import React from 'react';
import {Flex} from 'reflexbox';
import {Grid, Col, Row} from 'antd'
import {BtnSelectPerson} from '../../_common';

export default function SelectPerson(props) {
    return (
        <> {/* <Flex justifyContent="center" style={{marginTop: 250}}>
                <BtnSelectPerson btnName="คนฝากหิ้ว" RouterWay="/SelectHandOrder"/>
                <BtnSelectPerson btnName="คนรับหิ้ว"  RouterWay="/SelectOrderHand"/>                    
            </Flex> */}

            <Flex justifyContent="center"style={{marginTop: 250}}>
                <grid>
                    <Row>
                        <Col><BtnSelectPerson btnName="คนฝากหิ้ว" RouterWay="/SelectHandOrder"/></Col>
                        <Col><BtnSelectPerson btnName="คนฝากหิ้ว" RouterWay="/SelectHandOrder"/></Col>
                    </Row>
                </grid>
            </Flex>

        </>
    )
}
