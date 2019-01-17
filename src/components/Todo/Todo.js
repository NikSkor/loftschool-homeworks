import React, { PureComponent } from 'react';
import Card from '../Card';
import './Todo.css';
import withLocalstorage from '../../HOCs/withLocalstorage';

class Todo extends PureComponent {
  state = {
    inputValue: ''
  };

  getId() {
    const { savedData } = this.props;
    const biggest = savedData.reduce((acc, el) => Math.max(acc, el.id), 0);
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
    let index = event.target.dataset.key;
    this.forceUpdate();
    console.log(index);

  };

  createNewRecord = () => {

  };

  render() {
    console.log(this.state);
    console.log(localStorage);
    return <Card title="Список дел">
      <div className='todo t-todo-list'>
        <div className='todo-item todo-item-new'>
          <input type="text" className='todo-input t-input' placeholder='Введите задачу' onChange={this.handleChange} />
          <span className='plus t-plus' onClick={this.createNewRecord}>+</span>
        </div>
        {this.renderRecord()}
      </div>
    </Card>
    
  }

  renderEmptyRecord() {
    return null;
  }

  renderRecord = record => {
    return <div className='todo-item t-todo'>
        <p className='todo-item__text'>SuperMan</p>
        <span className='todo-item__flag t-todo-complete-flag' data-key ='true' onClick={this.toggleRecordComplete} >[X]</span>
      </div>
  };
}

export default withLocalstorage('todo-app', [])(Todo);
