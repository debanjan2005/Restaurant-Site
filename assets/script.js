
function Logcheck(){
    let Uemail = document.getElementById("Uemail").value;
    let Upassword = document.getElementById("Upassword").value;
    let pattern=/^[a-z0-9._-]+@[a-z]+\.[a-z]{2,4}$/;
    if(Uemail==""||Upassword==""){
        alert("All field are mandatory, Please fill up all fill");
        return false;
    }
    else if(!Uemail.match(pattern)){
        alert("Please Enter Valid Email....");
        Uemail.focus();
        return false;
    }
    else{
        alert("Your Login is Successful.");
        return true;
    }
}

function Regcheck(){
    let Uusername = document.getElementById("Uusername").value;
    let Uemail = document.getElementById("Uemail").value;
    let Upassword = document.getElementById("Upassword").value;
    let Cpassword = document.getElementById("Cpassword").value;
    let pattern=/^[a-z0-9._-]+@[a-z]+\.[a-z]{2,4}$/;
    if(Uusername==""||Uemail==""||Upassword==""||Cpassword==""){
        alert("All field are mandatory, Please fill up all field....");
        return false;
    }
    else if(!Uemail.match(pattern)){
        alert("Please Enter Valid Email....");
        Uemail.focus();
        return false;
    }
    else if("Upassword!=Cpassword."){
        alert("Password & Confirm Password don't match....")
        Cpassword.focus();
        return false;
    }
    else{
        alert("Your Registration is Successful.");
        return true;
    }
}

function Bookcheck(){
    let Uusername = document.getElementById("Uusername").value;
    let Uemail = document.getElementById("Uemail").value;
    let Udate = document.getElementById("Udate").value;
    let Utime = document.getElementById("Utime").value;
    let pattern=/^[a-z0-9._-]+@[a-z]+\.[a-z]{2,4}$/;
    if(Uemail==""||Uusername==""||Udate==""||Utime==""){
        alert("All field are mandatory, Please fill up all fill");
        return false;
    }
    else if(!Uemail.match(pattern)){
        alert("Please Enter Valid Email....");
        Uemail.focus();
        return false;
    }
    else{
        alert("Your Booking is Successful.");
        return true;
    }
}
