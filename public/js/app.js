

function kiemTraDangNhap(){
    if(validataUsername()){
        return true;
    }
    else{
        return false;
    }
}

function validataUsername(){
    const input = document.querySelector('#username');
    const regex = /^\w{6,}$/;
    if(regex.test(input.value)){
        return true;
    }
    else{
        alert ('Loi username!!!');
        return false;
    }
}