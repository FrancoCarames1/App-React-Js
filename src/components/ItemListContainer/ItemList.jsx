import React from 'react';
import ItemCard from './ItemCard/ItemCard';

const ItemList = ({displayItems}) => {
    return(
        <>
            {displayItems.map((item) => (
                <ItemCard item={item} key={item.id}/>
            ))}
        </>
    );
};

export default ItemList;