import './App.css';

function App() {
  let post = '찬실은 복도 많지!'
  return (
    <div className="App">
      <div className="black-nav">
        <h4 
          style={{color:'gold', fontSize:'22px'}}>
        힐링영화
        </h4>
      </div>
      <div className="list">
        <h4>영화제목1</h4>
        <p>4월 18일</p>
      </div>
      <div className="list">
        <h4>영화제목1</h4>
        <p>4월 18일</p>
      </div>
      <div className="list">
        <h4>영화제목1</h4>
        <p>4월 18일</p>
      </div>
    </div>
  );
}

export default App;
