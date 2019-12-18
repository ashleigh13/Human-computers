var question1 = "Which of the following shows the year human computers started?";
var answers1 = ['1950', '1896', '1939', '2015'];
var answerButtons1 = document.getElementsByClassName('quizButton1');
var correct1 = 2; //The first answer is at position 0 the last is at 3.

document.getElementById('question1').innerHTML = question1; 

function changeColor (){
    document.getElementById('demo2').setAttribute('style','background-color:rgb(100,50,150);')
}

function disableAll(list) {
    for(var num=0; num<list.length; num++) {
        list[num].setAttribute('disabled', true);
    }
}

for(var spot=0; spot<answers1.length; spot++)
{
    answerButtons1[spot].innerHTML = answers1[spot];

    answerButtons1[spot].addEventListener('click', function() {
        disableAll(answerButtons1);
        if(this.innerHTML == answers1[correct1]) {
            this.setAttribute('style', 'background-color:rgb(76,175,80);');
        } else {
            this.setAttribute('style', 'background-color:rgb(215,50,35);');
        }
    });
}


var question2 = "Who thought they were working until the war effort was over?";
var answers2 = ['Kathrine Johnson', 'Dorothy Vaughan', 'Maruam Mann', 'Mary Jackson'];
var answerButtons2 = document.getElementsByClassName('quizButton2');
var correct2 = 2; //The first answer is at position 0 the last is at 3.

document.getElementById('question2').innerHTML = question2; 

function changeColor (){
    document.getElementById('demo2').setAttribute('style','background-color:rgb(100,50,150);')
}

for(var spot=0; spot<answers2.length; spot++)
{
    answerButtons2[spot].innerHTML = answers2[spot];

    answerButtons2[spot].addEventListener('click', function() {
        disableAll(answerButtons2);
        if(this.innerHTML == answers2[correct2]) {
            this.setAttribute('style', 'background-color:rgb(76,175,80);');
        } else {
            this.setAttribute('style', 'background-color:rgb(215,50,35);');
        }
    });
}

var question3 = "Who was NASA's first female engineer?";
var answers3 = ['Mary Jackson', 'Kathrine Johnson', 'Christine Daren', 'Maruam Mann'];
var answerButtons3 = document.getElementsByClassName('quizButton3');
var correct3 = 0; //The first answer is at position 0 the last is at 3.

document.getElementById('question3').innerHTML = question3; 

function changeColor (){
    document.getElementById('demo2').setAttribute('style','background-color:rgb(100,50,150);')
}

for(var spot=0; spot<answers3.length; spot++)
{
    answerButtons3[spot].innerHTML = answers3[spot];

    answerButtons3[spot].addEventListener('click', function() {
        disableAll(answerButtons3);
        if(this.innerHTML == answers3[correct3]) {
            this.setAttribute('style', 'background-color:rgb(76,175,80);');
        } else {
            this.setAttribute('style', 'background-color:rgb(215,50,35);');
        }
    });
}



