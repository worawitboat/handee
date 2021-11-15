import React from 'react'
import {Flex} from 'reflexbox'
import {Result, Button} from 'antd';
import router from 'next/router';


export default function SelectHandOrder(props) {
    const OrderNumber = "A21F45216235aa"

    return (
        <>
            <Flex justifyContent="center">
                <Result status="success"
                    extra={
                        [
                            <h1 key="1"><b>ทำรายการออเดอร์สำเร็จแล้ว</b></h1>,
                            <Flex key="2" justifyContent="center">
                            </Flex>
                            ,
                            <Flex key="3" style={{marginTop:10}} justifyContent="center" >
                                <Button onClick={()=>{router.push("/handee")}} type="primary" style={{ width:100 , height:"100%", borderRadius:50}}><b>ตกลง</b></Button>
                            </Flex>
                            ,
                        ]
                    }/>
            </Flex>

        </>
    )
}
