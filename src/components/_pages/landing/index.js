import React from 'react'
import { Flex, Box } from 'reflexbox'
import { useRouter } from 'next/router'

import { Button, Table } from '../../_common'

export default function LandingPage(props) {
    const { appName } = props
    const router = useRouter()
    
    return (
        <>

            <h1 onClick={() => router.push(`/home`)}>{appName}</h1>
            <Flex justifyContent="center" style={{ marginTop: 500 }}>
                <Button btnName="PAM"></Button>
                
            </Flex>
        </>
    )
}


