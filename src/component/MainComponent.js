import React from 'react'
import Navbar from './Navbar/Navbar'
import Sidebar from './Sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard/Dashboard'
import MainComplaints from '../pages/Complaints/MainComplaint'

import Partners from '../pages/partners/MainPartners'
import Report from '../pages/Report/Report'
import Team from '../pages/Team/MainTeam'
import Setting from '../pages/Setting/MainSetting'
import Logout from '../pages/Logout/Logout'
import NotFound from '../pages/NotFound'
import CommisionAgingReport from '../pages/Report/CommissionAgingReport/CommisionAgingReport'
import ComissionReport from '../pages/Report/ComissionReport/ComissionReport'
import ArAgingReport from '../pages/Report/ARAgingReport/ArAgingReport'
import SalesAnalysisReport from '../pages/Report/SalesAnalysisReport/SalesAnalysisReport'
import CustomerReport from '../pages/Report/CustomerReport/CustomerReport'
import ProductSaleReport from '../pages/Report/ProductSalesReport/ProductSaleReport'
import TotalSalesBreakDown from '../pages/Report/TotalSalesBreakDown/TotalSalesBreakDown'
import ShippingReport from '../pages/Report/ShippingReport/ShippingReport'
import ListOrder from '../pages/Orders/ListOrder'
import MainOrder from '../pages/Orders/MainOrder'
import EditOrder from '../pages/Orders/EditOrder'
import Views from '../pages/Orders/Views'

function MainComponent() {
  return (
    <>
      <div className="col-12 sticky-top" style={{ backgroundColor: 'white' }}>
        <Navbar />
      </div>

      <div
        className="col-12  "
        style={{
          display: 'flex',
        }}
      >
        <div
          className="sticky-left"
          style={{
            backgroundColor: 'white',
            // height: '100vh',
          }}
        >
          <Sidebar />
        </div>
        <div
          style={{
            marginLeft: ' 1vw',
            marginRight: '1vw',
            marginTop: '9px',
            paddingLeft: '6px',
            width: '100%',
          }}
        >
          <Routes>
            <Route path="/" element={<Dashboard />}></Route>

            {/* order********* */}
            {/* <Route path="/order" element={<Order />}></Route> */}
            <Route path="/order" element={<ListOrder />}></Route>
            <Route path="/order/edit/:id" element={<EditOrder />}></Route>
            <Route path="/order/views/:id" element={<Views/>}></Route>
            <Route path="/order/MainOrder/" element={<MainOrder />} />

            {/* ****** */}

            <Route path="/partners" element={<Partners />}></Route>
            <Route path="/report" element={<Report />}>
              {' '}
            </Route>
            <Route
              path="/report/CommisionAgingReport/"
              element={<CommisionAgingReport />}
            />
            <Route
              path="/report/ComissionReport/"
              element={<ComissionReport />}
            />
            <Route path="/report/ArAgingReport/" element={<ArAgingReport />} />
            <Route
              path="/report/SalesAnalysisReport/"
              element={<SalesAnalysisReport />}
            />
            <Route
              path="/report/CustomerReport/"
              element={<CustomerReport />}
            />
            <Route
              path="/report/ProductSalesReport/"
              element={<ProductSaleReport />}
            />
            <Route
              path="/report/TotalSalesBreakDown/"
              element={<TotalSalesBreakDown />}
            />
            <Route
              path="/report/ShippingReport/"
              element={<ShippingReport />}
            />

            <Route path="/Team" element={<Team />}></Route>
            <Route path="/complaint" element={<MainComplaints />}></Route>

            <Route path="/setting" element={<Setting />}></Route>
            <Route path="/logout" element={<Logout />}></Route>
            <Route path="/:name" element={<NotFound />}></Route>

            {/* Reports Route  */}
            {/* <Route
                path="/CommisionAgingReport"
                element={<CommisionAgingReport />}
              /> */}
          </Routes>
        </div>
      </div>
    </>
  )
}

export default MainComponent
