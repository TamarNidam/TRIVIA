//להוציא נתונים מהזכרון המקומי
let index = JSON.parse(localStorage.getItem('currentUser'))
//הוצאת כל המערך של המשתמשים
let arr = JSON.parse(localStorage.getItem('users'))
let user = arr[index]
document.querySelector('#user').innerHTML = user.myusername
document.querySelector('#time').innerHTML = user.games[user.games.length-1].times
document.querySelector('#numOfQ').innerHTML = user.games[user.games.length-1].answers

let times = user.games[user.games.length-1].times
let correct = user.games[user.games.length-1].answers
let uncorrect = user.games[user.games.length-1].notcorrect
let score=user.games[user.games.length-1].scores

if(score<=25){
    
    document.querySelector('#satum').classList.add('rama')
}
if(score<=75&&score>25){
    
    document.querySelector('#normal').classList.add('rama')
}
if(score<=100&&score>75){
    
    document.querySelector('#haham').classList.add('rama')
}
if(score>=100){
    document.querySelector('#gaon').classList.add('rama')
}



