import React from 'react'
import Navbar from '../components/Navbar'
import Box  from '@mui/material/Box'
import SideNav from '../components/SideNav'
import TaskList from './task/TaskList'

const Products = () => {
  return (
    <>
        <div className='bgcolor'>
            <Navbar />
            <Box height={70} />
            <Box sx={{display: "flex"}} className="main">
                <SideNav />
                <Box component="main" sx={{flexGrow: 1, p:3}}>
                   <TaskList />
                </Box>
            </Box>
        </div>
    </>
  )
}

export default Products