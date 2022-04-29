import ClockList from './components/ClockList';

function App() {
    const quantities = [1, 2, 3, 4, 5, 6];
    return (
        <div>
            <ClockList quantities={quantities} />
        </div>
    );
}

export default App;
