import React, { Component } from 'react';
import { load, save } from '../../localstorage';

const withLocalstorage = (localStorageKey, initValue) => (WpappedComponent) => {
    class Wrapper extends Component {
        saveData = (data) => {
            save(localStorageKey, data);
            this.forceUpdate();
        }
        loadData() {
            return load(localStorageKey) || initValue;
        }
        render() {
            const {forwardRef, ...rest} = this.props;

            return (
                <WpappedComponent {...rest}
                ref={forwardRef}
                savedData={this.loadData}
                saveData={this.saveData}
                />
            )
        }
    }
    return React.forwardRef((props,ref) => (
        <Wrapper {...props} forwardRef={ref} />
    ))
};

export default withLocalstorage;
