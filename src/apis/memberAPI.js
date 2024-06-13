// rest api와 통신하는 모듈
import axios from "axios";
import qs from "qs";

// member 객체를 서버로 보내는 함수
function join(member){
    // member = {
    //     mid :"hello2",
    //     mname:"화이팅",
    //     mpassword:"12345",
    //     memail:"12345@gmail.com"
    // } 유저는 JSON객체 형태로 전달되어야 한다. 

    // Post: (바로 객체를 주는게) raw/json 방식으로 전달
    return axios.post("/member/join",member); // http://localhhost는 기본 설정 때 해서 제외한 나머지 경로와 매개변수를 promise로 전달
}

// 로그인
function login(member){
    // user ={
    //     mid:"user",
    //     mpassword:"12345"
    // }
    // Post: QueryString(mid=user&mpassword=12345) 방식으로 전달
    return axios.post("/member/login", qs.stringify(member));
}

//axios의 리턴 값은 Promise이다. 

export default{
    join,
    login
}