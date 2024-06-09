function validate(){
    var user=document.myform.username.value
    var pass=document.myform.password.value

    if(user==null || user==''){
        alert("All fields are required")
}
else if(pass.length<6){
    alert("password must be atleast 6")
}
}