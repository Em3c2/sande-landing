import LogoCover from './icons/LogoCover';
import LogoNav from './icons/LogoNav';
import LogoFooter from './icons/LogoFooter';
import Facebook from './icons/Facebook';
import Linkedin from './icons/Linkedin';
import CloseButton from './icons/CloseButton';
import Whatsapp from './icons/Whatsapp';
import MailLogo from './icons/MailLogo';
import MapsLogo from './icons/MapsLogo';


const ICONS = {
  LogoCover,
  LogoNav,
  LogoFooter,
  Facebook,
  Linkedin,
  CloseButton,
  Whatsapp,
  MailLogo,
  MapsLogo,
};

const Icon = props => {
  const Component = ICONS[props.id];
  if(!Component) return <>Invalid Icon Id</>

  return (
    <Component {...props} />
  );
};

export default Icon;
