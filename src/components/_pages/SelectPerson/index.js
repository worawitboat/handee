import React from 'react';
import {Flex , Box} from 'reflexbox';
import {BtnSelectPerson} from '../../_common';

export default function SelectPerson(props) {
    return (
        <>  <Flex justifyContent="center" textAlign="center" style={{marginTop: 250}}>
            <Box width={1/2}><BtnSelectPerson btnName="คนฝากหิ้ว" RouterWay="/SelectHandOrder"/></Box>
            <Box width={1/2}><BtnSelectPerson btnName="คนรับหิ้ว"  RouterWay="/SelectOrderHand"/>  </Box>    
            </Flex> 
            

        </>
    )
}
