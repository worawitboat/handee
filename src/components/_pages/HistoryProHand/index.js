import React, { useState, useEffect } from 'react'
import { Flex, Box } from 'reflexbox'
import { Button, Card, Avatar, Image } from 'antd';
import { LeftOutlined, HeartOutlined, HeartFilled } from '@ant-design/icons';
import router from 'next/router'
import { handeeinfo, getUserOrderById } from '../../../modules/_test/services';


export default function HistoryProHand(props) {
    const { data } = props

    const [detail, setDetail] = useState([])
    const [handeeid, setHandeeid] = useState()
    const [status, setStatus] = useState('')
    const [orderinfo, setOrderinfo] = useState({})

    useEffect(() => {
        getUserOrderById(JSON.parse(data).id).then(res => {
            console.log(res);
            setOrderinfo({
                idimage: res.data.data.idimage,
                nameorder: res.data.data.nameorder,
                province: res.data.data.province,
                location: res.data.data.location,
                address: res.data.data.address
            })
        })
    }, [])

    useEffect(() => {
        console.log(data);
        setStatus(data.status)
        handeeinfo(JSON.parse(data).id).then((res) => {
            setHandeeid(res.data.data.userid)
            setDetail({
                fullname: res.data.data.fname + " " + res.data.data.lname,
                phoneNum: res.data.data.phone,
                address: res.data.data.address,
            })
        })
    }, [])

    const Pay = () => {

        const data1 = {
            id: JSON.parse(data).id,
            handeeid: handeeid
        }
        router.push({
            pathname: 'HistoryProHand/DetailShop',
            query: { dataid: JSON.stringify(data1) }
        })
    }

    return (
        <>
            <Flex width={1 / 15}></Flex>
            <Flex width={1} justifyContent="center">
                <Flex justifyContent="center" style={{ marginTop: 25, marginBottom: 50 }}>
                    <Flex flexDirection="column" textAlign="center">
                        <h1><b>รายละเอียดออเดอร์</b></h1>
                        <h3 style={{ marginTop: 10 }}><b>ออเดอร์</b></h3>
                        <Card style={{ width: "100%", height: 150, marginTop: 10, boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }} >
                            <Flex>
                                <Flex>
                                    <Box>
                                        <Image style={{ width: 80, borderRadius: 10 }} src={orderinfo.idimage} />
                                    </Box>
                                </Flex>

                                <Flex justifyContent="center" textAlign="Left">
                                    <Box style={{ marginLeft: 10 }}>
                                        <p>
                                            <h5><b>ชื่อออเดอร์: {orderinfo.nameorder}</b></h5>
                                            <h5><b>จังหวัด : {orderinfo.province}</b></h5>
                                            <h5><b>ตำแหน่ง : {orderinfo.location}</b></h5>
                                            <h5><b>ที่อยู่จัดส่ง : {orderinfo.address}</b></h5>
                                        </p>
                                    </Box>
                                </Flex>
                            </Flex>
                        </Card>
                        <h3 style={{ marginTop: 10 }}><b>ข้อมูลคนรับหิ้ว</b></h3>
                        <Card style={{ width: "100%", height: 130, marginTop: 10, boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }} >
                            <Flex>
                                <Flex>
                                    <Box>
                                        <Image style={{ width: 80, borderRadius: 10 }} src="https://www.top13.net/wp-content/uploads/2017/03/cat-puss-boots-6.jpg" />
                                    </Box>
                                </Flex>

                                <Flex justifyContent="center" textAlign="Left">
                                    <Box style={{ marginLeft: 10 }}>
                                        <p>
                                            <h5><b>ชื่อ-สกุล : {detail.fullname}</b></h5>
                                            <h5><b>เบอร์โทรศัพท์ : {detail.phoneNum}</b></h5>
                                        </p>
                                    </Box>
                                </Flex>
                            </Flex>
                        </Card>




                        {status === 'payment' ?

                            <Flex justifyContent="center" style={{ marginTop: 40 }}>
                                <Box ><Button style={{ width: "130px", height: "40px", fontWeight: "bold", fontSize: "15px", borderRadius: "50px" }} type="primary" onClick={() => { Pay() }}>ชำระเงิน</Button></Box>
                            </Flex>
                            : <></>
                        }

                    </Flex>
                </Flex>
            </Flex>
            <Flex width={1 / 15}></Flex>

        </>
    )
}



