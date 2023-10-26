import {useState} from "react";

const Calculator = (props) => {
    const [dist, setDist] = useState('none');
    const [zip, setZip] = useState();
    const [owner, setOwner] = useState('');
    const [value, setValue] = useState();
    const [cur, setCur] = useState([1, 0, 0, 0]);
    const [season, setSeason] = useState('Summer');
    const sumMill = 30.846;
    const winMill = 20.564

    return (
        <div className="flexbox">

{/* This is the Left Side */}

            <div className="promptSide">
                <div>School District</div>
                <select value={dist} onChange={(e)=>{setDist(e.target.value)}}>
                    <option value='none'></option>
                    <option value='one'>Dearborn City School District</option>
                    <option value='two'>Westwood Community Schools</option>
                    <option value='three'>Unknown</option>
                </select>
                {dist==="three"?
                    <div>
                    <div>Zipcode</div>
                    <input type='text' value={zip} onChange={(e)=>{setZip(e.target.value);}}></input>
                    </div>
                :null}

                <div>
                    <button className={owner === 'Current'? 'buttonSelect':''} onClick={()=>setOwner('Current')}>Current Owner</button>
                    <button className={owner === 'New'? 'buttonSelect':''} onClick={()=>setOwner('New')}>New/Prospective Owner</button>
                </div>
                <div>
                    Use State Equalized Value (SEV)
                </div>
                <div>
                    Don't Know the SEV? Try Estimate Here
                </div>
                <input type='text' value={value} onChange={(e)=>{setValue(e.target.value);}}></input>
                <div>
                <button onClick={()=>setCur([dist,value])}>Calculate Taxes</button>
                </div>
            </div>

{/* This is the Right Side */}

            <div className="breakdownSide">
                <h2 className='gridLong'>Breakdown</h2> 
                <h3>Previous Taxable Value </h3> <h3>${cur[1]}</h3>
                <h3>x Interest Rate (1.4%)</h3> <h3>x 1.014</h3>
                <h3>+ Modifications</h3> <h3>+ $0</h3>
                <hr></hr><hr></hr>
                <h3>Projected Taxable Value</h3><h3>${Number(cur[1])*1.014}</h3>
                <div className='gridLong'>
                    <button className={season === 'Summer'? 'buttonSelect':''} onClick={()=>setSeason('Summer')}>Summer Payment</button>
                    <button className={season === 'Winter'? 'buttonSelect':''} onClick={()=>setSeason('Winter')}>Winter Payment</button>
                </div>
                <h3>x {season} Millage Rates</h3><h3>x {season === 'Summer'? sumMill: winMill}</h3>
                <h3>Divided by</h3><h3>/ 1000</h3>
                <h2>{season} Payment</h2>  <p>${season === 'Summer'?cur[1]/1000*sumMill:cur[1]/1000*winMill}</p>
                
                <div className='gridLong'>
                    <h3>2024 Total</h3>
                    <h3>${cur[1]*(sumMill+winMill)/1000}</h3>
                </div>
            </div>
        </div>
    )
}
export default Calculator