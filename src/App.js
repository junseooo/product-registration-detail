import './App.css';
import Print from './Component/Print/Print';
import Selector from './Component/Selector';
import Toggle from './Component/Toggle';

function App() {
  return (
    <div>
      <div className='top' />
      <div className='body'>
        <div className='container'>
          <span className='title'>상품등록</span>
          <div className='contents'>
            <Selector title={'대분류'} need={true}/>
            <Selector title={'중분류'} need={true}/>
            <Print title={'상품코드'} need={true} comment={'※ 중분류 선택 후 자동으로 생성됩니다.'}/>
            <Print title={'상품명'} need={true}/>
            <Toggle title={'판매상태'} firstText={'판매중'} secondText={'판매중지'}/>
            <Print title={'판매단가'} unit={'원'} need={false}/>
            <Toggle title={'과세구분'} firstText={'과세'} secondText={'비과세'}/>
            <Selector title={'재고단위'} need={true}/>
            <Selector title={'발주단위'} need={false}/>
            <Print title={'재고환산'} content={'1.0'}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
