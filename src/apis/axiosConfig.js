import axios from "axios";

// 기본 경로 설정
axios.defaults.baseURL = "http://localhost";

// AccessToken을 받고 나서 다음 요청시 전달할 수 있도록 요청 헤더에 추가 - (로그인 성공 시 호출)
function addAuthHeader(accessToken){
    // common 객체에 동적 속성으로 Authorization을 추가
    axios.defaults.headers.common["Authorization"] = "Bearer " + accessToken; // Bearer하고 한칸 띄어야 함
}

// 공통 요청 헤더에서 Authorization 헤더 삭제 - (로그아웃 시 호출)
function removeAuthHeader(){
    // common 객체의 Authorization 속성을 삭제
    delete axios.defaults.headers.common["Authorization"];
}

// access 토큰 어디에 저장하지?  - 브라우저에 저장 시 브라우저 닫으면 없음 , 로컬 스토리지에 저장 시 닫아도 있음

// 로컬 스토리지에 AccessToken을 저장
function saveAccessToken(accessToken){
    // 로컬 스토리지에 엔트리로 AccessToken 저장
    localStorage.setItem("accessToken", accessToken);
}

// 로컬 스토리지에 있는 AccessToken을 읽기
function readAccessToken(){
    const accessToken = localStorage.getItem("accessToken") || ""; // accessToken이 null이면 빈값을 넣는다. 

    // accesstoken이 빈값이 아니면 헤더에 추가한다. 
    // if(accessToken != ""){
    //     addAuthHeader(accessToken);
    // }
    
    // accessToken 읽고 반환
    return accessToken;
}

// 내보내기 해서 외부에서 사용할 수 있게 하기 , 속성과 값이 같아서 엔트리로 안 쓰고 하나만 씀
export default{
    addAuthHeader,
    removeAuthHeader,
    saveAccessToken,
    readAccessToken
}