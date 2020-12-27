import React, { useContext } from 'react';
import { MyListContext } from '../../contexts/MyListContext';
import styles from './AddButton.module.scss';

export default function AddButton(props) {

    const { addList } = useContext(MyListContext);

    function handleAdd(e) {
        e.preventDefault();
        addList(props.data);
    }

    return (
        <>
            <button type="button"
                    onClick={handleAdd}
                    className={styles.addBtn}>
                    + MY List
            </button>
        </>
    )
}

