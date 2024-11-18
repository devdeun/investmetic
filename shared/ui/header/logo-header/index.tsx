// NOTE: 이름 공모전 개최
import Header from '..'
import Logo from '../../logo'
import HeaderLinks from '../_ui/header-links'

const headerStyles = {
  background: 'rgba(251, 251, 251, 0.5)',
  backdropFilter: 'blur(60px)',
}

interface Props {
  hasLinks?: boolean
  hasText?: boolean
}

const LogoHeader = ({ hasLinks = false, hasText = false }: Props) => {
  return (
    <Header
      Left={<Logo hasText={hasText} />}
      Right={hasLinks && <HeaderLinks />}
      styles={headerStyles}
    />
  )
}

export default LogoHeader
