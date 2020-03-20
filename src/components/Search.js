import React, { Component } from 'react';

class Search extends Component{

    //Read input of text
    searchRef = React.createRef();

    getData = (e) => {
        e.preventDefault(); //No show text in URL

        //console.log(this.searchRef.current.value);  //Capture text and show text of input
        this.props.query(this.searchRef.current.value); //Send text to space principal
    }

    //Return content html
    render(){
        return (
            <form onSubmit={this.getData}>
                <div className="row">
                    <div className="form-group col-md-8">
                        <input ref={this.searchRef} type="text" className="form-control 
                        form-control-lg" placeholder="Search you image. 
                        Example : Bike" />
                    </div>

                    <div className="form-group col-md-4">
                        <input type="submit" className="btn btn-lg btn-block btn-success" 
                        value="Search \o_o/" />
                    </div>
                </div>
            </form>
        );
    }
}

export default Search;