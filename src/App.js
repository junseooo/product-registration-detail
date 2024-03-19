// import './App.css';
import Print from './Component/Print/Print';
import Selector from './Component/Selector';
import Toggle from './Component/Toggle';
import styled from 'styled-components';

function App() {
  return (
    <>
      <Top />
      <Body>
        <Container>
          <Title>상품등록</Title>
          <Contents>
            <Selector title={'대분류'} need={true} />
            <Selector title={'중분류'} need={true} />
            <Print title={'상품코드'} need={true} comment={'※ 중분류 선택 후 자동으로 생성됩니다.'} />
            <Print title={'상품명'} need={true} />
            <Toggle title={'판매상태'} firstText={'판매중'} secondText={'판매중지'} />
            <Print title={'판매단가'} unit={'원'} />
            <Toggle title={'과세구분'} firstText={'과세'} secondText={'비과세'} />
            <Selector title={'재고단위'} need={true} />
            <Selector title={'발주단위'} />
            <Print title={'재고환산'} />
          </Contents>
        </Container>
      </Body>
    </>
  );
}

export default App;

const Top = styled.div`
  width: auto;
  height: 55px;
  border-bottom: 1px solid #E3E3E3;
`

const Body = styled.div`
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  height: auto;
  padding: 16px 0px 25px 0px;
  gap: 30px;
`

const Title = styled.span`
  width: 89px;
  height: 31px;

  /* font-family: Noto Sans KR; */
  font-size: 24px;
  font-weight: 700;
  line-height: 31px;
  letter-spacing: 0em;
  text-align: center;
`

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  height: auto;
  padding: 0px 10px 0px 10px;
  gap: 25px;
`