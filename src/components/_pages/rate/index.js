import React from 'react'
import { Flex , Box} from 'reflexbox'
import { LeftOutlined } from '@ant-design/icons';
import {Button , Card , Avatar, Image , Rate} from 'antd'
import router from 'next/router'

export default function rate() {
    return (
        <div>            
            <Flex justifyContent="center" style={{ marginTop: 20}}>
            <Flex flexDirection="column" textAlign="center">
            <Card style={{ width:350, height:290, marginTop: 50 , marginRight: 8 ,boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)"}}>
            <h3>ให้คะแนนคนรับหิ้ว</h3>
            <Flex>
            <Avatar src="https://joeschmoe.io/api/v1/random" 
                width={200}
                height={200}
                marginTop={30}/>
              <p style={{textAlign:"left" , marginLeft:25 , marginTop:10}}>
                <p>ชื่อ :</p>
                <p>เบอร์โทรศัพท์ :</p>
                <p>ที่อยู่ :</p>
                <Rate style={{ marginLeft : 30}}/>
                <br/>
                <br/>
                <Box width={1/2}><Button type="primary" style={{borderRadius:50, width:80 , marginLeft:55 ,backgroundColor:"black" }} >ส่งดาว</Button></Box>
              </p>
            </Flex>
          </Card> 
            </Flex>
            </Flex>
        </div>
    )
}