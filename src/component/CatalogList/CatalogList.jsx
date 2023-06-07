import React from 'react';
import CatalogListItem from "../CatalogListItem/CatalogListItem";
import styles from './catalogList.module.css'
const CatalogList = ({list}) => {
    return (
        <div className={styles.main}>
            {
                list.map((listitem, i)=>{
                    return <CatalogListItem key={i} data={listitem}/>
                })
            }
        </div>
    );
};

export default CatalogList;