import React from "react"
import Logo from "./Logo"
import ChangeText from "./ChangeText/ChangeText"

function Header(props){
    const { name,age } = props
    return (
        <React.Fragment>
            <h1>Header {name} {age}</h1>
            <Logo/>
            <ChangeText/>
            <ChangeText/>
        </React.Fragment>
        
    )
}

export default Header