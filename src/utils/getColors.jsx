
export const GetColor = (value) => {
    let pokeColors = [
        {"v": "Bug","topcolor": "rgb(93,151,40)", "bottomcolor": "rgb(93,151,40)"},
        {"v": "Dark", "topcolor": "rgb(100,100,100)", "bottomcolor": "rgb(100,100,100)"},
        {"v": "Dragon", "topcolor": "rgb(90,146,203)", "bottomcolor": "rgb(232,106,77)"},
        {"v": "Electric", "topcolor": "rgb(225,219,0)", "bottomcolor": "rgb(225,219,0)"},
        {"v": "Fairy", "topcolor": "rgb(254,171,233)", "bottomcolor": "rgb(254,171,233)"},
        {"v": "Fighting", "topcolor": "rgb(211,129,69)", "bottomcolor": "rgb(211,129,69)"},
        {"v": "Fire", "topcolor": "rgb(244,124,22)", "bottomcolor": "rgb(244,124,22)"},
        {"v": "Flying", "topcolor": "rgb(81,184,239)", "bottomcolor": "rgb(180,176,175"},
        {"v": "Ghost", "topcolor": "rgb(122,83,159)", "bottomcolor": "rgb(122,83,159"},
        {"v": "Grass", "topcolor": "rgb(136,206,51)", "bottomcolor": "rgb(136,206,51)"},
        {"v": "Ground", "topcolor": "rgb(235,229,12)", "bottomcolor": "rgb(155,149,47"},
        {"v": "Ice", "topcolor": "rgb(91,182,230)", "bottomcolor": "rgb(91,182,230)"},
        {"v": "Normal", "topcolor": "rgb(155,162,166)", "bottomcolor": "rgb(155,162,166"},
        {"v": "Poison", "topcolor": "rgb(194,133,209)", "bottomcolor": "rgb(194,133,209)"},
        {"v": "Psychic", "topcolor": "rgb(240,83,182)", "bottomcolor": "rgb(240,83,182)"},
        {"v": "Rock", "topcolor": "rgb(146,136,0)", "bottomcolor": "rgb(146,136,0)"},
        {"v": "Steel", "topcolor": "rgb(149,173,175)", "bottomcolor": "rgb(149,173,175)"},
        {"v": "Water", "topcolor": "rgb(78,124,188)", "bottomcolor": "rgb(78,124,188)"},
    ]
   
    var index = pokeColors.map(o => o.v ).indexOf(value.trim());
    return `linear-gradient(${pokeColors[index].topcolor},${pokeColors[index].bottomcolor}`;

}


