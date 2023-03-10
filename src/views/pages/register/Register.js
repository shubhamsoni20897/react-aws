import React from 'react'
import {
  CAvatar,
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CFormLabel,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import axios from 'axios'
import avatar8 from '../../../assets/images/avatars/9.png'

// prettier-ignore
/* eslint react/prop-types: 0 */
const Register = (props) => {
  const nameInput = React.useRef(null);
  const userIdInput = React.useRef(null);
  const emailInput = React.useRef(null);
  const passwordInput = React.useRef(null);
  const passwordConfInput = React.useRef(null)

  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [userId, setUserId] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [passwordConf, setPasswordConf] = React.useState('')
  const [avatar, setAvatar] = React.useState('')
  const [url, setURL] = React.useState('')

  const onSubmit = () => {
    const requestData = { name, email, userId, password, avatar }
    console.log('requestData', requestData)
    const uploadData = new FormData();
    uploadData.append("name", name);
    uploadData.append("userId", userId);
    uploadData.append("email", email);
    uploadData.append("password", password);
    uploadData.append("avatar", avatar);
    console.log(uploadData.get('avatar'))
    const config = {
      headers: { 'content-type': 'multipart/form-data' }
    }
    axios.post('http://localhost:4000/register', uploadData).then((response) => {
      console.log('res', response)
      props.history.push('/')
    }).catch((err) => console.log('err', err.response))
  }
  const uploadFile = (e) => {
    setAvatar(e.target.files[0])
    console.log('image', URL.createObjectURL(e.target.files[0]))
    setURL(URL.createObjectURL(e.target.files[0]))
  }
  return (

    <CContainer>
      <CRow className="justify-content-center">
        <CCol md={9} lg={7} xl={6}>
          <CCard className="mx-4">
            <CCardBody className="p-4">
              <CForm>
                <CRow  >

                  <CCol className="justify-content-center">

                    <h1>Register</h1>
                    <CAvatar src={url ? url : avatar8} size="xl" />
                  </CCol>
                </CRow>
                {/* <img src={url}/> */}
                <p className="text-medium-emphasis">Create your account</p>
                <CInputGroup className="mb-3">
                  <CInputGroupText>
                    <CIcon icon={cilUser} />
                  </CInputGroupText>
                  <CFormInput placeholder="Username" autoComplete="username" ref={nameInput} onChange={() => setName(nameInput.current.value)} />
                </CInputGroup>
                <CInputGroup className="mb-3">
                  <CInputGroupText>
                    <CIcon icon={cilUser} />
                  </CInputGroupText>
                  <CFormInput placeholder="UserId" autoComplete="userId" ref={userIdInput} onChange={() => setUserId(userIdInput.current.value)} />
                </CInputGroup>
                <CInputGroup className="mb-3">
                  <CInputGroupText>@</CInputGroupText>
                  <CFormInput placeholder="Email" autoComplete="email"
                    ref={emailInput} onChange={() => setEmail(emailInput.current.value)}

                  />
                </CInputGroup>
                <CInputGroup className="mb-3">
                  <CInputGroupText>
                    <CIcon icon={cilLockLocked} />
                  </CInputGroupText>
                  <CFormInput
                    type="password"
                    placeholder="Password"
                    autoComplete="new-password"
                    ref={passwordInput} onChange={() => setPassword(passwordInput.current.value)}
                  />
                </CInputGroup>
                <CInputGroup className="mb-4">
                  <CInputGroupText>
                    <CIcon icon={cilLockLocked} />
                  </CInputGroupText>
                  <CFormInput
                    type="password"
                    placeholder="Repeat password"
                    autoComplete="new-password"
                    ref={passwordConfInput} onChange={() => setPasswordConf(passwordConfInput.current.value)}

                  />
                </CInputGroup>
                <CInputGroup className="mb-4">
                  {/* <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText> */}
                  <CFormInput type="file" id="formFile" onChange={uploadFile} />
                </CInputGroup>

                <div className="d-grid">
                  <CButton color="success" onClick={onSubmit}>Create Account</CButton>
                </div>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>

  )
}

export default Register
