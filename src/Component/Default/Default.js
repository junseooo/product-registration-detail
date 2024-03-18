import './Default.css';
import { useState } from 'react';

function Default(props) {
  const { title, need, arrow, unit, content, comment } = props;
  const [value, setValue] = useState('');
  const handleChange = (e) => {
    setValue(e.target.value);
  }

  function inBoxContent() {
    if (title === '대분류' || title === '중분류' || title === '재고단위' || title === '발주단위') {
      return <span className='default-box-content'>{content}</span>;
    }
    else if (title === '상품코드') {
      return <span className='default-box-content'>blank</span>;
    }
    else if (title === '상품명' || title === '판매단가') {
      return <input className='default-box-input' type='text' onChange={handleChange} />;
    }
    else if (title === '재고환산') {
      return <input className='default-box-input' type='text' onChange={handleChange} placeholder='1.0' />;
    }
  }

  return (
    <div className='default-container'>
      <div className='default-title-container'>
        <span className='default-title'>{title}</span>
        {need && <span className='default-title-asterisk'>*</span>}
        {comment && <span className='default-title-comment'>{comment}</span>}
      </div>
      <div className='default-box'>
        {inBoxContent()}
        {unit && <span className='default-box-content'>{unit}</span>}
        {arrow}
      </div>
    </div>
  );
}

export default Default;