import React, { Component } from 'react';
import SideBar from '../../common/sideBar';

const Index = () => {
    return ( <>
    <div className='flex w-full h-[33.5rem] bg-gray-100'>
    <SideBar />
    <div className='w-[88%]'>Hello world</div>
    </div>
    </> );
}
 
export default Index;