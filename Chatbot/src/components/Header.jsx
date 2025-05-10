import React from "react";
import "./component_styles/header.css";

const openLink = (url) => {
    window.open(url,'_blank');
}

function Header() {
    return(
        <div className="Header">
            <img id="logoimg" src="/logo.jpg"></img>
            <nav>
                <ul className="nav-links">
                    <li><a href="">Home</a></li>
                    <li><a href="">Content</a></li>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Blogs</a></li>
                </ul>
            </nav>
            <nav>
                <ul className="logo-links">
                    <li><button id="contentbutton" onClick={()=>openLink("https://www.youtube.com/@AtriaPodcastClub")}><img id="ytimg" src="/yt.png"></img></button></li>
                    <li><button id="contentbutton" onClick={()=>openLink("https://www.instagram.com/atriapodcastclub/")}><img id="igimg" src="/instagram.png"></img></button></li>
                    <li><button id="contentbutton" onClick={()=>openLink("https://open.spotify.com/show/4O3UpFRvFwFEWhEWyyciY1?si=c506bfa0520b4e8c")}><img id="spotifyimg" src="/spotify.png"></img></button></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;