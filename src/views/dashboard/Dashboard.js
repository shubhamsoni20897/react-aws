import React, { lazy, useEffect } from 'react'

import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { CChartLine, CChartPie } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
} from '@coreui/icons'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'
import axios from 'axios'
import { Chart } from 'src/pages/charts/chart'
import Loader from 'react-loader-spinner'

const DashboardComp = lazy(() => import('../../pages/dashboard/index'))
const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))
const WidgetsBrand = lazy(() => import('../widgets/WidgetsBrand.js'))

const Dashboard = () => {
  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  const [diseaseList, setDiseases] = React.useState([])
  const [stateWiseGraph, setStateWiseData] = React.useState([])
  const [graphLabel, setGraphLabel] = React.useState([])
  const [graphData, setGraphData] = React.useState([])
  const [pieGraphLabel, setPieGraphLabel] = React.useState([])
  const [pieGraphData, setPieGraphData] = React.useState([])
  const [response, setResponse] = React.useState()
  const [categoryName, setCategoryName] = React.useState('')
  const [loader, setLoader] = React.useState(false)

  React.useEffect(async () => {
    await getDiseases();
    await getStateWiseData({_id:'61bafa7258f70f5bac158158',diseaseName:'Heart Attack'});
  }, [])
React.useEffect(()=>{},[categoryName])
  const handleClick = (data) => {
    getStateWiseData(data)
    console.log('data', data)
    // setCategoryName(data.diseaseName)
  }

  const getDiseases = () => {
    axios.get('http://localhost:4000/getDisease').then((res) => {
      console.log(res.data)
      
      setDiseases(res.data)
    }).catch((err) => {
      console.log('err', err.response)
    })
  }

  const getStateWiseData = (data) => {
    setCategoryName(data.diseaseName)
setLoader(true)
    axios.get(`http://localhost:4000/getStateWiseData/${data._id}`).then((res) => {
      console.log(res.data.data)
      setResponse(res.data.data)
      const label = []
      const data = []
      setLoader(false)

      res.data.data.stateGraph?.map((value) => {
        label.push(value._id)
        data.push(value.count)

      })
      const labelPie = []
      const dataPie = []
      res.data.data.ageGraph?.map((value) => {
        labelPie.push(value._id)
        dataPie.push(value.count)

      })
      setGraphLabel(label)
      setGraphData(data)
      setPieGraphLabel(labelPie)
      setPieGraphData(dataPie)
      setStateWiseData(res.data)
    }).catch((err) => {
      setLoader(false)

      console.log('err', err)
    })
  }
  const calcPercentage = (partialValue, totalValue) => {
    return parseFloat((partialValue / totalValue) * 100).toFixed(2)
  }
  const progressExample = [
    { title: 'Recovery Rate', value: response?.recoveredCases, percent: calcPercentage(response?.recoveredCases, response?.totalCases), color: 'success' },
    { title: 'Death Rate', value: response?.deathCases, percent: calcPercentage(response?.deathCases, response?.totalCases), color: 'info' },
    { title: 'Active Cases', value: response?.activeCases, percent: calcPercentage(response?.activeCases, response?.totalCases), color: 'warning' },
    // { title: 'New Users', value: '22.123 Users', percent: 80, color: 'danger' },
    // { title: 'Bounce Rate', value: 'Average Rate', percent: 40.15, color: 'primary' },
  ]

  const progressGroupExample1 = [
    { title: 'Monday', value1: 34, value2: 78 },
    { title: 'Tuesday', value1: 56, value2: 94 },
    { title: 'Wednesday', value1: 12, value2: 67 },
    { title: 'Thursday', value1: 43, value2: 91 },
    { title: 'Friday', value1: 22, value2: 73 },
    { title: 'Saturday', value1: 53, value2: 82 },
    { title: 'Sunday', value1: 9, value2: 69 },
  ]

  const progressGroupExample2 = [
    { title: 'Male', icon: cilUser, percent: response?.malePercentage },
    { title: 'Female', icon: cilUserFemale, percent: response?.femalePercentage },
  ]

  const progressGroupExample3 = [
    { title: 'Organic Search', icon: cibGoogle, percent: 56, value: '191,235' },
    { title: 'Facebook', icon: cibFacebook, percent: 15, value: '51,223' },
    { title: 'Twitter', icon: cibTwitter, percent: 11, value: '37,564' },
    { title: 'LinkedIn', icon: cibLinkedin, percent: 8, value: '27,319' },
  ]

  const tableExample = [
    {
      avatar: { src: avatar1, status: 'success' },
      user: {
        name: 'Yiorgos Avraamu',
        new: true,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'USA', flag: cifUs },
      usage: {
        value: 50,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'success',
      },
      payment: { name: 'Mastercard', icon: cibCcMastercard },
      activity: '10 sec ago',
    },
    {
      avatar: { src: avatar2, status: 'danger' },
      user: {
        name: 'Avram Tarasios',
        new: false,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'Brazil', flag: cifBr },
      usage: {
        value: 22,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'info',
      },
      payment: { name: 'Visa', icon: cibCcVisa },
      activity: '5 minutes ago',
    },
    {
      avatar: { src: avatar3, status: 'warning' },
      user: { name: 'Quintin Ed', new: true, registered: 'Jan 1, 2021' },
      country: { name: 'India', flag: cifIn },
      usage: {
        value: 74,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'warning',
      },
      payment: { name: 'Stripe', icon: cibCcStripe },
      activity: '1 hour ago',
    },
    {
      avatar: { src: avatar4, status: 'secondary' },
      user: { name: 'Enéas Kwadwo', new: true, registered: 'Jan 1, 2021' },
      country: { name: 'France', flag: cifFr },
      usage: {
        value: 98,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'danger',
      },
      payment: { name: 'PayPal', icon: cibCcPaypal },
      activity: 'Last month',
    },
    {
      avatar: { src: avatar5, status: 'success' },
      user: {
        name: 'Agapetus Tadeáš',
        new: true,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'Spain', flag: cifEs },
      usage: {
        value: 22,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'primary',
      },
      payment: { name: 'Google Wallet', icon: cibCcApplePay },
      activity: 'Last week',
    },
    {
      avatar: { src: avatar6, status: 'danger' },
      user: {
        name: 'Friderik Dávid',
        new: true,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'Poland', flag: cifPl },
      usage: {
        value: 43,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'success',
      },
      payment: { name: 'Amex', icon: cibCcAmex },
      activity: 'Last week',
    },
  ]

  return   loader?(
  <>    <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100%'}}><Loader
    type="Oval"
    color="#00BFFF"
    height={100}
    width={100}
    timeout={3000} //3 secs
  /></div></>
  ):(
    <>
      {/* <WidgetsDropdown diseaseName={diseaseList} /> */}
      <DashboardComp diseaseName={diseaseList} handleClick={handleClick} />
      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol sm={5}>
              <h4 id="traffic" className="card-title mb-0">
            {categoryName}
              </h4>
            </CCol>

            <Chart label={graphLabel} data={graphData} />

          </CRow>

        </CCardBody>
        <CCardFooter>
          <CRow xs={{ cols: 1 }} md={{ cols: 3 }} className="text-center">
            {progressExample.map((item, index) => (
              <CCol className="mb-sm-2 mb-0" key={index}>
                <div className="text-medium-emphasis">{item.title}</div>
                <strong>
                  {item.value} ({item.percent}%)
                </strong>
                <CProgress thin className="mt-2" color={item.color} value={item.percent} />
              </CCol>
            ))}
          </CRow>
        </CCardFooter>
      </CCard>

      {/* <WidgetsBrand withCharts /> */}

      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            {/* <CCardHeader>Traffic {' & '} Sales</CCardHeader> */}
            <CCardBody>
              <CRow>
                <CCol xs={12} md={6} xl={6}>
                  {/* <CRow>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-info py-1 px-3">
                        <div className="text-medium-emphasis small">New Clients</div>
                        <div className="fs-5 fw-semibold">9,123</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-danger py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Recurring Clients</div>
                        <div className="fs-5 fw-semibold">22,643</div>
                      </div>
                    </CCol>
                  </CRow> */}

                  {/* <CCol xs={6}> */}
                  <CCard className="mb-4">
                    <CCardHeader>Age Wise Report</CCardHeader>
                    <CCardBody>
                      <CChartPie
                        data={{
                          labels: pieGraphLabel,
                          datasets: [
                            {
                              data: pieGraphData,
                              backgroundColor: ['#003f5c', '#58508d', '#bc5090', '#ff6361', '#ffa600'],
                              hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                            },
                          ],
                        }}
                      />
                    </CCardBody>
                  </CCard>
                </CCol>
                {/* </CCol> */}

                <CCol xs={12} md={6} xl={6}>
                  {/* <CRow>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-warning py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Pageviews</div>
                        <div className="fs-5 fw-semibold">78,623</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-success py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Organic</div>
                        <div className="fs-5 fw-semibold">49,123</div>
                      </div>
                    </CCol>
                  </CRow> */}

                  <CCard className="mb-4">
                    <CCardHeader></CCardHeader>
                    <CCardBody>

                      {progressGroupExample2.map((item, index) => (
                        <div className="progress-group" key={index}>
                          <div className="progress-group-header">
                            <CIcon className="me-2" icon={item.icon} size="lg" />
                            <span>{item.title}</span>
                            <span className="ms-auto fw-semibold">
                              {item.value}{' '}
                              <span className="text-medium-emphasis small">({item.percent}%)</span>
                            </span>
                          </div>
                          <div className="progress-group-bars">
                            <CProgress thin color="success" value={item.percent} />
                          </div>
                        </div>
                      ))}
                    </CCardBody>
                  </CCard>
                </CCol>
              </CRow>

              <br />

              {/* <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">
                      <CIcon icon={cilPeople} />
                    </CTableHeaderCell>
                    <CTableHeaderCell>User</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Country</CTableHeaderCell>
                    <CTableHeaderCell>Usage</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Payment Method</CTableHeaderCell>
                    <CTableHeaderCell>Activity</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {tableExample.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell className="text-center">
                        <CAvatar size="md" src={item.avatar.src} status={item.avatar.status} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item.user.name}</div>
                        <div className="small text-medium-emphasis">
                          <span>{item.user.new ? 'New' : 'Recurring'}</span> | Registered:{' '}
                          {item.user.registered}
                        </div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon size="xl" icon={item.country.flag} title={item.country.name} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="clearfix">
                          <div className="float-start">
                            <strong>{item.usage.value}%</strong>
                          </div>
                          <div className="float-end">
                            <small className="text-medium-emphasis">{item.usage.period}</small>
                          </div>
                        </div>
                        <CProgress thin color={item.usage.color} value={item.usage.value} />
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon size="xl" icon={item.payment.icon} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="small text-medium-emphasis">Last login</div>
                        <strong>{item.activity}</strong>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable> */}
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard
