$(document).ready(function(){
    /* common */
   let loginForm = document.querySelector(".login-modal form");
   let joinForm = document.querySelector(".join-modal form");
   let findForm = document.querySelector(".find-modal .find-form");
   let resetForm = document.querySelector(".find-modal .reset-form");
   let loginSubmit = loginForm.querySelector(".login-submit");  
   let joinSubmit = joinForm.querySelector(".join-submit");
   let findSubmit = findForm.querySelector(".find-submit");
   let codeCheckBtn = resetForm.querySelector(".code-check");
   let resetSubmit = resetForm.querySelector(".reset-submit");
   let bdLabel = joinForm.querySelector(".bd-label"); 
 
   /* remember check */
   let rememberObj = loginForm.querySelector(".check-box-form") 
   let tosObj = joinForm.querySelector(".check-box-form")
   function rememberFocus(target){          
     if(target.classList.contains("on") == true){
       target.classList.remove("on");      
     } else {
       target.classList.add("on");   
     }
   }
   rememberObj.addEventListener("click", function(){
        rememberFocus(rememberObj)
   });
   tosObj.addEventListener("click", function(){
        rememberFocus(tosObj)
    }); 

   /* notice-board toggle */
   let tabTarget = document.querySelectorAll(".patch-list > li");
   
   for(let i = 0; i < tabTarget.length; i++){
     tabTarget[i].addEventListener("click", function(){
       this.parentNode.querySelector(".on").classList.remove("on");
       this.classList.add("on");
     })
   }
 
   /* modal btn */
   let notice = document.querySelector(".notice-board");
   let rightCon = document.querySelector(".right-con");
   let tos = document.querySelector(".terms-of-service");
   let loginModalBtn = document.querySelectorAll(".quickBtn a")
   let infoBtn = document.querySelector(".find-user-btn");
   let joinBtn =  document.querySelector(".join-btn");
   let loginModal = document.querySelector(".login-modal");
   let joinModal = document.querySelector(".join-modal");
   let findModal = document.querySelector(".find-modal");

   console.log(loginModalBtn)

   function modalChanger( targetBtn, target, target1){
 
        targetBtn.addEventListener("click", function(){
            loginModal.style.display = "none";
            target.style.display = "block";   
            console.log(11)  
            if(targetBtn == joinBtn) {
                notice.style.display = "none";
                tos.style.display = "block"
            } else if(target == loginModal){
                notice.style.display = "block";                
                tos.style.display = "none";      
                joinModal.style.display = "none";   
                findModal.style.display = "none";                                         
            }               
        })
   }
   modalChanger(loginModalBtn[0], loginModal);
   modalChanger(loginModalBtn[1], loginModal);   
   modalChanger(joinBtn, joinModal);
   modalChanger(infoBtn, findModal);
 
   /* join */
   
     /* 성별 버튼 */
     let sexTarget = document.querySelectorAll(".sex");
   
     for(let i = 0; i < sexTarget.length; i++){
       sexTarget[i].addEventListener("click", function(){
         this.parentNode.querySelector(".on").classList.remove("on");
         this.classList.add("on");
       })
     }
 
     /* 폼 유효성 */
 
       let regexName = /^[가-힣]{2,4}||[a-zA-Z]{2,10}\s[a-zA-Z]{2,10}$/;
       let regexEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;         
       let regexPass = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{6,20}$/;
       let regexNum = /^[0-9]*$/;
             
       let noticePop = document.createElement("span");
       noticePop.classList.add("notice-pop");
       noticePop.style.textAlign ="left";
       noticePop.style.color ="rgb(203, 56, 11)";
       noticePop.style.fontSize ="16px";  
       noticePop.style.float ="left";          
       noticePop.innerHTML = "* 모든 항목을 채워주세요.";
 
   /* login form */
   function loginCheck(e){
     if(regexEmail.test(loginForm.userId.value) !== true){
         e.preventDefault();        
         loginForm.userId.style.borderBottom = "2px solid rgb(203, 56, 11)";        
         noticePop.innerHTML = "* 잘못된 이메일 형식입니다.";
         loginModal.appendChild(noticePop);
         loginForm.userId.focus();     
         return false;
     } else if (loginForm.userPw.value==""){
         e.preventDefault();        
         loginForm.userPw.style.borderBottom = "2px solid rgb(203, 56, 11)";
         noticePop.innerHTML = "* 모든 항목을 채워주세요.";          
         loginModal.appendChild(noticePop);        
         loginForm.userPw.focus();
         return false;
     } else if (regexPass.test(loginForm.userPw.value) !== true){
         e.preventDefault();        
         loginForm.userPw.style.borderBottom = "2px solid rgb(203, 56, 11)";
         noticePop.innerHTML = "* 비밀번호를 확인하세요(문자,숫자,특수문자를 혼합하여 6~20 자리이내)."
         loginModal.appendChild(noticePop);        
         loginForm.userPw.focus();
         return false;
     } 
   }
    
   /* find form */      
   function findCheck(e){
     if(findForm.findName.value==""){
         e.preventDefault();        
         findForm.findName.style.borderBottom = "2px solid rgb(203, 56, 11)";
         noticePop.innerHTML = "* 모든 항목을 채워주세요.";                    
         findModal.appendChild(noticePop);        
         findForm.findName.focus();  
         return false;
     } else if(regexName.test(findForm.findName.value) !== true){
         e.preventDefault();        
         findForm.findName.style.borderBottom = "2px solid rgb(203, 56, 11)";
         noticePop.innerHTML = "* 한글은 2 ~ 4글자(공백 없음), 영문은 Firstname(2 ~ 10글자) Lastname(2 ~10글자)로 입력해 주세요.";         
         findModal.appendChild(noticePop); 
         findForm.findName.focus();  
         return false;
     } else if (findForm.findEmail.value==""){
         e.preventDefault();        
         findForm.findEmail.style.borderBottom = "2px solid rgb(203, 56, 11)";
         noticePop.innerHTML = "* 모든 항목을 채워주세요.";          
         findModal.appendChild(noticePop);        
         findForm.findEmail.focus();        
         return false;
     } else if(regexEmail.test(findForm.findEmail.value) !== true){
         e.preventDefault();        
         findForm.findEmail.style.borderBottom = "2px solid rgb(203, 56, 11)";        
         noticePop.innerHTML = "* 잘못된 이메일 형식입니다.";
         findModal.appendChild(noticePop);
         findForm.findEmail.focus();     
         return false;
     } else if(findForm.findEmail.value !== "" && findForm.findEmail.value !== ""){
       let code = Math.floor(100000 + Math.random() * 900000);
       console.log(code);
     }
   }
 
   /* code check */
   function codeCheck(e){
     if (resetForm.codeNum.value==""){
         e.preventDefault();        
         resetForm.codeNum.style.borderBottom = "2px solid rgb(203, 56, 11)";
         noticePop.innerHTML = "* 모든 항목을 채워주세요.";          
         findModal.appendChild(noticePop);        
         resetForm.codeNum.focus();
         return false;
     } else if (regexNum.test(resetForm.codeNum.value) !== true){
       e.preventDefault();        
       resetForm.codeNum.style.borderBottom = "2px solid rgb(203, 56, 11)";
       noticePop.innerHTML = "* 숫자만 기입해주세요.";          
       findModal.appendChild(noticePop);        
       resetForm.codeNum.focus();                   
     }            
   }
   
   /* reset check */
   function resetCheck(e){
     codeCheck(e);
     findCheck(e);
     if (resetForm.codeNum.value==""){
         e.preventDefault();        
         resetForm.codeNum.style.borderBottom = "2px solid rgb(203, 56, 11)";
         noticePop.innerHTML = "* 모든 항목을 채워주세요.";          
         findModal.appendChild(noticePop);        
         resetForm.codeNum.focus();
         return false;
     } else if (regexNum.test(resetForm.codeNum.value) !== true){
         e.preventDefault();        
         resetForm.codeNum.style.borderBottom = "2px solid rgb(203, 56, 11)";
         noticePop.innerHTML = "* 숫자만 기입해주세요.";          
         findModal.appendChild(noticePop);        
         resetForm.codeNum.focus();
         return false;
     } else if (resetForm.rePass.value==""){
         e.preventDefault();        
         resetForm.rePass.style.borderBottom = "2px solid rgb(203, 56, 11)";
         noticePop.innerHTML = "* 모든 항목을 채워주세요.";          
         findModal.appendChild(noticePop);        
         resetForm.rePass.focus();
         return false;
     } else if (regexPass.test(resetForm.rePass.value) !== true){
         e.preventDefault();        
         resetForm.rePass.style.borderBottom = "2px solid rgb(203, 56, 11)";
         noticePop.innerHTML = "* 비밀번호를 확인하세요(문자,숫자,특수문자를 혼합하여 6~20 자리이내)."
         findModal.appendChild(noticePop);        
         resetForm.rePass.focus();
         return false;
     } else if (resetForm.rePassCheck.value==""){
         e.preventDefault();        
         resetForm.rePassCheck.style.borderBottom = "2px solid rgb(203, 56, 11)";
         findModal.appendChild(noticePop);        
         resetForm.rePassCheck.focus();
         return false;
     } else if(resetForm.rePass.value!=resetForm.rePassCheck.value){
         e.preventDefault();
         resetForm.rePassCheck.style.borderBottom = "2px solid rgb(203, 56, 11)";        
         resetForm.rePassCheck.style.borderBottom = "2px solid rgb(203, 56, 11)";        
         noticePop.innerHTML = "* 비밀번호는 동일해야 합니다."
         findModal.appendChild(noticePop);
         return false;
     }             
   }
 
   /* join form */
   function joinCheck(e){   
           
     /* 빈칸 체크 */
     if(joinForm.name.value==""){
         e.preventDefault();        
         joinForm.name.style.borderBottom = "2px solid rgb(203, 56, 11)";
         noticePop.innerHTML = "* 모든 항목을 채워주세요.";                    
         joinModal.appendChild(noticePop);        
         joinForm.name.focus();  
         return false;
     } else if(regexName.test(joinForm.name.value) !== true){
         e.preventDefault();        
         joinForm.name.style.borderBottom = "2px solid rgb(203, 56, 11)";
         noticePop.innerHTML = "* 한글은 2 ~ 4글자(공백 없음), 영문은 Firstname(2 ~ 10글자) Lastname(2 ~10글자)로 입력해 주세요.";         
         joinModal.appendChild(noticePop); 
         joinForm.name.focus();  
         return false;
     } else if (joinForm.year.value== "none"){
         e.preventDefault();        
         noticePop.innerHTML = "* 모든 항목을 채워주세요.";                    
         joinModal.appendChild(noticePop);        
         joinForm.year.focus();
         return false;
     } else if (joinForm.month.value=="none"){
         e.preventDefault();                      
         joinModal.appendChild(noticePop);        
         joinForm.month.focus();
         return false;
     } else if (joinForm.day.value=="none"){
         e.preventDefault();        
         joinModal.appendChild(noticePop);        
         joinForm.day.focus();
         return false;
     } else if (joinForm.email.value==""){
         e.preventDefault();        
         joinForm.email.style.borderBottom = "2px solid rgb(203, 56, 11)";
         noticePop.innerHTML = "* 모든 항목을 채워주세요.";          
         joinModal.appendChild(noticePop);        
         joinForm.email.focus();        
         return false;
     } else if(regexEmail.test(joinForm.email.value) !== true){
         e.preventDefault();        
         joinForm.email.style.borderBottom = "2px solid rgb(203, 56, 11)";        
         noticePop.innerHTML = "* 잘못된 이메일 형식입니다.";
         joinModal.appendChild(noticePop);
         joinForm.email.focus();     
         return false;
     } else if (joinForm.pass.value==""){
         e.preventDefault();        
         joinForm.pass.style.borderBottom = "2px solid rgb(203, 56, 11)";
         noticePop.innerHTML = "* 모든 항목을 채워주세요.";          
         joinModal.appendChild(noticePop);        
         joinForm.pass.focus();
         return false;
     } else if (regexPass.test(joinForm.pass.value) !== true){
         e.preventDefault();        
         joinForm.pass.style.borderBottom = "2px solid rgb(203, 56, 11)";
         noticePop.innerHTML = "* 비밀번호를 확인하세요(문자,숫자,특수문자를 혼합하여 6~20 자리이내)."
         joinModal.appendChild(noticePop);        
         joinForm.pass.focus();
         return false;
     } else if (joinForm.passCheck.value==""){
         e.preventDefault();        
         joinForm.passCheck.style.borderBottom = "2px solid rgb(203, 56, 11)";
         joinModal.appendChild(noticePop);        
         joinForm.passCheck.focus();
         return false;
     } else if(joinForm.pass.value!=joinForm.passCheck.value) {
       e.preventDefault();
       joinForm.pass.style.borderBottom = "2px solid rgb(203, 56, 11)";        
       joinForm.passCheck.style.borderBottom = "2px solid rgb(203, 56, 11)";        
       noticePop.innerHTML = "* 비밀번호는 동일해야 합니다."
       joinModal.appendChild(noticePop);
       return false;
     } else if (!join.tos.checked){
         e.preventDefault();                
         noticePop.innerHTML = "* 약관에 동의해주세요." 
         joinModal.appendChild(noticePop); 
         return false;
     } 
   }
 
   /* 포커스 떠날때 이벤트 */
   
   let inputTarget = rightCon.querySelectorAll("section input");
 
   for(let i = 0; i < inputTarget.length; i++){
     inputTarget[i].addEventListener("blur", function(){
       if(inputTarget[i].value !== ""){
         inputTarget[i].style.borderBottom = "2px solid #999"
       }
     })
   }
 
   loginSubmit.addEventListener("click", loginCheck);
   joinSubmit.addEventListener("click", joinCheck);
   findSubmit.addEventListener("click", findCheck);    
   codeCheckBtn.addEventListener("click", codeCheck);
   resetSubmit.addEventListener("click", resetCheck);
   // findSubmit.addEventListener("click", mailer);

}) 

   