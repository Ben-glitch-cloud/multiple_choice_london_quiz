function scoreResultMessage(userScore){
    if(userScore >= 10){ return 'A Perfect Score'}
    if(userScore < 10 && userScore >= 7){ return 'Good Score'}
    if(userScore < 7 && userScore >= 4){ return 'Not a score Bad'}
    if(userScore < 4){ return 'Terrible Score'}
}

function showResults(AnswersList, QandAList){

    formConatiner.style.display = 'none'
    questionContainer.style.display = 'none'
    
    let endOfMessageQuiz = document.createElement('p')
    let userScore = document.createElement("p")
    let restartQuiz = document.createElement("button")

    showUserQuizResults.setAttribute("id", "userQuizResults")
    showUserQuizResults.setAttribute("class", "userQuizResults")
    userScore.setAttribute("id", "userScore")

    let overAllScore = 0

    for(let i = 0; i < QandAList.length; i++){
        if(QandAList[i]['AnswerIndex'] === AnswersList[i]){overAllScore++}
    }

    userScore.textContent = `${overAllScore} / 12`
    endOfMessageQuiz.textContent = scoreResultMessage(overAllScore)

    restartQuiz.setAttribute('onclick', 'reStartQuiz()')
    restartQuiz.setAttribute('class', 'reStartQuizBtn')
    restartQuiz.textContent = 'Restart Quiz'


    showUserQuizResults.appendChild(userScore)
    showUserQuizResults.appendChild(endOfMessageQuiz)
    showUserQuizResults.appendChild(restartQuiz)


    showUserQuizResultsContainer.appendChild(showUserQuizResults)

    document.body.appendChild(showUserQuizResultsContainer)

    document.body.appendChild(returnHomeButtonContainer)
}

function showWrongQuestionsList(AnswersList, QandAList){

    let returnAnswerToWrongQuestionsCon = document.createElement('div')
    returnAnswerToWrongQuestionsCon.setAttribute('class', 'wrongQuestionsContainer')
    returnAnswerToWrongQuestionsCon.setAttribute('id', 'wrongQuestionsContainer')

    for(let i = 0; i < AnswersList.length; i++){
        console.log(AnswersList[i] !== QandAList[i]['AnswerIndex'], AnswersList[i], QandAList[i]['AnswerIndex'])
        if(AnswersList[i] !== QandAList[i]['AnswerIndex']){

            let answerExspandedContaner = document.createElement('div')

            answerExspandedContaner.setAttribute('class', 'answerContainer')
            answerExspandedContaner.setAttribute('id', 'answerContainer')

            let answerExspandedText = document.createElement('p')
            let userAnswer = document.createElement('p')
            let corrertAnswer = document.createElement('p')

            //
            let userIndexAnswer = AnswersList[i]
            
            userAnswer.textContent = `Your answer : ${QandAList[i]['arrayOfAnswers'][userIndexAnswer]}`

            let storedAnswer = QandAList[i]['AnswerIndex']

            corrertAnswer.textContent = `Correct answer : ${QandAList[i]['arrayOfAnswers'][storedAnswer]}`

            answerExspandedText.textContent = QandAList[i]['explanationToIncorrectAns']
            // 

            answerExspandedContaner.appendChild(userAnswer)
            answerExspandedContaner.appendChild(corrertAnswer)
            answerExspandedContaner.appendChild(answerExspandedText)

            //
            returnAnswerToWrongQuestionsCon.appendChild(answerExspandedContaner)
        }
    }

    // this must be removed before the user restartes the quiz:)
    document.body.appendChild(returnAnswerToWrongQuestionsCon)


}