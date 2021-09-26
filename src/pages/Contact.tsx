import { Home } from '../types';
import homeData from '../data/home.json';

const Contact = () =>{
    return(
        <div>
            <h1>Contact</h1>
            <p>Feel free to e-mail at <a href="mailto:obertguo@gmail.com">obertguo@gmail.com</a></p>
            <hr/>
            <p>Reach out on social media</p>
            <div >
                {
                    (homeData as Home).social_media.map(media =>{
                        return(
                            <a className="social" key={media.url} href={media.url}>
                                <i className={media.icon}/>
                            </a>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Contact;