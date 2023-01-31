import './main.css';
import backImg from "../../assets/background/backimg.png"


function Main(){
    const user ={
        name : '황효상', // 이름 DB에서 받아오기

    }
    return(
        <div>
            <div className="Myplanto_title">
                <span className="font-PreR"> My</span>
                <span className="font-PreEB"> Planto </span>
            </div>
            <div className="Myplanto_name">
                <span className="font-PreR"> 반가워요,</span> 
                <span className="font-PreEB"> {user.name}</span><span className="font-PreR">님!</span>
            </div>
            <div>
                <div className="main_back_img">
                <img src={backImg}  alt="background"className="main_back_img"></img>
                </div>
                <button className="main_btn font-PreSB "> + 플랜토 등록하기! </button>
            </div>
        </div>
    );

}

export default Main;