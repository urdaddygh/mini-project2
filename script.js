let cont=document.querySelector('.container')
let list=document.querySelector('.results')
async function get(){
    let response = await fetch('https://anime-facts-rest-api.herokuapp.com/api/v1')
    console.log(response);
    let content = await response.json()
    console.log(content);

    content.data.forEach(element => {
        cont.innerHTML+=`
        <div class="box">
            <h2>${element.anime_name}</h2>
            <img src="${element.anime_img}">
            <button class="btnFact">Fact</button>
        </div>
    `
         
    });
}
// get()
const resEL = document.getElementById('results')

let btnFactNaruto=document.querySelector(".show-Naruto");
let btnFactBleach=document.querySelector(".show-bleach");
let btnFactblackclover=document.querySelector(".show-black_clover")
let btnFactdragon_ball=document.querySelector(".show-dragon_ball");
let btnFactjujutsu_kaisen=document.querySelector(".show-jujutsu_kaisen");
let btnFactfma_brotherhood=document.querySelector(".show-fma_brotherhood")
let btnFactgintama=document.querySelector(".show-gintama");
let btnFactitachi_uchiha=document.querySelector(".show-itachi_uchiha");
let btnFactone_piece=document.querySelector(".show-one_piece")
let btnFactdemon_slayer=document.querySelector(".show-demon_slayer");
let btnFactattack_on_titan=document.querySelector(".show-attack_on_titan");
let btnFacthunter_x_hunter=document.querySelector(".show-hunter_x_hunter")
let btnFactboku_no_hero_academia=document.querySelector(".show-boku_no_hero_academia")

btnFactNaruto.addEventListener('click', function(){
   naruto()
})

btnFactBleach.addEventListener('click', function(){
    bleach()
 })

 btnFactblackclover.addEventListener('click', function(){
    blackClover()
})

btnFactdragon_ball.addEventListener('click', function(){
    dragon_ball()
})

btnFactjujutsu_kaisen.addEventListener('click', function(){
    jujutsu_kaisen()
 })

 btnFactfma_brotherhood.addEventListener('click', function(){
    fma_brotherhood()
  })

  btnFactgintama.addEventListener('click', function(){
    gintama()
 })
 btnFactitachi_uchiha.addEventListener('click', function(){
    itachi_uchiha()
 })
 btnFactone_piece.addEventListener('click', function(){
    one_piece()
 })
 btnFactdemon_slayer.addEventListener('click', function(){
    demon_slayer()
  })
  btnFactattack_on_titan.addEventListener('click', function(){
    attack_on_titan()
 })
 btnFacthunter_x_hunter.addEventListener('click', function(){
    hunter_x_hunter()
 })
 btnFactboku_no_hero_academia.addEventListener('click', function(){
    boku_no_hero_academia()
})

async function naruto(){
    const path=`https://anime-facts-rest-api.herokuapp.com/api/v1/naruto`
    let response = await fetch(path)
    let content = await response.json()
    // console.log(content)
    resEL.innerHTML=`<img src="${content.img}">`
    content.data.forEach(element => {
        console.log(element)
        resEL.innerHTML+=`
        <div class="fact">
        <h2> Naruto <h2>
            <h3>fact №${element.fact_id}</h3>
            <h3>${element.fact}</h3>
         </div>`
    });
}
async function bleach(){
    const path=`https://anime-facts-rest-api.herokuapp.com/api/v1/bleach`
    let response = await fetch(path)
    let content = await response.json()
    // console.log(content)
    resEL.innerHTML=`<img src="${content.img}">`
    content.data.forEach(element => {
        console.log(element)
        resEL.innerHTML+=`
        <div class="fact">
        <h2> Bleach <h2>
            <h3>fact №${element.fact_id}</h3>
            <h3>${element.fact}</h3>
         </div>`
    });
}
async function blackClover(){
    const path=`https://anime-facts-rest-api.herokuapp.com/api/v1/black_clover`
    let response = await fetch(path)
    let content = await response.json()
    // console.log(content)
    resEL.innerHTML=`<img src="${content.img}">`
    content.data.forEach(element => {
        console.log(element)
        resEL.innerHTML+=`
        <div class="fact">
        <h2> Black Clover <h2>
            <h3>fact №${element.fact_id}</h3>
            <h3>${element.fact}</h3>
         </div>`
    });
}
async function dragon_ball(){
    const path=`https://anime-facts-rest-api.herokuapp.com/api/v1/dragon_ball`
    let response = await fetch(path)
    let content = await response.json()
    // console.log(content)
    resEL.innerHTML=`<img src="${content.img}">`
    content.data.forEach(element => {
        console.log(element)
        resEL.innerHTML+=`
        <div class="fact">
        <h2> Dragon Ball <h2>
            <h3>fact №${element.fact_id}</h3>
            <h3>${element.fact}</h3>
         </div>`
    });
}

