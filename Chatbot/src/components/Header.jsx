import React from "react";
import "./component_styles/header.css";
import {Link} from "react-router-dom";  

const openLink = (url) => {
    window.open(url,'_blank');
}

function Header() {
    return(
        <div className="Header">
            <div className="left-section">
                <h1>Atria Podcast Club</h1>
            </div>
            <div className="center-section">
                    <nav>
                        <ul className="nav-links">
                            <li><Link to="/Home">Home</Link></li>
                            <li><Link to="/Content">Content</Link></li>
                            <li><a href="">About Us</a></li>
                            <li><a href="">Blogs</a></li>
                        </ul>
                    </nav>
            </div>

            <div className="right-section">
                <ul className="logo-links">
                    <li><button id="contentbutton" onClick={()=>openLink("https://www.youtube.com/@AtriaPodcastClub")}><img id="ytimg" src="/yt_logo_mono_dark(only logo).png" /></button></li>
                    <li><button id="contentbutton" onClick={()=>openLink("https://www.instagram.com/atriapodcastclub/")}><img id="igimg" src="/Instagram_Glyph_White.svg" /></button></li>
                    <li><button id="contentbutton" onClick={()=>openLink("https://open.spotify.com/show/4O3UpFRvFwFEWhEWyyciY1?si=c506bfa0520b4e8c")}><img id="spotifyimg" src="/Spotify_Primary_Logo_RGB_White.png" /></button></li>
                </ul>
            </div>
        </div>

    )
}

export default Header;