import './Selector.css';
import Default from '../Default';
import { MdKeyboardArrowDown } from 'react-icons/md';

function Selector(props) {
  const { title, need } = props;
  const arrow = <MdKeyboardArrowDown className='arrow-icon' />;
  return (
    <Default title={title} need={need} arrow={arrow} />
  );
}

export default Selector;