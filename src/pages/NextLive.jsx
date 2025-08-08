import React from 'react';

const NextLive = () => {
    return (
        <div className="next-live-container">
            <h1>Επόμενα Events</h1>

            {/* === Meet Up Section === */}
            <section className="event-box">
                <h2>📍 Meet Up</h2>
                <p>
                    Προς το παρόν δεν υπάρχει κάποιο προγραμματισμένο meet up.<br />
                    Μείνετε συντονισμένοι για νέες ενημερώσεις!
                </p>
            </section>

            {/* === Live Section === */}
            <section className="event-box">
                <h2>🎤 Live</h2>
                <p>
                    Δεν υπάρχει προγραμματισμένο live αυτή τη στιγμή.<br />
                    Επιστρέψτε σύντομα για να δείτε νέες ημερομηνίες και τοποθεσίες!
                </p>
            </section>
        </div>
    );
};

export default NextLive;
