import ClickCounter from './components/ClickCounter';
import Counter from './components/Counter';
import HoverCounter from './components/HoverCounter';

function App() {
    return (
        <div className="app">
            <Counter>
                {(count, incrementCount) => (
                    <ClickCounter count={count} incrementCount={incrementCount} />
                )}
            </Counter>

            <Counter>
                {(count, incrementCount) => (
                    <HoverCounter count={count} incrementCount={incrementCount} />
                )}
            </Counter>
        </div>
    );
}

export default App;
