import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams ,} from 'react-router-dom'
import axios from 'axios'
import {useNavigate} from "react-router-dom"


const Views = () => {
      const navigate = useNavigate();

      const{id} = useParams()
  const[paramData,setParamData] = useState([])

  
  const getIdData = async () => {
    axios.get(`http://localhost:3000/order/${id}`).then((res) => {
      // console.log(res.data);
      setParamData(res.data)
      
    })
  }
  
  useEffect(() => {
    getIdData()
  },[]);
  console.log(paramData);

  return (
    <>
      <form >
        <section className="OrderpageContent  container-fluid" >
            
           
          <div  style={{display:"flex"}}>
            <div >

<i class="bi bi-arrow-left" onClick={()=>navigate("/order")}  style = {{fontSize:"1.5vw", cursor:"pointer", color:"red"}}></i>
      </div>
            <div style={{marginLeft:"1vw"}} >

            <h1>ViewOrder</h1> 
            </div>
           
      
</div>
          <div style={{display:"flex",marginTop:"2vw"}}>
             <div>
          <div>
            <label style={{fontWeight:"bold"}}>Performa Invoice Date:</label>
            <h6>{paramData.proforma_invoice_date}</h6>
          </div>
          <div>
            <label style={{fontWeight:"bold"}}>Advance Balance:</label>
            <h6>{paramData.advance_balance}</h6>
          </div>
           <div>
            <label style={{fontWeight:"bold"}}>Advance Payment:</label>
            <h6>{paramData.advance_payment}</h6>
          </div>
              <div>
            <label style={{fontWeight:"bold"}}>Advance Payment:</label>
            <h6>{paramData.advance_payment}</h6>
          </div>
        </div>
      <div style={{marginLeft:"4vw"}}>
        <div>
            <label style={{fontWeight:"bold"}}>proforma_Invoice_Value:</label>
            <h6>{paramData.proforma_invoice_date}</h6>
          </div>
           <div>
            <label style={{fontWeight:"bold"}}>proforma_Invoice:</label>
            <h6>{paramData.proforma_invoice}</h6>
          </div>
           <div>
            <label style={{fontWeight:"bold"}}>po_number:</label>
            <h6>{paramData.po_number}</h6>
          </div>
             <div>
            <label style={{fontWeight:"bold"}}>pallets_or_skids:</label>
            <h6>{paramData.pallets_or_skids}</h6>
          </div>
         
          
          {/* order_status */}

</div>
<div style={{marginLeft:"4vw"}}>
    <div>
            <label style={{fontWeight:"bold"}}>Container20:</label>
            <h6>{paramData.container20}</h6>
          </div>

             <div>
            <label style={{fontWeight:"bold"}}>others:</label>
            <h6>{paramData.others}</h6>
          </div>
          {/* excepted_commission */}
            <div>
            <label style={{fontWeight:"bold"}}>Excepted_commission:</label>
            <h6>{paramData.excepted_commission}</h6>
          </div>
           <div>
            <label style={{fontWeight:"bold"}}>Container40:</label>
            <h6>{paramData.container40}</h6>
          </div>
         

</div>
<div style={{marginLeft:"4vw"}}  >
    <div>
            <label style={{fontWeight:"bold"}}>order_status:</label>
            <h6 style={{color:"green"}}>{paramData.order_status}</h6>
          </div>
 
</div>



  </div>

  
        </section>



  </form>
    
    </>
  )
}

export default Views
