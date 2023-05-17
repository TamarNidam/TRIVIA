let arr = JSON.parse(localStorage.getItem('users'))
let index = JSON.parse(localStorage.getItem('currentUser'))
let user = arr[index]

if (user.games.length >= 0 ) {
    document.querySelectorAll('.games')[0].classList.add('permit')
}
if (user.games.length >= 1) {
    document.querySelectorAll('.games')[1].classList.add('permit')
}
if (user.games.length >= 2) {
    document.querySelectorAll('.games')[2].classList.add('permit')
}

if (user.games.length >= 3) {
    document.querySelectorAll('.games')[3].classList.add('permit')
}


document.querySelectorAll('.permit').forEach((p, i) => {
    p.addEventListener('click', _ => {
        user.selectedlevel = i+1
        localStorage.setItem('users',JSON.stringify( arr))
    }
    )
})


