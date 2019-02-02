import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showRequest } from '../../actionsCreator/actions';
import style from './ShowPage.module.css';

class ShowPage extends Component {
    state ={
        search: ''
    }
    componentDidMount(){               
        let { showRequest, match } = this.props.shows;
        showRequest(match.params.id);
    }
    render() {
        let {page, isLoading, error} = this.props;
        let {image, name, summary, _embedded} = page;

        return (
            <div>
                {isLoading && <p>---Выполняется загрузка---</p>}
                {error && <p>Ошибка</p>}
                <p>{name}</p>
                {image && <img src={image.medium} alt={name} />}
                <div dangerouslySetInnerHTML={{__html: summary}}/>
            <div className={style.cast}>
                {_embedded && _embedded.cast.map(element => 
                <div className='t-person' key={element.person.id}>
                    <p>{element.person.name}</p>
                    <img src={element.person.image.medium} alt={element.person.name}/>
                </div>
                )}
            </div>
        </div>
        )
    }
}

const mapStateToProps = state => state;
const mapDispatchToProps = {showRequest};

export default connect( mapStateToProps, mapDispatchToProps)(ShowPage);


// Реализуйте страницу шоу.

// Используйте метод connect и mapStateToProps, mapDispatchToProps,
// чтобы получить ссылку на поле show вашего стейта
// и экшн showRequest.

// В методе componentDidMount вам нужно будет диспатчить showRequest action
