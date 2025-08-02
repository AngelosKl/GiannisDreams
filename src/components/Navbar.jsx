import { useNavigate } from 'react-router-dom'

function Navbar() {
    const navigate = useNavigate()

    return (
        <nav style={{ display: 'flex', gap: '1rem', padding: '1rem' }}>
            <button onClick={() => navigate('/')}>Home</button>
            <button onClick={() => navigate('/mylife')}>My Life</button>
            <button onClick={() => navigate('/music')}>Music</button>
            <button onClick={() => navigate('/callisthenics')}>Callisthenics</button>
            <button onClick={() => navigate('/nextlive')}>Next Live</button>
            <button onClick={() => navigate('/collaborate')}>Collaborate</button>
        </nav>
    )
}

export default Navbar
