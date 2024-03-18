import './Default.css';

function Default(props) {
  const { title, need, arrow, unit, content, comment } = props;
  return (
    <div className='default-container'>
      <div className='default-title-container'>
        <span className='default-title'>{title}</span>
        {need && <span className='default-title-asterisk'>*</span>}
        {comment && <span className='default-title-comment'>{comment}</span>}
      </div>
      <div className='default-box'>
        <span className='default-box-content'>{content}</span>
        <span className='default-box-content'>{unit}</span>
        {arrow}
      </div>
    </div>
  );
}

export default Default;