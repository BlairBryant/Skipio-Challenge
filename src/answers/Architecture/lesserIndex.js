import React from "react";
// import FollowsMouse from './FollowsMouse'

class Component extends React.Component {
  constructor() {
    super()

    this.state = {
      mouseX: '0px',
      mouseY: '10px'
    }
  }

  mouseMove = (e) => {
    if (e.nativeEvent.offsetY > 100) {
      this.setState({ mouseX: e.pageX - 260, mouseY: e.nativeEvent.offsetY + 20})

    }
  }

  render() {
    return (
      <div style={{width: '100%', height: '500px', position: 'relative', zIndex: '2'}} onMouseMove={this.mouseMove}>
        <div  style={{
          width: '200px',
          height: '100px',
          border: '1px solid green',
          position: 'absolute',
          left: `${this.state.mouseX}px`,
          top: `${this.state.mouseY}px`,
          zIndex: '1'
        }} onMouseMove={this.mouseMove2}>
          <h2>X: {this.state.mouseX} {this.state.mouseY}</h2>
        </div>
      </div>
    )
  }
}

export default Component;