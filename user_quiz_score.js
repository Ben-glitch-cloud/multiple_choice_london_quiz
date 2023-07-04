function scoreResultMessage(userScore){
    if(userScore === 12){ return 'A Perfect Score'}
    if(userScore < 11 &&  userScore >= 9){ return 'A Great Score'}
    if(userScore < 9 && userScore >= 7){ return 'Good Score'}
    if(userScore < 7 && userScore >= 4){ return 'Not a score Bad'}
    if(userScore < 4){ return 'Terrible Score'}
}

function showResults(AnswersList, QandAList){
    formConatiner.style.display = 'none'
    questionContainer.style.display = 'none'
    let endOfMessageQuiz = document.createElement('p'), userScore = document.createElement("p")
    showUserQuizResults.setAttribute("id", "userQuizResults")
    showUserQuizResults.setAttribute("class", "userQuizResults")
    userScore.setAttribute("id", "userScore")
    let overAllScore = 0
    for(let i = 0; i < QandAList.length; i++){if(QandAList[i]['AnswerIndex'] === AnswersList[i]){overAllScore++}}
    userScore.textContent = `${overAllScore} / 12`
    endOfMessageQuiz.textContent = scoreResultMessage(overAllScore)
    showUserQuizResults.appendChild(userScore)
    showUserQuizResults.appendChild(endOfMessageQuiz)
    showUserQuizResultsContainer.appendChild(showUserQuizResults)
    document.body.appendChild(showUserQuizResultsContainer)
    document.body.appendChild(returnHomeButtonContainer)
}

function displayTitleOfWrongList(){
    let titleWrongUserAnswersCon = document.createElement('div'), titleWrongUserAnswers = document.createElement('h3')
    titleWrongUserAnswersCon.setAttribute('id', 'titleWrongUserAnswersCon')
    titleWrongUserAnswersCon.setAttribute('class', 'titleWrongUserAnswersCon')
    titleWrongUserAnswers.setAttribute('id', 'titleWrongUserAnswers')
    titleWrongUserAnswers.setAttribute('class', 'titleWrongUserAnswers')
    titleWrongUserAnswers.textContent = 'Where did you go Wrong?'
    titleWrongUserAnswersCon.appendChild(titleWrongUserAnswers)
    document.body.appendChild(titleWrongUserAnswersCon)
}

function showWrongQuestionsList(AnswersList, QandAList){
    let wrongAnswerFound = false
    let returnAnswerToWrongQuestionsCon = document.createElement('div')
    returnAnswerToWrongQuestionsCon.setAttribute('class', 'wrongQuestionsContainer')
    returnAnswerToWrongQuestionsCon.setAttribute('id', 'wrongQuestionsContainer')

    for(let i = 0; i < AnswersList.length; i++){
        if(AnswersList[i] !== QandAList[i]['AnswerIndex'] && !Array.isArray(QandAList[i]['AnswerIndex'])){
            wrongAnswerFound = true
            let userIndexAnswer = AnswersList[i]
            let answerExspandedContaner = document.createElement('div'), answerBorderBreak = document.createElement('div')
            answerExspandedContaner.setAttribute('class', 'answerContainer')
            answerExspandedContaner.setAttribute('id', 'answerContainer')
            answerBorderBreak.setAttribute('class', 'answerBorderBreak')
            let answerShownToUsers = document.createElement('p'), answerExspandedText = document.createElement('p')
            let userAnswer = document.createElement('p'), corrertAnswer = document.createElement('p')
            answerShownToUsers.innerHTML = `<b>Question Asked:</b> ${QandAList[i]['questionString']}`
            if(QandAList[i]['arrayOfAnswers'][userIndexAnswer] === undefined){
                userAnswer.textContent = "You skiped this Question"
            } else {
                userAnswer.innerHTML = `<b>Your answer</b> : ${QandAList[i]['arrayOfAnswers'][userIndexAnswer]}`
            }
            let storedAnswer = QandAList[i]['AnswerIndex']
            corrertAnswer.innerHTML = `<b>Correct answer</b> : ${QandAList[i]['arrayOfAnswers'][storedAnswer]}`
            answerExspandedText.innerHTML = `<b>Explanation</b> : ${QandAList[i]['explanationToIncorrectAns']}`
            answerExspandedContaner.appendChild(answerShownToUsers)
            answerExspandedContaner.appendChild(userAnswer)
            answerExspandedContaner.appendChild(corrertAnswer)
            answerExspandedContaner.appendChild(answerExspandedText) 
            answerExspandedContaner.appendChild(answerBorderBreak) 
            returnAnswerToWrongQuestionsCon.appendChild(answerExspandedContaner)
        } else if(Array.isArray(QandAList[i]['AnswerIndex'])){

            let userAnswerString = ""
            let storedAnswerString = ""

            storedAnswerString = QandAList[i]['AnswerIndex'].map((item) => QandAList[i]['arrayOfAnswers'][item]).join(', ')
            userAnswerString = AnswersList[i].map((item) => QandAList[i]['arrayOfAnswers'][item]).join(', ')
            console.log(storedAnswerString, userAnswerString)

            if(storedAnswerString !== userAnswerString){
                answerExspandedContaner = document.createElement('div'), answerBorderBreak = document.createElement('div')
                answerExspandedContaner.setAttribute('class', 'answerContainer')
                answerExspandedContaner.setAttribute('id', 'answerContainer')
                answerBorderBreak.setAttribute('class', 'answerBorderBreak')
                answerShownToUsers = document.createElement('p'), answerExspandedText = document.createElement('p')
                userAnswer = document.createElement('p'), corrertAnswer = document.createElement('p')
                answerShownToUsers.innerHTML = `<b>Question Asked:</b> ${QandAList[i]['questionString']}`
                userAnswer.innerHTML = `<b>Your answer</b> : ${userAnswerString}`
                corrertAnswer.innerHTML = `<b>Correct answer</b> : ${storedAnswerString}`
                answerExspandedText.innerHTML = `<b>Explanation</b> : ${QandAList[i]['explanationToIncorrectAns']}`
                answerExspandedContaner.appendChild(answerShownToUsers)
                answerExspandedContaner.appendChild(userAnswer)
                answerExspandedContaner.appendChild(corrertAnswer)
                answerExspandedContaner.appendChild(answerExspandedText) 
                answerExspandedContaner.appendChild(answerBorderBreak) 
                returnAnswerToWrongQuestionsCon.appendChild(answerExspandedContaner)
            }


        }
    }
    // this must be removed before the user restartes the quiz:)

    if(wrongAnswerFound){ displayTitleOfWrongList() }

    document.body.appendChild(returnAnswerToWrongQuestionsCon)

}