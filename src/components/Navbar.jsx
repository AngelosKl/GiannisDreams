import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import myPhoto from '../assets/00.PNG';

function Navbar() {
    const navigate = useNavigate();
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    const openLightbox = () => setIsLightboxOpen(true);
    const closeLightbox = () => setIsLightboxOpen(false);

    return (
        <>
            <nav style={{ display: 'flex', gap: '1rem', padding: '1rem', alignItems: 'center', backgroundColor: 'var(--color-deep)' }}>
                <img
                    src={myPhoto}
                    alt="Me"
                    onClick={openLightbox}
                    style={{
                        width: '50px',
                        height: '50px',
                        objectFit: 'cover',
                        objectPosition: 'center',
                        borderRadius: '50%',
                        cursor: 'pointer'
                    }}
                />
                <button onClick={() => navigate('/')}>Home</button>
                <button onClick={() => navigate('/mylife')}>My Life</button>
                <button onClick={() => navigate('/music')}>Music</button>
                <button onClick={() => navigate('/callisthenics')}>Callisthenics</button>
                <button onClick={() => navigate('/nextlive')}>Next Live</button>
                <button onClick={() => navigate('/collaborate')}>Collaborate</button>
            </nav>

            {isLightboxOpen && (
                <div
                    onClick={closeLightbox}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 1000,
                        cursor: 'pointer'
                    }}
                >
                    <img
                        src={myPhoto}
                        alt="Zoomed"
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            maxWidth: '90vw',
                            maxHeight: '90vh',
                            borderRadius: '12px',
                            boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
                            cursor: 'default'
                        }}
                    />
                </div>
            )}
        </>
    );
}

export default Navbar;
