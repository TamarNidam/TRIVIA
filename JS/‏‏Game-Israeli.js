//הגדרת מערך שאלות ותשובות
let questions = [{
    question: "מי הייתה אשתו של בועז?",
    answers: [{ ans: '' }, { ans: '' }, { ans: '' }, { ans: '', correct: true }],
    // noanswer: 'אני לא יודע'
}, {
    question: "s",
    answers: [{ ans: '' }, { ans: '' }, { ans: '' }, { ans: "", correct: true }],
    // noanswer: 'אני לא יודע'
}, {
    question: "s",
    answers: [{ ans: '' }, { ans: '' }, { ans: '' }, { ans: "", correct: true }],
    // noanswer: 'אני לא יודע'
}, {
    question: "s",
    answers: [{ ans: '' }, { ans: '' }, { ans: '' }, { ans: "", correct: true }],
    // noanswer: 'אני לא יודע'
}, {
    question: "a",
    answers: [{ ans: '' }, { ans: '' }, { ans: '' }, { ans: "", correct: true }],
    // noanswer: 'אני לא יודע'
}, {
    question: "s",
    answers: [{ ans: '' }, { ans: '' }, { ans: '' }, { ans: "", correct: true }],
    // noanswer: 'אני לא יודע'
}, {
    question: "s",
    answers: [{ ans: '' }, { ans: '' }, { ans: '' }, { ans: "", correct: true }],
    // noanswer: 'אני לא יודע'
}, {
    question: "s",
    answers: [{ ans: '' }, { ans: '' }, { ans: '' }, { ans: "", correct: true }],
    // noanswer: 'אני לא יודע'
}, {
    question: "s",
    answers: [{ ans: '' }, { ans: '' }, { ans: '' }, { ans: "", correct: true }],
    // noanswer: 'אני לא יודע'
}, {
    question: "d",
    answers: [{ ans: '' }, { ans: '' }, { ans: '' }, { ans: "", correct: true }],
    // noanswer: 'אני לא יודע'
}]
let score = 0
let counter = 0
// let noanswer = false
//טיימר של 300 שניות
let timer=0
let a=0
//פונקציה של מעבר השאלות
function fillQuestion() {
    //הצגת השאלה מהמערך
    document.querySelector('.q').innerHTML = questions[counter].question
    //בחירת כל התשובות מהשאלה במערך
    let answers = document.querySelectorAll('.ans')
    //סידור התשובות בצורה רנדומלית
    for (let i = 0; i < 4; i++) {
        let num = Math.floor(Math.random() * 4)
        //בדיקה אם מספר התשובה הוגרל כבר
        while (questions[counter].answers[num].selected)
            num = Math.floor(Math.random() * 4)
        //הצבת התשובה מהמערך
        answers[i].innerHTML = questions[counter].answers[num].ans

        //מציב את התשובה לפי המיקום במערך
        answers[i].setAttribute('data-index', num)
        //ע"מ שלא יבחר פעמיים אותו דבר
        questions[counter].answers[num].selected = true

    }

    // answers[4].innerHTML = questions[counter].noanswer
    answers[4].setAttribute('data-index', '-1')
}
//הפעלת הפונקציה
fillQuestion()
//פונקציה הפועלת בלחיצה על תשובה
function onClick() {
    //?
    // if (noanswer) {  
    //      return
    // }
      
    //הוספת כלאס לשינוי צבע
    event.target.classList.add('colorclick')
    //מוציא את מיקום השאלה במערך
    let num = event.target.dataset.index
    //אם לחץ לא יודע
    if (num == -1) {
        return
    }
    //במידה והתשובה נכונה: 
    if (questions[counter].answers[num].correct) {
        score += 100
    
    }
    // else if(questions[counter].noanswers){
    //     score-=5
    // }
    //במידה והתשובה לא נכונה:
    else {
        score -= 50
        
    }
    // noanswer = true;
    //לאחר זמן השאלה מתחלפת
    setTimeout(_ => {
        //הגדרה במערך למקום הבא
        counter++
        //הגעה לסוף המערך
        if (counter == questions.length){
             //קישור לדף סיכום
            window.open('../HTML/End.html')
            let a=timer
            console.log('a=')
            console.log(a)
        }
           
        //בשאלה החדשה מסיר את פעולת הצבע
        document.querySelector('.colorclick').classList.remove('colorclick')
        // noanswer = false;
        //הפעלת פונקצית מילוי השאלות
        fillQuestion()
    }, 500)
    //הדפסת הנקודות
    console.log(score)
}

//פונקציה של הורדת השניות
let x=window.setInterval(_=>{
    timer++;
    //הצגת הדקות והשניות
    let min=parseInt(timer/60)
    let sec=timer%60
    document.querySelector('#timer').innerHTML=`${min}:${sec.toString().padStart(2, `0`)}`
    if(timer==300){
        let a=timer
        clearInterval(x)
        window.open('../HTML/End.html')

    }
},1000)
function rama(){
    document.querySelector('.f').innerHTML = `${a}/5`
}
