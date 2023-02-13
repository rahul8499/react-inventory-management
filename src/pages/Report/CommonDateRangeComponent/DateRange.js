// import { DateRangePicker } from 'react-bootstrap-daterangepicker'
// import 'bootstrap-daterangepicker/daterangepicker.css'
import DateRangePicker from 'react-bootstrap-daterangepicker'
import 'bootstrap-daterangepicker/daterangepicker.css'

const DateRange = () => {
  const handleEvent = (event, picker) => {
    console.log('event')
    console.log(picker)
  }
  const handleCallback = (start, end, label) => {
    console.log(start)
  }
  return (
    <div>
      <div>
        <h5 style={{ fontSize: '1vw' }}>Date</h5>

        <DateRangePicker onEvent={handleEvent} onCallback={handleCallback}>
          <input type="text" style={{ width: '12vw' }} />
        </DateRangePicker>
        {/* <DateRangePicker>
          <input type="text" style={{ width: '12vw' }} />
        </DateRangePicker> */}
      </div>
    </div>
  )
}

export default DateRange
