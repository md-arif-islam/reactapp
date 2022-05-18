import useWindowWidth from '../hooks/useWindowWidth';

export default function LayoutComponent() {
    const onSmallScreen = useWindowWidth(768);

    return (
        <div>
            <h1>{onSmallScreen ? 'small' : 'large'}</h1>
        </div>
    );
}
