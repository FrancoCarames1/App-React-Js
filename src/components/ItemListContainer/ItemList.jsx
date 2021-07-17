import React from 'react';
import ItemCount from './ItemCard/ItemCard';

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