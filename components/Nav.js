import html from "html-literal";
import logoURL from "../images/logoDesigns/workingLogo.png";
console.log(logoURL);
export default (links) => html ` <nav>
<i class="fas fa-bars"></i>
<ul class="nav-ul hidden--mobile nav-links">
<li class="nav-li"><a class="nav-logo" href="Home"><img src= "${logoURL}" alt="logo"></a></li>
    ${links
        .map(
        (link) =>
            `<li><a href="/${link.title}" title="${link.title}" data-navigo>${link.text}</a></li>`
        )
        .join("")}
    <!--<li><a href="home.html"><img class="nav-logo" src= "${logoURL}" alt="logo"></a></li>
    <li><a href="gameList.html">Games</a></li>
    <li><a href="multiplayer.html">Multiplayer</a></li>
    <li><a href="aboutUs.html">About Us</a></li>
    <li><a href="contactUs.html">Contact Us</a></li>
    <li><a href="lessonPlanner.html">Lesson Planner</a></li>
    <li>Search Bar Here</li> -->
    <div class="search-div">
        <label class="nav-search" for="nav-search">Search the site:</label>
        <input class="search-field" type="search" id="nav-search" name="qu" maxlength = 30>
        <input class="search-button" type="button" value="Search">
    </div>
</ul>
</nav>`
