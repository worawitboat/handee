import React from 'react'
import { Flex} from 'reflexbox'
import { useRouter } from 'next/router'

import { BtnSelectPerson } from '../../_common'

export default function SelectOrderHand(props) {
    
    const router = useRouter()
    
    return (
        <>
            <Flex justifyContent="center" style={{marginTop: 350}}>
                    <h1>Google</h1>
                    <h1>Googleace</h1>
            </Flex>
        </>
    )
}


