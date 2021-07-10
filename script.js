let current = "card"

const showCard = () => {
    document.getElementById("container").innerHTML = ""
    let card = document.createElement("div")
    card.id = "card"
    card.innerHTML = `
<h2><u>A propos de moi:</u></h2>
<img src="assets/a.jpg" alt="avatar" class="avatar">
<h4>TOKINIAINA Toavina (IGGLIA3)</h4>
<h4>Developpeur Mobile/Web</h4>
<p>
    Je suis un etudiant en Genie logiciel à l'ISPM,j'aimerais me specialiser dans la domaine de l'Intelligence Artificielle,
    à part ce domaine, je me passionne aussi pour la robotique , l'astronomie , la Bio-Informatique et la creation de jeu video.
    
</p>
<a href="">
    <div id="skill">
        <h3>Mes compétences</h3>
    </div>
</a>
<h2>Contact:</h2>
<div class="social">
    <a href="https://www.facebook.com/toki.toki.10441">
        <img src="assets/fb.png" alt="facebook" class="sicon">
    </a>
    <a href="mailto:ttokiniainatoavina4@gmail.com">
        <img src="assets/gm.png" alt="gmail" class="sicon">
    </a>
    <a href="https://github.com/ttoavina">
        <img src="assets/gh.png" alt="github" class="sicon">
    </a>
`
    document.getElementById("container").appendChild(card)
}

const showSkill = () => {
    document.getElementById("container").innerHTML = ""
    let card = document.createElement("div")
    card.id = "card"
    card.innerHTML = `
    <h2><u>Mes competences:</u></h2>
    <div class="elements">
        <div class="element" style="border-color: #10e4227e">
            <h4>Flutter <br> Dart</h4>
        </div>
        <div class="element" style="border-color: #10e4227e">
            <h4>React <br> React Native</h4>
        </div>
    </div>
    <div class="elements"> 
        <div class="element" style="border-color: #10e4227e">
            <h4>Python</h4>
        </div>
        <div class="element" style="border-color: #FFC8617E">
            <h4>Javascript</h4>
        </div>
    </div>
    <div class="elements">
        <div class="element" style="border-color: #FFC8617E">
            <h4>Unity <br> c# </h4>
        </div>
        <div class="element" style="border-color: #df63637e">
            <h4>C <br> C++</h4>
        </div>
        
    </div>

    <a href="">
        <div id="skill">
            <h3>Retour</h3>
        </div>
    </a>   
`
    document.getElementById("container").appendChild(card)
}


showCard()

const toogle = ()=>{
    if (current=="card") {
        showSkill()
        current = "skill"
    } else {
        showCard()
        current = "card"
    }
    console.log(current)    
}

let card_switch = document.getElementById("skill")

card_switch.onclick = (e)=>{
    e.preventDefault()
    toogle()
}

