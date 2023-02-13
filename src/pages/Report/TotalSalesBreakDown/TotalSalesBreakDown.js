import React from 'react'
import DateRange from '../CommonDateRangeComponent/DateRange'

const TotalSalesBreakDown = () => {
  return (
    <>
      <section
        className=" col-12  "
        style={{
          height: '22vh',
          backgroundColor: 'white',
          borderRadius: '10px',
        }}
      >
        <div className="container">
          <div className="pagename">
            <h1 style={{ fontSize: '2vw' }}>Total Sales Breakdown</h1>
          </div>
          <div style={{ display: 'flex' }}>
            {/* col-2 col-sm-2 col-md-2 " */}
            <div className=" DateRange col-7  col-sm-8 col-md-9 col-lg-11 ">
              <DateRange />
            </div>
            <div style={{ marginTop: '27px' }}>
              <button className="pdfDownloadIcon icon fw-bold link-light">
                <i className="bi bi-box-arrow-in-down "></i> PDF
              </button>
            </div>
          </div>
        </div>
      </section>

      <section style={{ display: 'flex' }}>
        <section
          className=" col-3  "
          style={{
            height: '40vh',
            // height:'92%',
            backgroundColor: 'white',
            borderRadius: '10px',
            marginTop: '2vh',
          }}
        >
          <div className="container">
            <h5>Distribution</h5>
          </div>
        </section>
        <section
          className=" col-3  "
          style={{
            height: '40vh',
            backgroundColor: 'white',
            borderRadius: '10px',
            marginTop: '2vh',
            marginLeft: '0.3vw',
          }}
        >
             <div className="container">
            <h5>Manifacturing</h5>
          </div>
        </section>

        <section
          className=" col-3  "
          style={{
            height: '60vh',
            backgroundColor: 'white',
            borderRadius: '10px',
            marginTop: '2vh',
            marginLeft: '0.3vw',
          }}
        >
             <div className="container">
            <h5>Project</h5>
          </div>
        </section>

        <section
          className=" col-3  "
          style={{
            height: '10vh',
            backgroundColor: 'green',
            borderRadius: '10px',
            marginTop: '2vh',
            marginLeft: '0.2vw',
          }}
        >
             <div className="container">
            <h5>TOTAL REVENUE</h5>
          </div>
        </section>
      </section>
    </>
  )
}

export default TotalSalesBreakDown
