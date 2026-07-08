
function checkAuth(){
    const sessions = JSON.parse(sessionStorage.getItem('sessions'))
    
    if(!sessions) {
        location.href = './auth/login/login.html'
        return;
    }
}

checkAuth()