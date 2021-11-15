/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react'
import { Flex, Box } from 'reflexbox'
import { Button, Card, Image, Select } from 'antd'
import { LeftOutlined, PlusOutlined } from '@ant-design/icons'
import { order, province } from '../../../modules/_test/services'
import router from 'next/router'
import { getSortedRoutes } from 'next/dist/shared/lib/router/utils'


const { Option } = Select;
export default function menuOder(props) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [data, setData] = useState([]);
    const [userId, setUserId] = useState("");

    useEffect(async () => {
        const liff = (await import('@line/liff')).default
        liff.init({ liffId: '1656624101-Ng7Vpxwd' }, async () => {
            if (liff.isLoggedIn()) {
                liff.getProfile().then(profile => {
                    console.log(profile);
                    setUserId(profile.userId);
                }).catch(err => console.error(err));
            } else {
                liff.login();
            }

        }, err => console.error(err));
    })

    const select = [
        {
            namecounty: 'โปรดเลือกจังหวัดของคุณ',
            county: 'อุบลราชธานี'
        },
        {
            namecounty: 'โปรดเลือกจังหวัดของคุณ',
            county: 'บุรีรัมย์'
        },
        {
            namecounty: 'โปรดเลือกจังหวัดของคุณ',
            county: 'นนทบุรี'
        },
    ]

    function submit(value) {
        console.log(value)
        const data = {
            userorderid: value,
            handeeid: userId || "yy"

        }
        order(data).then((res) => {
            console.log(res);
        })

    }


    function handleChange(value) {
        setData([])
        province(value.value).then((res) => {
            console.log(res.data.data)
            res.data.data.map((data) =>
                setData(element => [...element, {
                    id: data.id,
                    nameproduct: data.nameorder,
                    address: data.address,
                    phonenumber: data.phone,
                    locationproduct: data.location,
                    image: data.idimage
                }])
            )
            // const { nameorder, address, phone, location, idimage } = res.data.data[0]
            // setData([{
            //     nameproduct: nameorder,
            //     address: address,
            //     phonenumber: phone,
            //     locationproduct: location,
            //     image:idimage
            // }])
        })
    }
    return (
        <>
            <Flex justifyContent="center" style={{ marginTop: 50 }}>
                <Flex flexDirection="column" textAlign="center">
                    <h1><b>ออเดอร์</b></h1>
                    <Flex style={{ marginBottom: 20 }} justifyContent="center">
                        <Select placeholder="โปรดเลือกจังหวัดของคุณ" labelInValue defaultValue={{ value: "เลือกจังหวัดที่สนใจรับหิ้ว" }} style={{ width: 200 }} onChange={handleChange} >
                            {select.map((item, index) => {
                                return (
                                    // eslint-disable-next-line react/jsx-key
                                    <Option value={item.county}>
                                        {item.county}
                                    </Option>
                                )
                            })}

                        </Select>
                    </Flex>



                    {data.map((item, index) => {
                        return (

                            <Card key={index} justifyContent="center" textAlign="center" style={{ width: "100%", height: "100%", marginBottom: 20, boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", borderRadius: 10 }} >
                                <Flex justifyContent="left">

                                    <Flex >
                                        <Box><img style={{ width: 150, borderRadius: 10 }} src={item.image} /></Box>
                                    </Flex>

                                    <Flex justifyContent="left" textAlign="left">
                                        <Box style={{ marginLeft: 30 }}>

                                            <p>
                                                <h2><b>{item.nameproduct}</b></h2>
                                                <h5><b>ที่อยู่จัดส่ง : {item.address}</b></h5>
                                                <h5><b>เบอร์โทร : {item.phonenumber}</b></h5>
                                                <h5><b>และสถานที่ซื้อสินค้า : {item.locationproduct} </b> </h5>
                                            </p>
                                        </Box>
                                    </Flex>
                                </Flex>

                                <Flex style={{ marginTop: 30, marginBottom: 10 }} justifyContent="center">
                                    <Button style={{ borderRadius: 50, backgroundColor: "orange", borderColor: "orange" }} type="primary" onClick={() => submit(item.id)}><b>รับออเดอร์</b></Button>
                                </Flex>

                            </Card>
                        )
                    })}


                </Flex>
            </Flex>

        </>
    )
}


