import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import KeyPressCounter from './components/KeyPressCounter';

function App() {
    return (
        <div className="app">
            <ClickCounter />
            <HoverCounter />
            <KeyPressCounter />
        </div>
    );
}

export default App;
