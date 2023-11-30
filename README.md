# Assignment-1
My project is about a Kpop band called IVE. I am doing a website for users that are fans and potential fans who wish to learn more about the band's history and the band members.

<p>Feature home - allows user to access the home page of the website</p>
<p>feature band - allows user to know more about the band and their members</p>
<p>feature tour - allows user to know when and where their concert is</p>
  <div class="dropdown-content">
                <a href="profileYuJin.html">YUJIN</a>
                <a href="profileGaeul.html">GAEUL</a>
                <a href="profileRei.html">REI</a>                
                <a href="profileWonyoung.html">WONYOUNG</a>
                <a href="profileLiz.html">LIZ</a>    
                <a href="profileLeeseo.html">LEESEO</a>            
            </div>

            .dropdown {
    display: inline-block;
    position: relative;
}

.dropdown-content {
    display: none;
    position: absolute;
    top: 100%; /* Position the dropdown below the "Profile" link */
    left: 0;
    background-color: pink;
    min-width: 140px;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    z-index: 1;
}

.dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}

.dropdown-content a:hover {
    background-color: #f1f1f1;
}