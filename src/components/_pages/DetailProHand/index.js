import React from 'react'
import { Flex } from 'reflexbox'
import {Image} from 'antd';
import router from 'next/router';

export default function SelectHandOrder(props) {
    return (
        <>
        <Flex justifyContent="center" style={{marginTop: 100}}>
        <Flex  flexDirection="column" textAlign="center">
            <h3><b>รายละเอียดสินค้าที่ต้องการฝากหิ้ว</b></h3>
            <Image width="100%" src="https://scontent.fbkk22-3.fna.fbcdn.net/v/t39.30808-6/254624645_1001660100378791_8206242084573625432_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeGUESqeN6vISlCsE9wwMv5KgjzyAMwajJCCPPIAzBqMkBk4Ru7bztg-lwnC7atpmE2zFQseZIde6zmQmq7wtIT_&_nc_ohc=MMcBqS6vg1QAX8rqUms&tn=Dc4N-xSqC9KjFWoV&_nc_ht=scontent.fbkk22-3.fna&oh=88e0b3061784e38f6abac5f392277769&oe=618F8CC7"/>
        </Flex>
            </Flex> 
                
        </>
    )
}


