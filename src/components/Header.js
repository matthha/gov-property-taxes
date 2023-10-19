import {useState} from "react";

const Header = () => {

    return (
        <div className="grid">
        <img width="198" height="36" src="https://nexus.engin.umich.edu/wp-content/uploads/2022/10/nexus-ME-logo-formal.svg" className="custom-logo astra-logo-svg entered lazyloaded" alt="Nexus at Michigan Engineering" decoding="async" data-lazy-src="https://nexus.engin.umich.edu/wp-content/uploads/2022/10/nexus-ME-logo-formal.svg" data-ll-status="loaded"></img>
        <div className="grid g4">
            <div className='b'>Contact</div>
            <div className='b'>Give</div>
            <div className='b'>News</div>
            <div className='b'>Search</div>
        </div>
        </div>
    )

}
export default Header;