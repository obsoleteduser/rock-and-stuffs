const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')
const toolKit = document.querySelector('.select-tool')
const score = document.querySelector('#score')
const rules = document.querySelector('.rules')
const tools = ['paper', 'scissors', 'rock']
const computer  = tools[Math.floor(Math.random()*tools.length)]
let user;

let scoreValue = +(localStorage.getItem('score'));
window.addEventListener('load', ()=>{
    score.innerHTML = localStorage  .getItem('score')
})

let winAlert = document.createElement('div')
winAlert.classList.add('winAlert')

rules.addEventListener('click', ()=>{
    let modal = document.createElement('div')
    modal.classList.add('modal-overlay')
    modal.innerHTML = `
                        <div class="modal">
                            <div class="modal-header">
                            <h1>RULES</h1><img class="close" src="/assets/img/icon-close.svg">
                            </div>
                            <img class="helper" src="./assets/img/image-rules.svg">
                        </div>
                        `
    document.getElementById('root').append(modal)
    document.querySelector('.close').addEventListener('click', ()=>{
        document.querySelector('.modal-overlay').style.display = 'none'
    })
})

rock.addEventListener('click', ()=>{
    rock.style.gridColumn = '1/2'
    rock.style.gridRow = '1/2'
    paper.style.display = "none"
    scissors.style.display = "none"
    toolKit.style.backgroundImage = 'url()'
    user = tools[2]
    let enemy = document.querySelector(`.${computer}`)
    enemy.style.gridColumn = '3/4'
    enemy.style.display = 'block'
    checkWinner() === 'Play again!' ? rock.style.gridColumn = '2/3' : null
    toolKit.append(winAlert)
    winAlert.innerHTML = checkWinner()
    checkWinner() === 'You won!' ? scoreValue++ : null
    localStorage.setItem('score', scoreValue)
    score.innerHTML = scoreValue
})

paper.addEventListener('click', ()=>{toolKit.style.backgroundImage = 'url()'
    paper.style.gridColumn = '1/2'
    rock.style.display = "none"
    scissors.style.display = "none"
    toolKit.style.backgroundImage = 'url()'
    user = tools[0]
    let enemy = document.querySelector(`.${computer}`)
    enemy.style.gridColumn = '3/4'
    enemy.style.gridRow = '1/2'
    enemy.style.display = 'block'
    checkWinner() === 'Play again!' ? paper.style.gridColumn = '2/3' : null
    toolKit.append(winAlert)
    winAlert.innerHTML = checkWinner()
    checkWinner() === 'You won!' ? scoreValue++ : null
    localStorage.setItem('score', scoreValue)
    score.innerHTML = scoreValue
})

scissors.addEventListener('click', ()=>{
    scissors.style.gridColumn = '1/2'
    rock.style.display = "none"
    paper.style.display = "none"
    toolKit.style.backgroundImage = 'url()'
    user = tools[1]
    let enemy = document.querySelector(`.${computer}`)
    enemy.style.gridColumn = '3/4'
    enemy.style.gridRow = '1/2'
    enemy.style.display = 'block'
    checkWinner() === 'Play again!' ? scissors.style.gridColumn = '2/3' : null
    toolKit.append(winAlert)
    winAlert.innerHTML = checkWinner()
    checkWinner() === 'You won!' ? scoreValue++ : null
    localStorage.setItem('score', scoreValue)
    score.innerHTML = scoreValue
})

function checkWinner(){
    if(user===computer){ 
        winAlert.style.marginTop = '20rem'
        winAlert.style.padding = '2rem'
        winAlert.style.backgroundColor = 'green'
        winAlert.style.color = 'white'
        winAlert.style.borderRadius = '5px'
        winAlert.style.cursor = 'pointer'
        winAlert.addEventListener('click', ()=>location.reload())
        return "Play again!"
        
    }
    else if(computer===tools[1]){
       
        return user === tools[2]? ("You won!") : "you are a loser in life!"
    }
    else if(computer===tools[2]){
        
        return user === tools[0]? ("You won!") : "you are a loser in life!"
    }
    else if(computer===tools[0]){
        
        return user === tools[1]? ("You won!") : "you are a loser in life!"
    }
}

