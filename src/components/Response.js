import React, { Component } from 'react';
import Image from './Image';
import Pagination from './Pagination';

class Response extends Component{

    showImages = () => {
        const images = this.props.dataImages;
        
        if ( images.length === 0 )return null;

        //console.log(images);

        return (
            <React.Fragment>
                <div className="col-12 p-5 row">
                        {images.map(img => (
                           <Image
                                key={img.id}
                                image={img}
                           /> 
                        ))} 
                </div>

                <Pagination 
                    nextPage={this.props.nextPage}
                    previousPage={this.props.previousPage}
                />
            </React.Fragment>
        )
    }

    render(){
        return (
            <React.Fragment>
                { this.showImages() }
            </React.Fragment>
        );
    }
}

export default Response;