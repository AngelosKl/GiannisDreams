import homePhoto from '../assets/1000.PNG';
function Home() {
    return (
        <div style={{ textAlign: 'center', padding: '2rem' }}>
            <img src={homePhoto} alt="homePhoto" style={{ transform: 'scale(0.85)' }} />
            <h1>Welcome to My World</h1>
            <p>Explore my life, passions, and connect with me!</p>
        </div>
    );
}

export default Home;
