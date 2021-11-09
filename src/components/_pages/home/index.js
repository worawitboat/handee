import React from 'react'
import { useRouter } from 'next/router'
export default function homePage() {
    const router = useRouter()
    return (
        <div>
            <h1 onClick={() => router.push('/pam')}>Pam</h1>
        </div>
    )
}
