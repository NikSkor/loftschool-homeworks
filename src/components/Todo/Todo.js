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
    if (event.key === 'Enter' && this.state.inputValue !== '') {
      this.createNewRecord();
    }
  };

  toggleRecordComplete = event => {
    let id = event.target.dataset.key;
    this.props.updateData(id);
    this.forceUpdate();
  };

  createNewRecord = () => {
    let state=this.state.inputValue;
    if (state) {
      this.props.saveData({
        id: this.getId(),
        text: state,
        isComplete: false
      })
    }
    this.setState({inputValue: ''})

  };

  render() {
    let info = this.props.savedData;

    return <Card title="Список дел">
      <div className='todo t-todo-list' onKeyUp={this.createNewRecordByEnter}>
        <div className='todo-item todo-item-new'>
          <input type="text" className='todo-input t-input' placeholder='Введите задачу' onChange={this.handleChange} value={this.state.inputValue} />
          <span className='plus t-plus' onClick={this.createNewRecord}>+</span>
        </div>
        {info.length > 0 ? 
        info.map((elem, i) => (this.renderRecord(elem, i)))
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
