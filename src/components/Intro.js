import React from 'react';
import ReactDOM from 'react-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Intro extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name:" "
        }
    }
    nameChange = (val)=>{
        this.setState({
            name:val.target.value
        })
    }
    handleSubmit = ()=>{
        alert("the name is "+this.state.name)
    }
    render(){
        
        return(
            <div>
            <div className = "username">
                <TextField id="outlined-search" label="Enter your name" type="search" variant="outlined" onChange = {this.nameChange} style = {{width: '100%', marginBottom:20}}/>
                
            </div>
            <div>
                <Button variant = "contained" onClick={this.handleSubmit} style = {{width: '100%', backgroundColor:'#f89e1e', marginTop:'30px'}} color = "primary"  size = "large">SUBMIT</Button>{' '}
            </div>
            </div>
            
        )
        
    }
}
export default Intro;