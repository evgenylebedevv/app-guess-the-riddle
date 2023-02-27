const riddle = {
    question: 'Висит груша нельзя скушать',
    correctAnswer: 'Лампочка',
    hints: ['Это съедобное', 'это не фрукт'],
    tries: 3,
    checkAnswer(guessedAnswer) {
        if (this.tries < 1) {
            return alert('Game Over')
        }
        if (guessedAnswer.toLowerCase().includes(this.correctAnswer.toLowerCase())) {
            alert('Правильно!')
            this.tries = 0
        }
        else {
            alert('Неверно!')
            this.tries--
            const hint = this.hints[this.tries === 2 ? 0 : 1]

            if (this.tries) {
                alert('Подсказка: ' + hint)
            }
        }
    },
}

window.onload = function () {
    document.getElementById('riddle').innerText = riddle.question
}

function check() {
    const input = document.getElementsByTagName("input")[0]

    const guessedAnswer = input.value

    if (guessedAnswer) {
        riddle.checkAnswer(guessedAnswer)
    }
}