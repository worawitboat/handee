/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { Flex } from 'reflexbox'
import { Button, Card, Result } from 'antd';
import { ContactsOutlined, UnorderedListOutlined, HistoryOutlined, ShoppingCartOutlined, ShoppingOutlined, SyncOutlined, SmallDashOutlined, SmileOutlined } from "@ant-design/icons";
import router from 'next/router';
import { getUserInfo } from '../../../modules/_test/services'

export default function OrderHandee(props) {
    const [status, setStatus] = useState("")
    const [userId, setUserId] = useState("");

    useEffect(async () => {
        const liff = (await import('@line/liff')).default
        liff.init({ liffId: '1656624101-M972rAGm' }, async () => {
            if (liff.isLoggedIn()) {
                liff.getProfile().then(async (profile) => {
                    console.log(profile);
                    setUserId(profile.userId);
                    await getUserInfo(profile).then(res => {
                        console.log("res.data ==",res.data);
                        if (res.data.data === 'rejected') {
                            router.push('/orderEdit')
                        } else if (res.data.data === 'wait') {
                            setStatus(res.data.data)
                        } else if (res.data.data === 'notfound') {
                            router.push('/orderEdit')
                        }
                    })
                }).catch(err => console.error(err));
            } else {
                await liff.login();
                await getUserInfo(profile).then(res => {
                    if (res.data.data === 'rejected') {
                        router.push('/orderEdit')
                    } else if (res.data.data === 'wait') {
                        setStatus(res.data.data)
                    } else if (res.data.data === 'notfound') {
                        router.push('/orderEdit')
                    }
                })
            }

        }, err => console.error(err));


    })

    function menuOrders() {
        router.push('/menuOrder')
    }

    function getOrder() {
        router.push('/orderMenu')
    }

    function historys() {
        router.push('/history')
    }

    function contacts() {
        router.push('/contact')
    }
    return (
        <div>
            {status === 'wait' ? //ปป
                <Flex style={{marginTop:150}} justifyContent="center">
                    
                    <Flex  justifyContent="center">
                    <Result icon={<SmileOutlined  />}
                    extra={
                        [
                            <h1 key="1"><b>กำลังตรวจสอบ</b></h1>,
                            <Flex key="2" justifyContent="center">
                               <p style={{color:"gray"}}>
                               ระบบกำลังทำการตรวจสอบข้อมูลและสถานะของคุณ ขอบคุณค่ะ
                            </p> 
                            </Flex>
                            ,
                           
                        ]
                    }/>
            </Flex>
                </Flex>
//ปป 
                :
                <Flex justifyContent="center">
                    <Flex flexDirection="column" textAlign="center" style={{ marginTop: 80, boxshadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
                        <h1 style={{ color: "orange", marginTop: -30, marginLeft: -190, fontSize: 45 }}>Handee</h1>
                        <div style={{ fontSize: "70px", marginLeft: 60, marginTop: -110 }}>
                            <ShoppingCartOutlined />
                        </div>
                        <Card onClick={() => { menuOrders() }} style={{ width: 405, height: 190, marginTop: 50, backgroundColor: 'rgba(255, 193, 83, 83)' }}>
                            <div style={{ fontSize: "90px", marginLeft: -230 }}>
                                <UnorderedListOutlined />
                            </div>
                            <h1 style={{ marginTop: -100, marginLeft: 75 }}>ออเดอร์</h1>
                        </Card>

                        <Card onClick={() => { getOrder() }} style={{ width: 405, height: 190, backgroundColor: 'rgba(1, 192, 160, 0.8)' }}>
                            <div style={{ fontSize: "90px", marginLeft: -230 }}>
                                <ShoppingOutlined />
                            </div>
                            <h1 style={{ marginTop: -100, marginLeft: 100 }}>ออเดอร์ที่รับ</h1>
                        </Card>

                        <Card onClick={() => { historys() }} style={{ width: 405, height: 190, backgroundColor: 'rgba(235, 107, 86, 86)' }}>
                            <div style={{ fontSize: "90px", marginLeft: -230 }}>
                                <ContactsOutlined />
                            </div>
                            <h1 style={{ marginTop: -100, marginLeft: 100 }}>ประวัติการใช้งาน</h1>
                        </Card>

                        <Card onClick={() => { contacts() }} style={{ width: 405, height: 190, backgroundColor: 'rgba(176, 95, 109, 109)' }}>
                            <div style={{ fontSize: "90px", marginLeft: -230 }}>
                                <HistoryOutlined />
                            </div>
                            <h1 style={{ marginTop: -90, marginLeft: 80 }}>ติดต่อเรา</h1>
                        </Card>
                    </Flex>
                </Flex>

            }
        </div>
    )
}

