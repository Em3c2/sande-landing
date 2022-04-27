import LogoCover from './icons/LogoCover';
import LogoNav from './icons/LogoNav';
import LogoFooter from './icons/LogoFooter';
import Facebook from './icons/Facebook';
import Linkedin from './icons/Linkedin';
import CloseButton from './icons/CloseButton';

const ICONS = {
  LogoCover,
  LogoNav,
  LogoFooter,
  Facebook,
  Linkedin,
  CloseButton,
};

const Icon = props => {
  const Component = ICONS[props.id];
  return (
    <Component {...props} />
  );
};

export default Icon;
