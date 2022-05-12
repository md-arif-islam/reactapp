import ClickCounter from './components/ClickCounter';
import Counter from './components/Counter';
import HoverCounter from './components/HoverCounter';

function App() {
    return (
        <div className="app">
            <Counter
                render={(count, incrementCount) => (
                    <ClickCounter count={count} incrementCount={incrementCount} />
                )}
            />

            <Counter
                render={(count, incrementCount) => (
                    <HoverCounter count={count} incrementCount={incrementCount} />
                )}
            />
        </div>
    );
}

export default App;
