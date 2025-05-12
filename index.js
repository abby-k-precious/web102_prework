/*****************************************************************************
 * Challenge 2: Review the provided code. The provided code includes:
 * -> Statements that import data from games.js
 * -> A function that deletes all child elements from a parent element in the DOM
*/

// import the JSON data about the crowd funded games from the games.js file
import GAMES_DATA from './games.js';

// create a list of objects to store the data about the games using JSON.parse
const GAMES_JSON = JSON.parse(GAMES_DATA)

// remove all child elements from a parent element in the DOM
function deleteChildElements(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

/*****************************************************************************
 * Challenge 3: Add data about each game as a card to the games-container
 * Skills used: DOM manipulation, for loops, template literals, functions
*/

// grab the element with the id games-container
const gamesContainer = document.getElementById("games-container");

// create a function that adds all data from the games array to the page
function addGamesToPage(games) {
    games.forEach(game => {
        const gameCard = document.createElement("div");
        gameCard.classList.add("game-card");

        gameCard.innerHTML = 
        <img src="{game.img}" alt="${game.name}" class="game-img" />
        <h3>${game.name}</h3>
        <p>${game.description}</p>
        <p>Pledged: $${game.pledged.toLocaleString()}</p>
        <p>Goal: $${game.goal.toLocaleString()}</p>
        <p>Backers: ${game.backers}</p>
    ;

    gamesContainer.appendChild(gameCard);

    });

    }

addGamesToPage(GAMES_JSON);

    // loop over each item in the data


        // create a new div element, which will become the game card


        // add the class game-card to the list


        // set the inner HTML using a template literal to display some info 
        // about each game
        // TIP: if your images are not displaying, make sure there is space
        // between the end of the src attribute and the end of the tag ("/>")


        // append the game to the games-container

}

// call the function we just defined using the correct variable
// later, we'll call this function using a different list of games


/*************************************************************************************
 * Challenge 4: Create the summary statistics at the top of the page displaying the
 * total number of contributions, amount donated, and number of games on the site.
 * Skills used: arrow functions, reduce, template literals
*/

// grab the contributions card element
const contributionsCard = document.getElementById("num-contributions");

const totalConstributions = GAMES_JSON.reduce((acc, game) => acc + game.backers, 0);
contributionsCard.iinerHTML = totalConstributions.toLocaleString();



// grab the amount raised card, then use reduce() to find the total amount raised
const raisedCard = document.getElementById("total-raised");

const totalRaised = GAMES_JSON.reduce((acc, game) => acc + game.pledged, 0);
raisedCard.innerHTML = '$${totalRaised.toLocaleString()}';


// grab number of games card and set its inner HTML
const gamesCard = document.getElementById("num-games");

gamesCard.innerHTML = GAMES_JSON.length;

// show only games that do not yet have enough funding
function filterUnfundedOnly() {
    deleteChildElements(gamesContainer);

    // use filter() to get a list of games that have not yet met their goal


    // use the function we previously created to add the unfunded games to the DOM

}

// show only games that are fully funded
function filterFundedOnly() {
    deleteChildElements(gamesContainer);

    const unfundedGames = GAMES_JSON.filter(game => game.pledged < game.goal);

    addGamesToPage(unfundedGames);
}

function filterFundedOnly() {
    deleteChildElements(gamesContainer);

    const fundedGames = GAMES_JSONfilter(game => game.pledged >= game.goal);
    
    addGamesToPage(fundedGames);
}

// show all games
function showAllGames() {
    deleteChildElements(gamesContainer);

    addGamesToPage(GAMES_JSON);

    // add all games from the JSON data to the DOM

}

// select each button in the "Our Games" section
const unfundedBtn = document.getElementById("unfunded-btn");
const fundedBtn = document.getElementById("funded-btn");
const allBtn = document.getElementById("all-btn");

// add event listeners with the correct functions to each button


/*************************************************************************************
 * Challenge 6: Add more information at the top of the page about the company.
 * Skills used: template literals, ternary operator
*/

// grab the description container
const descriptionContainer = document.getElementById("description-container");

const unfundedGamesCount = GAMES_JSON.filter(game => game.pledged < game.goal).length;

const unfundedMessage = 
     unfundedGamesCount === 1
     ? "There is 1 game left to fund."
     : 'There are ${unfundedGamesCount} games left to fund.' ;

const messageElement = document.createElement("p")
messageElement.innerText = unfundedMessage;
descriptionContainer.appendChild(messageElement);

// use filter or reduce to count the number of unfunded games


// create a string that explains the number of unfunded games using the ternary operator


// create a new DOM element containing the template string and append it to the description container

/************************************************************************************
 * Challenge 7: Select & display the top 2 games
 * Skills used: spread operator, destructuring, template literals, sort 
 */

const firstGameContainer = document.getElementById("first-game");
const secondGameContainer = document.getElementById("second-game");



const sortedGames =  GAMES_JSON.sort( (game1, game2) => {
    return game2.pledged - game1.pledged;
});

const [firstGame, secondGame] = sortedGames;

firstGameContainer.innerHTML = '<h3>🥇 ${firstGame.name}</h3>';
secondGameContainer.innerHTML = '<h3> 🥈 ${secondGame.name}</h3>';

// use destructuring and the spread operator to grab the first and second games

// create a new element to hold the name of the top pledge game, then append it to the correct element

// do the same for the runner up item