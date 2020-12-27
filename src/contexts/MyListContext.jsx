import React, {useState, useEffect} from 'react';

export const MyListContext = React.createContext();

export default function MyListContextProvider(props) {

    //  To hold a list of posters added by user.
    const [list, setList] = useState([]);

    useEffect(() => {
        const localSavedData = JSON.parse(localStorage.getItem("list"))
        if (localSavedData) {
         setList(localSavedData)}
    },[]);

    useEffect(() => {
        localStorage.setItem("list", JSON.stringify(list));
    },[list]);

    const addList = (posterData) => {
        let currentListID = list.map((item) => {
            return item.id;
            })
        
        // Only accepts un-added posters.
        if (list.length === 0 || currentListID.indexOf(posterData.id) === -1) {
            setList((prev) => 
                {return [...prev, posterData]});
            alert("Added to your list");
        }  else {
            alert("You already added this in your list!");
        }
    }
    
    return (
        <MyListContext.Provider value={{list, addList}}>
            {props.children}
        </MyListContext.Provider>
    )
};
