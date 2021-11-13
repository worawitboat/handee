import React from 'react'

export default function index() {
    return (
        <div>
            step1
        </div>
    )
}


export async function getStaticProps(context) {

    return { props: { appName: "handee"} }
  
  }