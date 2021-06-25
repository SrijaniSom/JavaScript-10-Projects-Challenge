var ques=["What is the most used programming language in 2019?"," Who is the President of US? "," What does HTML stand for? "," What year was JavaScript launched? "];
var opt=[["Java","C","Python","JavaScript"],
         ["Florin Pop","Donald Trump","Ian Somerholder","Stephen Amell"],
         ["Hypertext Markup Language","Cascading Style Sheet","Jason Object Notation","Helicopters Terminals Motorboats Lamborginis"],
         ["1996","1995","1994","none of the above"]];
var ans=['d','b','a','b'];

const answer = document.querySelectorAll('.ans');
const submitBtn=document.querySelector('.btn');
const questext=document.querySelector('.question');
const option=document.querySelector('.options');
const message=document.querySelector('.mesg');
const reset=document.querySelector('.resetbtn');
var counter=0;
var score=0;
submitBtn.addEventListener("click",()=>
{
    
    if(document.getElementById(ans[counter]).checked)
    {
        score++;
    }
    console.log(score);
    let j=0;
    counter++;
    if(counter==4)
    {
        submitBtn.style.display="none";
        questext.style.display="none";
        option.style.display="none";
        message.style.display="flex";
        reset.style.display="flex";
        message.textContent="You answered correctly "+score+"/4 questions.";

        
    }
    if(counter<4)
    {
        questext.textContent=ques[counter];
        answer.forEach(function(item)
        {
            item.textContent=opt[counter][j];
            j++;
        });
    }
   
    
});
reset.addEventListener("click",()=>{
    submitBtn.style.display="flex";
    questext.style.display="flex";
    option.style.display="flex";
    message.style.display="none";
    reset.style.display="none";
    counter=0;
    questext.textContent=ques[counter];
    let k=0;
        answer.forEach(function(item)
        {
            item.textContent=opt[counter][k];
            k++;
        });
        score=0;
});
