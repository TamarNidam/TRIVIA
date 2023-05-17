//הגדרת מערך שאלות ותשובות
let data =
    [{
        level: 1,
        questions: [{
            question: "במשפחת יצחקי שלושה אחים: אבנר, אלי ואסף, ולהם שלוש תכונות: רמאי, יפה ואמיץ. שלושת האחים התיישבו לשחק קלפים. ידוע:אבנר לעולם לא מנצח. הרמאי תמיד מסיים אחרון. אסף הוא האמיץ. אם האח היפה ניצח , מה מתחייב?",
            answers: [{ ans: "אלי הגיע למקום השני." }, { ans: "אבנר הגיע למקום השני." }, { ans: "אלי הוא היפה.", correct: true }, { ans: "אלי הוא הרמאי." }],
        }, {
            question: "איילת, העובדת החרוצה התבלבלה ושלחה מכתב לכתובת הלא נכונה. כשסיפרה על המקרה לחברתה שני, אמרה שני שלא ניתן להוציא את הסוכר מהתה.  באיזה מהביטויים הבאים ניתן להחליף את דבריה של שני?",
            answers: [{ ans: 'ניתן להפוך את גלגלי הזמן.' }, { ans: 'אין טעם לבכות על חלב שנשפך.' }, { ans: 'לא כדאי להסתכל לאחור.' }, { ans: ' את הנעשה אין להשיב.', correct: true }],

        }, {
            question: "מה האות הבאה?  ת, ח, כ,ט ,ש ,א ,נ ,א ,ס ,ת ,א, ___",
            answers: [{ ans: 'ב' }, { ans: 'ר' }, { ans: 'נ' }, { ans: "א", correct: true }],

        }, {
            question: "מטוס התרסק בין הגבול של ישראל למצריים. איפה קברו את הניצולים?",
            answers: [{ ans: 'ישראל.' }, { ans: 'מצריים.' }, { ans: 'תלוי מה האזרחות שלהם.' }, { ans: "בשום מקום.", correct: true }],

        }, {
            question: "היכן נולד אלברט איינשטיין?",
            answers: [{ ans: 'בלגיה' }, { ans: 'אוסטריה' }, { ans: 'שוויץ' }, { ans: "גרמניה", correct: true }],

        }, {
            question: "על איזו ממלכה עתיקה שלטה בעבר שושלת בית תלמי?",
            answers: [{ ans: 'פרס' }, { ans: 'יוון' }, { ans: 'תאילנד' }, { ans: "מצרים", correct: true }],

        }, {
            question: "שאלה מתנה",
            answers: [{ ans: 'לא נכון' }, { ans: 'לא נכון' }, { ans: 'כל התשובות נכונות' }, { ans: "נכון", correct: true }],
        }, {
            question: "נחש מהי התשובה הנכונה",
            answers: [{ ans: '' }, { ans: '' }, { ans: '' }, { ans: "", correct: true }],
        }, {
            question: "דנה בת 4 ואחותה שילת היא פי שניים מגילה. מה יהי גילה של דנה עוד שנתיים?",
            answers: [{ ans: '12' }, { ans: 'כגילה של שילת' }, { ans: '10' }, { ans: "6", correct: true }],
        }, {
            question: "דנה בת 4 ואחותה שילת היא פי שניים מגילה. מה יהי גילה של שילת כשדנה תיהיה בת שנתיים?",
            answers: [{ ans: '4' }, { ans: '15' }, { ans: '6' }, { ans: "אין תשובה נכונה", correct: true }],
        }]
    }, {
        level: 2,
        questions: [{
            question: "מי שאל העוד אבי חי?",
            answers: [{ ans: "דוד" }, { ans: "אברהם" }, { ans: "יוסף", correct: true }, { ans: "משה" }],
        }, {
            question: "איזה נביא ראה את חורבן בית המקדש?",
            answers: [{ ans: 'ישעיה' }, { ans: 'חגי' }, { ans: 'שמואל' }, { ans: 'ירמיה', correct: true }],

        }, {
            question: "כמה שנים יעקב היה אצל לבן?",
            answers: [{ ans: '10 שנים' }, { ans: '5 שנים' }, { ans: '15 שנה' }, { ans: "20 שנה", correct: true }],

        }, {
            question: "כי היא היתה אם כל חי-מי?",
            answers: [{ ans: 'שרה' }, { ans: 'דינה' }, { ans: 'רחל' }, { ans: "חוה", correct: true }],

        }, {
            question: "מי הם אחימן, ששי ותלמי?",
            answers: [{ ans: 'המואבים' }, { ans: 'הכנענים' }, { ans: 'העמלקים' }, { ans: "הענקים", correct: true }],

        }, {
            question: "מה נברא ביום השני?",
            answers: [{ ans: 'החיות והבהמות' }, { ans: 'הצמחים' }, { ans: 'הדגים' }, { ans: "השמיים", correct: true }],

        }, {
            question: "מאיזה שבט היה יהושע?",
            answers: [{ ans: 'לוי' }, { ans: 'זבולון' }, { ans: 'יהודה' }, { ans: "אפרים", correct: true }],
        }, {
            question: "באיזה יום נבראו התנינים?",
            answers: [{ ans: 'שני' }, { ans: 'שלישי' }, { ans: 'ראשון' }, { ans: "חמישי", correct: true }],
        }, {
            question: "מי ביקש אתונות וזכה למלוכה?",
            answers: [{ ans: 'שלמה' }, { ans: 'דוד' }, { ans: 'ירבעם' }, { ans: "שאול", correct: true }],
        }, {
            question: "מאיזה עץ תפרו אדם וחוה חגורות?",
            answers: [{ ans: 'גפן' }, { ans: 'זית' }, { ans: 'רימון' }, { ans: "תאנה", correct: true }],

        }]
    }, {
        level: 3,
        questions: [{
            question: "באיזה סרט של חברת דיסני נכלל השיר 'when you wish upon a star'?",
            answers: [{ ans: "מולאן" }, { ans: "הרקולס" }, { ans: "פינוקיו", correct: true }, { ans: "מלך האריות" }],
        }, {
            question: 'מי כתב את הספר "חצוצרה בוואדי"? ',
            answers: [{ ans: 'חיים באר ' }, { ans: 'יוסי אלפי ' }, { ans: 'אורי אורבך' }, { ans: "סמי מיכאל ", correct: true }],

        }, {
            question: "מהי עיר הבירה של ירדן?",
            answers: [{ ans: 'עקבה' }, { ans: 'ביירות' }, { ans: 'פטרה ' }, { ans: " עמאן ", correct: true }],

        }, {
            question: "באיזו שנה הומצאה הטובה המודרנית? ",
            answers: [{ ans: '1635' }, { ans: '1935' }, { ans: '1675' }, { ans: "1835 ", correct: true }],

        }, {
            question: "מהו הרכיב העיקרי של צבעי פסטל רכים? ",
            answers: [{ ans: 'דבק ' }, { ans: 'פחם ' }, { ans: 'גיר' }, { ans: "שמן", correct: true }],

        }, {
            question: "באיזו עיר התרחשה תאונת הדרכים הקטלנית שבה נהרגה הנסיכה דיאנה? ",
            answers: [{ ans: 'אמסטרדם' }, { ans: 'ברצלונה ' }, { ans: 'לונדון' }, { ans: "פריז ", correct: true }],

        }, {
            question: "כמה שפות רשמיות יש במדינת דרום אפריקה?",
            answers: [{ ans: '16 ' }, { ans: '6 ' }, { ans: '1' }, { ans: "11 ", correct: true }],
        }, {
            question: "מה צבע השמלות המסורתי של נשים סיניות ביום החתונה שלהן?",
            answers: [{ ans: 'ורוד ' }, { ans: 'צהוב' }, { ans: 'כתום' }, { ans: "אדום ", correct: true }],
        }, {
            question: "איזו מדינה גובלת בגרמניה, צ'כיה, סלובקיה ואוקראינה?",
            answers: [{ ans: 'אסטוניה' }, { ans: 'מקדוניה' }, { ans: 'רומניה' }, { ans: "פולין ", correct: true }],
        }, {
            question: "איזו אישיות מפורסמת נורתה מחוץ למלון הילטון בוושינגטון ב-30 במרץ 1981? ",
            answers: [{ ans: "ג'ון לנון " }, { ans: 'נשיא ארה"ב גון פ. קנדי' }, { ans: " ג'ון הינקלי הבן" }, { ans: 'נשיא ארה"ב רונלד רייגן ', correct: true }],
        }, {
            question: "תרופות מסוג פניצילין נלחמות בזיהומים מסוג...",
            answers: [{ ans: 'טפילים' }, { ans: 'וירוסים' }, { ans: 'כל התשובות נכונות ' }, { ans: "חיידקים ", correct: true }],
        }]
    }, {
        level: 4,
        questions: [{
            question: "איזו מבין מהאפליקציות הבאות אינה פיתוח ישראלי? ",
            answers: [{ ans: "וייז - Waze" }, { ans: "וייבר- VIber" }, { ans: "ואטספ- Whatsapp", correct: true }, { ans: "גט-טקסי - Get Texi" }],
        }, {
            question: 'מי היה הרמטכ"ל בזמן שחרור הכותל במלחמת ששת הימים?',
            answers: [{ ans: ' לוי אשכול' }, { ans: 'משה דיין' }, { ans: 'אריאל שרון ' }, { ans: "יצחק רבין ", correct: true }],

        }, {
            question: "כמה שרות מכהנות בכנסת ה-20 – הממשלה ה-34 (בין השנים 2015-2019)?",
            answers: [{ ans: '3' }, { ans: '7' }, { ans: '4' }, { ans: "5", correct: true }],

        }, {
            question: "מי הוא מלך השערים של ליגת העל בכל הזמנים?",
            answers: [{ ans: 'משה רומנו ' }, { ans: 'עודד מכנס' }, { ans: ' אבי נמני ' }, { ans: "אלון מזרחי ", correct: true }],

        }, {
            question: "מי היה הנשיא הרביעי של מדינת ישראל?",
            answers: [{ ans: ' חיים הרצוג ' }, { ans: ' יצחק נבון' }, { ans: 'זלמן שזר' }, { ans: "אפרים קציר ", correct: true }],

        }, {
            question: "דמותו של מי מופיעה על שטר ה-100 שקלים החדש?",
            answers: [{ ans: ' שאול טשרניחובסקי ' }, { ans: 'רחל המשוררת' }, { ans: ' נתן אלתרמן ' }, { ans: "לאה גולדברג", correct: true }],

        }, {
            question: "באיזה ענף ספורט לא קיבלה ישראל מדליה אולימפית (נכון לשנת 2019)?",
            answers: [{ ans: " ג'ודו " }, { ans: 'קאנו\קיאק' }, { ans: 'שייט' }, { ans: "שחייה ", correct: true }],

        }]
    }]
