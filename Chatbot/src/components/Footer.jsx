import React from "react";
import "./component_styles/footer.css";

const openLink = (url) => {
    window.open(url,'_blank');
}

function Footer() {
    return(
        <div className="footer">
            <div className="content-folder">
                <ul className="foot-nav">
                    <li><a href="">Content</a></li>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Blogs</a></li>
                </ul>
                <ul className="foot-logo">
                    <li><button id="contentbutton" onClick={()=>openLink("https://www.youtube.com/@AtriaPodcastClub")}><img id="ytimg" src="/yt_logo_mono_light(logo only).png" /></button></li>
                    <li><button id="contentbutton" onClick={()=>openLink("https://www.instagram.com/atriapodcastclub/")}><img id="igimg" src="/Instagram_Glyph_Black.svg" /></button></li>
                    <li><button id="contentbutton" onClick={()=>openLink("https://open.spotify.com/show/4O3UpFRvFwFEWhEWyyciY1?si=c506bfa0520b4e8c")}><img id="spotifyimg" src="/Spotify_Primary_Logo_RGB_Black.png" /></button></li>
                </ul>
            </div>
        </div>

    )
}

export default Footer;