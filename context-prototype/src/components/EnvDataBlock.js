import React from 'react'

import EnvContext from '../context/EnvContext'

class EnvDataBlock extends React.Component{
    render() {
        return(
          <div>
           <EnvContext.Consumer>
            { ({name, type}) => {
              return (
                <pre>name: {name} type: {type}</pre>
              )
            }}
        </EnvContext.Consumer>
          </div>
        );
    }
  }

 // Alternative Consumer Code

    //   <EnvContext.Consumer>
    //   { env => {
    //     return (
    //       <pre>name: {env.name} type: {env.type}</pre>
    //     )
    //   }}
    // </EnvContext.Consumer>

// OR 

    //     <EnvContext.Consumer>
    //     { ({name, type}) => {
    //       return (
    //         <pre>name: {name} type: {type}</pre>
    //       )
    //     }}
    //   </EnvContext.Consumer>

  export default EnvDataBlock;

