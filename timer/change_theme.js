function init()
{
    
    dark_theme();
}
var btn = document.getElementById("theme_btn");

function light_theme()
{
    document.getElementById("theme").setAttribute("href", "timer.css");
    return true;
}


function dark_theme()
{
    document.getElementById("theme").setAttribute("href", "timer_dark.css");
    return false
}


function change_theme(eventObj)
{
    var obj = eventObj.target;
    console.log(obj);
}


window.onload = init;