import React from 'react'
import { Link} from 'react-router-dom'
import './Report.css'
// import { Link, Outlet } from 'react-router-dom'


const MainReport = () => {
  return (
    <>
      <div className="reportPageBody  ">
        <div className="pageContent container">
          <section className="pageheader " >
            <h1>Reports</h1>
          </section>

          <section className="section1" >
            <div className="col-3  item1" style={{cursor:"pointer"}} >
              <h3 className='Categeroy'>Comission</h3>
              <Link to="CommisionAgingReport" className="linkItems "  >
                Comission Aging Report
              </Link>
              {/* <Outlet /> */}

              <Link to="ComissionReport" className=" linkItems"> 
                Commission Report
              </Link>
            </div>
            <div className="col-3 item2">
              <h3  className='Categeroy' >Customer</h3>
              <Link to="ArAgingReport" style={{ display: 'block' }} className=" linkItems">
                AR Aging Report
              </Link>
              <Link to="CustomerReport" style={{ display: 'block' }} className=" linkItems">
                Customer Report
              </Link>
            </div>
            <div className="item3 col-3">
              <h3  className='Categeroy'>Shipment</h3>
              <Link to="ShippingReport" className=" linkItems">
                Shipping Report
              </Link>
            </div>
          </section>

          <section className="col-3 salesbox ">
            <div >
              <h3  className='Categeroy'>Sales</h3>
              <Link to="TotalSalesBreakDown" className="linkItems">
                Total Sales BreakDown
              </Link>
              <Link to="ProductSalesReport" className=" linkItems">
                Product Sales Report
              </Link>
              <Link to="SalesAnalysisReport" className=" linkItems">
                Sales Analysis Report
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default MainReport
