import React from 'react'
import { useState } from 'react'
import Pagination from 'react-custom-pagination'
import DateRange from '../CommonDateRangeComponent/DateRange'
import data from '../ReportData'
import '../Common.css'
const CustomerReport = () => {
  const [val, setval] = useState('')

  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(9)

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost)

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
            <h1 style={{ fontSize: '2vw' }}>Customer Report</h1>
          </div>
          <div style={{ display: 'flex' }}>
            <div className=" DateRange  col-2 col-sm-2 col-md-2 ">
              <DateRange />
            </div>

            <div className="searchDropdown col-3  col-sm-6 col-md-8 col-lg-9  ">
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

            <div style={{ marginTop: '27px' }}>
              <button className="pdfDownloadIcon icon fw-bold link-light">
                <i className="bi bi-box-arrow-in-down "></i> PDF
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* <tr>
              <th> Date</th>
              <th>Details</th>
              <th>Invoice #</th>
              <th>Payment</th>
              <th>Balance</th>
           
            </tr> */}

      {/* <tr key={item.id} value={val}>
                  <td>{item.date}</td>
                  <td>{item.Details}</td>
                  <td>{item.invoice}</td>
                  <td>{item.payment}</td>
                  <td>{item.balance}</td>
                
                </tr> */}

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
              <th> Date</th>
              <th>Details</th>
              <th>Invoice #</th>
              <th>Payment</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            {/* {data
              .filter((datas) => datas.name.includes(val)) */}
            {currentPosts.map((item) => {
              return (
                <tr key={item.id} value={val}>
                  <td>{item.date}</td>
                  <td>{item.Details}</td>
                  <td>{item.invoice}</td>
                  <td>{item.payment}</td>
                  <td>{item.balance}</td>
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

export default CustomerReport
