export const getData = async () => {
    try {
        let res = await fetch("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json", {mode: "cors"});
        if(res.ok) {
            let data = await res.json();
            return data;
        } else {
            return false;
        }       
    }catch (error) {
        console.log(error);
    }
}