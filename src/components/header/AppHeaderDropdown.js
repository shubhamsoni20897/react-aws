import React from 'react'
import {
  CAvatar,
  CBadge,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import {
  cilBell,
  cilCreditCard,
  cilCommentSquare,
  cilEnvelopeOpen,
  cilFile,
  cilLockLocked,
  cilSettings,
  cilTask,
  cilUser,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import {logoutAction} from '../../redux/action/loginAction'
import avatar8 from './../../assets/images/avatars/9.png'
// import { useDispatch, useSelector } from 'react-redux'
import { useSelector, useDispatch, connect } from 'react-redux'
import authGuard from 'src/authGuard'

// prettier-ignore
/* eslint react/prop-types: 0 */
const AppHeaderDropdown = (props) => {
  console.log('====',props)
  const dispatch =useDispatch()
  const {loginData} =useSelector((state) => state.loginReducer)
  console.log(loginData)
  const onSuccess=()=>{
  }
  const logout = async()=>{
    console.log('hi')
   await props.logout(onSuccess)
   props.history.push('/')

    // authGuard.logout(() => {
    //   props.history.push("/")

    // })
  }
  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        <CAvatar src={loginData?loginData.user.avatar:avatar8} size="md" />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        {/* <CDropdownHeader className="bg-light fw-semibold py-2">Account</CDropdownHeader> */}
        {/* <CDropdownItem href="#">
          <CIcon icon={cilBell} className="me-2" />
          Updates
          <CBadge color="info" className="ms-2">
            42
          </CBadge>
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={cilEnvelopeOpen} className="me-2" />
          Messages
          <CBadge color="success" className="ms-2">
            42
          </CBadge>
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={cilTask} className="me-2" />
          Tasks
          <CBadge color="danger" className="ms-2">
            42
          </CBadge>
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={cilCommentSquare} className="me-2" />
          Comments
          <CBadge color="warning" className="ms-2">
            42
          </CBadge>
        </CDropdownItem>
        <CDropdownHeader className="bg-light fw-semibold py-2">Settings</CDropdownHeader>
        <CDropdownItem href="#">
          <CIcon icon={cilUser} className="me-2" />
          Profile
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={cilSettings} className="me-2" />
          Settings
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={cilCreditCard} className="me-2" />
          Payments
          <CBadge color="secondary" className="ms-2">
            42
          </CBadge>
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={cilFile} className="me-2" />
          Projects
          <CBadge color="primary" className="ms-2">
            42
          </CBadge>
        </CDropdownItem>
        <CDropdownDivider /> */}
        <CDropdownItem href="#" onClick={logout}>
          <CIcon icon={cilLockLocked} className="me-2"  />
         Logout
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}
const mapDispatchToProps = dispatch => {

  return { logout: (onSuccess) => { dispatch(logoutAction(onSuccess)) } }
}
const mapStateToProps = (state) => {
  return { state }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppHeaderDropdown)
