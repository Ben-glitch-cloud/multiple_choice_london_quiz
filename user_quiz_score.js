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

        // This is where I will add question that where answeard incorrectly  
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