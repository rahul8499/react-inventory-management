import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams ,} from 'react-router-dom'

const EditOrder = () => {
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
        <section className="OrderpageContent  container-fluid">
          {/* <div>
            <h1>EditOrder</h1>
          </div>
          <div>
<h2>{paramData.advance_payment}</h2>
          </div> */}
        </section>



  </form>
  </>
  )
}

export default EditOrder
