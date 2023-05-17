//הגדרת מערך שאלות ותשובות
let questions = [{
    question: "מי שאל העוד אבי חי?",
    answers: [{ ans: "דוד" }, { ans: "אברהם" }, { ans: "יוסף", correct: true }, { ans: "משה" }],
    // noanswer: "אני לא יודע"
}, {
    question: "איזה נביא ראה את חורבן בית המקדש?",
    answers: [{ ans: 'ישעיה' }, { ans: 'חגי' }, { ans: 'שמואל' }, { ans: 'ירמיה', correct: true }],
    // noanswer: 'אני לא יודע'
}, {
    question: "כמה שנים יעקב היה אצל לבן?",
    answers: [{ ans: '10 שנים' }, { ans: '5 שנים' }, { ans: '15 שנה' }, { ans: "20 שנה", correct: true }],
    // noanswer: 'אני לא יודע'
}, {
    question: "כי היא היתה אם כל חי-מי?",
    answers: [{ ans: 'שרה' }, { ans: 'דינה' }, { ans: 'רחל' }, { ans: "חוה", correct: true }],
    // noanswer: 'אני לא יודע'
}, {
    question: "מי הם אחימן, ששי ותלמי?",
    answers:
    // noanswer: 'אני לא יודע'
}, {
    question: "מה נברא ביום השני?",
    answers: [{ ans: 'החיות והבהמות' }, { ans: 'הצמחים' }, { ans: 'הדגים' }, { ans: "השמיים", correct: true }],
    // noanswer: 'אני לא יודע'
}, {
    question: "מאיזה שבט היה יהושע?",
    answers: [{ ans: 'לוי' }, { ans: 'זבולון' }, { ans: 'יהודה' }, { ans: "אפרים", correct: true }],
    // noanswer: 'אני לא יודע'
}, {
    question: "באיזה יום נבראו התנינים?",
    answers: [{ ans: 'שני' }, { ans: 'שלישי' }, { ans: 'ראשון' }, { ans: "חמישי", correct: true }],
    // noanswer: 'אני לא יודע'
}, {
    question: "מי ביקש אתונות וזכה למלוכה?",
    answers: [{ ans: 'שלמה' }, { ans: 'דוד' }, { ans: 'ירבעם' }, { ans: "שאול", correct: true }],
    // noanswer: 'אני לא יודע'
}, {
    question: "מאיזה עץ תפרו אדם וחוה חגורות?",
    answers: [{ ans: 'גפן' }, { ans: 'זית' }, { ans: 'רימון' }, { ans: "תאנה", correct: true }],
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
