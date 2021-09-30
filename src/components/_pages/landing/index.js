import React from 'react'
import { Flex, Box } from 'reflexbox'
import { useRouter } from 'next/router'

import { Button, Table } from '../../_common'
import { Card } from 'antd'

export default function LandingPage(props) {
    const { appName } = props
    const router = useRouter()
    
    return (
        <>
        <Flex justifyContent="center" style={{marginTop:"20px"}}>
           <Box><h1 onClick={() => router.push(`/home`)}>{appName}</h1></Box>
           <Box style={{marginLeft:"10px"}}><h1> /</h1></Box>
            <Box style={{marginLeft:"10px"}}><h1 onClick={() => router.push(`/fu`)}>fu</h1></Box>
            
        </Flex>
            
            <Flex justifyContent="center" style={{ marginTop: 500 }}>
                <Box></Box>
                <Box></Box>
                <Box></Box>
                <Button btnName="PAM"></Button>
                
            </Flex>
        </>
    )
}


