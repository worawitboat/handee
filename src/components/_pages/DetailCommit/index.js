import React, { useState, useEffect } from 'react'
import { Flex, Box } from 'reflexbox'
import { Button, Upload } from 'antd'
import axios from 'axios'
import { LeftOutlined, PlusOutlined } from '@ant-design/icons'
import router from 'next/router';
import { paymentimage } from '../../../modules/_test/services'

export default function DetailCommit(props) {

    const { data } = props

    const [Price, setPrice] = useState()
    const [Delivery, setDelivery] = useState()
    const [orderid, setorderid] = useState()
    const [handeeid, sethandeeid] = useState()
    const [fileList, setFileList] = useState([]);

    const onChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };

    useEffect(() => {
        setPrice(JSON.parse(data).price)
        setDelivery(JSON.parse(data).cost)
        setorderid(JSON.parse(data).orderid)
        sethandeeid(JSON.parse(data).handeeid)

    }, [])

    const onPreview = async file => {
        console.log(file.type)
        let src = file.url;
        if (!src) {
            src = await new Promise(resolve => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);
                reader.onload = () => resolve(reader.result);
            });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow.document.write(image.outerHTML);
    };

    const Success = () => {
        console.log(fileList)
        const formData = new FormData();
        formData.append('file', fileList[0].originFileObj);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        axios.post('https://handee.tk/uploader', formData, config).then((res) => {
            console.log(res)
            const data = {
                orderid: orderid,
                handeeid: handeeid,
                image: "https://drive.google.com/uc?export=view&id="+res.data.idimage
            }
            paymentimage(data).then((res)=>{
                console.log(res)
                router.push('DetailCommit/success')
            })
        })
    }
    return (
        <>
            <Flex justifyContent="center" style={{ marginTop: 50 }}>
                <Flex flexDirection="column" textAlign="center">
                    <h1><b>ยืนยันการชำระเงิน</b></h1>
                    <Flex justifyContent="center" style={{ marginTop: 20 }}>
                        <Box>

                            <Upload
                                listType="picture-card"
                                fileList={fileList}
                                onChange={onChange}
                                onPreview={onPreview}
                            >
                                {fileList.length < 1 && '+ Upload'}
                            </Upload>
                        </Box>
                    </Flex>
                    <Flex justifyContent="center" style={{ marginTop: 20 }}>
                        <h6 style={{ color: "red" }}><b>*หมายเหตุ : ใส่หลักฐานการชำระเงินที่นี่</b></h6>
                    </Flex>
                    <Flex justifyContent="center" textAlign="center">
                        <Box style={{ marginTop: 20 }}>
                            <p>
                                <h3>ค่าสินค้า : {Price} บาท.</h3>
                                <h3>ค่าบริการ : {Delivery} บาท.</h3>
                            </p>
                        </Box>
                    </Flex>
                    <Flex justifyContent="center" style={{ marginTop: 30 }}>
                        <Button style={{ borderRadius: 50, width: 80 }} type="primary" onClick={() => { Success() }}><b>ตกลง</b></Button>
                    </Flex>
                </Flex>
            </Flex>

        </>
    )
}


