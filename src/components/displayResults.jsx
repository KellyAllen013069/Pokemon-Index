
import {useNavigate} from 'react-router-dom';
import {GetColor} from '../utils/getColors'

function DisplayResults({filteredList, setFilteredList}) {

    //console.log("in display filteredList is " + filteredList);
    const navigate = useNavigate();

    function goToCard(e) {
        navigate(`/pokeCard`,{state:{p:e}});
    }

    return(
        <div className='table-div center'>
            <table className='display-table'>
                <thead>
                    <tr className="table-header">
                        <th>Number</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Weaknesses</th>
                    </tr>
                </thead>
                <tbody>
                
                {filteredList.map((e) => {
                        return (
                        <tr key={e.id} onClick={() => goToCard(e)}> 
                            <td>
                            {e.num}
                            </td>
                            <td >
                            <span>{e.name}</span>
                            </td>
                            <td>
                            {e.type.map(t => {
                                return (<span className='pad-2' style={{background: GetColor(t)}}>{t} </span>)
                                
                            })}
                            </td>
                            <td>
                            {e.weaknesses.map(w => {
                                return ( <span className='pad-2' style={{background: GetColor(w)}}>{w} </span>)
                                
                            })}
                            </td>
                        </tr>
                    )})}
                </tbody>
            </table>
        
        </div>
        
        );
        
}

export default DisplayResults