let userName = "";
document.getElementById("join-btn").addEventListener('click',(event)=>{
    event.preventDefault();
    
    userName = document.getElementById("username-input").value;
    if( userName.trim() != ""){
        document.querySelector(".form-username").style.display ="none";
        document.querySelector(".chatRoom").style.display="block";
    }
    
    
})