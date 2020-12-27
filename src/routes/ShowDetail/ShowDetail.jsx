import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import styles from './ShowDetail.module.scss';
import AddButton from '../../components/AddButton/AddButton'

class ShowDetail extends Component {

    state = {
        posterData: this.props.location.state.posterData
    };

    colorRating = () => {
        if (this.props.location.state.posterData.vote_average >= 7) {
            return `${styles.high}`;
        }
        if (this.props.location.state.posterData.vote_average < 7) {
            return `${styles.average}`;
        }
    }

    render() {
        const {
            name, 
            vote_average, 
            overview, 
            first_air_date, 
            full_backdrop_path
        } = this.props.location.state.posterData;
        
        return (
        <div className="show-detail-container">
            <img src={full_backdrop_path} 
                 alt={name}
                 className={styles.img}/>

            <div className={styles.detail}>   
                <h2>{name}</h2>
                <p className={this.colorRating()}>Rating: {vote_average} </p> 
                <p>Release Date: {first_air_date} </p> 
                <p className={styles.overview}>{overview}</p>

                <div className="show-detail-buttons">
                    <button type="button" className={styles.playBtn}>PLAY</button>
                    <AddButton data={this.state.posterData}/>
                </div>
            </div>
        </div>
        )}
}

export default withRouter(ShowDetail);
