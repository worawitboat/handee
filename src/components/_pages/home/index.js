import React , {useState} from 'react';
import { Tabs } from 'antd';
import { AppleOutlined, AndroidOutlined } from '@ant-design/icons';

import HistoryProHand from '../HistoryProHand';
import DetailHistory from '../DetailHistory';
import DetailProHand from '../DetailProHand';
const { TabPane } = Tabs;



export default function homePage(props) {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [tabPosition, setTabPosition] = useState('top');  

    return (
        <div>
         
            <Tabs tabPosition={tabPosition} defaultActiveKey="1" style={{ alignItems: "center", position: 'relative'  , width:"100%"}} >
                <TabPane
                    tab={
                        <span>
                            <AppleOutlined />
                            ฝากหิ้ว
                        </span>
                    }
                    key="1"
                >
                   <DetailProHand />
                   
                </TabPane>


                <TabPane
                    tab={
                        <span>
                            <AndroidOutlined />
                            รายการออเดอร์
                        </span>
                    }
                    key="2"
                >
                <HistoryProHand />
                </TabPane>


                <TabPane
                    tab={
                        <span>
                            <AndroidOutlined />
                            ประวัติการใช้งาน
                        </span>
                    }
                    key="3"
                >
                    <DetailHistory />
                </TabPane><TabPane
                    tab={
                        <span>
                            <AndroidOutlined />
                            ติดต่อเรา
                        </span>
                    }
                    key="4"
                >
                    Tab 2
                </TabPane>
            </Tabs>
            
        </div>
    )
}
