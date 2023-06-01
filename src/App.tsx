import React, {useEffect} from 'react';
import './App.css';
import {Counter} from './components/counter/Counter';
import {SettingsOfCounter} from './components/settings/Settings';
import {getValuesFromLocalStorageTC} from './bll/reducers/counterReducer';
import {useAppDispatch, useAppSelector} from './hooks/hooks';

const App = () => {

    const state = useAppSelector(state => state.counter)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getValuesFromLocalStorageTC())
    }, [])

    return (
        <div className="App">
            {state.editMode
                ? <Counter/>
                : <SettingsOfCounter/>
            }
        </div>
    );
}
export default App;
