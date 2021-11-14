import React  from 'react'
import { Flex , Box } from 'reflexbox'
import {Button, Card , Image, Select } from 'antd'
import { LeftOutlined, PlusOutlined } from '@ant-design/icons'
import router from 'next/router'
import { getSortedRoutes } from 'next/dist/shared/lib/router/utils'


const { Option } = Select;
export default function menuOder(props) {
    const  data = [{
        nameproduct : "แมวพันธ์ุดูไบ (แรร์)",
        address : "100/100 ต.คะแนน อ.เกรด A จ.เทอมนี้",
        phonenumber : "0914445521",
        locationproduct : "ตะลาดะเจริยศะรี อ.ศะรีไค จ.ดูใบ"
    } , {
        nameproduct : "...",
        address : "...",
        phonenumber : "...",
        locationproduct : "..."
    }]

    const select = [
        {
            namecounty:'โปรดเลือกจังหวัดของคุณ',
            county:'อุบลฯ'
        },
        {
            namecounty:'โปรดเลือกจังหวัดของคุณ',
            county:'บุรีรัมย์'
        },
        {
            namecounty:'โปรดเลือกจังหวัดของคุณ',
            county:'นนบุรี'
        },
]



    function handleChange(value) {
        console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
      }

    
    function getOrder(){
        router.push('orderMenu')
    }
    return (
        <>
        <Flex justifyContent="center"   style={{marginTop: 50}}>
        <Flex  flexDirection="column" textAlign="center">
            <h1><b>ออเดอร์</b></h1>
            <Flex style={{marginBottom:20}} justifyContent="center">
                        <Select placeholder="โปรดเลือกจังหวัดของคุณ" labelInValue defaultValue={{ value: select.namecounty }} style={{ width: 200 }} onChange={handleChange} >
                            {select.map((item , index)=>{
                                return(
                                    <Option value={item.county}>
                                        {item.county}
                                    </Option>
                                )
                                })}
                                 
                        </Select>
</Flex> 
                
            
            
            {data.map((item,index)=>{
                return(
                  
                    <Card key={index} justifyContent="center" textAlign="center" style={{ width:"100%" , height:"100%" ,marginBottom:20,boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" , borderRadius:10 }} >
                        <Flex justifyContent="left">

                            <Flex style={{marginTop:50}}>
                                <Box><img style={{width:100 , borderRadius:10}} src="https://www.top13.net/wp-content/uploads/2017/03/cat-puss-boots-6.jpg"/></Box>
                            </Flex>

                            <Flex justifyContent="left" textAlign="left">
                                                <Box style={{ marginLeft:30}}>
                
                                                    <p>
                                                    <h2><b>{item.nameproduct}</b></h2>
                                                        <h5><b>ที่อยู่จัดส่ง : {item.address}</b></h5>
                                                        <h5><b>เบอร์โทร : {item.phonenumber}</b></h5>
                                                        <h5><b>และสถานที่ซื้อสินค้า : {item.locationproduct} </b> </h5>
                                                    </p>
                                                </Box>    
                                            </Flex>
                        </Flex>

                        <Flex style={{marginTop:30 , marginBottom:10}} justifyContent="center">
                        <Button style={{borderRadius:50 , backgroundColor:"orange", borderColor:"orange"}} type="primary" onClick={()=>{getOrder()}}><b>รับออเดอร์</b></Button>      
                        </Flex>
                                          
                    </Card>
                )})}
                            
            
        </Flex>
        </Flex> 
                
        </>
    )
}


