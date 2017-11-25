import React,{Component} from 'react'


class MessageBox extends Component{
    render(){
        const msg = [];
        this.props.message.forEach((item,index)=>{
            msg.push(
                <p>{item+' '+index}</p>,
            )
        });
        return (
            <div>{msg[2]}</div>
        )
    }
}
export default MessageBox;