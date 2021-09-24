import React from 'react'
import { Flex, Box } from 'reflexbox'

import { Button, Table } from '../../_common'

export default function LandingPage(props) {
    const { appName } = props

    return (
        <>
            <Flex justifyContent="center" style={{ marginTop: 500 }}>
                <Button>AUN</Button>
            </Flex>
        </>
    )
}


