function getDataApi(filterHouse){
    
    return fetch(`https://hp-api.onrender.com/api/characters/house/${filterHouse}`)
    .then((resp)=> resp.json())
    .then((data)=> {

        const newArray = data.map((character)=>{

            return{
                id: character.id,
                name: character.name, 
                image: character.image,
                species: character.species, 
                house: character.house, 
                alive: character.alive, 
                patronus: character.patronus, 
                ancestry: character.ancestry,
            };
        });
        return newArray;
    })
}

export default getDataApi;