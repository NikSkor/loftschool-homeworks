import React, { PureComponent } from 'react';
import Card from '../Card';
import './Todo.css';
import withLocalstorage from '../../HOCs/withLocalstorage';

class Todo extends PureComponent {
  state = {
    inputValue: ''
  };

  getId() {
    let {savedData} = this.props;

    let biggest = savedData.reduce((acc, el) => Math.max(acc, el.id), 0);
    return biggest + 1;
  }

  handleChange = event => {
    this.setState({inputValue: event.target.value})
  };

  createNewRecordByEnter = event => {
    const {inputValue} = this.state;
    if (event.key === 'Enter' && inputValue !== '') {
      this.createNewRecord();
    }
  };

  toggleRecordComplete = event => {
    let id = event.target.dataset.key;
    let props = this.props;
    this.props.updateData(id);
    this.forceUpdate();
  };

  createNewRecord = () => {
    let state=this.state.inputValue;
    let props = this.props;
    if (state) {
      props.saveData({
        id: this.getId(),
        text: state,
        isComplete: false
      })
    }
    this.setState({inputValue: ''})

  };

  render() {
    const {savedData} = this.props;

    return <Card title="Список дел">
      <div className='todo t-todo-list' onKeyUp={this.createNewRecordByEnter}>
        <div className='todo-item todo-item-new'>
          <input 
          type="text" 
          className='todo-input t-input' 
          placeholder='Введите задачу' 
          onChange={this.handleChange} 
          value={this.state.inputValue} />
          <span className='plus t-plus' onClick={this.createNewRecord}>+</span>
        </div>
        {savedData.length > 0 
        ? savedData.map((elem, i) => (this.renderRecord(elem, i)))
        : this.renderEmptyRecord()}
      </div>
    </Card>
    
  }

  renderEmptyRecord() {
    return null ;
  }

  renderRecord = record => {
    let {id,text,isComplete} = record;
    return <div className='todo-item t-todo' key={id}>
        <p className='todo-item__text'>{text}</p>
        <span className='todo-item__flag t-todo-complete-flag' data-key ={id} onClick={this.toggleRecordComplete} >{
          !isComplete ? '[]' : '[x]' }</span>
      </div>
  };
}

export default withLocalstorage('todo-app', [])(Todo);
