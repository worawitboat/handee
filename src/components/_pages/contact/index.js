import React , {useState} from 'react'
import { Flex , Box } from 'reflexbox'
import {Button } from 'antd'
import {LeftOutlined , PlusOutlined} from '@ant-design/icons'
import router from 'next/router';

export default function Contact(props) {
const Price = "100,000";
const Delivery = "200"
    return (
        <>
          <Flex style={{marginTop: 10}}>
            <Button style={{fontSize:20}} type="text" onClick={()=> {router.push('/handee')}}><LeftOutlined /></Button>
        </Flex>
        <Flex width={1/15}></Flex>
            <Flex width={1} justifyContent="center">
        <Flex justifyContent="center" style={{marginTop: 50}}>
        <Flex  flexDirection="column" textAlign="center">
            <h1><b>Contact</b></h1>
        </Flex>
        </Flex> 
            </Flex>
        <Flex width={1/15}></Flex>
        
                
        </>
    )
}


