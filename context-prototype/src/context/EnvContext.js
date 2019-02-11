import React from 'react'

const EnvContext = React.createContext();

class EnvContextProvider extends React.Component {
    // ----------------------------------------------------
    constructor(props){
        super(props);

        this.state = {
            type: 'prod',
            name: 'Production Environment'
        }
    }
    // ----------------------------------------------------
    render(){
        return(
            <EnvContext.Provider value={this.state}>
                {this.props.children}
            </EnvContext.Provider>
        );
    }
    // ----------------------------------------------------
}

export default EnvContext; 

export { EnvContextProvider }

