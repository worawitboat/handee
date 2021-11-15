/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { Flex, Box } from 'reflexbox'
import { Input, Button, Upload, Card, Image } from 'antd'
import { LeftOutlined } from '@ant-design/icons'
import router from 'next/router';
import Item from 'antd/lib/list/Item';
import { paymentqrcode } from '../../../modules/_test/services';
import QRCode from 'qrcode.react'

export default function DetailShop(props) {
    const { dataid } = props
    const [qrcode, setQrcode] = useState("00020101021229370016A000000677010111011300669891533125802TH5303764540550.00630438AB")
    const [Price, setPrice] = useState()
    const [Delivery, setDelivery] = useState()
    const [ATM, setATM] = useState()
    const [PromptPay, setPromptPay] = useState()
    const [namebank, setnamebank] = useState()

    useEffect(async () => {
        const data = {
            orderid: JSON.parse(dataid).id,
            handeeid: JSON.parse(dataid).handeeid
        }

        await paymentqrcode(data).then((res) => {
            console.log(res)
            setQrcode(res.data.data.payload)
            setPrice(res.data.data.amount)
            setDelivery(res.data.data.cost)
            setATM(res.data.data.bank)
            setPromptPay(res.data.data.mobileNumber)
            setnamebank(res.data.data.namebank)
        })
    }, [])


    var dict = {
        "BAY": "ธนาคารกรุงศรีอยุธยา",
        "BBL": "ธนาคารกรุงเทพ",
        "CIMBT": "ธนาคาร ซีไอเอ็มบี ไทย",
        "KBANK": "ธนาคารกสิกรไทย",
        "KKP": "ธนาคารเกียรตินาคินภัทร",
        "KTB": "ธนาคารกรุงไทย",
        "MBKET": "บริษัทหลักทรัพย์ เมย์แบงก์ กิมเอ็ง",
        "SCB": "ธนาคารไทยพาณิชย์",
        "TTB": "ธนาคารทหารไทยธนชาต",
    };
    const Nexts = () => {
        const data = {
            orderid: JSON.parse(dataid).id,
            handeeid: JSON.parse(dataid).handeeid,
            price:Price,
            cost:Delivery
        }
        router.push({
            pathname: 'DetailShop/DetailCommit',
            query:{data: JSON.stringify(data) }
        })  
    }
    return (
        <>
            <Flex justifyContent="center" style={{ marginTop: 25 }}>
                <Flex flexDirection="column" textAlign="center">
                    <h1><b>รายละเอียดการชำระเงิน</b></h1>
                    <Flex textAlign="Left">
                        <Card style={{ width: 400, height: 450 }} >
                            <Flex justifyContent="center" textAlign="Left" style={{ marginTop: 10 }}>
                                <Flex justifyContent="center" >
                                    <Box width={1 / 2}>
                                        <Image style={{ width: 100, borderRadius: 20 }} src="https://www.top13.net/wp-content/uploads/2017/03/cat-puss-boots-6.jpg" />
                                    </Box>
                                </Flex>

                                <Flex>
                                    <Box style={{ marginTop: 20, marginLeft: 50 }}>
                                        <p>
                                            <h3>ค่าสินค้า : {Price} บาท.</h3>
                                            <h3>ค่าบริการ : {Delivery} บาท.</h3>
                                        </p>
                                    </Box>
                                </Flex>
                            </Flex>

                            <Flex style={{ marginTop: 20 }} justifyContent="center" >
                                {/* <Image style={{ width: 120 }} src={QRcodePay} /> */}
                                <QRCode value={qrcode} />
                            </Flex>
                            <Flex justifyContent="center" textAlign="center">
                                <Box style={{ marginTop: 20 }}>
                                    <p>
                                        <h3>พร้อมเพย์ : {PromptPay}</h3>
                                        <h3>{dict[namebank]} : {ATM}</h3>
                                    </p>
                                </Box>
                            </Flex>

                            <Flex justifyContent="center">
                                <Box style={{ marginTop: 20 }}>
                                    <Button style={{ borderRadius: 50, width: 120 }} type="primary" onClick={() => { Nexts() }}><b>ถัดไป</b></Button>
                                </Box>
                            </Flex>
                        </Card>
                    </Flex>

                </Flex>
            </Flex>

        </>
    )
}


