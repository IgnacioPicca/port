
const SocialMediaIcons = () => {
    return (
        <div className="flex justify-start md:justify-start my-10 gap-7">
            <a
                href="https://www.linkedin.com/in/ipicca/"
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-50 transition duration-500">
            <img src="../assets/linkedin.png" alt="linkedin-link" />
            </a>
            <a
            className="hover:opacity-50 transition duration-500"
            href="https://twitter.com/NachoPicca"
            target="_blank"
            rel="noreferrer"
            >
            <img alt="twitter-link" src="../assets/twitter.png" />
            </a>
            <a
                className="hover:opacity-50 transition duration-500"
                href="https://www.instagram.com/nachopicca/"
                target="_blank"
                rel="noreferrer"
            >
            <img alt="instagram-link" src="../assets/instagram.png" />
        </a>
    </div>
    )
}

// CHANGE ASSETS LINKEDIN FOR GITHUB ICONS

export default SocialMediaIcons;