import Panel from '../Panel'
import Text from '../Text'
import { AllColorType } from '../types'

interface AlertProps {
  type: AllColorType,
  children: React.ReactNode
}

const Alert = ({ type, children }: AlertProps) => {
  return (
    <Panel type={type} p={2} textAlign="center" mb={2}>
      <Text type={type}>{children}</Text>
    </Panel>
  )
}

export default Alert
