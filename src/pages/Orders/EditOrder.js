import React, { useState } from 'react'
import { Input, Typeahead } from 'react-bootstrap-typeahead'
import options from './OrderData'
import './Order.css'
import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios'
import {useNavigate, useParams} from "react-router-dom"

import { useForm, Controller } from 'react-hook-form'
import { useEffect } from 'react'
import moment from 'moment'

const EditOrder = () => {



    // input field data stored in state
  const [formValues, setFormValues] = useState([{}]) 
      // get data from api store in State
  const [division, setDivision] = useState([])
  const [country, setCountry] = useState([])
  const [region, setRegion] = useState([])
  const [orderStatus, setOrderStatus] = useState([])
  const [proformaInvoice, setproformaInvoice] = useState([])
  const [proformaInvoiceDate, setproformaInvoiceDate] = useState([])
  const [proformaInvoiceValue, setproformaInvoiceValue] = useState([])
  const [poNumber, setPo] = useState([])
  const [saleType, setSaleType] = useState([])
  const [destinationCountry, setDestinationCountry] = useState([])
  const [paymentTerm, setPaymentTerm] = useState([])
  const [deliveryTerm, setDeliveryTerm] = useState([])
  const [deliveryTime, setDeliveryTime] = useState([])
  const [categeory, setCategory] = useState([])
  const [subCategeory, setSubCategory] = useState([])
  const [expectedCommission, setexpectedCommission] = useState([])
// useform use
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm()
// usenevigate use
   let navigate = useNavigate();
    
// input field handlechange
  let handleChange = (i, e) => {
    let newFormValues = [...formValues]
    console.log(newFormValues)
    newFormValues[i][e.target.name] = e.target.value
    setFormValues(newFormValues)
  }

  let addFormFields = () => {
    setFormValues([...formValues, {}])
  }

  let removeFormFields = (element, i) => {
    let newFormValues = [...formValues]

    const deleteElement = newFormValues.splice(i, 1)
    console.log('total field', newFormValues)
    console.log('delete', deleteElement)
    setFormValues(newFormValues)
  }


  // geting data from api all api get
  const orderApiData = async () => {
    axios.get(`http://localhost:3000/order`).then((res) => {
      const proformaInvoicemapping = res.data.data.map((response) => {
        return { label: response.proforma_invoice }
      })
      setproformaInvoice(proformaInvoicemapping)

      const orderStatusmapping = res.data.data.map((response) => {
        return { label: response.order_status }
      })
      setOrderStatus(orderStatusmapping)


      const proformaInvoiceDate = res.data.data.map((response) => {
        return { label: response.proforma_invoice_date }
      })
      setproformaInvoiceDate(proformaInvoiceDate)

      const proformaInvoiceValue = res.data.data.map((response) => {
        return { label: response.proforma_invoice_value.toString() }
      })

      setproformaInvoiceValue(proformaInvoiceValue)

      const exceptedCommission = res.data.data.map((response) => {
        return { label: response.excepted_commission }
      })

      setexpectedCommission(exceptedCommission)

      const po = res.data.data.map((response) => {
        return { label: response.po_number.toString() }
      })

      setPo(po)
      console.log(po)
    })
  }

  
  const getSaleTypeApiData = async () => {
    axios.get(`http://localhost:3000/saletype`).then((res) => {
      try {
        const mappingResponse = res.data.data.map((response) => {
          return { label: response.name , id:response.id }
        })
        setSaleType(mappingResponse)
      } catch (error) {
        console.log(error)
      }
    })
  }

  const getPaymentTermApiData = async () => {
    axios.get(`http://localhost:3000/paymentTerm`).then((res) => {
      try {
        const mappingResponse = res.data.data.map((response) => {
          return { label: response.name ,id: response.id }
        })
        setPaymentTerm(mappingResponse)
      } catch (error) {
        console.log(error)
      }
    })
  }
  const getDeliveryTermApiData = async () => {
    axios.get(`http://localhost:3000/deliveryTerm`).then((res) => {
      try {
        const mappingResponse = res.data.data.map((response) => {
          return { label: response.deliveryTerm , id: response.id}
        })
        setDeliveryTerm(mappingResponse)
      } catch (error) {
        console.log(error)
      }
    })
  }

  const getDeliveryTimeApiData = async () => {
    axios.get(`http://localhost:3000/deliveryTime`).then((res) => {
      try {
        const mappingResponse = res.data.data.map((response) => {
          return { label: response.time, id:response.id }
        })
        setDeliveryTime(mappingResponse)
      } catch (error) {
        console.log(error)
      }
    })
  }

  const getCategoryApiData = async () => {
    axios.get(`http://localhost:3000/category`).then((res) => {
      try {
        const mappingResponse = res.data.data.map((response) => {
          return { label: response.name }
        })
        setCategory(mappingResponse)
      } catch (error) {
        console.log(error)
      }
    })
  }
  const getSubCategoryApiData = async () => {
    axios.get(`http://localhost:3000/subcategory`).then((res) => {
      try {
        const mappingResponse = res.data.data.map((response) => {
          return { label: response.name }
        })
        setSubCategory(mappingResponse)
      } catch (error) {
        console.log(error)
      }
    })
  }
  const getDestinationCountryApiData = async () => {
    axios.get(`http://localhost:3000/destinationPort`).then((res) => {
      try {
        const mappingResponse = res.data.data.map((response) => {
          return { label: response.destination_port }
        })
        setDestinationCountry(mappingResponse)
        console.log(mappingResponse)
      } catch (error) {
        console.log(error)
      }
    })
  }

  const getRegionApiData = async () => {
    axios.get(`http://localhost:3000/region`).then((res) => {
      try {
        const mappingResponse = res.data.data.map((response) => {
          return { label: response.name , id: response.id }
        })
        setRegion(mappingResponse)
      } catch (error) {
        console.log(error)
      }
    })
  }

  const getCountryApiData = async () => {
    axios.get(`http://localhost:3000/country`).then((res) => {
      try {
        const mappingResponse = res.data.data.map((response) => {
          return { label: response.name, id: response.id }
        })
        setCountry(mappingResponse)
      } catch (error) {
        console.log(error)
      }
    })
  }

  const getDivisionApiData = async () => {
    axios.get(`http://localhost:3000/division`).then((res) => {
      try {
        const mappingResponse = res.data.data.map((response) => {
          return { label: response.name  , id: response.id}
        })
        setDivision(mappingResponse)
      } catch (error) {
        console.log(error)
      }
    })
  }

  
  
// post data call
  const Submit = async (event) => {
    // console.log(event)
        // console.log(formValues);  // description ani quantity save hoyil 

    const postData = {  //post data
      "order_date": moment(event.order_date).format('YYYY-MM-DD'),
      "order_status": event.order_status[0].label,
      "proforma_invoice": event.proforma_invoice[0].label,
      "proforma_invoice_date": event.proforma_invoice_date[0].label,
      "proforma_invoice_value": parseInt(event.proforma_invoice_value[0].label),
      "excepted_commission": parseInt(event.excepted_commission[0].label),
      "po_number": event.po_number[0].label,
      "advance_payment": parseInt(event.advance_payment),
      "advance_balance": parseInt(event.advance_balance),
      "container40": event.container40,
      "container20": parseInt(event.container20),
      "pallets_or_skids": event.pallets_or_skids,
      "others": event.others,
      
      "division": {
        "id": event.division[0].id
      },
       "country": {
        "id": event.Country[0].id
    },
  "region": {
        "id": event.Region[0].id
    },
      "paymentTerm": {
        "id": event.PaymentTerm[0].id
    },
     "deliveryTerm": {
        "id": event.DeliveryTerm[0].id
    },
     "deliveryTime": {
        "id": event.DeliveryTime[0].id
    },
     "saletype":{
        "id":event.Sales[0].id
    },
      
    }
    axios.patch(`http://localhost:3000/order/update/${id}`, postData) //post method
    navigate("/order") //nevigate
  }

   const{id} = useParams()
  const[paramData,setParamData] = useState([])


  
  const getIdData = async () => {
    axios.get(`http://localhost:3000/order/${id}`).then((res) => {
      // console.log(res.data);
      setParamData(res.data)
      
    })
  }
console.log(paramData);


// geting data from api these all function call
  //
  useEffect(() => {
    getDivisionApiData()
    getCountryApiData()
    getRegionApiData()
    orderApiData()
    getSaleTypeApiData()
    getDestinationCountryApiData()
    getPaymentTermApiData()
    getDeliveryTermApiData()
    getDeliveryTimeApiData()
    getCategoryApiData()
    getSubCategoryApiData()
    getIdData()
  }, [])


   
  return (
    <>
      <form onSubmit={handleSubmit(Submit)}>
        <section className="OrderpageContent  container-fluid" >
          <div style={{ display: 'flex' }}>
            <h1>Edit Order</h1>
            <div>
              <button
                type="submit"
                class="btn save "
                style={{ marginLeft: '60vw' }}
              >
                Save
              </button>
            </div>
          </div>

          <div className="section">
            <div className="div1">
              <div>
                <label for="InputOrder" class="form-label">
                  Order #
                </label>
                <br />
                <div>
                  <input
                    type="text"
                    className="form-control"
                    id="InputOrder"
                    // {...register('order')}
                    {...register('order', { required: true })}

                    style={{ width: '10vw' }}
                  />

                  {errors.order?.type === 'required' && (
                    <span style={{ color: 'red' }}>
                      field required{' '}
                    </span>
                  )}
                </div>
              </div>

              <div style={{ marginLeft: '1vw' }}>
                <label class="form-label">Date</label>
                <div>
                  <Controller
                    control={control}
                    rules={{ required: true }}
                    name="order_date"
                    render={({ field: { onChange, value} }) => (
                      <ReactDatePicker
                        onChange={onChange}
                        selected={value}
                        style={{ width: '190px' }}
                        className=" DatePickerSize"
                       
                        
                      />
                    )}
                  />
                  <div>
                    {errors.order_date?.type === 'required' && (
                      <span style={{ color: 'red' }}>
                        field required
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="AllDropDownSize" style={{ marginLeft: '1vw' }}>
                <Controller
                  control={control}
                  name="teammember"
                  rules={{
                    required: 'Field required',
                  }}
                  render={({ field, fieldState }) => (
                    <div>
                      <label htmlFor="typeahead" className="form-label">
                        Team Member
                      </label>
                      <Typeahead
                        {...field}
                        id="teamMember"
                        placeholder="Choose TeamMember..."
                        // clearButton
                        className={fieldState.invalid ? 'is-invalid' : ''}
                        // aria-describedby="typeaheadError"
                        options={options}
                      />
                      <p id="typeaheadError" className="invalid-feedback">
                        {fieldState.error?.message}
                      </p>
                    </div>
                  )}
                />
              </div>

              <div style={{ marginLeft: '1vw' }} className="AllDropDownSize">
                <Controller
                  control={control}
                  name="division"
                  rules={{
                    required: 'Field required',
                  }}
                  render={({ field, fieldState }) => (
                    <div>
                      <label htmlFor="typeahead" className="form-label">
                        Division
                      </label>

                      <Typeahead
                        {...field}
                        id="division"
                        // clearButton
                        className={fieldState.invalid ? 'is-invalid' : ''}
                        placeholder="Choose Division..."
                        // aria-describedby="typeaheadError"
                    
                        options={division}
                      />
                      <p id="typeaheadError" className="invalid-feedback">
                        {fieldState.error?.message}
                      </p>
                    </div>
                  )}
                />
              </div>
            </div>
            <div className="div2">
              <div className="AllDropDownSize">
                <Controller
                  control={control}
                  name="Country"
                  rules={{
                    required: 'Field required',
                  }}
                  render={({ field, fieldState }) => (
                    <div>
                      <label htmlFor="typeahead" className="form-label">
                        Country
                      </label>
                      <Typeahead
                        {...field}
                        id="country"
                        // clearButton
                        className={fieldState.invalid ? 'is-invalid' : ''}
                        placeholder="Choose Country..."
                        // aria-describedby="typeaheadError"
                        options={country}
                      />
                      <p id="typeaheadError" className="invalid-feedback">
                        {fieldState.error?.message}
                      </p>
                    </div>
                  )}
                />
              </div>

             

              <div className="AllDropDownSize" style={{ marginLeft: '1vw' }}>
                <Controller
                  control={control}
                  name="Region"
                  rules={{
                    required: 'Field required',
                  }}
                  render={({ field, fieldState }) => (
                    <div>
                      <label htmlFor="typeahead" className="form-label">
                        Region
                      </label>
                      <Typeahead
                        {...field}
                        id="Region"
                        // clearButton
                        className={fieldState.invalid ? 'is-invalid' : ''}
                        placeholder="Choose Region..."
                        // aria-describedby="typeaheadError"
                        options={region}
                      />
                      <p id="typeaheadError" className="invalid-feedback">
                        {fieldState.error?.message}
                      </p>
                    </div>
                  )}
                />
              </div>

              <div className="AllDropDownSize" style={{ marginLeft: '1vw' }}>
                <Controller
                  control={control}
                  name="order_status"
                  rules={{
                    required: 'Field required',
                  }}
                    //  render={({ field: { onChange, value=paramData.order_status } }) => (
                  render={({ field, fieldState  }) => (
                    <div>
                      <label htmlFor="typeahead" className="form-label">
                        Order Status
                      </label>
                      <Typeahead
                        {...field}
                        
                 
                        id="OrderStatus"
                        // clearButton
                        // className={fieldState.invalid ? 'is-invalid' : ''}
                        placeholder="Choose OrderStatus..."
                        // aria-describedby="typeaheadError"
                        options={orderStatus}
                        
                      />
                      {/* <p id="typeaheadError" className="invalid-feedback">
                        {fieldState.error?.message}
                      </p> */}
                    </div>
                  )}
                />
              </div>
            </div>
          </div>
        </section>

        <section style={{ display: 'flex', marginTop: '1vw' }}>
          <div style={{ display: 'block' }} className="item1  col-7  ">
            <div style={{ display: 'flex' }}>
              <div className="AllDropDownSize">
                <Controller
                  control={control}
                  name="Supplier"
                  rules={{
                    required: 'Field required',
                  }}
                  render={({ field, fieldState }) => (
                    <div>
                      <label htmlFor="typeahead" className="form-label">
                        Supplier
                      </label>
                      <Typeahead
                        {...field}
                        id="Supplier"
                        // clearButton
                        className={fieldState.invalid ? 'is-invalid' : ''}
                        placeholder="Choose Supplier..."
                        // aria-describedby="typeaheadError"
                        options={options}
                      />
                      <p id="typeaheadError" className="invalid-feedback">
                        {fieldState.error?.message}
                      </p>
                    </div>
                  )}
                />
              </div>

              <div className="AllDropDownSize" style={{ marginLeft: '1vw' }}>
                <Controller
                  control={control}
                  name="proforma_invoice"
                  rules={{
                    required: 'Field required',
                  }}
                  render={({ field, fieldState }) => (
                    <div>
                      <label htmlFor="typeahead" className="form-label">
                        Proforma Invoice
                      </label>
                      <Typeahead
                        {...field}
                        id="proformaInvoice"
                        // clearButton
                        className={fieldState.invalid ? 'is-invalid' : ''}
                        placeholder="Choose Proforma Invoice..."
                        // aria-describedby="typeaheadError"

                        options={proformaInvoice}
                      />
                      <p id="typeaheadError" className="invalid-feedback">
                        {fieldState.error?.message}
                      </p>
                    </div>
                  )}
                />
              </div>
            </div>

            <div style={{ display: 'flex', marginTop: '1vw' }}>
              <div className="AllDropDownSize">
                <Controller
                  control={control}
                  name="proforma_invoice_date"
                  rules={{
                    required: 'Field required',
                  }}
                  render={({ field, fieldState }) => (
                    <div>
                      <label htmlFor="typeahead" className="form-label">
                        Proforma Invoice Date
                      </label>
                      <Typeahead
                        {...field}
                        id="ProformaInvoiceDate"
                        // clearButton
                        className={fieldState.invalid ? 'is-invalid' : ''}
                        placeholder="Choose ProformaInvoiceDate..."
                        // aria-describedby="typeaheadError"
                        options={proformaInvoiceDate}
                      />
                      <p id="typeaheadError" className="invalid-feedback">
                        {fieldState.error?.message}
                      </p>
                    </div>
                  )}
                />
              </div>

              <div className="AllDropDownSize" style={{ marginLeft: '1vw' }}>
                <Controller
                  control={control}
                  name="proforma_invoice_value"
                  rules={{
                    required: 'Field required',
                  }}
                  render={({ field, fieldState }) => (
                    <div>
                      <label htmlFor="typeahead" className="form-label">
                        Proforma Invoice Value
                      </label>
                      <Typeahead
                        {...field}
                        id="proformaInvoiceValue"
                        // clearButton
                        className={fieldState.invalid ? 'is-invalid' : ''}
                        placeholder="Choose Proforma InvoiceValue..."
                        // aria-describedby="typeaheadError"

                        options={proformaInvoiceValue}
                      />
                      <p id="typeaheadError" className="invalid-feedback">
                        {fieldState.error?.message}
                      </p>
                    </div>
                  )}
                />
              </div>

              <div className="AllDropDownSize" style={{ marginLeft: '1vw' }}>
                <Controller
                  control={control}
                  name="excepted_commission"
                  rules={{
                    required: 'Field required',
                  }}
                  render={({ field, fieldState }) => (
                    <div>
                      <label htmlFor="typeahead" className="form-label">
                        Expected Comssion
                      </label>
                      <Typeahead
                        {...field}
                        id="ExpectedComssion"
                        // clearButton
                        className={fieldState.invalid ? 'is-invalid' : ''}
                        placeholder="Choose Proforma InvoiceValue..."
                        // aria-describedby="typeaheadError"
                        options={expectedCommission}
                      />
                      <p id="typeaheadError" className="invalid-feedback">
                        {fieldState.error?.message}
                      </p>
                    </div>
                  )}
                />
              </div>
            </div>
          </div>

          <div
            style={{ display: 'block', marginLeft: '1vw' }}
            className="item2 container-fluid   "
          >
            <div style={{ display: 'flex' }}>
              <div className="AllDropDownSize">
                <Controller
                  control={control}
                  name="Customer"
                  rules={{
                    required: 'Field required',
                  }}
                  render={({ field, fieldState }) => (
                    <div>
                      <label htmlFor="typeahead" className="form-label">
                        Customer
                      </label>
                      <Typeahead
                        {...field}
                        id="Customer"
                        // clearButton
                        className={fieldState.invalid ? 'is-invalid' : ''}
                        placeholder="Choose Customer..."
                        // aria-describedby="typeaheadError"
                        options={options}
                      />
                      <p id="typeaheadError" className="invalid-feedback">
                        {fieldState.error?.message}
                      </p>
                    </div>
                  )}
                />
              </div>
              <div className="AllDropDownSize" style={{ marginLeft: '1vw' }}>
                <Controller
                  control={control}
                  name="po_number"
                  rules={{
                    required: 'Field required',
                  }}
                  render={({ field, fieldState }) => (
                    <div>
                      <label htmlFor="typeahead" className="form-label">
                        PO #
                      </label>
                      <Typeahead
                        {...field}
                        // labelKey={}
                        id="po"
                        // clearButton
                        className={fieldState.invalid ? 'is-invalid' : ''}
                        placeholder="Choose Proforma Po..."
                        // aria-describedby="typeaheadError"
                        options={poNumber}
                      />
                      <p id="typeaheadError" className="invalid-feedback">
                        {fieldState.error?.message}
                      </p>
                    </div>
                  )}
                />
              </div>
            </div>

            <div style={{ display: 'flex', marginTop: '1vw' }}>
              <div className="AllDropDownSize">
                <Controller
                  control={control}
                  name="Sales"
                  rules={{
                    required: 'Field required',
                  }}
                  render={({ field, fieldState }) => (
                    <div>
                      <label htmlFor="typeahead" className="form-label">
                        Sales Type
                      </label>
                      <Typeahead
                        {...field}
                        id="Sales"
                        // clearButton
                        className={fieldState.invalid ? 'is-invalid' : ''}
                        placeholder="Choose Sales TYPE..."
                        // aria-describedby="typeaheadError"
                        options={saleType}
                      />
                      <p id="typeaheadError" className="invalid-feedback">
                        {fieldState.error?.message}
                      </p>
                    </div>
                  )}
                />
              </div>

              <div className="AllDropDownSize" style={{ marginLeft: '1vw' }}>
                <Controller
                  control={control}
                  name="DestinationCountry"
                  rules={{
                    required: 'Field required',
                  }}
                  render={({ field, fieldState }) => (
                    <div>
                      <label htmlFor="typeahead" className="form-label">
                        Destination Country
                      </label>
                      <Typeahead
                        {...field}
                        id="DestinationCountry"
                        // clearButton
                        className={fieldState.invalid ? 'is-invalid' : ''}
                        placeholder="Choose Destination Country..."
                        // aria-describedby="typeaheadError"
                        options={destinationCountry}
                      />
                      <p id="typeaheadError" className="invalid-feedback">
                        {fieldState.error?.message}
                      </p>
                    </div>
                  )}
                />
              </div>
            </div>
          </div>
        </section>

        <section style={{ display: 'flex', marginTop: '1vw' }}>
          <div className="item3 col-7">
            <h3>Terms</h3>
            <div style={{ display: 'flex', marginTop: '1vw' }}>
              <div className="AllDropDownSize">
                <Controller
                  control={control}
                  name="PaymentTerm"
                  rules={{
                    required: 'Field required',
                  }}
                  render={({ field, fieldState }) => (
                    <div>
                      <label htmlFor="typeahead" className="form-label">
                        Payment Term
                      </label>
                      <Typeahead
                        {...field}
                        id="PaymentTerm"
                        // clearButton
                        className={fieldState.invalid ? 'is-invalid' : ''}
                        placeholder="Choose Customer..."
                        // aria-describedby="typeaheadError"
                        options={paymentTerm}
                      />
                      <p id="typeaheadError" className="invalid-feedback">
                        {fieldState.error?.message}
                      </p>
                    </div>
                  )}
                />
              </div>

              <div className="AllDropDownSize" style={{ marginLeft: '1vw' }}>
                <Controller
                  control={control}
                  name="DeliveryTerm"
                  rules={{
                    required: 'Field required',
                  }}
                  render={({ field, fieldState }) => (
                    <div>
                      <label htmlFor="typeahead" className="form-label">
                        Delivery Term
                      </label>
                      <Typeahead
                        {...field}
                        id="PDeliveryTerm"
                        // clearButton
                        className={fieldState.invalid ? 'is-invalid' : ''}
                        placeholder="Choose Delivery Term..."
                        // aria-describedby="typeaheadError"
                        options={deliveryTerm}
                      />
                      <p id="typeaheadError" className="invalid-feedback">
                        {fieldState.error?.message}
                      </p>
                    </div>
                  )}
                />
              </div>

              <div className="AllDropDownSize" style={{ marginLeft: '1vw' }}>
                <Controller
                  control={control}
                  name="DeliveryTime"
                  rules={{
                    required: 'Field required',
                  }}
                  render={({ field, fieldState }) => (
                    <div>
                      <label htmlFor="typeahead" className="form-label">
                        Delivery Time
                      </label>
                      <Typeahead
                        {...field}
                        id="PDeliveryTime"
                        // clearButton
                        className={fieldState.invalid ? 'is-invalid' : ''}
                        placeholder="Choose Delivery Term..."
                        // aria-describedby="typeaheadError"
                        options={deliveryTime}
                      />
                      <p id="typeaheadError" className="invalid-feedback">
                        {fieldState.error?.message}
                      </p>
                    </div>
                  )}
                />
              </div>
            </div>
          </div>
          <div className="item4 container-fluid " style={{ marginLeft: '1vw' }}>
            <h3>Payments</h3>
            <div style={{ display: 'flex', marginTop: '1vw' }}>
             
               <div >
                <label for="InputOrder" class="form-label">
                  Advance Payment
                </label>
                <br />
                <div>
                  <Controller
                    control={control}
                    rules={{ required: true }}
                    name="advance_payment"
                    render={({ field: { onChange, value=paramData.advance_payment } }) => (
                           <input
                    type="text"
                    className=" form-control"
                    id="advancePayment AllDropDownSize "
                     onChange={onChange}
                     value={value}
                 
                  />
                    )}
                  
              
                  
                  
                  
                  />
                    
                    {errors.advance_balance?.type === 'required' && (
                      <span style={{ color: 'red' }}>
                        field required
                      </span>
                    )}

                
                </div>

              </div>

              <div style={{ marginLeft: '1vw' }}>
                <label for="InputOrder" class="form-label">
                  Advance Balance
                </label>
                <br />
                <div>
                  <Controller
                    control={control}
                    rules={{ required: true }}
                    name="advance_balance"
                    render={({ field: { onChange, value=paramData.advance_balance } }) => (
                           <input
                    type="text"
                    className=" form-control"
                    id="advanceBalance AllDropDownSize "
                     onChange={onChange}
                     value={value}
                 
                  />
                    )}
                  
              
                  
                  
                  
                  />
                    
                    {errors.advance_balance?.type === 'required' && (
                      <span style={{ color: 'red' }}>
                        field required
                      </span>
                    )}

                
                </div>

              </div>
            </div>
          </div>
        </section>

        <section style={{ marginTop: '1vw' }} className="item5">
          <h3>Shipments</h3>
          <div style={{ display: 'flex', marginTop: '1vw' }}>
            <div style={{ display: 'flex' }}>
              <label for="InputOrder" class="form-label">
                40container
              </label>
              <div>
                <input
                  style={{ width: '10vw', marginLeft: '1vw' }}
                  type="text"
                  className=" form-control"
                  id="40container AllDropDownSize "
                  // {...register('container40')}
                  {...register('container40', { required: true })}
                />

                {errors.container40?.type === 'required' && (
                  <span style={{ color: 'red' }}>Field required </span>
                )}
              </div>
            </div>

            <div style={{ marginLeft: '1vw' }}>
              <div style={{ display: 'flex' }}>
                <label for="20container" class="form-label">
                  20container
                </label>
                <div>
                  <input
                    style={{ width: '10vw', marginLeft: '1vw' }}
                    type="text"
                    className=" form-control"
                    id="20container AllDropDownSize "
                    // {...register('container20')}
                    {...register('container20', { required: true })}
                  />

                  {errors.container20?.type === 'required' && (
                    <span style={{ color: 'red' }}>
                      Field required
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div style={{ marginLeft: '1vw' }}>
              <div style={{ display: 'flex' }}>
                <label for="Pallet" class="form-label">
                  Pallets/Skidds
                </label>
                <div>
                  <input
                    style={{ width: '10vw', marginLeft: '1vw' }}
                    type="text"
                    className=" form-control"
                    id="pallets AllDropDownSize "
                    // {...register('pallets_or_skids')}
                    {...register('pallets_or_skids', { required: true })}
                  />

                  {errors.pallets_or_skids?.type === 'required' && (
                    <span style={{ color: 'red' }}>
                      field required
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div style={{ marginLeft: '1vw' }}>
              <div style={{ display: 'flex' }}>
                <label for="Others" class="form-label">
                  Others
                </label>
                <div>
                  <input
                    style={{ width: '10vw', marginLeft: '1vw' }}
                    type="text"
                    className=" form-control"
                    id="Others AllDropDownSize "
                    // {...register('others')}
                    {...register('others', { required: true })}
                  />

                  {errors.others?.type === 'required' && (
                    <span style={{ color: 'red' }}>
                      Field required
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dynamic Data multiple input field add********** */}
        <section style={{ marginTop: '1vw' }} className="item6">
          <h3>Product(s)/Service</h3>

          {formValues.map((element, index) => (
            <div style={{ display: 'flex' }} key={index}>
              <div className="AllDropDownSize">
                <Controller
                  control={control}
                  name={`Category${index}`}
                  // name = "categeory"
                  rules={{
                    required: 'Field required',
                  }}
                  render={({ field, fieldState }) => (
                    <div>
                      <label htmlFor="typeahead" className="form-label">
                        Category
                      </label>
                      <Typeahead
                        {...field}
                        id="Category"
                        // clearButton
                        className={fieldState.invalid ? 'is-invalid' : ''}
                        placeholder="Choose Category..."
                        // aria-describedby="typeaheadError"
                        options={categeory}
                      />
                      <p id="typeaheadError" className="invalid-feedback">
                        {fieldState.error?.message}
                      </p>
                    </div>
                  )}
                />
              </div>
              <div className="AllDropDownSize" style={{ marginLeft: '1vw' }}>
                <Controller
                  control={control}
                  // name="SubCategory"
                  name={`SubCategory${index}`}
                  rules={{
                    required: 'Field required',
                  }}
                  render={({ field, fieldState }) => (
                    <div>
                      <label htmlFor="typeahead" className="form-label">
                        Sub-Category
                      </label>
                      <Typeahead
                        {...field}
                        id="SubCategory"
                        // clearButton
                        className={fieldState.invalid ? 'is-invalid' : ''}
                        placeholder="Choose Category..."
                        // aria-describedby="typeaheadError"
                        options={subCategeory}
                      />
                      <p id="typeaheadError" className="invalid-feedback">
                        {fieldState.error?.message}
                      </p>
                    </div>
                  )}
                />
              </div>

              <div style={{ marginLeft: '1vw' }} className="allDropDownsize">
                <label for="description" class="form-label">
                  description
                </label>
                <br />
                <div>
                  <input
                    type="text"
                    name="description"
                    className="form-control"
                    value={element.description || ''}
                    onChange={(e) => handleChange(index, e)}
                  />
              
                </div>
              </div>

              <div className="UnitDrpdown" style={{ marginLeft: '1vw' }}>
                <Controller
                  control={control}
                  // name="unit"
                  name={`unit${index}`}
                  rules={{
                    required: 'Field required',
                  }}
                  render={({ field, fieldState }) => (
                    <div>
                      <label htmlFor="typeahead" className="form-label">
                        Unit
                      </label>
                      <Typeahead
                        {...field}
                        id="unit"
                        // clearButton
                        className={fieldState.invalid ? 'is-invalid' : ''}
                        placeholder="Choose Unit..."
                        // aria-describedby="typeaheadError"
                        options={options}
                      />
                      <p id="typeaheadError" className="invalid-feedback">
                        {fieldState.error?.message}
                      </p>
                    </div>
                  )}
                />
              </div>

              <div style={{ marginLeft: '1vw' }} className="allDropDownsize">
                <label for="quantity" class="form-label">
                  Quantity
                </label>
                <br />
                <div>
                  <input
                    type="text"
                    name="quantity"
                    className="form-control"
                    value={element.quantity || ''}
                    onChange={(e) => handleChange(index, e)}
                  />

            
                </div>
              </div>

              <div
                style={{
                  marginTop: '2vw',
                  fontSize: '1.5vw',
                  marginLeft: '1vw',
                  cursor: 'pointer',
                  color: 'red',
                }}
              >
                <span
                  class="bi bi-trash"
                  onClick={() => removeFormFields(element, index)}
                ></span>
              </div>
            </div>
          ))}
          <button
            type="button"
            class="btn btn-primary mt-4"
            onClick={() => addFormFields()}
          >
            + Item
          </button>
        </section>
      </form>
    </>
  )
}

export default EditOrder
