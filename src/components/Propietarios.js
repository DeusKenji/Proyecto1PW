import React from 'react';
import './css/Propietarios.css';
import Registro from './Registro2';

class Propietarios extends React.Component{
    
    constructor(args){
        super(args)
        this.state = {
            vModal: false,
        }
    }

    estadoModal=()=>{
        if(this.state.vModal==false){
            this.setState({vModal: true});
        }else{
            this.setState({vModal: false})
        }
    }

    render(){
        return(
            <div className='general'>
                <h2 className='text-center subt'>PROPIETARIOS</h2><br/>
                <div className='subt'>
                    <div>
                        <br/>
                        <Registro/>
                    </div>
                </div>
            </div>
        )
    }
}
export default Propietarios;