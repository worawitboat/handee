import React from "react";
import { Box, Flex } from "reflexbox";
import { Button } from "antd";
import { MailOutlined , PhoneOutlined } from '@ant-design/icons';

export default function contact() {
  const data = [
      {
        image:"https://cdn.pixabay.com/photo/2018/05/07/10/48/husky-3380548_960_720.jpg",
        name: "ศักรินทร์ หาญชนะพล",
        facebook: "Sakkarin Harnchanaphol" } ,
      {
        image:"https://cdn.pixabay.com/photo/2021/10/27/19/09/cat-6748193_960_720.jpg",
        name: "ภัทรพล ผิวเรือง",
        facebook: "Phatraphon Pewruangl" } ,
      {
        image:"https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_960_720.jpg",
        name: "วรวิทย์ พนมเริงไชย",
        facebook: "Worawit Panomworachai" } ,
      {
        image:"https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_960_720.jpg",
        name: "อณพิชฌา หยาดทอง",
        facebook: "Anapitcha Yardthong" } ,

    ]
  
  
    return (
    <div>
      <Flex justifyContent="center">
        <Flex style={{ fontFamily: "inherit" ,marginTop: 15, fontSize: 30, marginLeft: 13 }} flexDirection="column" textAlign="center">
          <p><b>ติดต่อเรา</b></p>
        </Flex>
      </Flex>

      <Flex style={{ marginLeft: 25 }} justifyContent="left">
        <Flex flexDirection="column" textAlign="center">
          <p style={{ fontFamily: "inherit" , fontSize: 18 , marginTop: -15}}><b>Team</b></p>
        </Flex>
      </Flex>
      <Flex flexDirection="column" style={{marginLeft:25}} justifyContent="left">
      {data.map((item , index)=>{
                return(
                   
                    <Flex key={index} flexDirection="row" textAlign="left">
  
                      <Box>
                        <img style={{ width: 60,height: 60,borderRadius: 600}} src={item.image}/>
                      </Box>
                  

              
                      <Box style={{marginLeft:20 , marginTop:10}}>
                        <p style={{ fontSize: 15 , fontFamily: "inherit"}}>
                          <p style={{ fontFamily: "inherit" ,marginTop : -5}}><b>{item.name}</b></p>
                          <p style={{ fontFamily: "inherit" , color:'gray' , marginTop : -10}}>{item.facebook}</p>
                        </p>
                      </Box>
                     
                    </Flex>
                  
                )
            })}
            </Flex> 

        <Flex style={{ marginLeft: 25 }} justifyContent="left">
                <Flex flexDirection="column" textAlign="center">
                <p style={{ fontFamily: "inherit" , fontSize: 18 , marginTop: 20}}><b>Admin</b></p>
                </Flex>
            </Flex>

            <Flex style={{ marginLeft: 25 }} justifyContent="left">
                <Flex flexDirection="column" textAlign="center">
                <Button shape="circle" style={{ width:45 , height:45 , color:"white", backgroundColor: 'rgb(255, 0, 0)'}} icon={<MailOutlined style={{fontSize:20}} />}  />
                <p style={{ fontFamily: "inherit" , marginLeft : 70 , marginTop: -40}}>sakkarin.ha.61@ubu.ac.th</p>
                </Flex>
            </Flex>

            <Flex style={{ marginLeft: 25 , marginTop: 20}} justifyContent="left">
                <Flex flexDirection="column" textAlign="center">
                <Button shape="circle" style={{ width:45 , height:45 , color:"white", backgroundColor: 'rgba(0, 202, 38, 0.8)'}} icon={<PhoneOutlined style={{fontSize:20}} />}  />
                <p style={{ fontFamily: "inherit" , marginLeft : 70 , marginTop: -40}}>088-0934267</p>
                </Flex>
            </Flex>

        
      
    </div>
  );
}
