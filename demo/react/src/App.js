import './App.css';
import {regions} from 'select-philippines-address';

const App = () => {
    let r = [];
    const region = () => {
        regions().then(response => {
            response.map(value => {
                r.push(value.region_name);
            })
        });
    }

    return (
        <div className="App">
            <header className="App-header">
                <button onClick={region}>Press</button>
                {r.map(value => (
                    <p>{value.name}</p>
                ))}
            </header>
        </div>
    );
}

export default App;
