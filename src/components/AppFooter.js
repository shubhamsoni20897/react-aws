import React from 'react'
import { CFooter } from '@coreui/react'
import moment from 'moment'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href="http://www.scs.dauniv.ac.in/" target="_blank" rel="noopener noreferrer">
          DAVV SCSIT
        </a>
        <span className="ms-1">{moment().format('Do MMM YYYY')}</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Created by</span>
        {/* <a href="https://coreui.io/react" target="_blank" rel="noopener noreferrer"> */}
          Shubham Soni
        {/* </a> */}
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
