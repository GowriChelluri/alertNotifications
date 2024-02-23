import './index.css'
import {GrFormClose} from 'react-icons/gr'

const Notification = props => {
  const {children} = props
  return (
    <div className="notification-container">
      <div>{children}</div>
      <GrFormClose className="icon" />
    </div>
  )
}
export default Notification
