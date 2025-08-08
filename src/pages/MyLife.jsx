import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import callKoboImg from '../assets/callKobo.PNG';
import theTeamImg from '../assets/theTeam.jpg';

const MyLife = () => {
    return (
        <div className="my-life-container">
            {/* === Section 1: Calisthenics Kobo === */}
            <section className="my-life-section">
                <h2>Calisthenics Kobo</h2>
                <img src={callKoboImg} alt="Calisthenics Kobo workout session" />
                <p>
                    Μαζί με την παρέα μου, μέσα από την ομάδα μας{' '}
                    <strong>Callisthenics Kobo</strong>, δημιουργούμε καθημερινά περιεχόμενο
                    βασισμένο στη γυμναστική, τη δυναμική, την ενότητα και την αυτοβελτίωση.
                </p>
                <p>
                    <a
                        href="https://www.instagram.com/calisthenics_kobo?igsh=czl4ZGJkc2tjM2tj"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="instagram-link"
                    >
                        <FaInstagram style={{ marginRight: '8px' }} />
                        Calli-KOBO
                    </a>
                </p>
            </section>

            {/* === Section 2: Content Creation === */}
            <section className="my-life-section">
                <h2>Content Creation</h2>
                <img src={theTeamImg} alt="Me and my team of professionals" />
                <p>
                    Μου αρέσει να συνδυάζω τη μουσική με τη γυμναστική, δημιουργώντας ένα μοναδικό περιεχόμενο που εμπνέει, παρακινεί και ψυχαγωγεί.
                </p>
                <p>
                    <strong>Me and my team of professionals</strong> δουλεύουμε μαζί για τη δημιουργία βίντεο υψηλής ποιότητας στα social media, φέρνοντας νέα πνοή στο χώρο του fitness και της τέχνης.
                </p>
            </section>
        </div>
    );
};

export default MyLife;
