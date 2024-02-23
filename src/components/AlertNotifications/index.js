import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'
import './index.css'

const renderSuccessContainer = () => (
  <Notification>
    <div className="content-container">
      <AiFillCheckCircle className="img success" />
      <h1 className="heading success">Success</h1>
    </div>
    <p className="description">You can access all the files in the folder</p>
  </Notification>
)
const renderErrorContainer = () => (
  <Notification>
    <div className="content-container">
      <RiErrorWarningFill className="img error" />
      <h1 className="heading error">Error</h1>
    </div>
    <p className="description">
      Sorry, you are not authorized to have access to delete the file
    </p>
  </Notification>
)
const renderWarningContainer = () => (
  <Notification>
    <div className="content-container">
      <MdWarning className="img warning" />
      <h1 className="heading warning">Warning</h1>
    </div>
    <p className="description">
      Viewers of this file can see comments and suggestions
    </p>
  </Notification>
)
const renderInfoContainer = () => (
  <Notification>
    <div className="content-container">
      <MdInfo className="img info" />
      <h1 className="heading info">Info</h1>
    </div>
    <p className="description">Anyone on the internet can view these files</p>
  </Notification>
)

const AlertNotification = () => (
  <div className="bg-container">
    <h1 className="main-heading">Alert Notifications</h1>
    {renderSuccessContainer()}
    {renderErrorContainer()}
    {renderWarningContainer()}
    {renderInfoContainer()}
  </div>
)
export default AlertNotification
