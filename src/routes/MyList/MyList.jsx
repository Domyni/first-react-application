import React, { useContext } from 'react';
import Poster from '../../components/Poster/Poster'
import { MyListContext } from '../../contexts/MyListContext';

// Display a list of posters from MyListContext

export default function Mylist() {
    
   const { list } = useContext(MyListContext);

    return  list.length !== 0 ? (
            <div className="mylist">
                {list.map((posterData) => { 
                    return  <Poster {...posterData} key={posterData.id}/>
                    })}     
            </div>
            ): 
            <p>Your list is currently empty ...</p>
}