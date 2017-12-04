import React, {Component} from 'react';
import MessageBox from './subcontainer/mesageBox/messageBox';
import List from './subcontainer/list/list'

class Hello extends Component {
    constructor(props, content){
        super(props, content);
        this.state = {
            clickCount:0,
            message:['hello', 'world', '!!!'],
            listData:['我会搬砖', '我会花式搬砖', '不说了，我要去搬砖了']
        }
    }
    render() {
        return (
            <div>
                <h2 onClick={this.clickHandler.bind(this)}>你好，世界！！！</h2>
                <p>你一共点击了我：{this.state.clickCount}</p>
                <MessageBox message={this.state.message}/>
                <List data={this.state.listData}/>
            </div>
        )
    }
    clickHandler(){
        this.setState({
            clickCount:this.state.clickCount+1,
        })
    }
}
export default Hello;