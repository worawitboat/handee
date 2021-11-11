import React , {useState} from 'react'
import {Flex , Box} from 'reflexbox'
import {Tabs  , Button , Upload,Modal , Descriptions} from 'antd'
import {PlusOutlined} from '@ant-design/icons'

export default function TestPage() {

    return (
        <>
            <Flex justifyContent="center">
                <Flex style={{marginTop:50}}>
                    <Button style={{width:100 , height:100 , borderRadius:10}} type="primary" >
                        <p style={{marginTop:10}}>
                        <PlusOutlined/>
                        <p style={{color:"White"}}>upload</p>
                        </p>
                    </Button>
                </Flex>
            </Flex>
        </>
    )
}

