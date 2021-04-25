import './App.css';
import {regions} from 'select-philippines-address';

const App = () => {
    const region = () => {
        regions().then((response) => {
            console.log(response)
        });
    }

    return (
        <div className="App">
            <header className="App-header">
                <button onClick={region}>Press</button>
            </header>
        </div>
    );
}

export default App;
