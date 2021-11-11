import React , {useState} from 'react'
import { Flex , Box } from 'reflexbox'
import { Input , Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import {useRouter} from 'next/router'

export default function DetailProHand(props) {
    const [Nameproduct , setNameProduct] = useState();
    const [Priceproduct , setPriceProduct] = useState();
    const [Locationproduct , setLocationProduct] = useState();
    const router = useRouter();

    const Deal = () => {
       const DataPassToOrderHand = {
            nameproduct : Nameproduct,
            priceproduct: Priceproduct,
            locationproduct:Locationproduct
        }

        console.log(DataPassToOrderHand);
        router.push('/HistoryProHand')
    }

    return (
        <>
        <Flex justifyContent="center" style={{marginTop: 100}}>
        <Flex  flexDirection="column" textAlign="center">
            <h2><b>รายละเอียดสินค้าที่ต้องการฝากหิ้ว</b></h2>
            <Flex justifyContent="center" style={{marginTop:30}}>
            <Box><Button type="dashed" style={{width:120 , height:120, color:"DodgerBlue" ,borderColor:"DodgerBlue"}}><PlusOutlined /><div style={{ marginTop: 8 }}>Upload</div></Button></Box>
            </Flex>
            <Flex justifyContent="center" flexDirection="column" style={{marginTop:20}}>
            <Box><Input type="text" placeholder="ชื่อสินค้า" style={{marginTop:20 , width:"100%",fontsize:"12px",borderRadius:" 50px", padding:"10px 10px 10px 20px"}} onChange={(e)=> {setNameProduct(e.target.value)}} /></Box>
            <Box><Input type="text" placeholder="ราคาสินค้า" style={{marginTop:20 , width:"100%",fontsize:"12px",borderRadius:" 50px", padding:"10px 10px 10px 20px"}} onChange={(e)=> {setPriceProduct(e.target.value)}} /></Box>
            <Box><Input type="text" placeholder="สถานที่ซื้อสินค้า" style={{marginTop:20 , width:"100%",fontsize:"12px",borderRadius:" 50px", padding:"10px 10px 10px 20px"}} onChange={(e)=> {setLocationProduct(e.target.value)}} /></Box>
            </Flex>
            <Flex justifyContent="center" style={{marginTop:60}}>
            <Box width={1/2}><Button onClick={()=>{Deal()}} type="primary" style={{borderRadius:50, width:120, height:40, fontWeight:"bold"}}>ยืนยัน</Button></Box>
            <Box width={1/2}><Button onClick={()=>{router.push('/SelectHandOrder')}} type="primary" danger style={{borderRadius:50, width:120, height:40, fontWeight:"bold"}}>ยกเลิก</Button></Box> 
            </Flex>
        </Flex>
        </Flex> 
                
        </>
    )
}


