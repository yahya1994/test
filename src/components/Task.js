import React, { Component } from 'react';
import Item from './Item';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';
import PopOver from "./PopOver"; import Icon from '@material-ui/core/Icon';

   
export default class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {
            radius: this.props.radius, color: this.props.color, icon: this.props.children, color1: this.props.couleur1,
        }

    }
    dragStart = e => {
        const target = e.target;
        e.dataTransfer.setData('task_id', target.id);
    }

    dragOver = e => {
        e.stopPropagation();

    }
    changeRadius = (a, b, c,d) => {
        this.setState({ radius: a });
        this.setState({ color: b });
        this.setState({ icon: c });
        this.setState({ color1: d });
    }
    myFunction = () => {
        var itm1 = document.getElementById(this.props.id).firstChild;
      var itm = itm1.parentNode; 
         var cln = itm.cloneNode(true);
         document.getElementById("main").appendChild(cln);
      
     }  
     
    render() {
        const change = {
            ...styles.dragbox,
            borderRadius: this.state.radius,
            backgroundColor: this.state.color,
        
        };
        const icon = {
            ...styles.icon,
            color: this.state.color1,
        }

        return (
            < div>

            <div
                id={this.props.id}
                className={this.props.className}
                draggable={this.props.draggable}
                onDragStart={this.dragStart}
                onDragOver={this.dragOver}
            >
               {/* <Draggable > */}
                    <div style={change}>
                        <PopOver  couleur1={this.state.color1}  iconName={this.state.icon}  couleur={this.state.color} radius={this.changeRadius}>
                            < Icon style={icon} >    {this.state.icon} </ Icon>

                        </PopOver>
                    </div>
                    {/*</Draggable>*/}
            
            </div>
              {/*  <button onClick={this.myFunction}> + </button>*/ }

                </div>

        );
    }
}


const styles = {
    dragbox: {
        width: 50,
        backgroundColor: '#bef755',
        borderRadius: 50,
    } , icon:{
        color: 'black', fontSize: 40, paddingRight: 15 
    }
};