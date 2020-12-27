import React, { Component } from 'react';
import withNameLogger from '../withNameLogger/withNameLogger';
import './MagazineList.scss';

class MagazineList extends Component {
    state = { 
        magazineData: [],
        isLoading: true
     }

    async componentDidMount() {
        try {
            const response = await fetch("https://www.ourdaily.co/explore/api/magazines");
            const data = await response.json();
            this.setState({
                isLoading: false,
                magazineData: data.data.Regional
            })
        } catch (error) {
            alert(error);
        }
    }

    render() { 
        const { nameLogger } = this.props;
        return (
        <div onLoad={nameLogger}>
            <h2>REGIONAL</h2>
             {this.state.isLoading? (<p> Loading ... </p>):
             (<div >
                 {this.state.magazineData.map((poster) => {
                    return <img src={poster.heroImage} 
                                key={poster.id}
                                alt={poster.title}/>})}
              </div>
             )}
        </div>
        )
    }
}
 
export default withNameLogger(MagazineList);




