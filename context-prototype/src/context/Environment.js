import React from 'react'

const Environment = React.createContext();

class EnvironmentProvider extends React.Component {
    state = {
        type: 'non-prod',
        name: 'UAT Environment'
    }

    render(){
        return(
            <Environment.Provider state={this.state}></Environment.Provider>
        );
    }
}

export default EnvironmentProvider