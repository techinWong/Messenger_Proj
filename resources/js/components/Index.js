import React from 'react'
import FacebookChat from './FacebookChat'
import MessengerCustomerChat from 'react-messenger-customer-chat';


const Index = () => {
    return (
        <div>
            <h1>หน้าหลัก</h1>
            <FacebookChat />
            <MessengerCustomerChat
                pageId="104028138849243"
                appId="457225192738814"
            />
        </div>
    )
}

export default Index
