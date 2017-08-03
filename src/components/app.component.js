import React from 'react';
import Content from "./content.component";
import Header from "./header.component";

class App extends React.Component{
    
    state = {
        test: "header Value 1"
    };

    render(){
        return (
            <div className="container">
                <div className="row">
                    <Header headerName={this.state.test}/>
                    <Content />
                </div> 
            </div>
        );
    }
}

export default App;