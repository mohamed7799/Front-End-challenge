import React from 'react';
import Navbar from './navbar/navbar';
import Filter from './filter/filter';
import Applist from './app-list/app-list';
const Dashboard =()=>{
    return(
        <div className='Dashboard'>
            <Navbar/>
            <Filter/>
            <Applist/>
        </div>
    )
}

export default Dashboard;