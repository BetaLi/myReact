import React,{Component} from 'react';

class List extends Component{
    render(){
        const dat=[];
        this.props.data.forEach((item, index)=>{
            dat.push(
                <li key={index}>{item}</li>
            )
        });

        return (
            <div>
                <ul>
                {dat}
                </ul>
            </div>
        )
    }
}
export default List;