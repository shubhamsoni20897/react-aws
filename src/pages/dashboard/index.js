import { cilBell, cilHospital, cilSettings } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CCol, CRow, CWidgetStatsF } from '@coreui/react'
import React, { lazy, useEffect } from 'react'
/* eslint react/prop-types: 0 */
// ['#003f5c', '#58508d', '#bc5090', '#ff6361', '#ffa600']
const DashboardComp = (props) => {
    return (
        <CRow>
            {props.diseaseName.data?.map((data) => {
                return (
                    <CCol xs={12} sm={6} lg={3} key={data._id}>
                        <CWidgetStatsF
                        onClick={()=>props.handleClick(data)}
                            className="mb-3"
                            icon={<CIcon width={24} icon={cilHospital} size="xl" />}
                            padding={false}
                            title={data.diseaseName}
                            // value="$1.999,50"
                            color="danger"
                            style={{cursor:'pointer'}}
                        />
                    </CCol>
                )
            })}
        </CRow>
    )
}

export default DashboardComp