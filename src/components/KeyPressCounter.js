import withCounter from './HOC/withCounter';

const KeyPressCounter = (props) => {
    const { count, incrementCount } = props;

    return (
        <div>
            <input type="text" onKeyDown={incrementCount} value={`Press ${count} Times`} />
        </div>
    );
};

export default withCounter(KeyPressCounter);
