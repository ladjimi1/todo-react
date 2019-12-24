import React, { Component } from 'react';
import './App.css';
import uuid from 'uuid';
class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: [],
            text: ""

        }
    }
    add = () => {
        this.setState({ tab: this.state.tab.concat({ id: uuid(), text: this.state.text , complete:false}), text:'' })
    }
    hendlEchange = e => {
        this.setState({ text: e.target.value })
    }
    delet= (id)=>{
        this.setState({tab: this.state.tab.filter(el=> el.id !== id)})
    }
    complete = (id)=> {
        this.setState({
            tab : this.state.tab.map(el =>id == el.id ? {...el , complete : !el.complete} : el)
        })
    }
    
    render() {
        return (
            <div className="todo">
                <input onChange={this.hendlEchange} className="inp" placeholder="Entrer New Task" value={this.state.text}/>
                <input className="btn" type="button" value="ADD" onClick={this.add} />
                {this.state.tab.map(el => (<div><h1 className= {el.complete && 'complete' }>{el.text}</h1> <button className="but1" onClick={()=>this.complete(el.id)}>{el.complete? 'undo':'complet'}</button><button className="but1"  onClick={()=>this.delet(el.id)}>Delete</button></div>))}
            </div>

        );
    }
}







export default Todo;