async function jujutsu_kaisen(){
    const path=`https://anime-facts-rest-api.herokuapp.com/api/v1/jujutsu_kaisen`
    let response = await fetch(path)
    let content = await response.json()
    // console.log(content)
    resEL.innerHTML=`<img src="${content.img}">`
    content.data.forEach(element => {
        console.log(element)
        resEL.innerHTML+=`
        <div class="fact">
        <h2> Jujutsu Kaisen <h2>
            <h3>fact №${element.fact_id}</h3>
            <h3>${element.fact}</h3>
         </div>`
    });
}

async function fma_brotherhood(){
    const path=`https://anime-facts-rest-api.herokuapp.com/api/v1/fma_brotherhood`
    let response = await fetch(path)
    let content = await response.json()
    // console.log(content)
    resEL.innerHTML=`<img src="${content.img}">`
    content.data.forEach(element => {
        console.log(element)
        resEL.innerHTML+=`
        <div class="fact">
        <h2> FMA brotherhood <h2>
            <h3>fact №${element.fact_id}</h3>
            <h3>${element.fact}</h3>
         </div>`
    });
}
async function gintama(){
    const path=`https://anime-facts-rest-api.herokuapp.com/api/v1/gintama`
    let response = await fetch(path)
    let content = await response.json()
    // console.log(content)
    resEL.innerHTML=`<img src="${content.img}">`
    content.data.forEach(element => {
        console.log(element)
        resEL.innerHTML+=`
        <div class="fact">
        <h2> Gintama <h2>
            <h3>fact №${element.fact_id}</h3>
            <h3>${element.fact}</h3>
         </div>`
    });
}
async function itachi_uchiha(){
    const path=`https://anime-facts-rest-api.herokuapp.com/api/v1/itachi_uchiha`
    let response = await fetch(path)
    let content = await response.json()
    // console.log(content)
    resEL.innerHTML=`<img src="${content.img}">`
    content.data.forEach(element => {
        console.log(element)
        resEL.innerHTML+=`
        <div class="fact">
        <h2> Itachi Uchiha <h2>
            <h3>fact №${element.fact_id}</h3>
            <h3>${element.fact}</h3>
         </div>`
    });
}
async function one_piece(){
    const path=`https://anime-facts-rest-api.herokuapp.com/api/v1/one_piece`
    let response = await fetch(path)
    let content = await response.json()
    // console.log(content)
    resEL.innerHTML=`<img src="${content.img}">`
    content.data.forEach(element => {
        console.log(element)
        resEL.innerHTML+=`
        <div class="fact">
        <h2> One piece <h2>
            <h3>fact №${element.fact_id}</h3>
            <h3>${element.fact}</h3>
         </div>`
    });
}
async function demon_slayer(){
    const path=`https://anime-facts-rest-api.herokuapp.com/api/v1/demon_slayer`
    let response = await fetch(path)
    let content = await response.json()
    // console.log(content)
    resEL.innerHTML=`<img src="${content.img}">`
    content.data.forEach(element => {
        console.log(element)
        resEL.innerHTML+=`
        <div class="fact">
        <h2> Demon slayer <h2>
            <h3>fact №${element.fact_id}</h3>
            <h3>${element.fact}</h3>
         </div>`
    });
}

async function attack_on_titan(){
    const path=`https://anime-facts-rest-api.herokuapp.com/api/v1/attack_on_titan`
    let response = await fetch(path)
    let content = await response.json()
    // console.log(content)
    resEL.innerHTML=`<img src="${content.img}">`
    content.data.forEach(element => {
        console.log(element)
        resEL.innerHTML+=`
        <div class="fact">
        <h2> Attack on titan <h2>
            <h3>fact №${element.fact_id}</h3>
            <h3>${element.fact}</h3>
         </div>`
    });
}
async function hunter_x_hunter(){
    const path=`https://anime-facts-rest-api.herokuapp.com/api/v1/hunter_x_hunter`
    let response = await fetch(path)
    let content = await response.json()
    // console.log(content)
    resEL.innerHTML=`<img src="${content.img}">`
    content.data.forEach(element => {
        console.log(element)
        resEL.innerHTML+=`
        <div class="fact">
            <h2> Hunter x Hunter <h2>
            <h3>fact №${element.fact_id}</h3>
            <h3>${element.fact}</h3>
         </div>`
    });
}

async function boku_no_hero_academia(){
    const path=`https://anime-facts-rest-api.herokuapp.com/api/v1/boku_no_hero_academia`
    let response = await fetch(path)
    let content = await response.json()
    // console.log(content)
        resEL.innerHTML=`<img src="${content.img}">`
    content.data.forEach(element => {
        console.log(element)
        resEL.innerHTML+=`
        <div class="fact">
                <h2> Boku no hero academia <h2>
            <h3>fact №${element.fact_id}</h3>
            <h3>${element.fact}</h3>
         </div>`
    });
}