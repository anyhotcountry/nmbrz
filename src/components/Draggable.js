import React from 'react';
import ReactDOM from 'react-dom';

class Draggable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            relX: 0,
            relY: 0,
            x: props.x,
            y: props.y
        };
        this.gridX = props.grid ? props.grid[0] : 1;
        this.gridY = props.grid ? props.grid[1] : 1;
        this.onMouseDown = this.onMouseDown.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onMouseUp = this.onMouseUp.bind(this);
    }

    onMouseDown(e) {
        if (e.button !== 0) return;
        const ref = ReactDOM.findDOMNode(this.handle);
        const body = document.body;
        const box = ref.getBoundingClientRect();
        this.setState({
            relX: e.pageX - (box.left + body.scrollLeft - body.clientLeft),
            relY: e.pageY - (box.top + body.scrollTop - body.clientTop)
        });
        document.addEventListener('mousemove', this.onMouseMove);
        document.addEventListener('mouseup', this.onMouseUp);
        e.preventDefault();
    }

    onMouseUp(e) {
        document.removeEventListener('mousemove', this.onMouseMove);
        document.removeEventListener('mouseup', this.onMouseUp);
        this.props.onStop && this.props.onStop(this.state.x, this.state.y);
        e.preventDefault();
    }

    onMouseMove(e) {
        const x = Math.trunc((e.pageX - this.state.relX) / this.gridX) * this.gridX;
        const y = Math.trunc((e.pageY - this.state.relY) / this.gridY) * this.gridY;
        if (x !== this.state.x || y !== this.state.y) {
            this.setState({
                x,
                y
            });
        }
        e.preventDefault();
    }

    render() {
        return <div
            onMouseDown={this.onMouseDown}
            onTouchStart={this.onMouseDown}
            style={{
                position: 'absolute',
                left: this.state.x,
                top: this.state.y
            }}
            ref={(div) => { this.handle = div; }}
        >
            {this.props.children}
        </div>;
    }
}

export default Draggable;
