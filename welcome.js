let User_reg = JSON.parse(localStorage.getItem('userreg'));
let Admin_reg = JSON.parse(localStorage.getItem('adminreg'));
if(!User_reg || !Admin_reg){
    window.location.href = "welcome.html";
}