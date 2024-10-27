

//**********************************************HEADER************************************ */

let rejouer = document.getElementById("rejouer")
let facile = document.getElementById("facile")
let normale = document.getElementById("normale")
let difficile = document.getElementById("difficile")
let quitter = document.getElementById("quitter")

let rire = document.getElementById("rire")
let moins = document.getElementById("moins")
let plus = document.getElementById("plus")


function reloadGame() {
    location.reload()
}

//action au clic du bouton "rejouer"
document.getElementById("rejouer").addEventListener("click", reloadGame)


//**********************Niveau de difficulte***************************** */


let easyClic = 0
let diffClic = 0



//Fonction pour choisir le niveau de difficulte FACILE
function nivEasy() {
    clearInterval(intervalID)
    easyClic = 1
    diffClic = 0
    startFonction()
}

//Fonction pour choisir le niveau de difficulte NORMALE
function nivNormal() {
    clearInterval(intervalID)
    easyClic = 0
    diffClic = 0
    startFonction()
}

//Fonction pour choisir le niveau de difficulte DIFFICILE
function nivDifficult() {
    clearInterval(intervalID)
    easyClic = 1
    easyClic = 0
    diffClic = 1
    startFonction()
}


//action au clic du bouton "facile" dans le menu difficulte
document.getElementById("facile").addEventListener("click", nivEasy)

//action au clic du bouton "normale" dans le menu difficulte
document.getElementById("normale").addEventListener("click", nivNormal)

//action au clic du bouton "difficile" dans le menu difficulte
document.getElementById("difficile").addEventListener("click", nivDifficult)



//**********************Niveau de vokume sonore***************************** */

let decalage = 0

//Fonction qui permet de definir la baisse de son (par défaut, la valeur est de 0.5 quand on ne clique pas sur moins ou plus)
function volumeMoins() {
    decalage = decalage - 0.1
    if (decalage < -0.5) {
        decalage = -0.5
    }
}


//Fonction qui permet de definir l'augmentation'de son (par défaut, la valeur est de 0.5 quand on ne clique pas sur moins ou plus)
function volumePlus() {
    decalage = decalage + 0.1
    if (decalage > 0.5) {
        decalage = 0.5
    }
}

//action au clic du bouton "moins" dans le menu volume
document.getElementById("moins").addEventListener("click", volumeMoins)

//action au clic du bouton "moins" dans le menu volume
document.getElementById("plus").addEventListener("click", volumePlus)


//***************************************************************************** */

function quitGame() {
    commencer.style.display = "none"
    clownPict.style.top = 50 + "%"
    clownPict.style.left = 50 + "%"
    clownPict.style.display = "none"
    goodbye.style.display = "block"
    goodbye.textContent = "A bientot dans mon jeu"
}


//action au clic du bouton "quitter"
document.getElementById("quitter").addEventListener("click", quitGame)

document.querySelector('main').addEventListener("click", clicGeneral)


//**********************************************MAIN************************************ */

//const start = document.querySelector("#commencer")
let goodbye = document.getElementById("final")

//let clownPict = document.getElementById("clownPict")
const STOPCLOWN = 10

let clic = 0
let intervalID = 0

//Fonction qui lance le jeu et utilise le set interval pour faire bouger le clown
function startFonction() {
    commencer.style.display = "none"
    if (easyClic == 1) {
        intervalID = setInterval(mouv, 2000)
    } else if (diffClic == 1) {
        intervalID = setInterval(mouv, 300)
    } else {
        //console.log(son.volume)
        console.log(rire.volume)
        intervalID = setInterval(mouv, 1000)
    }
}




//Fonction random pour changer la valeur aléatoire du top et du left sur l'image
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


//Fonction utilisant la fonction random précédente pour faire bouger l'image du clown et de stopper le jeu après X clic dans le main
function mouv() {
    if (clic < STOPCLOWN) {
        clownPict.style.left = random(0, document.querySelector('main').offsetWidth - clownPict.offsetWidth) + "px"
        clownPict.style.top = random(0, document.querySelector('main').offsetHeight - clownPict.offsetHeight) + "px"
    } else {
        clownPict.style.top = 50 + "%"
        clownPict.style.left = 50 + "%"
        clownPict.style.display = "none"
        goodbye.style.display = "block"
        goodbye.textContent = "A bientot dans mon jeu"
    }
}

//Fonction servant à jouer le son à chaque clic sur l'image
function clicClown() {
    rire.volume = Number(0.5) + decalage
    rire.play()
        score++
        point.textContent = "Score : " + score
    }


    //Fonction servant à compter le nb de clic sur le main et à stopper le jeu
    function clicGeneral() {
        clic++
        if (clic >= STOPCLOWN) {
            stopGame()
        }
    }

    // Fonction servant à la fonction à stopper le jeu
    function stopGame() {
    }


    //permet de lancer le jeu quand on clique sur le bouton "commencer"
    commencer.addEventListener("click", startFonction)

    //action qui se lance quand on clique sur l'image du clown
    document.getElementById("clownPict").addEventListener("click", clicClown)
    document.querySelector('main').addEventListener("click", clicGeneral)




    //**********************************************FOOTER************************************ */

    let point = document.getElementById("scoreContainer")
    let score = 0

    //Afficher le score en permanence
    point.textContent = "Score : " + score