//הגדרת מערך שאלות ותשובות
let questions = [{
    question: "במשפחת יצחקי שלושה אחים: אבנר, אלי ואסף, ולהם שלוש תכונות: רמאי, יפה ואמיץ. שלושת האחים התיישבו לשחק קלפים. ידוע:אבנר לעולם לא מנצח. הרמאי תמיד מסיים אחרון. אסף הוא האמיץ. אם האח היפה ניצח , מה מתחייב?",
    answers: [{ ans: "אלי הגיע למקום השני." }, { ans: "אבנר הגיע למקום השני." }, { ans: "אלי הוא היפה.", correct: true }, { ans: "אלי הוא הרמאי." }],
    noanswer:'אני לא יודע'
}, {
    question: "איילת, העובדת החרוצה התבלבלה ושלחה מכתב לכתובת הלא נכונה. כשסיפרה על המקרה לחברתה שני, אמרה שנילא ניתן להוציא את הסוכר מהתה.  באיזה מהביטויים הבאים ניתן להחליף את דבריה של שני?",
    answers: [{ ans: 'ניתן להפוך את גלגלי הזמן.' }, { ans: 'אין טעם לבכות על חלב שנשפך.' }, { ans: 'לא כדאי להסתכל לאחור.' }, { ans: ' את הנעשה אין להשיב.', correct: true }],
    noanswer:'אני לא יודע'
}, {
    question: "מה האות הבאה?  ת, ח, כ,ט ,ש ,א ,נ ,א ,ס ,ת ,א, ___",
    answers: [{ ans: 'ב' }, { ans: 'ר' }, { ans: 'נ' }, { ans: "א", correct: true }],
    noanswer:'אני לא יודע'
}, {
    question: "מטוס התרסק בין הגבול של ישראל למצריים. איפה קברו את הניצולים?",
    answers: [{ ans: 'ישראל.' }, { ans: 'מצריים.' }, { ans: 'תלוי מה האזרחות שלהם.' }, { ans: "בשום מקום.", correct: true }],
    noanswer:'אני לא יודע'
}, {
    question: "",
    answers: [{ ans: '' }, { ans: '' }, { ans: '' }, { ans: "", correct: true }],
    noanswer:'אני לא יודע'
}, {
    question: "",
    answers: [{ ans: '' }, { ans: '' }, { ans: '' }, { ans: "", correct: true }],
    noanswer:'אני לא יודע'
}, {
    question: "",
    answers: [{ ans: '' }, { ans: '' }, { ans: '' }, { ans: "", correct: true }],
    noanswer:'אני לא יודע'
}]
let score = 0
let counter = 0
let noanswer = false


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
     
        //?
        answers[i].setAttribute('data-index', num)
        //?
        questions[counter].answers[num].selected = true

    }

}
//הפעלת הפונקציה
fillQuestion()
//פונקציה הפועלת בלחיצה על תשובה
function onClick() {
    //?
    if (noanswer) return
    //הוספת כלאס לשינוי צבע
    event.target.classList.add('colorclick')
    //?
    let num = event.target.dataset.index
    //?
    if (num == -1) {
        return
    }
    //במידה והתשובה נכונה: 
    if (questions[counter].answers[num].correct) {
        score += 100
    }
    //במידה והתשובה לא נכונה:
    else {
        score -= 20
    }
    //במידה ולחוצה תשובה-א"א ללחוץ שוב
    noanswer = true;
    //לאחר זמן השאלה מתחלפת
    setTimeout(_ => {
        //הגדרה במערך למקום הבא
        counter++
        //הגעה לסוף המערך
        if (counter == questions.length)
            //קישור לדף סיכום
            window.open('end.html')
        //בשאלה החדשה מסיר את פעולת הצבע
        document.querySelector('.colorclick').classList.remove('colorclick')
        //?
        noanswer = false
        //הפעלת פונקצית מילוי השאלות
        fillQuestion()
    }, 500)
    //הדפסת הנקודות
    console.log(score)
}