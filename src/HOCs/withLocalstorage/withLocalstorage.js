import React, { Component } from 'react';
import { load, save, update } from '../../localstorage';

const withLocalstorage = (localStorageKey, initValue) => (WpappedComponent) => {
    class Wrapper extends Component {
        saveData = (data) => {
            save(localStorageKey, data);
            this.forceUpdate();
        }
        loadData() {
            return load(localStorageKey) || initValue;
        }
        updateData(id) {
            let loadData = load(localStorageKey);
            console.log(loadData);
            update(loadData, id)
        }
        render() {
            const {forwardRef, ...rest} = this.props;

            return (
                <WpappedComponent {...rest}
                ref={forwardRef}
                savedData={this.loadData()}
                saveData={this.saveData}
                updateData={this.updateData}
                />
            )
        }
    }
    return React.forwardRef((props,ref) => (
        <Wrapper {...props} forwardRef={ref} />
    ))
};

export default withLocalstorage;
