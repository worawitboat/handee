import React from "react";
import { Flex, Box } from "reflexbox";
import { Button, Card, Avatar, Image } from "antd";
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router'



export default function PamPage() {
  const { Search } = Input;
  const router = useRouter()

  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1890ff',
      }}
    />
  );
  const onSearch = value => console.log(value);
  const { Meta } = Card;

  return (
      <div>
        <Flex justifyContent="center" style={{ marginLeft: 95 }}>
          <Box width={[1 / 6]} p={4}>
            Home
          </Box>
          <Box width={[1 / 6]} p={4}>
            Tickets
          </Box>
          <Box width={[1 / 6]} p={4}>
            Hotels
          </Box>
          <Box width={[1 / 6]} p={4}>
            Car Hire
          </Box>
          <Box width={[1 / 6]} p={4}>
            Contact
          </Box>
          <Box width={[1 / 6]} p={4}>
            <Button type="primary" onClick={() => router.push("/signin")}>
              SIGN IN
            </Button>
          </Box>
        </Flex>
        <Image
        style={{ marginTop: 0.5 , marginLeft: 25 , marginRight: 30}}
        width={1470}
        height={350}
        src="https://images.unsplash.com/photo-1500622944204-b135684e99fd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2061&q=80"/>
        <Space direction="vertical">
          <Search
            style={{ marginTop: -200 , marginLeft: 380}}
            placeholder="input search text"
            allowClear
            enterButton="Search"
            size="large"
            onSearch={onSearch}
            width={200}
          />
        </Space>,
        <Card
          style={{ width: 400 , height:300 , marginTop: 10 , marginLeft: 90}}
          cover={
            <img
              alt="example"
              src="https://travel.mthai.com/app/uploads/2019/02/16730144_1867791716833973_2744032784152525809_n.jpg"
            />
          }
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          <Meta
            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
            title="Korea"
            description="This is the description"
          />
        </Card>,
        <Card
          style={{ width: 400 , height:300 , marginTop: -323 , marginLeft: 560}}
          cover={
            <img
              alt="example"
              src="http://www.thaifly.com/image/data/img_thaifly/article/switzerland/stmoritz.jpg"
            />
          }
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          <Meta
            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
            title="Switzerland"
            description="This is the description"
          />
        </Card>,
        <Card
          style={{ width: 400 , height:300 , marginTop: -323 , marginLeft: 1030}}
          cover={
            <img
              alt="example"
              src="https://pix10.agoda.net/geo/city/2994/1_2994_02.jpg?s=1920x822"
            />
          }
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          <Meta
            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
            title="Dubai"
            description="This is the description"
          />
        </Card>,
        
        
      </div>
      
    
      
  );
}