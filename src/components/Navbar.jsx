import { useNavigate } from 'react-router-dom'
import myPhoto from '../assets/00.PNG';

function Navbar() {
    const navigate = useNavigate()

    return (
        <nav style={{ display: 'flex', gap: '1rem', padding: '1rem' }}>
            <img
                src={myPhoto}
                alt="Me"
                style={{
                    width: '50px',
                    height: '50px',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    borderRadius: '50%',
                    marginBottom: '1rem',
                    transform: 'scale(1.1)' // zooms in ~10%, about 0.5cm visually
                }}
            />
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
