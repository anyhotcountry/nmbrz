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
        this.onTouchStart = this.onTouchStart.bind(this);
        this.onTouchMove = this.onTouchMove.bind(this);
        this.onTouchEnd = this.onTouchEnd.bind(this);
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

    onTouchStart(e) {
        const ref = ReactDOM.findDOMNode(this.handle);
        const body = document.body;
        const box = ref.getBoundingClientRect();
        const touchobj = e.changedTouches[0];
        this.setState({
            relX: touchobj.pageX - (box.left + body.scrollLeft - body.clientLeft),
            relY: touchobj.pageY - (box.top + body.scrollTop - body.clientTop)
        });
        document.addEventListener('touchmove', this.onTouchMove);
        document.addEventListener('touchend', this.onTouchEnd);
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

    onTouchEnd(e) {
        document.removeEventListener('touchmove', this.onTouchMove);
        document.removeEventListener('touchend', this.onTouchEnd);
        this.props.onStop && this.props.onStop(this.state.x, this.state.y);
    }

    onTouchMove(e) {
        const touchobj = e.changedTouches[0];
        const x = Math.trunc((touchobj.pageX - this.state.relX) / this.gridX) * this.gridX;
        const y = Math.trunc((touchobj.pageY - this.state.relY) / this.gridY) * this.gridY;
        if (x !== this.state.x || y !== this.state.y) {
            this.setState({
                x,
                y
            });
        }
    }

    render() {
        return <div
            onMouseDown={this.onMouseDown}
            onTouchStart={this.onTouchStart}
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