let score = 0
let counter = 0
let userlevel = 1
let gamelevel = {}
let correct = 0
let uncorrect = 0
let timer = 0

let arr = JSON.parse(localStorage.getItem('users'))
let index = JSON.parse(localStorage.getItem('currentUser'))
let user = arr[index]

//שלב המשתמש

userlevel = user.selectedlevel
if (user.games[userlevel - 1]) {
    let lastgame = user.games[userlevel - 1]
    if (parseInt(lastgame.answers) + parseInt(lastgame.notcorrect) == data.find(d => d.level == userlevel).questions.length) {
        lastgame = game = {
            scores: 0,
            times: 0

        }
    }
    else {

        game = arr[index].games[userlevel - 1]
        correct = +game.answers
        uncorrect = +game.notcorrect
        counter = correct + uncorrect

    }
}
else {

    userlevel = user.games.length + 1
    game = {
        scores: 0,
        times: 0

    }
    arr[index].games.push(game)
    localStorage.setItem('users', JSON.stringify(arr))
}

     // if (user.games.length > 0) {
     //     let lastgame = user.games[user.games.length - 1]
     //     let level = user.games.length
     //     if (parseInt(lastgame.answers) + parseInt(lastgame.notcorrect) == data.find(d => d.level == level).questions.length) {
     //         userlevel = user.games.length + 1
     //         game = {
     //             scores: 0,
     //             times: 0
     
     //         }
     //         arr[index].games.push(game)
     //         localStorage.setItem('users', JSON.stringify(arr))
     //     }
     //     else {
     
     //         userlevel = user.games.length
     //         game = arr[index].games[userlevel - 1]
     //         correct = +game.answers
     //         uncorrect = +game.notcorrect
     //         counter = correct + uncorrect
     //     }
     // }
     // else {
     
     //     userlevel = user.games.length + 1
     //     game = {
     //         scores: 0,
     //         times: 0
     
     //     }
     //     arr[index].games.push(game)
     //     localStorage.setItem('users', JSON.stringify(arr))
     // }




