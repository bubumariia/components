import React from "react";
import {styleBtn} from './style'



class ChangeText extends React.Component{
    constructor(){
        super()
        this.state = {text:'Hello World'}
    }
    changeTheText = () =>{
        this.setState({text:'Hello my friends'})
    }
    render(){
        const { text } = this.state.text
        return(
            <React.Fragment>
                <div className="container">
                    <h1>{this.state.text}</h1>
                    <button style={styleBtn} onClick={this.changeTheText}>Click me</button>

                </div>
            </React.Fragment>
        )
    }

}

export default ChangeText