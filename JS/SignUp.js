function registerUser() {
    let username = document.querySelector('#user').value
    let pass = document.querySelector('#pass').value
    let cpass = document.querySelector('#cpass').value
    if (username == '' || pass == '') {
        alert('חסר נתונים')
    }
    else {
        if (cpass != pass) {
            alert('אימות סיסמא נכשל')
        }

        else {

            let user = {
                myusername: username,
                mypassword: pass,
                games: []

            }
            //תקבל את האוביקט של מפתח users
            let arr = JSON.parse(localStorage.getItem('users'))
            if (arr == undefined) {
                arr = [user]
            }
            else {
                //חיפוש האם המשתמש קיים כבר במערך השמור
                if (arr.find(u => u.myusername == user.myusername) == undefined){
                    arr.push(user)
                    alert('נרשמת בהצלחה! מזל טוב!')
                }
                else {
                    alert('משתמש קיים')
                }
            }
            //אחסון מחדש את המערך
            localStorage.setItem('users', JSON.stringify(arr))
            window.location.href = 'Log-In.html'
        }
    }
}