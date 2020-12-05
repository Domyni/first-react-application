import React from 'react';
import Poster from '../Poster/Poster';

export default function PosterList(props){
    const{ title, posters = [] } = props;
    // const title = props.title
    // const posters = props.poster

    return (
        <div className="poster-list">
            <h3>{title}</h3>
            <div className="poster-list_container">
                {posters.map((poster) => {
            return <Poster image= {poster.poster_path} name={poster.name}/>;
        })}
        </div>
    </div>
    )
}
