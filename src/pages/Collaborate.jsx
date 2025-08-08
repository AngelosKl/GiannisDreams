import livePhoto from '../assets/LIVE.PNG';


function Collaborate() {
    return (
        <div className="collaborate-container">
            <section className="collab-intro">
                <h1>Let's Collaborate</h1>
                <p>
                    With a dedicated following of over <strong>20,000</strong> and reach in the
                    <strong> hundreds of thousands</strong>, I've built a loyal audience.
                    One of my TikTok music videos has over <strong>1 million views</strong> —
                    your brand could be next.
                </p>
            </section>

            <section className="collab-photo">
                <img src={livePhoto} alt="Live Performance" />
                <p>Moments from one of my recent live music events.</p>
            </section>

            <section className="collab-types">
                <h2>Ways We Can Work Together</h2>
                <ul>
                    <li>🎤 <strong>Music:</strong> Gigs, concerts, and creative projects</li>
                    <li>💪 <strong>Fitness:</strong> Personal coaching in calisthenics or bodybuilding</li>
                    <li>📢 <strong>Promotion:</strong> Events, appearances, social media campaigns</li>
                </ul>
            </section>

            <section className="collab-contact">
                <h2>Contact Me</h2>
                <p>
                    If you're interested in working together, feel free to{' '}
                    <a href="mailto:johnzaxos25@gmail.com" style={{ color: '#0FA4AF', fontWeight: 'bold' }}>
                        email me directly
                    </a>.
                </p>
                <p style={{ marginTop: '1rem' }}>
                    You can also reach me on TikTok, Instagram, and YouTube — click on the icons below!
                </p>
            </section>
        </div>
    );
}

export default Collaborate;
