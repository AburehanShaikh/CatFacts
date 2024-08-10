const URL = ("https://cat-fact.herokuapp.com/facts")
let facts = document.querySelector(".facts")
let btn = document.querySelector("#btn")

const getFacts = async () => {
    console.log("Fetching Data....")
    let response = await fetch(URL)
    console.log(response)
    let data = await response.json();
    const randomFact = data[Math.floor(Math.random() * data.length)].text;
    facts.innerText = randomFact.toUpperCase();
}


// function getFacts () {
//     fetch(URL)
//     .then((response) => {
//         return response.json()
//     })
//     .then((data)=>{
//         const randomFact = data[Math.floor(Math.random() * data.length)].text;
//         return facts.innerText = randomFact.toUpperCase();
//     })
// }

btn.addEventListener("click", getFacts) 