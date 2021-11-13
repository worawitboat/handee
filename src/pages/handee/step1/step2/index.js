import React from 'react'

export default function index() {
    return (
        <div>
            step2
        </div>
    )
}


export async function getServerSideProps(context) {

    return { props: { appName: "handee"} }
  
  }