import React from 'react'
import FilterPage from './ComplaintPages/FilterPage'
import ListPage from './ComplaintPages/ListPage'



function Complaint() {
  return (
      <>
    <div className='col-12 ' style={{backgroundColor:"white", borderRadius:"10px"}}>
     <FilterPage/>
    </div>
    <div className='col-12' style={{backgroundColor:"white", borderRadius:"10px" }}>
<ListPage/>
    </div>
    
    </>
  )
}

export default Complaint
