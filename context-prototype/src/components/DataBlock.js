import React from 'react'

import Environment from '../context/Environment'

class DataBlock extends React.Component{
    render() {
        return(
            <div>
            <text>environment.type: , </text>
            <text>environment.name: </text>
          </div>
        );
    }
  }

  export default DataBlock;