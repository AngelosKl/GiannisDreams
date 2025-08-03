// import myPhoto from '../assets/100.PNG';
// import nutritionImg from '../assets/nutrition.png';
// import trophiesImg from '../assets/competitions.png'; // optional

function Callisthenics() {
    return (
        <div className="callisthenics-container">
            <section className="intro">
                <h1>The Coach</h1>
                <p>
                    I coach <strong>callisthenics</strong> at <a href="https://wathensgym.gr" target="_blank" rel="noopener noreferrer">W Gym</a>,
                    training both kids and adults. Strength, control, movement, and discipline define our work.
                </p>
            </section>

            <section className="coach-image">
                {/* <img src={myPhoto} alt="Coach" /> */}
                <p>Training and mentoring in real action.</p>
            </section>

            <section className="degree">
                <h2>Certified Knowledge</h2>
                {/* <img src="../assets/degree.png" alt="Degree" /> */}
                <p>I hold a recognized degree in physical education and coaching.</p>
            </section>

            <section className="personal-coaching">
                <h2>Personal Coaching</h2>
                <p>I offer one-on-one coaching in bodybuilding, callisthenics, strength and hybrid training programs tailored to your goals.</p>
                {/* <img src="../assets/coaching.png" alt="Personal Coaching Session" /> */}
            </section>

            <section className="nutrition">
                <h2>Diet & Nutrition</h2>
                <p>I also guide clients on diet principles, smart nutrition, and healthy habits. Here's a sample of the content you'll find in my coaching:</p>
                {/* <img src={nutritionImg} alt="Nutrition Guidance" /> */}
            </section>

            <section className="competitions">
                <h2>Competitions & Achievements</h2>
                <p>
                    Over the years, I’ve participated in several national and local callisthenics competitions — and brought home some victories.
                    This section will showcase my medals, moments, and memories from the events.
                </p>
                {/* <img src={trophiesImg} alt="Competition Wins" /> */}
            </section>
        </div>
    );
}

export default Callisthenics;
