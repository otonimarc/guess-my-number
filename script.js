'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
//document.querySelector('.number').textContent = secretNumber

document.querySelector('.check').addEventListener('click', function() {
            const guess = Number(document.querySelector('.guess').value);
            console.log(guess, typeof guess)
            if (!guess) {
                document.querySelector('.message').textContent = 'No number ⛔'
            } else if (guess === secretNumber) {
                document.querySelector('.message').textContent = 'Correct Number!!! 💥'
                document.querySelector('.highscore').textContent = score;
                document.querySelector('body').style.backgroundColor = '#60b347'
            } else if (guess > secretNumber) 
            if (score > 0 ){   
                document.querySelector('.message').textContent = ' Too high!!! 💢'
                score--
                document.querySelector('.score').textContent = score;}
                else {
                    document.querySelector('.message').textContent = ' YOU LOSE THE GAME! 💢'
                    document.querySelector('.score').textContent = score = 0;
                } else if (guess < secretNumber)
                if (score > 0 ){   
                    document.querySelector('.message').textContent = ' Too low!! 💢'
                    score--
                    document.querySelector('.score').textContent = score;}
                    else {
                        document.querySelector('.message').textContent = ' YOU LOSE THE GAME! 💢'
                        document.querySelector('.score').textContent = score = 0; 
                
                }
            })

            document.querySelector('.again').addEventListener('click', function () {
                score = 20;
                secretNumber = Math.trunc(Math.random() * 20) + 1;
              
                // document.querySelector('.message').textContent = 'Start guessing...';
                document.querySelector('.message').textContent ='Start guessing...';
                document.querySelector('.score').textContent = score;
                document.querySelector('.number').textContent = '?';
                document.querySelector('.guess').value = '';
              
                document.querySelector('body').style.backgroundColor = '#222';
                document.querySelector('.number').style.width = '15rem';
              });
                
