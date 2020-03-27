import React from 'react';

const Pagination = (props) =>{
    return (
        <center>
        <div className="py-3">
            <button type="button" onClick={props.previousPage} className="btn btn-primary mr-1">&larr; Previous</button>
            <button type="button" onClick={props.nextPage} className="btn btn-primary mr-1">Next &rarr;</button>
        </div>
        </center>
    )
}

export default Pagination;