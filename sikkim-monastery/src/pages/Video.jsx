import rumtek from '../images/rumtek.mp4';
import rumtek_inner from '../images/rumtek_inner.mp4';
import featuredMonasteries from '../monasteryData';
import { useParams } from "react-router-dom";
function Video(){
    const {id} = useParams();
    const currentMonastery = featuredMonasteries.find(m => m.id === id); 
    return(
        <div>
            <h1>{currentMonastery.name}</h1>
            <div id="video-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <video id="my-video" width="640" height="360" controls>
                <source src={currentMonastery.video1} type="video/mp4"></source>
                Your browser does not support the video tag.
                </video>
            </div>
            <div id="video-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <video id="my-video" width="640" height="360" controls>
                <source src={currentMonastery.video2} type="video/mp4"></source>
                Your browser does not support the video tag.
                </video>
            </div> 
        </div>
        
    );
}

export default Video;