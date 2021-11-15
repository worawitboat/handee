/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react'
import { Flex, Box } from 'reflexbox'
import axios from 'axios'
import { Button, Input, Upload } from 'antd';
import router from 'next/router'
import { handee } from '../../../modules/_test/services';


export default function edit(props) {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [address, setAddress] = useState();
    const [phone, setPhone] = useState();
    const [fileList, setFileList] = useState([]);
    const [idimage, setIdimage] = useState([]);
    const [userId, setUserId] = useState("");
    let imagesid = []


    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        const liff = (await import('@line/liff')).default
        liff.init({ liffId: '1656624101-M972rAGm' }, async () => {
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

    async function CommitForm() {
        imagesid = []
        const formData = new FormData();
        formData.append('file', fileList[0].originFileObj);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        await axios.post('https://handee.tk/uploader', formData, config)
            .then(async (res) => {
                console.log(res.data.idimage)
                imagesid.push("https://drive.google.com/uc?export=view&id=" + res.data.idimage)
                const formData = new FormData();
                formData.append('file', fileList[1].originFileObj);
                const config = {
                    headers: {
                        'content-type': 'multipart/form-data'
                    }
                };
                await axios.post('https://handee.tk/uploader', formData, config)
                    .then((res) => {
                        console.log(res.data.idimage)
                        imagesid.push("https://drive.google.com/uc?export=view&id=" + res.data.idimage)
                        console.log("idimageee", imagesid)
                        const data = {
                            userid: userId || "yy",
                            fname: firstName,
                            lname: lastName,
                            address: address,
                            phone: phone,
                            infoimage: imagesid
                        }

                        handee(data).then(
                             router.push({
                                pathname: '/orderHandee',
                            })
                        )


                    })
            })

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
            <Flex width={1 / 15} justifyContent="center"></Flex>
            <Flex width={1} justifyContent="center" textAlign="right">
                <Flex justifyContent="center" style={{ marginTop: 50 }}>
                    <Flex flexDirection="column" textAlign="center">
                        <h2><b>กรอกข้อมูลสำหรับคนรับหิ้ว</b></h2>
                        <Flex justifyContent="center" flexDirection="column" >
                            <Input type="text" placeholder="ชื่อ" style={{ marginTop: 20, width: "100%", fontsize: "12px", borderRadius: " 50px", padding: "10px 10px 10px 25px" }} onChange={(e) => setFirstName(e.target.value)} />
                            <Input type="text" placeholder="นามสกุล" style={{ marginTop: 20, width: "100%", fontsize: "12px", borderRadius: " 50px", padding: "10px 10px 10px 20px" }} onChange={(e) => setLastName(e.target.value)} />
                            <Input type="text" placeholder="ที่อยู่" style={{ marginTop: 20, width: "100%", fontsize: "12px", borderRadius: " 50px", padding: "10px 10px 10px 20px" }} onChange={(e) => setAddress(e.target.value)} />
                            <Input type="text" placeholder="เบอร์โทรศัพท์" style={{ marginTop: 20, width: "100%", fontsize: "12px", borderRadius: " 50px", padding: "10px 10px 10px 20px" }} onChange={(e) => setPhone(e.target.value)} />
                        </Flex>

                        <Flex justifyContent="center" style={{ marginTop: 30, marginBottom: 30 }}>
                            <Box>

                                <Upload
                                    listType="picture-card"
                                    fileList={fileList}
                                    onChange={onChange}
                                    onPreview={onPreview}
                                >
                                    {fileList.length < 2 && '+ Upload'}
                                </Upload>
                            </Box>
                        </Flex>

                        <Flex>
                            <p style={{ color: "red" }}><b>* หมายเหตุ : รูปถ่ายบัตรประชาชน และ รูปถ่ายหน้าตรง  </b></p>
                        </Flex>

                        <Flex width={1} justifyContent="center" style={{ marginTop: 25 }}>
                            <Box width={1}>
                                <Button style={{ width: "130px", height: "40px", fontWeight: "bold", fontSize: "15px", borderRadius: "50px" }} onClick={() => { CommitForm() }} type="primary">ยืนยัน</Button>
                            </Box>
                            <Box width={1 / 3}>
                            </Box>
                            <Box width={1}>
                                <Button style={{ width: "130px", height: "40px", fontWeight: "bold", fontSize: "15px", borderRadius: "50px" }} onClick={() => { router.push('/orderHandee') }} type="danger">ยกเลิก</Button>
                            </Box>
                        </Flex>
                    </Flex>
                </Flex>
                <Flex width={1 / 15}></Flex>


            </Flex>
        </>
    )
}


