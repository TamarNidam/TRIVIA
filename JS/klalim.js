//להוציא נתונים מהזכרון המקומי
let index = JSON.parse(localStorage.getItem('currentUser'))
//הוצאת כל המערך של המשתמשים
let arr = JSON.parse(localStorage.getItem('users'))
let user = arr[index]
document.querySelector('#user').innerHTML = user.myusername