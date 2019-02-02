import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchRequest } from '../../actionsCreator/actions';
import style from './Search.module.css';
import ShowPreview from '../ShowPreview';


class Search extends Component {
    state={
        inputValue: ''
    }

    inputHandler = e => {
        this.setState({
            inputVlue: e.target.value
        })
    }

    buttonHandler = e => {
        e.preventDefault();
        let {searchRequest} = this.props;
        let searchState = this.state.inputValue;
        searchRequest(searchState);
    }


    render(){
        // let {inputValue} = this.state;
        let {isLoading, preview, error}=this.props.search;
        console.log(this.props.search);
        console.log(this.props);

        return (
        <div>
            <div className={style.previewList}>
                <input className={`${style.input} t-input`} 
                type="text"
                placeholder='Название сериала'
                onChange={this.inputHandler}
                />
                <div className={style.buttonWrapper}>
                <button className={`${style.button} t-search-button`} 
                onClick={this.buttonHandler}>Найти</button>
                </div>
            </div>
            <div className={`${style.searchPanel} t-search-result`}>
                {isLoading && <p>---Выполняется поиск---</p>}
                {error && <p>Ошибка</p>}
                {preview.map(el=> <ShowPreview key={el.id} data={el}/>)}
            </div>
        </div>)
    }
}
const mapStateToProps = state => state;
const mapDispatchToProps = {searchRequest};

export default connect( mapStateToProps, mapDispatchToProps)(Search);

// Реализуйте страницу поиска.

// Используйте метод connect и mapStateToProps, mapDispatchToProps,
// чтобы получить ссылку на поле search вашего стейта
// и экшн searchRequest.
