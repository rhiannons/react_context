import React from 'react'

import CustomEnvContext from '../context/CustomEnvContext'

class CustomEnvDataBlock extends React.Component{
    render() {
        return(
          <div>
            <CustomEnvContext.Consumer>
                { env => {
                    return (
                    <pre>name: {env.name} type: {env.type}</pre>
                    )
                }}
            </CustomEnvContext.Consumer>
          </div>
        );
    }
  }

 // Alternative Consumer Code

    //   <CustomEnvContext.Consumer>
    //   { env => {
    //     return (
    //       <pre>name: {env.name} type: {env.type}</pre>
    //     )
    //   }}
    // </CustomEnvContext.Consumer>

// OR 

    //     <CustomEnvContext.Consumer>
    //     { ({name, type}) => {
    //       return (
    //         <pre>name: {name} type: {type}</pre>
    //       )
    //     }}
    //   </CustomEnvContext.Consumer>

  export default CustomEnvDataBlock;

