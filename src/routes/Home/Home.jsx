import React, { useContext } from 'react';
import PosterList from '../../components/PosterList/PosterList';
import UserContext from '../../contexts/UserContext'

export default function HomePage() {

    const user = useContext(UserContext);

        return (
            <div className="home">
                <p>Welcome {user.username}!</p>
                <PosterList />  
            </div>
        );
    }


