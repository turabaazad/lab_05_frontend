const catBreeds ="https://catfact.ninja/docs/api-docs.json";
async function fetchCatBreeds(endpoint) {
    // Fetch code here
    try{
        const response = await fetch(endpoint);
        if(!response.ok) {
            throw new Error(`Http error: ${response.status}`);
        }
        return response.json();
    } catch(error){
        console.error(error.message);
    }
}

// Call the function and log the output
fetchCatBreeds().then((data) => console.log(data));

async function displayCatFacts() {
    // Fetch and display facts code here
    const catFactNode = document.querySelector("#factCount");
    catFactNode.innerHTML = "";
}

// Optional: Call displayCatFacts on page load or button click
const samuraiPizzaCats = {
    leader: "Speedy Cerviche",
    members: 3,
    base: {
        location: "Little Tokyo",
        name: "Pizza Cat Restaurant",
    },
    catchphrase: "It's cheese time!",
};
const { leader } = samuraiPizzaCats;
const { location } = samuraiPizzaCats.base;

console.log(leader); 
console.log(location); 