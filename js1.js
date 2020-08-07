// function verify() {
//     alert(val.toString()+" "+fname+" "+lname+" "+pass1+" "+email);
//     alert(document.getElementById("otp").value);
//     if(val.toString().localeCompare(document.getElementById("otp").value)==0) {
//         alert("Success");
//         window.location="login.html";
//         return false;
//     }
//     alert("fail");
// }
function func() {
    var fname, lname, pass1, email, otp;
    fname=document.getElementById("exampleInputFirstName1").value;
    lname=document.getElementById("exampleInputLastName1").value;
    pass1=document.getElementById("exampleInputPassword1").value;
    pass2=document.getElementById("exampleInputPassword2").value;
    email=document.getElementById('exampleInputEmail1').value;
    document.getElementById("regForm").action="genotp/"+email;
    if(fname.length==0 || lname.length==0 || pass1.length==0 || pass2.length==0) {
        alert("All fields are mandatory!");
        return false;
    }
    if(pass1.localeCompare(pass2)!=0) {
        alert("Passwords don't match!");
        return false;
    }
    return true;

    // Email.send({
    //     Host: "smtp.gmail.com",
    //     Username: "assignments.nirma@gmail.com",
    //     Password: "Assignments@123",
    //     To : email,
    //     From : "assignments.nirma@gmail.com",
    //     Subject : "OTP for assignment portal",
    //     Body : "Hey "+fname+"! Your OTP is "+(val.toString())
    // });
    // alert(document.getElementById('OTP').value);
    // alert(val.toString());
    // document.body.innerHTML="<div class='container-fluid'><section class='row justify-content-center'>"+
    //         "<form class='form-container' method='post'>"+
    //             "<h1><section style='color: rgb(207, 207, 207); text-align: center; color: rgb(36, 36, 36);'>Enter OTP</section></h1>"+
    //             "<div class='control-group custom-control-inline'>"+
    //                 "<label for='exampleInputFirstName1'>OTP: </label>"+
    //             "</div>"+
    //             "<div class='control-group custom-control-inline'>"+
    //                     "<input type='text' class='form-control' id='otp'>"+
    //             "</div>"+
    //             "<div class='col-md-12 text-center'>"+
    //                 "<button type='submit' class='btn btn-primary btn-block' onclick='return verify()'>Submit</button>"+
    //             "</div>"+
    //          "</form>"+
    //     "</div>";
    // return false;
}