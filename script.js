window.onload = function ini()
    {
        rotate();
    }

var theAd = 0;
var adImages = ["superhero1.png","superhero2.png","superhero3.png","superhero4.png","superhero5.png","superhero6.png"];
var links = ["https://www.fbi.gov", "http://www.thelonelyisland.com", "https://www.novarockafeller.com", "https://www.dccc.edu", "https://www.youtube.com/watch?v=dQw4w9WgXcQ", "https://www.codexworld.com/how-to/open-url-in-new-browser-window-tab-javascript/"]
var time = 3;

function rotate() 
    {
        theAd++;
            if (theAd == adImages.length) 
                {
                theAd = 0;
                }
        document.getElementById("adBanner").src = adImages[theAd];
        document.getElementById("link").href = links[theAd];
        setTimeout(rotate, time * 1000);
    }
function increase()
    {
        if(time > 1)
            {
                time = time - 1;
            }
        if(time == 1)
            {
                time = 1;
            }
        document.getElementById("counter").innerHTML = "You're viewing a new picture every " + time + " second(s).";
    }
function decrease()
    {
        if(time < 10)
            {
                time = time + 1;
            }
        if(time == 10)
            {
                time = 10;
            }
            document.getElementById("counter").innerHTML = "You're viewing a new picture every " + time + " second(s).";
    }
