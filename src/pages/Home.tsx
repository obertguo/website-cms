import { Home } from '../types';
import homeData from '../data/home.json';

const Homepage = () =>{
    return(
        <div>
            <h1>Homepage</h1>
            <h2>Obert Guo</h2>
            <p>A Grade 12 student that enjoys learning and problem solving.</p>
            {
                (homeData as Home).social_media.map(media =>{
                    return(
                        <a className="social" key={media.url} href={media.url}>
                            <i className={media.icon}/>
                        </a>
                    )
                })
            }
            <hr/>

            {
                (homeData as Home).sections.map(section =>{
                    return(
                        <div key={section.title}>
                            <h2>{section.title}</h2>
                            <p>{section.desc}</p>

                            <ul>
                                {
                                    section.list?.map(list =>{
                                        return(
                                            <li key={list}>{list}</li>
                                        )
                                    })
                                }
                            </ul>

                            {
                                section.links?.map(link =>{
                                    return(
                                        <div key={link.name}>
                                            <a href={link.url} >{link.name}</a>
                                        </div>
                                    )
                                })
                            }

                            <hr/>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Homepage;