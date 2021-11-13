import React , {useState} from 'react'
import { Flex , Box } from 'reflexbox'
import {Button } from 'antd'
import {LeftOutlined , PlusOutlined} from '@ant-design/icons'
import router from 'next/router';

export default function History(props) {

    return (
        <>
        
        <Flex style={{marginTop: 10}}>
            <Button style={{fontSize:20}} type="text" onClick={()=> {router.push('/handee')}}><LeftOutlined /></Button>
        </Flex>
        <Flex justifyContent="center" style={{marginTop: 50}}>
        <Flex  flexDirection="column" textAlign="center">
            <h1><b>History</b></h1>
        </Flex>
        </Flex> 
                
        </>
    )
}


