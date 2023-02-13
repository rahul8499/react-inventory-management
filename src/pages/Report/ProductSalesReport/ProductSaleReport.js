import React from 'react'
import { useState } from 'react'
import DateRange from '../CommonDateRangeComponent/DateRange'
import data from '../ReportData'
import Pagination from 'react-custom-pagination'

const ProductSaleReport = () => {
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
        style={{
          height: '32vh',
          backgroundColor: 'white',
          borderRadius: '10px',
        }}
      >
        <div className="container">
          <div className="pagename">
            <h1 style={{ fontSize: '2vw' }}>ProductSalesReport Report</h1>
          </div>
          <div style={{ display: 'flex' }}>
            <div className=" DateRange  col-2 col-sm-2 col-md-2 ">
              <DateRange />
            </div>
            {/* col-3  col-sm-6 col-md-8 col-lg-9  " */}
            <div className="searchDropdown ">
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

            {/* col-3  col-sm-6 col-md-8 col-lg-9  */}
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
          </div>
          <div style={{ display: 'flex' }}>
            <div className=" categorySection  col-2 col-sm-2 col-md-2 ">
              <h5>Categeory</h5>
              <input
                list="data"
                onChange={(e) => setval(e.target.value)}
                style={{ width: '12vw' }}
              />
              <datalist id="data">
                {data.map((items) => (
                  <div key={items.id}>
                    <option>{items.name} </option>
                  </div>
                ))}
              </datalist>
            </div>
            {/* col-3  col-sm-6 col-md-8 col-lg-9  */}
            <div className="searchDropdown  ">
              <h5>Sub-Categeory</h5>
              <input
                list="data"
                onChange={(e) => setval(e.target.value)}
                style={{ width: '12vw' }}
              />

              <datalist id="data">
                {data.map((items) => (
                  <div key={items.id}>
                    <option>{items.name} </option>
                  </div>
                ))}
              </datalist>
            </div>

            {/* col-3  col-sm-6 col-md-8 col-lg-9  */}
            <div className="searchDropdown col-2  col-sm-5 col-md-6 col-lg-7 ">
              <h5>KeyWord</h5>
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
              <th> Order #</th>
              <th>Categerory</th>
              <th>Sub-Categerory</th>
              <th>Unit</th>
              <th>Quantity</th>
              <th>Customer</th>
              <th>Supplier</th>
            </tr> */}

      {/* <tr key={item.id} value={val}>
                  <td>{item.date}</td>
                  <td>{item.Details}</td>
                  <td>{item.invoice}</td>
                  <td>{item.payment}</td>
                  <td>{item.balance}</td>
                  <td>{item.name}</td>
                  <td>{item.name}</td>
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
              <th> Order #</th>
              <th>Categerory</th>
              <th>Sub-Categerory</th>
              <th>Unit</th>
              <th>Quantity</th>
              <th>Customer</th>
              <th>Supplier</th>
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
                  <td>{item.name}</td>
                  <td>{item.name}</td>
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

export default ProductSaleReport
