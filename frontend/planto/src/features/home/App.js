import './App.css';
import Login from '../login/Login';
import BottomNav from '../nav/BottomNav';

function App() {
  const name = "KAKAO NAME"
  // const user = {
  //   name: "네이버로 이동",
  //   url:"https://naver.com",
  // }
  return ( <div className='App'>
    <h3 className='font-PreM py-12'>
      책상 위에서 만나는<br></br>
      나만의 반려 식물<br></br>
      {/* 반가워요 {name}. */}
    </h3>
    
    {/* <a href={user.url}>{user.name}</a> */}

    <Login/>
    <BottomNav/>
  </div>
  );
  
}

export default App;
