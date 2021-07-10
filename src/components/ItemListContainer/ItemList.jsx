import React from 'react';
import ItemCount from './ItemCount/ItemCount';

const ItemList = ({displayItems}) => {
    return(
        <>
            {displayItems.map((item) => (
                <ItemCount item={item} key={item.id}/>
            ))}
        </>
    );
};

export default ItemList;