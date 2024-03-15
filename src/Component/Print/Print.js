import './Print.css';
import Default from '../Default';

function Print(props) {
  const { title, need, unit } = props;
  return (
    <Default title={title} need={need} unit={unit} />
  );
}

export default Print;