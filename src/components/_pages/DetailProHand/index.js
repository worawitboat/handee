import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Flex, Box } from 'reflexbox'
import { Input, Button, Upload, Select } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { useRouter } from 'next/router'
import { userorder } from '../../../modules/_test/services'
// import ImgCrop from 'antd-img-crop';

const {Option} = Select

export default function DetailProHand(props) {
    const { data } = props
    const [Nameproduct, setNameProduct] = useState();
    const [Priceproduct, setPriceProduct] = useState();
    const [Locationproduct, setLocationProduct] = useState();
    const [details, setdetails] = useState()
    const [province, setprovince] = useState("อุบลราชธานี")
    const [fileList, setFileList] = useState([]);
    const [idToken, setIdToken] = useState("");
    const [pictureUrl, setPictureUrl] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [statusMessage, setStatusMessage] = useState("");
    const [userId, setUserId] = useState("");
    const router = useRouter();

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

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        const liff = (await import('@line/liff')).default
        liff.init({ liffId: '1656624101-Ng7Vpxwd' }, async () => {
            if (liff.isLoggedIn()) {
                liff.getProfile().then(profile => {
                    console.log(profile);
                    setDisplayName(profile.displayName);
                    setPictureUrl(profile.pictureUrl);
                    setStatusMessage(profile.statusMessage);
                    setUserId(profile.userId);
                }).catch(err => console.error(err));
            } else {
                liff.login();
            }

        }, err => console.error(err));
    })




    const Deal = () => {
        console.log(fileList[0].originFileObj)
        const formData = new FormData();
        formData.append('file', fileList[0].originFileObj);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        axios.post('https://handee.tk/uploader', formData, config)
            .then((res) => {
                console.log(res.data.idimage)
                const DataPassToOrderHand = {
                    userid: userId || 'kk',
                    fname: JSON.parse(data).firstName,
                    lname: JSON.parse(data).lastName,
                    address: JSON.parse(data).address,
                    phone: JSON.parse(data).phone,
                    idimage: res.data.idimage,
                    nameorder: Nameproduct,
                    price: Priceproduct,
                    province: province,
                    location: Locationproduct,
                    details: details,

                }
                userorder(DataPassToOrderHand).then(
                    router.push('DetailProHand/handeeSuccess')
                )
            });

    }

    const onChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };

    const onPreview = async file => {
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




    return (
        <>
            <Flex width={1 / 15}></Flex>
            <Flex width={1} style={{ marginTop: 50 }} justifyContent="center" textAlign="center">

                <Flex flexDirection="column" textAlign="center">
                    <h2><b>รายละเอียดสินค้าที่ต้องการฝากหิ้ว</b></h2>
                    <Flex justifyContent="center" style={{ marginTop: 30 }}>
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
                    <Flex justifyContent="center" flexDirection="column" style={{ marginTop: 20 }}>
                        <Box><Input type="text" placeholder="ชื่อสินค้า" style={{ marginTop: 20, width: "100%", fontsize: "12px", borderRadius: " 50px", padding: "10px 10px 10px 20px" }} onChange={(e) => { setNameProduct(e.target.value) }} /></Box>
                        <Box><Input type="number" placeholder="ราคาสินค้า" style={{ marginTop: 20, width: "100%", fontsize: "12px", borderRadius: " 50px", padding: "10px 10px 10px 20px" }} onChange={(e) => { setPriceProduct(e.target.value) }} /></Box>
                        <Box><Flex style={{ marginBottom: 20 }} justifyContent="center">
                        <Select placeholder="โปรดเลือกจังหวัดของคุณ" labelInValue defaultValue={{ value: province }} style={{ marginTop: 20, width: "100%", fontsize: "12px", borderRadius: "50px", padding: "10px 10px 10px 20px"}} onChange={(e) => {setprovince(e.target.value) }}>
                            {select.map((item, index) => {
                                return (
                                    // eslint-disable-next-line react/jsx-key
                                    <Option key={index} value={item.county}>
                                        {item.county}
                                    </Option>
                                )
                            })}

                        </Select>
                    </Flex></Box>
                        <Box><Input type="text" placeholder="สถานที่ซื้อสินค้า" style={{ marginTop: 20, width: "100%", fontsize: "12px", borderRadius: " 50px", padding: "10px 10px 10px 20px" }} onChange={(e) => { setLocationProduct(e.target.value) }} /></Box>
                        <Box><Input type="text" placeholder="รายละเอียด" style={{ marginTop: 20, width: "100%", fontsize: "12px", borderRadius: " 50px", padding: "10px 10px 10px 20px" }} onChange={(e) => { setdetails(e.target.value) }} /></Box>
                    </Flex>
                    <Flex justifyContent="center" style={{ marginTop: 60 }}>
                        <Box width={1 / 2}><Button onClick={() => { Deal() }} type="primary" style={{ borderRadius: 50, width: 120, height: 40, fontWeight: "bold" }}>ยืนยัน</Button></Box>
                        <Box width={1 / 2}><Button onClick={() => { router.push('/edit') }} type="primary" danger style={{ borderRadius: 50, width: 120, height: 40, fontWeight: "bold" }}>ยกเลิก</Button></Box>
                    </Flex>
                </Flex>
            </Flex>
            <Flex width={1 / 15}></Flex>
        </>
    )
}


