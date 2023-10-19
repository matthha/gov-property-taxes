import {useState} from "react";


// onInput={(e) => inputHandler(e, stateName)}
const Nav = ( {setScreen} ) => {

    return (
        <div className="nav grid g5">
        
        <h1 className='b' >About Us</h1>
        <h1 className='b' onClick={(e) => setScreen('Learn')}>Learn</h1>
        <h1 className='b'>Teach</h1>
        <h1 className='b'>Partner</h1>
        <h1 className='b'>FAQ</h1>
        </div>
    )

}
export default Nav;