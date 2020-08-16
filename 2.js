function validation() {
    var uname = document.getElementById("unm").value;
    var psw = document.getElementById("pwd").value;

    var username = /^[A-Za-z0-9.@]{1,12}$/;
    var password = /^([A-Za-z0-9]{5,12})([@]{1,})([0-9]{1,})$/;

    if (username.test(uname))
     {
        document.getElementById("uvalidation1").innerHTML = "Valid";
        document.getElementById("uvalidation").style.visibility = "hidden";
    }
    else 
    {
        document.getElementById("uvalidation").innerHTML = "Invalid";   
    }
    if (password.test(psw)) {
        document.getElementById("pvalidation1").innerHTML = "Valid";
        document.getElementById("pvalidation").style.visibility = "hidden";
    }
    else {
        document.getElementById("pvalidation").innerHTML = "Invalid";
    }

}
