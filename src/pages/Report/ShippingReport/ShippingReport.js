// import React, { useEffect } from 'react'
import { useState } from 'react'
import Pagination from 'react-custom-pagination'
import DateRange from '../CommonDateRangeComponent/DateRange'
import data from '../ReportData'
import '../Common.css'

const ShippingReport = () => {
  const [val, setval] = useState('')

  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(9)

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage

  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost)
  // const currentPosts = data.filter((datas) => datas.name.includes(val)).slice(indexOfFirstPost, indexOfLastPost)

  const paginate = (number) => {
    setCurrentPage(number)
  }

  return (
    <>
      <section
        className=" col-12  "
        style={{
          height: '20vh',
          backgroundColor: 'white',
          borderRadius: '10px',
        }}
      >
        <div className="container">
          <div className="pagename">
            <h1 style={{ fontSize: '2vw' }}>Shipping Report</h1>
          </div>
          <div style={{ display: 'flex' }}>
            <div className=" DateRange  col-2 col-sm-2 col-md-2 ">
              <DateRange />
            </div>
            {/* col-3  col-sm-6 col-md-8 col-lg-9  */}
            <div className="searchDropdown  ">
              <h5>Customer</h5>
              <input
                list="data"
                onChange={(e) => setval(e.target.value)}
                style={{ width: '15vw' }}
              />

              <datalist id="data">
                {data.map((items) => (
                  <div key={items.id}>
                    <option>{items.name} </option>
                  </div>
                ))}
              </datalist>
            </div>

            <div className="searchDropdown  ">
              <h5>Supplier</h5>
              <input
                list="data"
                onChange={(e) => setval(e.target.value)}
                style={{ width: '15vw' }}
              />

              <datalist id="data">
                {data.map((items) => (
                  <div key={items.id}>
                    <option>{items.name} </option>
                  </div>
                ))}
              </datalist>
            </div>

            <div className="searchDropdown col-2  col-sm-3 col-md-3 col-lg-3 ">
              <h5>Shipping Line</h5>
              <input
                list="data"
                onChange={(e) => setval(e.target.value)}
                style={{ width: '15vw' }}
              />

              <datalist id="data">
                {data.map((items) => (
                  <div key={items.id}>
                    <option>{items.name} </option>
                  </div>
                ))}
              </datalist>
            </div>

            <div style={{ marginTop: '28px' }}>
              <button className="pdfDownloadIcon icon fw-bold link-light">
                <i className="bi bi-box-arrow-in-down "></i> PDF
              </button>
            </div>
          </div>
        </div>
      </section>

      <section
        className=" col-12  "
        style={{
          height: '60vh',
          // height:'92%',
          backgroundColor: 'white',
          borderRadius: '10px',
          marginTop: '2vh',
        }}
      >
        <table
          className="table table-hover"
          style={{ fontSize: '1vw', height: '60vh' }}
        >
          <thead>
            <tr>
              <th> Name</th>
              <th>Customer</th>
              <th>Supplier</th>
              <th>Shipping line</th>
              <th>20'</th>
              <th>40'</th>
              <th>LCL</th>
              <th>Other</th>
            </tr>
          </thead>
          <tbody>
            {/* {data
              .filter((datas) => datas.name.includes(val)) */}
            {/* { data.filter((datas) => datas.name.includes(val)).slice(indexOfFirstPost, indexOfLastPost).map((item) => { */}

            {currentPosts.map((item) => {
              return (
                <tr key={item.id} value={val}>
                  <td>{item.name}</td>
                  <td>{item.not_yet_Overdue}</td>

                  <td>{item.range_30_lessthan}</td>
                  <td>{item.range_31_to_60}</td>
                  <td>{item.range_61_to_91}</td>
                  <td>{item.range_91_to_more}</td>
                  <td>{item.totalUnpaid}</td>
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
              totalPosts={data.length}
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

export default ShippingReport
