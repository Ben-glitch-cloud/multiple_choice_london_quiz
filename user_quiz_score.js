function scoreResultMessage(userScore){
    if(userScore >= 10){ return 'A Perfect Score'}
    if(userScore < 10 && userScore >= 7){ return 'Good Score'}
    if(userScore < 7 && userScore >= 4){ return 'Not a score Bad'}
    if(userScore < 4){ return 'Terrible Score'}
}