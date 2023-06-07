import React, {useCallback, useContext} from 'react';
import styles from './catalogListItem.module.css'
import {CartContext} from "../../Contexts/CartContext";

const CatalogListItem = ({data}) => {
    const {dispatch} = useContext(CartContext)
    const {name,description } = data
    const subItem = data['sub-items']
    const clickHandler = useCallback((subitem)=>{
        dispatch({
            type: "ADD_ITEM",
            payload: subitem
        })
    })
    return (
        <div className={styles.listItem}>
            <span>Name: {name}</span>
            <span>Description: {description}</span>
            {
                subItem.map((subitem, i)=>{
                    return (
                        <div key={i}>
                            <button onClick={()=>{
                                clickHandler(subitem)
                            }
                            }>
                                <span>{subitem.price}</span>
                            </button>
                        </div>
                    )
                })
            }

        </div>
    );
};

export default CatalogListItem;