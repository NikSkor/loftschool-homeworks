import React from 'react';
import './Show.css';
import {getShowInfo} from '../../api.js';

class Show extends React.Component {
    state = {
        showId: '' ,
        data: null
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        if (prevState.showId === nextProps.showId) {
            return null
        } else {
            return {
                showId: nextProps.showId,
            }
        }

    }
    componentDidUpdate(prevProps) {
    if (prevProps.showId !== this.state.showId) {
        getShowInfo(this.state.showId).then (info =>{
            this.setState ({
                data: info
            })
            }
        )
    }
    }
    render() {
        const {data} = this.state;
    
        if (!data) {
            return(
                <span className="show-information t-show-info">Шоу не выбрано</span>
            )
        } 
        else {

            return(
                <div className="show">
                    <img src={data.image.medium} alt={data.name} className="show-image"/>
                    <h2 className="show-label t-show-name">{data.name}</h2>
                    <p className="show-text t-show-genre">
                        <b>Жанр: </b>{data.genres.join(', ')}
                    </p>
                    <p className="show-text t-show-summary" dangerouslySetInnerHTML={{__html:data.summary}}></p>
                </div>   
            )
        }
    }
}
export default Show;
