import React from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import axios from 'axios'
import { connect } from 'react-redux'
import { loginAction } from '../../../redux/action/loginAction'
import { bindActionCreators } from 'redux'
import authGuard from 'src/authGuard'
import Loader from 'react-loader-spinner'
// prettier-ignore
/* eslint react/prop-types: 0 */

const Login = (props) => {
  const textInput = React.useRef(null);
  const passInput = React.useRef(null)

  const [userId, setUserName] = React.useState('')
  const [password, setPassword] = React.useState('')
  const navigate = () => {
    props.history.push("/dashboard")

  }

  const onSuccess = (response) => {
    console.log('callback', response)
    authGuard.login(() => {
      props.history.push("/dashboard")

    })
  }
  const onSubmit = async () => {
    const requestData = { email: userId, password }
    await props.login(requestData, onSuccess)

  }
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
              
                    <h1>Login</h1>
                    <p className="text-medium-emphasis">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput placeholder="Username" autoComplete="username" ref={textInput} onChange={() => setUserName(textInput.current.value)} />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        ref={passInput}
                        onChange={() => setPassword(passInput.current.value)}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton color="primary" className="px-4" onClick={onSubmit}>
                          Login
                        </CButton>
                        {/* <Loader
    type="Oval"
    color="#00BFFF"
    height={20}
    width={20}
    timeout={3000} //3 secs
  /> */}
                      </CCol>
                      <CCol xs={6} className="text-right">
                        {/* <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton> */}
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>

                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}
const mapStateToProps = (state) => {
  return { state }
}
const mapDispatchToProps = dispatch => {

  return { login: (data, onSuccess) => { dispatch(loginAction(data, onSuccess)) } }
}



export default connect(mapStateToProps, mapDispatchToProps)(Login)
