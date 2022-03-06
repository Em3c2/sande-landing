import LogoCover from './icons/LogoCover'
import LogoNav from './icons/LogoNav'


const ICONS = {
  LogoCover,
  LogoNav,
}

const Icon = props => {
  const Component = ICONS[props.id]
  return <Component {...props} />
};

export default Icon
