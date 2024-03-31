const gameObject = require('./gameObject');

// Function to find the number of points scored by a player
function numPointsScored(playerName) {
    const game = gameObject();
    for (const team in game) {
        if (game.hasOwnProperty(team)) {
            const players = game[team].players;
            if (players.hasOwnProperty(playerName)) {
                return players[playerName].points;
            }
        }
    }
    return null; 
}

// Function to find the shoe size of a player
function shoeSize(playerName) {
    const game = gameObject();
    for (const team in game) {
        if (game.hasOwnProperty(team)) {
            const players = game[team].players;
            if (players.hasOwnProperty(playerName)) {
                return players[playerName].shoe;
            }
        }
    }
    return null; 
}

// Function to find the colors of a team
function teamColors(teamName) {
    const game = gameObject();
    for (const team in game) {
        if (game.hasOwnProperty(team)) {
            if (game[team].teamName === teamName) {
                return game[team].colors;
            }
        }
    }
    return null; 
}

// Function to return an array of team names
function teamNames() {
    const game = gameObject();
    return [game.home.teamName, game.away.teamName];
}

// Function to return an array of jersey numbers for a team
function playerNumbers(teamName) {
    const game = gameObject();
    for (const team in game) {
        if (game.hasOwnProperty(team)) {
            if (game[team].teamName === teamName) {
                const players = game[team].players;
                return Object.values(players).map(player => player.number);
            }
        }
    }
    return null; 
}

// Function to return player stats
function playerStats(playerName) {
    const game = gameObject();
    for (const team in game) {
        if (game.hasOwnProperty(team)) {
            const players = game[team].players;
            if (players.hasOwnProperty(playerName)) {
                return players[playerName];
            }
        }
    }
    return null; 
}

// Function to return rebounds of the player with the largest shoe size
function bigShoeRebounds() {
    const game = gameObject();
    let largestShoeSize = 0;
    let playerWithLargestShoeSize = null;

    // Finding the player with the largest shoe size
    for (const team in game) {
        if (game.hasOwnProperty(team)) {
            const players = game[team].players;
            for (const player in players) {
                if (players.hasOwnProperty(player)) {
                    const shoe = players[player].shoe;
                    if (shoe > largestShoeSize) {
                        largestShoeSize = shoe;
                        playerWithLargestShoeSize = player;
                    }
                }
            }
        }
    }

    // Returning rebounds of the player with the largest shoe size
    if (playerWithLargestShoeSize) {
        return playerStats(playerWithLargestShoeSize).rebounds;
    } else {
        return null; // Return null if no player found
    }
}


