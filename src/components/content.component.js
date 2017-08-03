import React from 'react';


class Content extends React.Component {
    
    render() {
        return (
            <div className="row username-wrapper">
                <div className="col-xs-offset-3 col-xs-6 col-md-offset-4 col-md-4">
                    <form>
                        <div className="form-group">
                            <lable htmlFor="username">User Name </lable>
                            <input className="form-control" type="text" id="username" placeholder="Enter Name to Play" />
                        </div>
                        <div className="row">
                            <button className="btn btn-default col-xs-offset-4 col-sm-offset-5 col-md-offset-5">Play!</button>
                        </div>
                    </form>
                </div> 
            </div>
        );
    }
}

export default Content;