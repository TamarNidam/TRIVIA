function loginuser() {
    let username = document.querySelector('#user').value
    let pass = document.querySelector('#pass').value

    let arr = JSON.parse(localStorage.getItem('users'))

    if (arr == undefined) {
        //לעבור לדף אחר בדפדפן
        alert('משתמש לא נמצא')
        window.location.href ='Sign-Up.html'
    }

    else {
  //מציאת המשתמש הנוכחי
        let currentuser = arr.find(u => u.myusername == username && u.mypassword == pass)
        if (currentuser == undefined)
            alert('נתונים לא נכונים')
        else {

            for(let i =0; i<arr.length; i++){
                if(arr[i].myusername == username && arr[i].mypassword == pass){
                    //שמירת האינדקס של המשתמש הנוכחי בזכרון
                    localStorage.setItem('currentUser', i)
                      //לעבור לדף משחק בדפדפן
                    window.location.href ='Rules.html'
                    break;
                }

            }
         
        }
    }



}