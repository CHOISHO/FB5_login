$(document).ready(function(){
                
    /* naver login */
     /* LoginWithNaverId Javscript 설정 정보 및 초기화 */ 
     var naverLogin = new naver.LoginWithNaverId(
        {
          clientId: "znT2SBsYCWmZB26m5El8",
          callbackUrl: "http://www.findbig5.com/main",
          isPopup: false, /* 팝업을 통한 연동처리 여부 */
          callbackHandle: true, 
          loginButton: {color: "green", type: 3, height: 60} /* 로그인 버튼의 타입을 지정 */
        }
      );
  
      /* 설정정보를 초기화하고 연동을 준비 */
      naverLogin.init();
  
      /* (4) Callback의 처리. 정상적으로 Callback 처리가 완료될 경우 main page로 redirect(또는 Popup close) */
      window.addEventListener('load', function () {
        naverLogin.getLoginStatus(function (status) {
          if (status) {
            /* (5) 필수적으로 받아야하는 프로필 정보가 있다면 callback처리 시점에 체크 */
            var email = naverLogin.user.getEmail();
            if( email == undefined || email == null) {
              alert("이메일은 필수정보입니다. 정보제공을 동의해주세요.");
              /* (5-1) 사용자 정보 재동의를 위하여 다시 네아로 동의페이지로 이동함 */
              naverLogin.reprompt();
              return;
            }   
            window.location.replace("http://findbig5.com/main");
            console.log(1111)
          } else {
            console.log("callback 처리에 실패하였습니다.");
          }
        });
      });
  
    /* kakao login */
     Kakao.init('9847b1379845e6567aa0a3854be93b33');
        // 카카오 로그인 버튼을 생성합니다.
     function loginWithKakao(){
          // 로그인 창을 띄웁니다.
       Kakao.Auth.login({
         success: function(authObj) {
           window.location.replace("http://findbig5.com/main");
         },
         fail: function(err) {
           alert(JSON.stringify(err));
         }
       });
     };         
     let kakaoTarget = document.querySelector("#custom-login-btn");
     kakaoTarget.addEventListener("click", loginWithKakao);
     
     /* facebook login */  
     var provider = new firebase.auth.FacebookAuthProvider();      
     // Initialize Firebase
       var config = {
         apiKey: "AIzaSyCuuULu22oaJ2DUBBKVh-cbn_j7_w_lUvA",
         authDomain: "fb5login-f4737.firebaseapp.com",
         databaseURL: "https://fb5login-f4737.firebaseio.com",
         projectId: "fb5login-f4737",
         storageBucket: "fb5login-f4737.appspot.com",
         messagingSenderId: "855127604723"
       };
       firebase.initializeApp(config);   
            
     /* social login btn */
     let socialTarget = document.querySelector(".social-login");
     let naverBtn = socialTarget.querySelector(".naver");
     let naverModal = socialTarget.querySelector("#naverIdLogin_loginButton");
     let kakaoBtn = socialTarget.querySelector(".kakao");
     let kakaoModal = socialTarget.querySelector("#custom-login-btn");    
     let facebookBtn = socialTarget.querySelector(".facebook"); 
     let facebookModal = socialTarget.querySelector(".fb-signin-button"); 
     
     naverBtn.addEventListener("click", function(){
       naverModal.click();
     })
     kakaoBtn.addEventListener("click", function(){
       kakaoModal.click();          
     })
     facebookBtn.addEventListener("click", function(){
         
       firebase.auth().signInWithPopup(provider)
       
       .then(function(result) {
           // This gives you a Facebook Access Token. You can use it to access the Facebook API.
           var token = result.credential.accessToken;
           // The signed-in user info.
           var user = result.user;
           // ...
           window.location.replace("http://findbig5.com/main");
         }).catch(function(error) {
           // Handle Errors here.
           var errorCode = error.code;
           var errorMessage = error.message;
           // The email of the user's account used.
           var email = error.email;
           // The firebase.auth.AuthCredential type that was used.
           var credential = error.credential;
           // ...
         });
                   
     })
         
}) 
       