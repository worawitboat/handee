import React , {useState} from 'react'
import { Flex , Box } from 'reflexbox'
import { Input , Button, Upload , Card , Image} from 'antd'
import {LeftOutlined} from '@ant-design/icons'
import router from 'next/router';
import Item from 'antd/lib/list/Item';

export default function DetailShop(props) {
    const Price = "100,000";
    const Delivery = "200";

    const QRcodePay = "https://th.bing.com/th/id/R.16fe644c7547cddcc2f188244185db4a?rik=2LxhQa99J13wqg&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_462691.png&ehk=SkOyyvi6VWwgHgmli9wzTDQ2GWFQPBdnaby1dZ6i%2fEc%3d&risl=&pid=ImgRaw&r=0";
    const ATM = "11445789524";
    const PromptPay = "0855555555";

    const data = [{
        image : "https://www.top13.net/wp-content/uploads/2017/03/cat-puss-boots-6.jpg",
        price : "100,000",
        delivery : "200",
    }]
    const Nexts = () => {
        router.push("DetailShop/DetailCommit")
    }
    return (
        <>
        <Flex justifyContent="center" style={{marginTop:25}}>
        <Flex  flexDirection="column" textAlign="center">
            <h1><b>รายละเอียดการชำระเงิน</b></h1>
            <Flex textAlign="Left">
                        {data.map((item, index)=>{
                            return(
                                <Card key={index} style={{width:400, height:450}} >
                        <Flex justifyContent="center" textAlign="Left" style={{marginTop:10}}>
                            <Flex justifyContent="center" >
                            <Box width={1/2}>
                                <Image style={{width:100 , borderRadius:20}} src={item.image}/>
                            </Box>
                            </Flex>
                            
                            <Flex>
                            <Box style={{marginTop:20 , marginLeft:50}}>
                                <p>
                                    <h3>ค่าสินค้า : {item.price} บาท.</h3>
                                    <h3>ค่าบริการ : {item.delivery} บาท.</h3>
                                </p>
                            </Box>
                            </Flex>
                        </Flex>

                            <Flex style={{marginTop:20}} justifyContent="center" >
                            <Image style={{width:120 }} src={QRcodePay}/>
                            </Flex>
                            <Flex justifyContent="center" textAlign="center">
                            <Box style={{marginTop:20}}>
                                <p>
                                    <h3>พร้อมเพย์ : {PromptPay}</h3>
                                    <h3>ธนาคารกรุงไทย : {ATM}</h3>
                                </p>
                            </Box>    
                            </Flex>

                            <Flex justifyContent="center">
                            <Box style={{marginTop:20}}>
                                <Button style={{borderRadius:50 , width:120}} type="primary" onClick={()=>{Nexts()}}>ถัดไป</Button>
                            </Box>    
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


