const selectedPlayerList = [];

function selectedPlayer(players) {
    const selectedPlayerElement = document.getElementById('selected-players');
    selectedPlayerElement.innerHTML = '';

    for (let i = 0; i < players.length; i++) {
        const playersName = players[i]

        const listElement = document.createElement('ol');
        listElement.innerHTML =
            `<th>
                <td>${i + 1}</td>
                <td>${playersName}</td>
            </th>`;

        // alert message
        if (i > 4) {
            alert('You can select only five players')
            return;
        }
        else {
            selectedPlayerElement.appendChild(listElement);
        }
    }
}

function playerSelect(element) {
    const playerName = element.parentNode.parentNode.children[0].innerText;
    console.log(playerName);
    selectedPlayerList.push(playerName);


    selectedPlayer(selectedPlayerList);

    // const selectedPlayers = document.getElementById('selected-players');
    // if (selectedPlayers.childNodes.length > 5) {
    //     element.disabled = false
    //     return;
    // }
    element.disabled = true;

}

// function selectedPlayer(players) {
//     const selectedPlayerElement = document.getElementById('selected-players');
//     selectedPlayerElement.innerHTML = '';

//     const selectedPlayers = document.getElementById('selected-players');
//     for (let i = 0; i < selectedPlayerList.length; i++) {
//         const playersName = selectedPlayerList[i]

//         const listElement = document.createElement('ol');
//         listElement.innerHTML =
//             `<th>
//                 <td>${i + 1}</td>
//                 <td>${playersName}</td>
//             </th>`;

//         // alert message
//         if (selectedPlayers.childNodes.length > 4) {
//             alert('You can select only five players')
//             // players.removeAttribute('disabled');

//             return;
//         }
//         else {
//             selectedPlayerElement.appendChild(listElement);
//         }
//         // players.setAttribute('disabled', true);
//     }
// }