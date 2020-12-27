import React, { Component } from 'react';
import ShowService from '../../services/ShowService';
import Poster from '../Poster/Poster';

class PosterList extends Component {
    state = { 
        isLoading: true,
        posterData: []
     }

    componentDidMount() {
        ShowService.getNetflixOriginals().then((data) => {
            this.setState({
                isLoading: false,
                posterData: data
            });
        });
    }

    render() { 
        return ( 
            <>
                {this.state.isLoading? (<p>Loading...</p>):
                (<div className="poster-home">
                    {this.state.posterData.map((data) => { 
                        return  <Poster {...data} key={data.id} />
                        })}     
                </div>
                )}                    
            </>
        )
    }
}
 
export default PosterList;