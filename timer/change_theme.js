function init()
{
    var btn = document.getElementById("theme_btn");
    btn.addEventListener("click", function()
    {
        let currentTheme = document.getElementById("theme");
        if(btn.checked)
        {
            currentTheme .setAttribute("href", "timer_dark.css");
        }
        else
        {
            currentTheme .setAttribute("href", "timer_light.css");
        }
    })
}




window.onload = init();