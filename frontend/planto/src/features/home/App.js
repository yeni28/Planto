import './App.css';
import Login from '../login/Login';
import Back from '../../assets/background/appback.jpg'
import Logo from '../../assets/icons/logo.png'
function App() {

  return ( 
  <div>

    {/* 모바일 */}
    <div className="mobile">
      <div className='App'>
        <div className="appback"style={{width:'100vw',height:'100vh',
        paddingTop:'10rem', backgroundImage:`url("${Back}")`,backgroundSize:'cover',textAlign: ' center'
        }}>      
          <div>
            <img src={Logo} alt="logo"
            style={{
              width:'3rem',
              margin:'auto',
              marginBottom:'1rem',
            }}></img>
            <div className='font-PreM apptext ' style={{marginBottom:'1.5rem'}}>
              <p style={{fontSize:'1.5rem',fontFamily: 'RIDIBatang'}}> 마음을 나누는 </p>
              <p style={{fontSize:'1.5rem',fontFamily: 'RIDIBatang'}}> 나만의 반려식물, 플랜토 </p>
              
            </div>
            <Login/>
          </div>
        </div>
      </div>
    </div>
    {/* 웹 */}
    <div className="web">
      
    </div>
  </div>

  );
  
}

export default App;
