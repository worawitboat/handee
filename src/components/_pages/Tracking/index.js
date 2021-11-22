import React, { useState } from 'react'
import { Flex, Box } from 'reflexbox'
import { Button, Input } from 'antd';
import router from 'next/router'
import { orderSuccess } from '../../../modules/_test/services';

export default function Tracking(props) {
    const { data } = props
    const [NameCompany, setNameCompany] = useState();
    const [Tracking, setTracking] = useState();


    function CommitForm() {
        let payload = {
            id: data.id,
            tracking: Tracking,
            nameCompany: NameCompany
        }
        orderSuccess(payload).then(res =>{
            router.push({
                pathname: 'Tracking/orderSuccess',
            })

        })
    }



    return (
        <div>
            <Flex style={{ marginTop: 50 }} justifyContent="center">
                <Flex flexDirection="column" textAlign="center">
                    <h1><b>ข้อมูลขนส่งสินค้า</b></h1>
                    <Flex justifyContent="center">
                        <Flex flexDirection="column" textAlign="center" style={{ marginTop: 10, width: 300 }} >
                            <Box><Input type="text" placeholder="ชื่อบริษัทขนส่งพัสดุ" style={{ marginTop: 20, width: "100%", fontsize: "15px", padding: "10px 10px 10px 20px", borderRadius: 50 }} onChange={(e) => setNameCompany(e.target.value)} /></Box>
                            <Box><Input type="text" placeholder="Tracking Number" style={{ marginTop: 20, width: "100%", fontsize: "15px", padding: "10px 10px 10px 20px", borderRadius: 50 }} onChange={(e) => setTracking(e.target.value)} /> </Box>
                            <Box><Button style={{ width: "130px", height: "40px", fontWeight: "bold", fontSize: "20px", borderRadius: 50, marginTop: 40, backgroundColor: "coral" }} onClick={() => { CommitForm() }}>ยืนยัน</Button></Box>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>

        </div>
    )
}