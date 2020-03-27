import React , {Component} from 'react';
import Types from './Types/Types.js';

export default class Total extends Component{

    state = {
        data : {}
    }

    componentDidMount(){
        const url = "https://coronavirus-19-api.herokuapp.com/all"
        fetch(url)
        .then(response => response.json())
        .then(json => {
            this.setState({data:json})
            console.log(this.state.data);
        })
    }

    render(){
        return(
            <div>
                <Types></Types>
                <Types></Types>
                <Types></Types>
            </div>
        )
    }
}

