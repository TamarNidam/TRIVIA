function loginuser() {
    let username = document.querySelector('#user').value
    let pass = document.querySelector('#pass').value
    let user = {
        myusername: username,
        mypassword: pass
    }

    let arr = JSON.parse(localStorage.getItem('users'))

    if (arr == undefined) {
        //לעבור לדף אחר בדפדפן
        window.location.href ='register.html'
    }
    else {
        //מציאת המשתמש הנוכחי
        let currentuser = arr.find(u => u.myusername == user.myusername && u.mypassword == user.mypassword)
        if (currentuser == undefined)
            alert('נתונים לא נכונים')
        else {

            for(let i =0; i<arr.length; i++){
                if(arr[i].myusername == user.myusername && arr[i].mypassword == user.mypassword){
                    //שמירת האינדקס של המשתמש הנוכחי בזכרון
                    localStorage.setItem('currentUser', i)
                      //לעבור לדף משחק בדפדפן
                    window.location.href ='game.html'
                    break;
                }

            }
         
        }
    }



}