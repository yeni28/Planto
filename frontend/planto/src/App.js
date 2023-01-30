import './App.css';
import Hello from './Hello';
import Login from './Loginpage';

function App() {
  const name = "KAKAO NAME"
  const user = {
    name: "네이버로 이동",
    url:"https://naver.com",
  }
  return ( <div className='App'>
    <Hello/>
    <h3
    style={{
      
    }}>
      책상 위에서 만나는<br></br>
      나만의 반려 식물,<br></br>
      반가워요 {name}.
    </h3>
    <a href={user.url}>{user.name}</a>

    <Login/>
  </div>
  );
  
}

export default App;
