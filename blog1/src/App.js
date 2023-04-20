import './App.css';
import { useState } from 'react';

function App() {
  // let post = '찬실은 복도 많지!';
  // const [제목1, b1] = useState('찬실은 복도 많지');
  // const [제목2, b2] = useState('내 서랍 속에 행복');
  // const [제목3, b3] = useState('컴온컴온');

  let [제목들, 제목변경] = useState(['찬실은 복도 많지', '내 서랍 속에 행복', '컴온컴온']);
  let [like, likeAdd] = useState(0);
  let [modal, setModal] = useState(false);
  [1,2,3,4,5].map(function(a){
    console.log(a);
  });

  console.log(like[0]);
  return (
    <div className="App">
      <div className='black-nav'>
        <h4 style={{color : 'yellow', fontSize : '22px'}}>힐링영화</h4>
      </div>
      <button onClick={() => {
          // 같은 메모리 복사
          let copy2 = [제목들];
          // ...은 말그대로 복사
          let copy1 = [...제목들];
          copy1[0] = '벌새';
          copy1[1] = '우리들';
          copy1[2] = '가족';
          제목변경(copy1);
        }}>신규영화</button>
        <button onClick={() => {
        let copy2 = [...제목들];
        copy2.sort();
        제목변경(copy2);
      }}> 제목정렬</button>
  
      {/* <div className='list'>
        <h4>{제목들[0]} <span onClick={() => {likeAdd(like + 1)}}>👍</span> {like}</h4>
        <p>4월 18일</p>
      </div>
      <div className='list'>
        <h4 onClick={() => {setModal(!modal)}}>{제목들[1]}</h4>
        <p>4월 18일</p>
      </div>
      <div className='list'>
        <h4>{제목들[2]}</h4>
        <p>4월 18일</p>
      </div> */}
      
      {modal == true ? <Modal/> : null}
      {/* {
        // list를 전달
        제목들.map(function(e) {
          return (
            <div className='list'>
                <h4>{e}</h4>
                <p>4월 18일</p>
              </div>
          )
        })
      } */}

      {
        // list를 전달
        제목들.map(function(e,i) {
          return (
            <div className='list'>
                <h4>{제목들[i]}</h4>
                <p>4월 18일</p>
              </div>
          )
        })
      }
    </div>
    
  );
}

function Modal() {
  return (
    <>
      <div className='modal'>
        <h1>제목</h1>
        <p>날짜</p>
        <p>상세 내용</p>
      </div>
    </>
  )
}

export default App;