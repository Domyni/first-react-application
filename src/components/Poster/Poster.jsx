import React from 'react';
import styles from '../Poster/Poster.module.scss';
import { NavLink } from 'react-router-dom';

export default function Poster(props) {
    const { id, name, full_poster_path } = props;

    return (
            <NavLink
                className="poster-link"
                exact to={{
                    pathname:`/shows/${id}/${name.toLowerCase().split(" ").join("_")}`,
                    state: 
                    {posterData: props}
                }}
                
            > 
                <img src={full_poster_path} 
                     alt={name}
                     className={styles.img} 
                />
            </NavLink>     
    )
}