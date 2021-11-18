var readline=require("readline-sync")
var user=readline.question("Enter your name ")
console.log("hello ",user)
score=0
function quest(question,answer){
    console.log('answer in a,b,c')
    var Answer=readline.question(question );
    if (Answer.toUpperCase()===answer.toUpperCase()){
        console.log('Right')
        console.log("Your current score ",score+=1)
    }else{
        console.log('Wrong')
        console.log("Your current score ",score)
    }
};
var highScore={
  adarsh:2,
  abhimanyu:2
};

var questi=[{
    question:'Which state is IT hub in India?\na. delhi\nb. mumbai\nc. bangalore ',
    answer:'c'
},
{
    question:"which is the national animal of india?\na.lion\nb.tiger\nc.jaguar ",
    answer:'b'
},
{
    question:"What the capital of india?\na.delhi\nb.uttar pradesh\nc.punjab  ",
    answer:'a'
}];
for (var i=0;i<questi.length;i++){
    var queslist=questi[i]
    quest(queslist.question,queslist.answer)
};
if (score>highScore.adarsh && score>highScore.abhimanyu){
    console.log('YAY you got highscore' +user+' your score is '+score)
}else{
    console.log(user,"Your score is "+score)
    console.log("High Scores",highScore)
}