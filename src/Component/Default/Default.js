// import './Default.css';
import { useState } from 'react';
import styled from 'styled-components';

function Default(props) {
  const { title, need, arrow, unit, comment } = props;
  const [name, setName] = useState('');
  const [money, setMoney] = useState('');
  const [count, setCount] = useState('');

  const handleName = (e) => {
    setName(e.target.value);
  }

  const handleMoneyChange = (e) => {
    const value = e.target.value;
    const removedCommaValue = Number(value.replaceAll(",", ""));
    setMoney(removedCommaValue.toLocaleString());
  };

  const handleCount = (e) => {
    setCount(e.target.value);
  }

  function inBoxContent() {
    if (title === '대분류' || title === '중분류' || title === '재고단위' || title === '발주단위') {
      return arrow;
    }
    else if (title === '상품코드') {
      return <DefaultBoxInput as='span'>blank</DefaultBoxInput>;
    }
    else if (title === '상품명') {
      return <DefaultBoxInput as='input' type='text' value={name} onChange={handleName} />;
    }
    else if (title === '판매단가') {
      return <DefaultBoxInput as='input' type='text' value={money} onChange={handleMoneyChange} />;
    }
    else if (title === '재고환산') {
      return <DefaultBoxInput as='input' type='number' value={count} onChange={handleCount} placeholder='1.0' />;
    }
  }

  return (
    <DefaultContainer>
      <DefaultTitleContainer>
        <DefaultTitle>{title}</DefaultTitle>
        {need && <DefaultTitleAsterisk>*</DefaultTitleAsterisk>}
        {comment && <DefaultTitleComment>{comment}</DefaultTitleComment>}
      </DefaultTitleContainer>
      <DefaultBox>
        {inBoxContent()}
        {unit && <DefaultBoxUnit>{unit}</DefaultBoxUnit>}
      </DefaultBox>
    </DefaultContainer>
  );
}

export default Default;


const DefaultContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 580px;
  height: 60px;
  gap: 8px;
`
const DefaultTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  width: auto;
  height: 16px;
  gap: 2px;
`

const DefaultTitle = styled.span`
  height: 16px;
  display: inline-block;

  /* font-family: Noto Sans KR; */
  font-size: 11px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
  color: #6B6B6B;
`

const DefaultTitleAsterisk = styled.span`
  height: 14px;
  display: inline-block;

  /* font-family: Noto Sans KR; */
  font-size: 10px;
  font-weight: 700;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: center;
  color: #FF0000;
`

const DefaultTitleComment = styled.span`
  width: 131px;
  height: 12px;

  /* font-family: Noto Sans KR; */
  font-size: 8px;
  font-weight: 700;
  line-height: 12px;
  letter-spacing: 0em;
  text-align: center;
  color: #C1C1C1;
`

const DefaultBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 580px;
  height: 36px;
  padding: 5px 12px 5px 18px;
  gap: 4px;
  border-radius: 5px;
  border: 1px solid #E3E3E3;
`

const DefaultBoxInput = styled.div`
  border: none;
  outline: none;
  background-color: transparent;
  width: 100%;

  /* font-family: Noto Sans KR; */
  font-size: 11px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  color: #737373;

  &::placeholder {
    color: #C1C1C1;
  }
`

const DefaultBoxUnit = styled.span`
  /* font-family: Noto Sans KR; */
  font-size: 11px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  color: #737373;
`