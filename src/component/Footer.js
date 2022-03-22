import React,{Component} from 'react';

 class Footer extends Component {

    state={
        keyword:'marco'
    }
    inputChange =(event) =>{
    this.setState({
        keyword:event.target.value
    })
    }
    render(){
        console.log(this.state.keyword);
        return(
            <>
             <p onClick={()=>{console.log('i was click');}}>hello footer</p>
             <input type='text' onChange={this.inputChange} />
            </>
        )
    }
    
 }
 export default Footer;