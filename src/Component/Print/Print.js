import './Print.css';
import Default from '../Default';

function Print(props) {
  const { title, need, unit, content, comment } = props;
  return (
    <Default title={title} need={need} unit={unit} comment={comment}/>
  );
}

export default Print;