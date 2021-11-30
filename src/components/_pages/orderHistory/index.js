import React, { useState, useEffect } from 'react'
import { Flex, Box } from 'reflexbox'
import { Card, Image } from 'antd'
import { getHistory } from '../../../modules/_test/services'

export default function orderHistory(props) {
    const [data, setData] = useState([])


    useEffect(async () => {
        const liff = (await import('@line/liff')).default
        liff.init({ liffId: '1656624101-Ng7Vpxwd' }, async () => {
            if (liff.isLoggedIn()) {
                liff.getProfile().then(async (profile) => {
                    await getHistory(profile.userId).then(async (res) => {
                        setData([])
                        await res.data.data.map((data) =>
                            setData(element => [...element, {
                                id: data.userorderid._id,
                                productName: data.userorderid.nameorder,
                                addressProduct: data.userorderid.address,
                                price: data.userorderid.price,
                                img: data.userorderid.idimage,
                                status: data.userorderid.status
                            }]))
                    })

                }).catch(err => console.error(err));
            } else {
                liff.login();
            }

        }, err => console.error(err));
    }, [])

    return (
        <>
            <Flex justifyContent="center" style={{ marginTop: 50, marginBottom: 50 }}>
                <Flex flexDirection="column" textAlign="center">
                    <h1><b>ประวัติการใช้งาน</b></h1>
                    <Flex textAlign="Left">
                        {data.map((item, index) => {
                            return (
                                <Card key={index} style={{ width: "100%", height: "100%", marginTop: 20, boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }} >
                                    <Flex>

                                        <Flex style={{ marginTop: 10 }}>
                                            <div style={{ width: 100, height: 100 }}>
                                                <img style={{ width: "100%", height: "100%", borderRadius: 10 }} src={item.img} />
                                            </div>
                                        </Flex>

                                        <Flex justifyContent="left" textAlign="Left">
                                            <Box style={{ marginTop: 10, marginLeft: 20 }}>
                                                <p>
                                                    <h2><b>{item.productName}</b></h2>
                                                    <h5>ราคา: {item.price}</h5>
                                                    {item.status === 'success' ? <Tag color="green">Success</Tag>
                                                        : <Tag icon={<CloseCircleOutlined />} color="error">rejected</Tag>
                                                    }
                                                </p>
                                            </Box>
                                        </Flex>
                                    </Flex>
                                </Card>
                            )
                        })}
                    </Flex>
                </Flex>
            </Flex>

        </>
    )
}


