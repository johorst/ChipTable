var Spiel;
var RaiseRunde;
var Player;

var spiel = new function (type) {
    this.type = type;
    this.raiseRunde = new function () {
        this.pott = 0;
        this.aktuellerRaise = 0;
        this.maxStationen = spiel.players.length() * 2;
        this.aktiverSpieler = 0;
    }
    this.maxRaiseRunden = 4;
    this.players = {};
    this.dealer = 0;
}

var player = new function (name, guthaben) {
    this.name = name;
    this.guthaben = guthaben;
    this.inOut = true;
    this.raise = new function (spiel, zusaetzlicherRaise) {
        spiel.aktuellerRaise += zusaetzlicherRaise;
        player.guthaben = player.guthaben - spiel.aktuellerRaise;
    }
    this.call = new function () {
        player.guthaben = player.guthaben - spiel.aktuellerRaise;
    }
    this.pass = new function () {
        player.inOut = false;
    }
}