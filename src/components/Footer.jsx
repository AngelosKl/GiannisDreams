import { FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa'

function Footer() {
    return (
        <footer className="footer">
            <a
                href="https://www.instagram.com/giannis__zaxos/?igsh=MTVod3k2Y2V4YW8x#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
            >
                <FaInstagram size={24} />
            </a>
            <a
                href="https://www.tiktok.com/@giannissings"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
            >
                <FaTiktok size={24} />
            </a>
            <a
                href="https://www.youtube.com/@thefittestme348"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
            >
                <FaYoutube size={24} />
            </a>
        </footer>
    )
}

export default Footer
