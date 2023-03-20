
score = 62;


if (score >= 80 &&  score <= 100){
    letter = 'A';
}

else if (score >= 60 && score <= 79){
    letter = 'B';
}

else if (score >= 49 && score <=59){
    letter = 'C';
}

else if ( score >= 40 && score <= 49){
    letter = 'D';
}

else  if(score >= 40 && score <= 0){
    letter = 'E';
}
    

console.log('You got the letter grade' +letter)
