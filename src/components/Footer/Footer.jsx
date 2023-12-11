import './Footer.css'

export const Footer = () => {
    return (
        <footer className="fixed-bottom">
            <p className="footer visivility">&copy; 2023 BIKE STORE</p>
            <div className="justify-content-center py-3">
                <a href='https://www.instagram.com' target='_blank'>
                    <img src='/instagram.png' alt='Instagram' />
                </a>
                <a href='https://www.facebook.com' target='_blank' >
                    <img src='/facebook.png' alt='Facebook' />
                </a>
                <a href='https://www.twitter.com' target='_blank'  >
                    <img src='/twitter.svg' alt='Twitter' />
                </a>
                <a href='https://www.youtube.com' target='_blank'>
                    <img src='/youtube.png' alt='Youtube' />
                </a>
            </div>
        </footer>
    );
};
