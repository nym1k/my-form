import React from 'react'

import { faUser, faClock } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Header = props => (
  <header className="header bg-dark text-white">
    <div className="container py-4">
      <div className="row align-items-center">
        <img src={ process.env.PUBLIC_URL + '/logo.png' } alt="SCCS Logo"/>
        <h1 className="h3 mb-0 ml-2">
          SCCS
        </h1>
        <div className="ml-auto">
          <p className="mb-0">Application ID #1235145</p>
        </div>
        <div className="ml-4">
          <p className="mb-0"><FontAwesomeIcon icon={faUser} className="mr-1"/> Hi Ross</p>
        </div>
      </div>
    </div>
    <div className="notification-bar">
      <div className="container pt-3 pb-2">
        <h5>Applications for next conference close in <FontAwesomeIcon icon={faClock} style={{ color: '#77C600' }} /> 36 days</h5>
      </div>
    </div>
  </header>
)

export default Header
