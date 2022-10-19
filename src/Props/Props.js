import { useState } from 'react';
import './style.css';
import Natflx from './Natflixprops';
import natflexdata from './Natflixdata';

import Amazonprops from './Amazonprops';
import amazondata from './Amazomdata';


function Props(){
    
    function getvalue(event){
        console.log(event.target.value)
        if(event.target.value === 'Natflix'){
            console.log("Natflix", "Natflix")
        }else{
            console.log("Amazon", "Amazon")
        }
    }
    const [count,Setcount] = useState(1);
    console.log(Setcount);
    const IncNum = () =>{
        Setcount(count+1)
    }

    return(
        <>
            <div className='container'>
                <div className='text-center'>
                    <p>{count}</p>
                    <button className='btn btn-primary' onClick={IncNum}>Click</button>
                </div>

                <div className='w-100 mb-3'>
                    <div className='form-check'>
                        <input  className="form-check-input" type="radio" name="web" value="Natflix" onChange={getvalue}  />
                        <label className="form-check-label">
                            Natflix
                        </label>
                    </div>
                    <div className='form-check'>
                        <input  className="form-check-input" type="radio" name="web" value="Amazon" onChange={getvalue} />
                        <label className="form-check-label">
                            Amazon
                        </label>
                    </div>
                </div>                
                <div className='row Department_grid gy-4'>

                    {natflexdata.map((value,index) =>
                        {
                            return(
                                <Natflx key={index} name={value.name} imgsrc={value.imgsrc}  />
                            )
                        }
                    )}
                </div>

                <div className='row Department_grid gy-4'>
                        {amazondata.map((value,index) =>
                            {
                                return(
                                    <Amazonprops key={index} webname={value.title} webimgsrc={value.imgsrc} />
                                )
                            }
                        )}
                </div>
            </div>
        </>
    )    
}
export default Props;