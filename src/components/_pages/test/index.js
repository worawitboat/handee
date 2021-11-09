import React, { useState } from 'react'
import { Button } from 'antd'
import { getTest, createTest, deleteTest } from '../../../modules/_test/services'
import { Flex, Box } from 'reflexbox'


export default function TestPage() {
    const [user, setuser] = useState()
    const get = async () => {
        await getTest().then(res => {
            setuser(res.data.data);
        })
    }

    return (
        <div>
            <Flex justifyContent="center" flexDirection="column">
                <h4>{user?.name}</h4>
                <p>{user?.email}</p>
                <Button onClick={() => get()}>Get Test</Button>
                <Button onClick={() => createTest()}>Create Test</Button>
                <Button onClick={() => deleteTest('61781c72c686f150284a9196')}>Delete Test</Button>
            </Flex>

        </div>
    )
}
