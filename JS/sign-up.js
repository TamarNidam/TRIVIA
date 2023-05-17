function registerUser() {
    let username = document.querySelector('#user').value
    let pass = document.querySelector('#pass').value

    let user = {
        myusername: username,
        mypassword: pass
    }
    //תקבל את האוביקט של מפתח users
    let arr = JSON.parse(localStorage.getItem('users'))
    if (arr == undefined) {
        arr = [user]
    }
    else {
        //חיפוש האם המשתמש קיים כבר במערך השמור
        if (arr.find(u => u.myusername == user.myusername) == undefined)
            arr.push(user)
        else {
            alert('user exsits')
        }
    }
    //אחסון מחדש את המערך
    localStorage.setItem('users', JSON.stringify(arr))

}