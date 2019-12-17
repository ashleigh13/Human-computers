var question1 = "Which of the following shows the year human computers started?";
var answers = ['1950', '1896', '1939', '2015'];
var answerButtons = document.getElementsByClassName('quizButton1');
var correct = 2; //The first answer is at position 0 the last is at 3.

document.getElementById('question1').innerHTML = question; 

function changeColor (){
    document.getElementById('demo2').setAttribute('style','background-color:rgb(100,50,150);')
}

function disableAll() {
    for(var num=0; num<answerButtons.length; num++) {
        answerButtons[num].setAttribute('disabled', true);
    }
}

for(var spot=0; spot<answers.length; spot++)
{
    answerButtons[spot].innerHTML = answers[spot];

    answerButtons[spot].addEventListener('click', function() {
        disableAll();
        if(this.innerHTML == answers[correct]) {
            this.setAttribute('style', 'background-color:rgb(76,175,80);');
        } else {
            this.setAttribute('style', 'background-color:rgb(215,50,35);');
        }
    });
}


