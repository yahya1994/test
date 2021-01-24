import React, { Component } from 'react';
import './Dialog.css';
import PopOver from "./PopOver";
import Icon from '@material-ui/core/Icon';
import ReactDOM from 'react-dom';
import Task from './Task';
import Draggable from 'react-draggable';
export default class Item extends Component {
    constructor(props) {
        super(props);

        this.state = {
            diffX: 0,
            diffY: 0,
            dragging: false, radius: this.props.radius, color: this.props.color, icon: this.props.children, color1: this.props.couleur1,
            styles: {}
        }

        this._dragStart = this._dragStart.bind(this);
        this._dragging = this._dragging.bind(this);
        this._dragEnd = this._dragEnd.bind(this);
    }

    _dragStart(e) {
        this.setState({
            diffX: e.screenX - e.currentTarget.getBoundingClientRect().left,
            diffY: e.screenY - e.currentTarget.getBoundingClientRect().top,
            dragging: true
        });
    }

    _dragging(e) {

        if (this.state.dragging) {
            var left = e.screenX - this.state.diffX;
            var top = e.screenY - this.state.diffY;

            this.setState({
                styles: {
                    left: left,
                    top: top
                }
            });
        }
    }

    _dragEnd() {
        this.setState({
            dragging: false
        });
    }
    allowDrop(ev) { ev.preventDefault(); }
    drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
        //this._dragStart(ev)
    }
    removeNode(node) {
        node.parentNode.removeChild(node);
    }
    drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        var isLeft = 'drag1' == data || "drag2" == data || "drag3" == data|| "drag4" == data;
        var nodeCopy = document.getElementById(data).cloneNode(true);
        nodeCopy.id = "img" + ev.target.id;

        if (isLeft) {
            if (ev.target.nodeName == 'IMG') {
                ev.target.parentNode.appendChild(nodeCopy);
                this.removeNode(ev.target);
            }
            else ev.target.appendChild(nodeCopy);
        }
        else {
            if (ev.target.nodeName != 'IMG') {
                this.removeNode(document.getElementById(data));
                ev.target.appendChild(nodeCopy);
            }
        }
        ev.stopPropagation();
        return false;
    }
    /*<div  id={this.props.id} className='Dialog' style={this.state.styles} 
    onMouseDown={this._dragStart} onMouseMove={this._dragging} onMouseUp={this._dragEnd}>
    <div className='DialogTitle'>{this.props.children}</div>
 </div>*/
    changeRadius = (a, b, c, d) => {
        this.setState({ radius: a });
        this.setState({ color: b });
        this.setState({ icon: c });
        this.setState({ color1: d });
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

            <div>
                <div id="divLeft">
                      <p style={{color:'white',fontSize:18}}>  TOOLS </p>
                    <div style={{ paddingTop: 20 }} draggable="true" onDragStart={(event) => this.drag(event)}
                        id="drag1">
                        <Task id='drag2cc1' couleur1='white' radius={100} color='#E5210A' className='task'  >
                            personne </Task>
                    </div>
                    <div id="divLeft1">
                    </div>

                    <div style={{ paddingTop: 20 }} draggable="true" onDragStart={(event) => this.drag(event)}
                        id="drag2">
                        <Task id='drag2cc' couleur1='white' radius={80} color='#F79919' className='task'  >
                            delete </Task>
                    </div>
                    <div id="divLeft2">
                    </div>
                    <div id="divLeft1">
                    </div>

                    <div style={{ paddingTop: 20 }} draggable="true" onDragStart={(event) => this.drag(event)}
                        id="drag3">
                        <Task id='drag2cc' couleur1='white' radius={15} color='#5D0AE5' className='task'  >
                            web </Task>
                    </div>
                    <div id="divLeft1">
                    </div>

                    <div style={{ paddingTop: 20 }} draggable="true" onDragStart={(event) => this.drag(event)}
                        id="drag4">
                        <Task id='drag2cc' couleur1='white' radius={15} color='#E5210A' className='task'  >
                            star </Task>
                    </div>
                    <div id="divLeft2">
                    </div>
                </div>
                <div id="divRight" onDragStart={(event) => this.drag(event)}
                    draggable="true" onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}>
                    <div>
                        <div id="divRight1" onDragStart={(event) => this.drag(event)}
                            draggable="true" onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}></div>
                        <div id="divRight2" onDragStart={(event) => this.drag(event)}
                            onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}></div>
                        <div id="divRight3" onDragStart={(event) => this.drag(event)}
                            onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}></div>
                        <div id="divRight4" onDragStart={(event) => this.drag(event)}
                            onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}></div>
                        <div id="divRight5" onDragStart={(event) => this.drag(event)}
                            onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}></div>
                        <div id="divRight4" onDragStart={(event) => this.drag(event)}
                            onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}></div>
                        <div id="divRight5" onDragStart={(event) => this.drag(event)}
                            onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}></div>
                        <div id="divRight4" onDragStart={(event) => this.drag(event)}
                            onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}></div>
                        <div id="divRight5" onDragStart={(event) => this.drag(event)}
                            onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}></div>
                        <div id="divRight4" onDragStart={(event) => this.drag(event)}
                            onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}></div>
                        <div id="divRight5" onDragStart={(event) => this.drag(event)}
                            onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}></div>

                    </div>
                    <div>
                        <div id="divRight6" onDragStart={(event) => this.drag(event)}
                            onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}></div>
                        <div id="divRight7" onDragStart={(event) => this.drag(event)}
                            onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}></div>
                        <div id="divRight9" onDragStart={(event) => this.drag(event)}
                            onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}></div>
                        <div id="divRight8" onDragStart={(event) => this.drag(event)}
                            onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}></div>
                        <div id="divRight4" onDragStart={(event) => this.drag(event)}
                            onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}></div>
                        <div id="divRight5" onDragStart={(event) => this.drag(event)}
                            onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}></div>
                        <div id="divRight4" onDragStart={(event) => this.drag(event)}
                            onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}></div>
                        <div id="divRight5" onDragStart={(event) => this.drag(event)}
                            onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}></div>
                        <div id="divRight4" onDragStart={(event) => this.drag(event)}
                            onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}></div>
                        <div id="divRight5" onDragStart={(event) => this.drag(event)}
                            onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}></div>

                    </div>
                    <div>
                        <div id="divRight7" onDragStart={(event) => this.drag(event)}
                            onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}></div>
                        <div id="divRight9" onDragStart={(event) => this.drag(event)}
                            onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}></div>
                        <div id="divRight8" onDragStart={(event) => this.drag(event)}
                            onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}></div>
                        <div id="divRight8" onDragStart={(event) => this.drag(event)}
                            onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}></div>
                        <div id="divRight8" onDragStart={(event) => this.drag(event)}
                            onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}></div>
                        <div id="divRight4" onDragStart={(event) => this.drag(event)}
                            onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}></div>
                        <div id="divRight5" onDragStart={(event) => this.drag(event)}
                            onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}></div>
                        <div id="divRight4" onDragStart={(event) => this.drag(event)}
                            onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}></div>
                        <div id="divRight5" onDragStart={(event) => this.drag(event)}
                            onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}></div>
                        <div id="divRight4" onDragStart={(event) => this.drag(event)}
                            onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}></div>
                        <div id="divRight5" onDragStart={(event) => this.drag(event)}
                            onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}></div>
                    </div>
                    <div>
                        <div id="divRight7" onDragStart={(event) => this.drag(event)}
                            onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}></div>
                        <div id="divRight9" onDragStart={(event) => this.drag(event)}
                            onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}></div>
                        <div id="divRight8" onDragStart={(event) => this.drag(event)}
                            onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}></div>
                        <div id="divRight7" onDragStart={(event) => this.drag(event)}
                            onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}></div>
                        <div id="divRight9" onDragStart={(event) => this.drag(event)}
                            onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}></div>
                        <div id="divRight4" onDragStart={(event) => this.drag(event)}
                            onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}></div>
                        <div id="divRight5" onDragStart={(event) => this.drag(event)}
                            onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}></div>
                        <div id="divRight4" onDragStart={(event) => this.drag(event)}
                            onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}></div>
                        <div id="divRight5" onDragStart={(event) => this.drag(event)}
                            onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}></div>
                        <div id="divRight4" onDragStart={(event) => this.drag(event)}
                            onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}></div>
                        <div id="divRight5" onDragStart={(event) => this.drag(event)}
                            onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}></div>
                    </div>
                    <div>
                        <div id="divRight7" onDragStart={(event) => this.drag(event)}
                            onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}></div>
                        <div id="divRight9" onDragStart={(event) => this.drag(event)}
                            onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}></div>
                        <div id="divRight8" onDragStart={(event) => this.drag(event)}
                            onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}></div>
                        <div id="divRight7" onDragStart={(event) => this.drag(event)}
                            onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}></div>
                        <div id="divRight9" onDragStart={(event) => this.drag(event)}
                            onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}></div>
                        <div id="divRight4" onDragStart={(event) => this.drag(event)}
                            onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}></div>
                        <div id="divRight5" onDragStart={(event) => this.drag(event)}
                            onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}></div>
                        <div id="divRight4" onDragStart={(event) => this.drag(event)}
                            onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}></div>
                        <div id="divRight5" onDragStart={(event) => this.drag(event)}
                            onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}></div>
                        <div id="divRight4" onDragStart={(event) => this.drag(event)}
                            onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}></div>
                        <div id="divRight5" onDragStart={(event) => this.drag(event)}
                            onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}></div>
                    </div>
                    <div>
                        <div id="divRight7" onDragStart={(event) => this.drag(event)}
                            onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}></div>
                        <div id="divRight9" onDragStart={(event) => this.drag(event)}
                            onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}></div>
                        <div id="divRight8" onDragStart={(event) => this.drag(event)}
                            onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}></div>
                        <div id="divRight7" onDragStart={(event) => this.drag(event)}
                            onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}></div>
                        <div id="divRight9" onDragStart={(event) => this.drag(event)}
                            onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}></div>
                        <div id="divRight4" onDragStart={(event) => this.drag(event)}
                            onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}></div>
                        <div id="divRight5" onDragStart={(event) => this.drag(event)}
                            onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}></div>
                        <div id="divRight4" onDragStart={(event) => this.drag(event)}
                            onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}></div>
                        <div id="divRight5" onDragStart={(event) => this.drag(event)}
                            onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}></div>
                        <div id="divRight4" onDragStart={(event) => this.drag(event)}
                            onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}></div>
                        <div id="divRight5" onDragStart={(event) => this.drag(event)}
                            onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}></div>
                    </div>
                    <div>
                        <div id="divRight7" onDragStart={(event) => this.drag(event)}
                            onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}></div>
                        <div id="divRight9" onDragStart={(event) => this.drag(event)}
                            onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}></div>
                        <div id="divRight8" onDragStart={(event) => this.drag(event)}
                            onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}></div>
                        <div id="divRight7" onDragStart={(event) => this.drag(event)}
                            onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}></div>
                        <div id="divRight9" onDragStart={(event) => this.drag(event)}
                            onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}></div>
                        <div id="divRight4" onDragStart={(event) => this.drag(event)}
                            onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}></div>
                        <div id="divRight5" onDragStart={(event) => this.drag(event)}
                            onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}></div>
                        <div id="divRight4" onDragStart={(event) => this.drag(event)}
                            onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}></div>
                        <div id="divRight5" onDragStart={(event) => this.drag(event)}
                            onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}></div>
                        <div id="divRight4" onDragStart={(event) => this.drag(event)}
                            onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}></div>
                        <div id="divRight5" onDragStart={(event) => this.drag(event)}
                            onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}></div>
                    </div>

                </div>
            </div>);





    }
}
const styles = {
    dragbox: {
        width: 50,
        backgroundColor: '#bef755',
        borderRadius: 50, height: 30, paddingBottom: 15
    },
    icon: {
        color: 'black', fontSize: 40, paddingTop: 5
    }
};