import React from 'react'
import { Link } from 'react-router-dom'
import { Typeahead } from 'react-bootstrap-typeahead'
import Options from './OrderData'
import { useState } from 'react'
import Pagination from 'react-custom-pagination'
// import data from '../Report/ReportData'
// import data from './ListData'
import axios from 'axios'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'



const ListOrder = () => {
    const { register, reset } = useForm()


 const deleteUser =  (userId) => {
  console.log(userId);

    axios.delete(`http://localhost:3000/order/delete/${userId}`).then((res) => {
      orderApiData()
    
      
    })
  }
  //selected data stored in state and onchange those data are stored in below state
  const [OrderStatusSelected, setOrderStatusSelected] = useState([]) 

  const [customerSelected, setCustomerSelected] = useState([])
  const [supplierSelected, setSupplierSelcted] = useState([])
  const [divisionSelected, setDivisionSelected] = useState([])
  const [teamMemberSelected, setTeamMemberSelected] = useState([])
  const [countrySelected, setCountrySelected] = useState([])

  const [orderData, setOrderData] = useState([])
  // const [val, setval] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(3)
  
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = orderData.slice(indexOfFirstPost, indexOfLastPost)
  
  const paginate = (number) => {
    setCurrentPage(number)
  }


  //get data from api stored data in below state
  const[orderStatus, setStatus] = useState([])
  const[divisionStatus, setDivision] = useState([])

  const orderApiData = async () => {
    axios.get(`http://localhost:3000/order`).then((res) => {
      // console.log(res.data.data);
      setOrderData(res.data.data);
          const orderStatusmapping = res.data.data.map((response) => {
        return { label: response.order_status }
      })
      setStatus(orderStatusmapping)

    })
  }

  const[onChangeData, setOnChangeData] = useState("")
 let handleChange = (e) => {
 let a = [e.target.name] = e.target.value

  setOnChangeData(a)
    
  }
console.log(onChangeData);
  const getDivisionApiData = async () => {
    axios.get(`http://localhost:3000/division`).then((res) => {
  
        const mappingResponse = res.data.data.map((response) => {
          return { label: response.name  , id: response.id}
        })
        setDivision(mappingResponse)
      } 
    )
  }


  const searchData = (()=>{
        axios.get(`http://localhost:3000/order?search=${OrderStatusSelected[0]?.label || onChangeData}`).then((res)=>{
          setOrderData(res.data.data)
        })

  })
 
  useEffect(() => {
    orderApiData();
    getDivisionApiData()
    
  },[])

  // console.log(OrderStatusSelected[0]?.label);
    // console.log(OrderStatusSelected);
    // console.log(divisionSelected[0]?.label);

  // console.log(orderSta);
  return (
    <>
        <form id="activity-entry-form" >

      <section className="OrderpageContent  container-fluid">
        <div style={{ display: 'flex' }}>
          <h1>Orders</h1>
          <Link to="MainOrder" className="linkItems ">
            <button
              type="button"
              class="btn btn-danger"
              style={{
                width: '8vw',
                height: '32px',
                marginLeft: '2vw',
                backgroundColor: 'orangered',
                textAlign:"center",
                paddingBottom:"1.8vw"
              }}
            >
              + New Order
            </button>
          </Link>
        </div>

        <div style={{ marginTop: '3vw', display: 'flex' }}>
          <div>
            <label class="form-label">Order Status</label>

            <Typeahead
              id="basic-example"
              onChange={setOrderStatusSelected}
              options={orderStatus}
              selected={OrderStatusSelected}
              style={{ width: '13vw' }}
              // {...register('orderStatuss')}
            />
          </div>
          <div style={{ marginLeft: '1vw' }}>
            <label class="form-label">Customer</label>

            <Typeahead
              id="basic-example"
              onChange={setCustomerSelected}
              options={Options}
              selected={customerSelected}
              style={{ width: '13vw' }}

            />
          </div>

          <div style={{ marginLeft: '1vw' }}>
            <label class="form-label">Supplier</label>

            <Typeahead
              id="basic-example"
              onChange={setSupplierSelcted}
              options={Options}
              selected={supplierSelected}
              style={{ width: '13vw' }}

            />
          </div>

          <div style={{ marginLeft: '1vw' }}>
         
             
            <label class="form-label">division</label>

            <Typeahead
              id="basic-example"
              onChange={setDivisionSelected}
              options={divisionStatus}
              selected={setDivisionSelected[0]?.label}
              style={{ width: '13vw' }}

            />

                  {/* onChange={setOrderStatusSelected}
              options={orderStatus}
              selected={OrderStatusSelected} */}
            
          </div>
        </div>

        <div style={{ marginTop: '2vw', display: 'flex' }}>
          <div>
            <label class="form-label">Team Member</label>

            <Typeahead
              id="basic-example"
              onChange={setTeamMemberSelected}
              options={Options}
              selected={teamMemberSelected}
              style={{ width: '13vw' }}

            />
          </div>
          <div style={{ marginLeft: '1vw' }}>
            <label class="form-label">Country</label>

            <Typeahead
              id="basic-example"
              onChange={setCountrySelected}
              options={Options}
              selected={countrySelected}
              style={{ width: '13vw' }}

            />
          </div>

          <div style={{ marginLeft: '1vw' }}>
            <label class="form-label">Keyword</label>

            <input
              type="text"
              class="form-control"
              id="exampleInputKeyword"
              aria-describedby="emailHelp"
              style={{ width: '13vw' }}
                            {...register('keyword')}

                                  onChange={(e) => handleChange(e)}

            
            />
          </div>
          <div style={{ marginTop: '2.1vw', marginLeft: '1vw' }}>
            <button
              type="button"
              class="btn btn-primary"
              style={{ width: '6vw', fontSize:"1vw", height:"5vh" }}
              onClick = {searchData}
              
              
            >
              Search
            </button>
          </div>
          <div style={{ marginTop: '2.1vw', marginLeft: '1vw' }}>
            <button
              type="button"
              class="btn btn-outline-primary"
              style={{ width: '6vw', fontSize:"1vw", height:"5vh" }}
              
              onClick={() =>
                reset(
                  {
                  keyword: '',
                 
                }
                )
              }
              
            >
              reset
            </button>
          </div>
        </div>
      </section>
        </form>
      <section style={{ marginTop: '2vw', display: 'flex' }}>
        <h5 style={{ marginLeft: '1vw' , fontSize:"1.2vw"}}>Smart Filter:</h5>
        <div
          style={{
            border: '2px solid gray',
            height: '1.8vw',
            width: '6vw',
            marginLeft: '1vw',
           
          }}
        >
          <h5 style={{ fontSize:"1vw", textAlign:"center"}}>{OrderStatusSelected[0]?.label}</h5>
        </div>
        <div
          style={{
            border: '2px solid gray',
            height: '1.8vw',
            width: '6vw',
            marginLeft: '1vw',
          }}
        >
          <h5 style={{ fontSize:"1vw", textAlign:"center"}}>{countrySelected[0]?.label}</h5>
        </div>
        <div
          style={{
            border: '2px solid gray',
            height: '1.8vw',
            width: '6vw',
            marginLeft: '1vw',
          }}
        >
          <h5 style={{ fontSize:"1vw", textAlign:"center"}}>{customerSelected[0]?.label}</h5>
        </div>
        <div
          style={{
            border: '2px solid gray',
            height: '1.8vw',
            width: '6vw',
            marginLeft: '1vw',
            fontSize:"0.5vw"
            
          }}
        >
          <h5 style={{ fontSize:"1vw", textAlign:"center"}}>{divisionSelected[0]?.label}</h5>
        </div>
      </section>

      <section
        className=" col-12  "
        style={{
          // height: '60vh',
          // height:'92%',
          backgroundColor: 'white',
          borderRadius: '10px',
          marginTop: '2vh',
        }}
      >
        <table className="table table-hover" style={{ fontSize: '1vw' }}>
          <thead>
            <tr>
              <th>Date</th>
              <th> Order #</th>
              <th>Customer</th>
              <th>Supplier</th>
              <th>PI</th>
              <th>ETA #</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* {data
              .filter((datas) => datas.name.includes(val)) */}
            {currentPosts.map((item) => {
              // console.log(item.id);
              return (
                <tr key={item.id}>
                  <td>{item.order_date}</td>
                  <td>{item.order}</td>
                  <td>{item.customer}</td>
                  <td>{item.supplier}</td>
                  <td>{item.proforma_invoice}</td>
                  <td>{item.eta}</td>
               
                  <td>{item.order_status}</td>
                  <td>
                  <Link to = {`views/${item.id}`} >  <i class="bi bi-eye" style={{color:"black"}}></i> </Link>

                    <Link  to= {`edit/${item.id}`}  style={{marginRight:"1vw", marginLeft:"1vw"}} > <i class="bi bi-pen" style={{color:"black"}}></i> </Link>
                  <Link  onClick={()=> deleteUser(`${item.id}`)}  >  <i class="bi bi-trash" style={{color:"red"}}></i> </Link>
                 
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <div>
          <div
            style={{
              width: '500px',
              float: 'right',
              fontSize: '1vw',
              position: 'sticky',
            }}
          >
            <Pagination
              selectColor={'lightGray'}
              totalPosts={orderData.length}
              postsPerPage={postsPerPage}
              paginate={paginate}
              view={4}
              showIndex={true}
              bgColor={'white'}
              color={'black'}
              boxRadius={'10%'}
              indexBorderRadius={'4%'}
              indexbgColor={'white'}
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default ListOrder
