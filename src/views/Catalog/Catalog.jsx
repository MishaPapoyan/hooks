import React, {useEffect, useState} from 'react';
import CatalogList from "../../component/CatalogList/CatalogList";

const Catalog = () => {
    const [list, setList] = useState([])
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/aghasi89/datas/main/menu.json')
            .then((response) => {return response.json()})
            .then((data)=>{setList(data)})
    },[])

    return (
        <div>
            <CatalogList list={list}/>
        </div>
    );
};

export default Catalog;