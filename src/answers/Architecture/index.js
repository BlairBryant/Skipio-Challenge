import React from "react";
import FollowsMouse from './FollowsMouse'

class Component extends React.Component {
  constructor() {
    super()

    this.state = {
      pageX: '0px',
      pageY: '0px'
    }
  }

  mouseMove = (e) => {
      this.setState({ pageX: e.pageX - 360, pageY: e.pageY - 300})
  }

  render() {
    return (
      <div style={{width: '100%', height: '500px', position: 'relative', zIndex: '2'}} onMouseMove={this.mouseMove}>
          <FollowsMouse pageX={this.state.pageX} pageY={this.state.pageY}/>
      </div>
    )
  }
}

export default Component;