//פתיחת המשתמש הנוכחי
//פונקציה של מעבר השאלות
function fillQuestion() {
    //לקיחת נתוני המערך



    gamelevel = data.find(d => d.level == userlevel)
    if (gamelevel) {
        if (document.querySelector('.q')) {
            document.querySelector('.q').innerHTML = gamelevel.questions[counter].question
            //בחירת כל התשובות מהשאלה במערך
            let answers = document.querySelectorAll('.ans')
            //סידור התשובות בצורה רנדומלית
            for (let i = 0; i < 4; i++) {
                let num = Math.floor(Math.random() * 4)
                //בדיקה אם מספר התשובה הוגרל כבר
                while (gamelevel.questions[counter].answers[num].selected)
                    num = Math.floor(Math.random() * 4)
                //הצבת התשובה מהמערך
                answers[i].innerHTML = gamelevel.questions[counter].answers[num].ans

                //מציב את התשובה לפי המיקום במערך
                answers[i].setAttribute('data-index', num)
                //ע"מ שלא יבחר פעמיים אותו דבר
                gamelevel.questions[counter].answers[num].selected = true

            }
        }
        else {

            alert('לא נמצאה הרמה')
        }
    }

}
//הפעלת הפונקציה
fillQuestion()



//פונקציה הפועלת בלחיצה על תשובה
function onClick() {
    //צליל
    document.querySelector('#two').play()
    //הוספת כלאס לשינוי צבע
    event.target.classList.add('colorclick')
    //מוציא את מיקום השאלה במערך
    let num = event.target.dataset.index
    if (num == -1) {
        return
    }
    //במידה והתשובה נכונה: 
    if (gamelevel.questions[counter].answers[num].correct) {
        correct++;
        score += 12.5
    }
    //במידה והתשובה לא נכונה:
    else {
        uncorrect++
    }
    //לאחר זמן השאלה מתחלפת
    setTimeout(_ => {
        //הגדרה במערך למקום הבא
        counter++
        //הגעה לסוף המערך
        if (counter == gamelevel.questions.length) {
            let arr = JSON.parse(localStorage.getItem('users'))
            //עדכון הערכים שלו
            let min = parseInt(timer / 60);
            let sec = parseInt(timer) % 60

            arr[index].times = `${min}:${sec}`
            arr[index].games[userlevel - 1].times = `${min}:${sec}`
            //אחסון הנתונים מחדש בזכרון
            localStorage.setItem('users', JSON.stringify(arr))
            //קישור לדף סיכום
            clearInterval(x)
            window.location.href = 'End.html'

        }
        //בשאלה החדשה מסיר את פעולת הצבע
        document.querySelector('.colorclick').classList.remove('colorclick')
        //הפעלת פונקצית מילוי השאלות
        fillQuestion()
    }, 500)
    //הדפסת הנקודות
    console.log(score)

    //שליפת המשתמש מהזכרון
    let arr = JSON.parse(localStorage.getItem('users'))
    //עדכון הערכים שלו
    arr[index].games[userlevel - 1].scores = score
    arr[index].games[userlevel - 1].answers = correct
    arr[index].games[userlevel - 1].notcorrect = uncorrect
    //אחסון הנתונים מחדש בזכרון
    localStorage.setItem('users', JSON.stringify(arr))

}

let x = window.setInterval(_ => {
    timer++;
    score -= 0.05
    //הצגת הדקות והשניות
    let min = parseInt(timer / 60)
    let sec = parseInt(timer) % 60
    document.querySelector('#timer').innerHTML = `${min}:${sec.toString().padStart(2, `0`)}`
    if (timer == 180) {
        let a = timer

        clearInterval(x)
        document.querySelector('.c_question').innerHTML = '!!המשחק נגמר'
        document.querySelector('#end_game').play()
        window.location.href = 'End.html'

    }
}, 1000)
