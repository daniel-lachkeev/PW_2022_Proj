"use strict"

/* 
    Script de teste para verificar a ligação do servidor
    com a base de dados do jogo IGDB
    https://www.igdb.com/api
*/

function testToken(callback) {
    var url = "https://id.twitch.tv/oauth2/token";

    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);

    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        //console.log(xhr.responseText);
        callback(JSON.parse(xhr.responseText));
    }};

    var data = `{
        "client_id": "p4cox2cgmdgb3v8qmcsmd98omj6bqf",
        "client_secret": "wonq8t5oigks6pc1oxmh53blzkd477",
        "grant_type": "client_credentials"
    }`;

    xhr.send(data);
}

function validToken(resp) {
    if (typeof(resp) === "object" && resp.expires_in > 0) {
        console.log(true);
    } else {
        console.log(false);
    }
}

testToken(resp => validToken(resp));

