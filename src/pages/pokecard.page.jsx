import {useLocation, useNavigate} from 'react-router-dom'
import { GetColor } from '../utils/getColors';



function PokeCard() {
    const location = useLocation();
    const data = location.state;
    const navigate = useNavigate();
    console.log(data.p);


    return (
            <div>
                <div>
                    <button onClick={()=>navigate(-1)}>Back</button>
                </div>
                <div className='poke-card-grid'>
                   
                    <div className='grid-item-1'>
                        <h1>{data.p.name} #{data.p.num}</h1>
                    </div>
                    
                    <div className="grid-item-2">
                        <img src={data.p.img} alt={data.p.name}/>
                    </div>

                    <div className="grid-item-3 flex-column-space" >
                            <div>
                                <div className='card-text-white'>
                                    Height:
                                </div>
                                <div>
                                    {data.p.height}
                                </div>
                            </div>
                            <div>
                                <div className='card-text-white'>
                                    Weight:
                                </div>
                                <div>
                                    {data.p.weight}
                                </div>
                            </div>  
                    </div>
                       
                    <div className='grid-item-4 '>
                        <div>
                            Type(s):
                        </div>
                        <div >
                            {data.p.type.map(t => {
                                return (
                                <span className='pad-2' style={{background: GetColor(t)}}>{t}</span>
                                )
                            })}
                        </div>
                    </div>

                    <div className='grid-item-5'>
                        <div>
                            Weaknesses:
                        </div>
                        <div >
                            {data.p.weaknesses.map(w => {
                                return (
                                <span className='pad-2' style={{background: GetColor(w)}}>{w}</span>
                                )
                            })}
                        </div>
                    </div>
            </div>
        </div>
   
            
    );
}

export default PokeCard