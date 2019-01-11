import React from 'react';
import './Show.css';
import {getShowInfo} from '../../api.js';

class Show extends React.Component {
    state = {
        showId: '' ,
        data: null
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        return {
            showId: nextProps.showId
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.showId !== this.state.showId) {
            getShowInfo(this.state.showId).then (info =>{
                // console.log(info);
                this.setState ({
                    data: info
                })
                // console.log(this.state);
                // const poop = {};
                // Object.keys(info).forEach(elem => {
                //     poop[elem] = info[elem]
                // })
                // this.setState = ({...poop})
                // console.log(poop);
                }
            )
        }

        
    }
    render() {
        console.log(this.state);
        return(
            <div className="show">
                <img src="" alt="" className="show-image"/>
                <h2 className="show-label t-show-name">{this.state.showId}</h2>
                <p className="show-text t-show-genre">
                    <b>Жанр: </b>
                </p>
                <p className="show-text t-show-summary"></p>
            </div>

            
        )
    }
}
export default Show;
{/* <span>Шоу не выбрано</span> */}