import './Footer.css'

export const Footer = () => {
    return (
        <footer className="fixed-bottom">
            <div className="justify-content-center py-3">
                <a href='https://www.instagram.com' target='_blank'>
                    <img src='./src/assets/icon/instagram.png' alt='Instagram' />
                </a>
                <a href='https://www.facebook.com' target='_blank' >
                    <img src='./src/assets/icon/facebook.png' alt='Facebook' />
                </a>
                <a href='https://www.twitter.com' target='_blank'  >
                    <img src='./src/assets/icon/twitter.png' alt='Twitter' />
                </a>
                <a href='https://www.youtube.com' target='_blank'>
                    <img src='./src/assets/icon/youtube.png' alt='Twitter' />
                </a>
            </div>
        </footer>
    );
};
