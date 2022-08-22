const selectedPlayerList = [];

function selectedPlayer(players) {
    const selectedPlayerElement = document.getElementById('selected-players');
    selectedPlayerElement.innerHTML = '';

    for (let i = 0; i < players.length; i++) {
        const playersName = players[i]
        console.log(playersName);

        const listElement = document.createElement('ol');
        listElement.innerHTML =
            `<th>
                <td>${i + 1}</td>
                <td>${playersName}</td>
            </th>`;
        selectedPlayerElement.appendChild(listElement);
    }
}

function playerSelect(element) {
    const playerName = element.parentNode.parentNode.children[0].innerText;

    selectedPlayerList.push(playerName);

    selectedPlayer(selectedPlayerList);
}