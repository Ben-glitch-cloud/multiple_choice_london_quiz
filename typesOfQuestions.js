
function questionTypeQuiz(AnswersList, index){
    for(let i = 0; i < AnswersList[index]['arrayOfAnswers'].length; i++){
        let newQuestionDiv = document.createElement("div") 
        let newInput = document.createElement("input"), newLabel = document.createElement('label')
        newQuestionDiv.setAttribute("class", "answerOpation")
        newQuestionDiv.setAttribute("id", "answerOpation")
        let newInputObjectsetAttribute = {"value": i, "type": "radio", "name": "answer", "onclick": 'handleSingleClick(event)'}
        for(const key in newInputObjectsetAttribute){
            newInput.setAttribute(`${key}`, `${newInputObjectsetAttribute[key]}`)
        }
        newLabel.innerHTML = AnswersList[index]['arrayOfAnswers'][i]
        newQuestionDiv.appendChild(newInput)
        newQuestionDiv.appendChild(newLabel)
        MainQuizForm.appendChild(newQuestionDiv)
    }
}

function multipleChoiceQuestion(AnswersList, index){
    for(let i = 0; i < AnswersList[index]['arrayOfAnswers'].length; i++){
        let newQuestionDiv = document.createElement("div") 
        let newInput = document.createElement("input"), newLabel = document.createElement('label')
        // maybe change the class and id
        newQuestionDiv.setAttribute("class", "answerOpation")
        newQuestionDiv.setAttribute("id", "answerOpation")
        // change the type to checkbox
        let newInputObjectsetAttribute = {"value": i, "type": "checkbox", "name": "answer", "onclick": 'handleMultClick(event)'}
        for(const key in newInputObjectsetAttribute){
            newInput.setAttribute(`${key}`, `${newInputObjectsetAttribute[key]}`)
        }
        newLabel.innerHTML = AnswersList[index]['arrayOfAnswers'][i]
        newQuestionDiv.appendChild(newInput)
        newQuestionDiv.appendChild(newLabel)
        MainQuizForm.appendChild(newQuestionDiv)
    }
} 