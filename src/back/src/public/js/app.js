/*

//프론트 업데이트로 서버가 재시작 되는걸 막으려면 nodemon.json에 가서 "ignoore":"무시할 파일의 경로"추가하기

** 동작순서 **

1. 앱 시작
2. 로그인 유무 확인
3. 로그인 됐으면 바로 메인 페이지
4. 메인페이지 들어가면 카메라 켜고 끄기 버튼
5. 카메라 켜야 매칭 가능함( 끈 상태에서 매칭 버튼 누르면 카메라 키라고 안내문 뜨게)
6. 매칭 시작
7. 매칭되면 카메라는 못끄고 소리만 끄게 
8. 대화 종료시 종료버튼 누르고 대화 종료
*/

const Peer = require("peerjs");


// app.js에서 해야 할 일

//1. 카메라, 음성데이터 가져오기
//2. 카메라, 음성 켜고 끄기
//3. 전면카메라 후면카메라 스위칭 하기
//4. socket코드로 유저의 브라우저 정보 교환
//5. peer.js로 p2p연결

// peer conndection의 생성
const socket = io('/');
const videoGrid = document.getElementById('비디오영역');
const myPeer = new Peer(undefined, {
    host : '/',
    port : '3000'
});

// 카메라, 오디오 관련 코드





socket.on('user-connected', userId => {
    connectToNewUser(userId, stream)
  });
socket.on('user-disconnected', userId => {
    if (peers[userId]) peers[userId].close()
  })


// user와 user의 연결
// userVideostream <=이거 수정해야 함.
function connectToNewUser(userId, stream) {
    const call = myPeer.call(userID, stream);
    const video = document.createElement('video');
    call.on('stream', userVideostream => {
        addVideoStream(video, userVideostream)
    });
    call.on('close', () =>{
        video.remove()
    });
    peers[userId] = call
};

function addVideoStream(video, stream) {
    video.srcObjcet = stream;
    video.addEventListener('loadedmetadata', () => {
        video.play();
    });
    
}



let roomId;
let myPeerconnection;
let myDataChannel;