import React, { Component } from 'react'

class Cell extends Component {
    getValue() {
        const {value} = this.props; 
        if (!value.isRevealed) {
          return this.props.value.isFlagged ? "0" : null;
        }
        if (value.isMine) {
          return "1";
        }
        if (value.neighbour === 0) {
          return null;
        }
        return value.neighbour;
      }
    
      render() {
        const {value, onClick, cMenu} = this.props;
        let className =
          "cell" +
          (value.isRevealed ? "" : " hidden") +
          (value.isMine ? " is-mine" : "") +
          (value.isFlagged ? " is-flag" : ""); 
        return (
          <div
            onClick={onClick}
            className={className}
            onContextMenu={cMenu}
          >
            {this.getValue()}
          </div>
        );
      }
}



export default Cell;