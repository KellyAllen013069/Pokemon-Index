import React, {useState} from 'react';
import FilterForm from "../components/filterform.page"
import DisplayResults from '../components/displayResults';


function Home({pokemonList}) {
    //console.log("in home pokemonList is " + pokemonList);
    //initially want to set filteredList to list passed in
    const [filteredList, setFilteredList] = useState([...pokemonList])
  
    return (
        <div className='flex-container'>
            <FilterForm pokemonList={pokemonList} filteredList={filteredList} setFilteredList={setFilteredList}/>
            <DisplayResults filteredList={filteredList} setFilteredList={setFilteredList}/>
        </div>

    );
}      
            
            

export default Home