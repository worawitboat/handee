import React, { useState } from 'react'
import { Flex, Box } from 'reflexbox'
import { Button, Card, Avatar, Image } from 'antd';
import { LeftOutlined, HeartOutlined, HeartFilled } from '@ant-design/icons';
import router from 'next/router'


export default function HistoryProHand(props) {
    const detail = [{
        fullname: '@@@@@ @@@@@@@@@',
        phoneNum: '##########',
        address: '!@#$%&*!@#$%$#{!@'
    }, {
        fullname: '@@@@@ @@@@@@@@@',
        phoneNum: '##########',
        address: '!@#$%&*!@#$%$#{!@'
    }]

    const ShowDetail = () => {
        alert("I see detail")
    }

    const Pay = () => {
        router.push('HistoryProHand/DetailShop')
    }

    return (
        <>
            <Flex width={1 / 15}></Flex>
            <Flex width={1} justifyContent="center">
                <Flex justifyContent="center" style={{ marginTop: 25, marginBottom: 50 }}>
                    <Flex flexDirection="column" textAlign="center">
                        <h1><b>ประวัติคนรับหิ้ว</b></h1>
                        <Flex flexDirection="column" textAlign="Left">
                            {detail.map((item, index) => {
                                return (

                                    <Card key={index} style={{ width: "100%", height: 130, marginTop: 20, boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }} >
                                        <Flex>
                                            <Flex>
                                                <Box>
                                                    <Image style={{ width: 80, borderRadius: 10 }} src="https://www.top13.net/wp-content/uploads/2017/03/cat-puss-boots-6.jpg" />
                                                </Box>
                                            </Flex>

                                            <Flex justifyContent="center" textAlign="Left">
                                                <Box style={{ marginLeft: 10 }}>
                                                    <p>
                                                        <h5><b>ชื่อ-สกุล : {item.fullname}</b></h5>
                                                        <h5><b>เบอร์โทรศัพท์ : {item.phoneNum}</b></h5>
                                                        <h5><b>ที่อยู่ : {item.address}</b></h5>
                                                    </p>
                                                </Box>
                                            </Flex>
                                        </Flex>
                                    </Card>

                                )
                            })}

                        </Flex>

                        <Flex justifyContent="center" style={{ marginTop: 40 }}>
                            <Box ><Button style={{ width: "130px", height: "40px", fontWeight: "bold", fontSize: "15px", borderRadius: "50px" }} type="primary" onClick={() => { Pay() }}>ชำระเงิน</Button></Box>
                        </Flex>


                    </Flex>
                </Flex>
            </Flex>
            <Flex width={1 / 15}></Flex>

        </>
    )
}



