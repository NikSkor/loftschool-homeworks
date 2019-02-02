import style from './ShowPreview.module.css';
import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class ShowPreview extends Component {
    render(){
        let {preview} = this.props.data;
        console.log(preview);
        let {id, image, name, summary} = preview;
        return (
            <div className={`t-preview ${style.container}`}>
                <Link className='t-link' to={`/shows/${id}`}>{name}</Link>
                {image && 
                    <img src={image.medium} alt={name}/>     
                }
                <div dangerouslySetInnerHTML={{ __html: summary }} />>
            </div>
        )
    }
}
export default ShowPreview;


// Реализуйте компонент превью шоу.
// Он должен показывать название, описание и картинку шоу.
