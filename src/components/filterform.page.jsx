import { useState } from 'react';
import { GetColor } from "../utils/getColors"; 

function FilterForm({pokemonList, filteredList, setFilteredList}) {
    let [name,setName] = useState("");
    let [weaknesses,setWeaknesses] = useState([]);
    let [types, setTypes] = useState([]);
 
   let wChoices = ["Bug","Dark","Dragon","Electric","Fairy","Fighting","Fire","Flying","Ghost","Grass","Ground","Ice","Poison","Psychic","Rock","Steel","Water"]
   let tChoices = ["Bug","Dragon","Electric","Fighting","Fire","Flying","Ghost","Grass","Ground","Ice","Normal","Poison","Psychic","Rock","Water"] ;

  /*  function updateWeak(w) { 
        console.log("***** w id is " + w.id)
        if (weaknesses.includes(w.id)) {
            weaknesses.splice(weaknesses.indexOf(w.id),1)
        } else {
            weaknesses.push(w.id);
        
        }
        console.log("weak are" + weaknesses)
    }    */

    function updateWeak(w) {
        console.log(w.id)
        if (weaknesses.includes(w.id)) {
            weaknesses.splice(weaknesses.indexOf(w.id),1)
        } else {
            weaknesses.push(w.id);
        
        }
        console.log("weaknesses are " + weaknesses);
    }

    function updateTypes(t) {
        console.log(t.id)
        if (types.includes(t.id)) {
            types.splice(types.indexOf(t.id),1)
        } else {
            types.push(t.id);
        
        }
        console.log("type are " + types);
    }

    function filterData(e) {
        e.preventDefault();
        //console.log("setting back to all data again*****************")
        //console.log("filtered list is now" + filteredList.length)
        
        if (name === "" && weaknesses == "" && types =="") {
            setFilteredList([...pokemonList])
            return;
        }
        console.log("name is " + name + " types are " + types + " weak are " + weaknesses + "length is " + weaknesses.length); 
        let nameMatchNever = false;
        let nameMatch = false;
        let typeMatchNever = false;
        let typeMatch = false;
        let weakMatchNever = false;
        let weakMatch = false;
        if (name === "") {
            nameMatchNever = true;
            nameMatch = true;
        }
        if (types == "") {
            typeMatchNever = true;
            typeMatch = true;
        }
        if (weaknesses == "") {
            weakMatchNever = true;
            weakMatch = true;
        }

        let results = [];

        //let's see if we can go thru array only once
        for(let i=0;i<pokemonList.length;i++) {
            console.log("iterating " + pokemonList[i].name)
            //check name
            if (!nameMatch && pokemonList[i].name.toLowerCase().includes(name.toLowerCase())) {
                    nameMatch = true;
                    //console.log(pokemonList[i].name + "MATCHES")
                }
            //check types
            if (!typeMatch) {
                let typeArr = types;
                for (let j=0;j<typeArr.length;j++) {
                        if (pokemonList[i].type.includes(typeArr[j])) {
                            typeMatch = true;
                            break;
                        }

                }
            }
            //check weaknesses
            if (!weakMatch) {
                
                let weakArr = weaknesses;
                for (let j=0;j<weakArr.length;j++) {
                    if (pokemonList[i].weaknesses.includes(weakArr[j])) {
                        console.log("*****WEAK MATCHES")
                        weakMatch = true;
                        break;
                    }
                }
            }
            //console.log("nameMatch is " + nameMatch + " typeMatch is " + typeMatch + " weakMatch is " + weakMatch)
            if (nameMatch && typeMatch && weakMatch) {   
                console.log("***********MATCH************")
                results.push(pokemonList[i])
            }
            nameMatch = nameMatchNever ? true : false;
            typeMatch = typeMatchNever ? true : false;
            weakMatch = weakMatchNever ? true: false;
            
        }
        //console.log("RESULTS ARE " + results)
        setFilteredList(results); 
    }

    return (
        <div>
        <div className='filter-header'>
            <h2>Pokemon Filter</h2>
        </div>
        
        <form id="filter-form">
            <div className="filter-grid">
                    <div>
                        <label htmlFor='name'>Name(or partial name):</label>
                        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
                    </div>
                <div>
                    Select one or more types:
                </div>
                <div id="types" className="type-choices filter-grid-child-1">
                    
                        {tChoices.map((x,index) => {
                            return (
                                
                                <div className="type-grid">
                                    <input type="checkbox"  key={index} id={x} onChange={e=>updateTypes(e.target)}/>
                                    <span style={{background: GetColor(x)}}>{x}</span>
                                </div>
                            
                            )
                        })}
                    
                </div>
            
                <div>
                    Select one or more weaknesses:
                </div>

                <div id="weaknesses" className="weak-choices filter-grid-child-2">
                        {wChoices.map((x,index) => {
                            return (
                                
                                <div>
                                    <input type="checkbox"  key={index} id={x} onChange={e=>updateWeak(e.target)}/>
                                    <span style={{background: GetColor(x)}}>{x}</span>
                                </div>
                            
                            )
                        })}
                    
                </div>
                
                <div className='center'>
                    <button type='submit' className='filter-btn' onClick={e => filterData(e)}>Submit</button>
                </div>
            
            </div>
            
        </form>
        </div>
    )

}

export default FilterForm