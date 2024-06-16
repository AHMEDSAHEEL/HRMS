import React from 'react'
import ItemsList from './ItemsList';


const Content = ({ items, handleShow, deleteTODO}) => {

    return (
        <div className='DivCont'>
            {(items.length) ? (
                <ItemsList

                    items={items}
                    handleShow={handleShow}
                    deleteTODO={deleteTODO}

                />
            ) : (<marquee className='emptyPara' width="100%" height="50px" scrollamount="15">List is Empty</marquee>)}
        </div>
    );
}
export default Content