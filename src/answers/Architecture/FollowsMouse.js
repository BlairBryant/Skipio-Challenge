import React from 'react'

const FollowsMouse = (props) => (
    <div style={{
        width: '200px',
        height: '100px',
        border: '1px solid green',
        position: 'absolute',
        left: `${props.pageX}px`,
        top: `${props.pageY}px`,
    }}>
        <h2>X: {props.pageX} Y: {props.pageY}</h2>    
    </div>
)

export default FollowsMouse