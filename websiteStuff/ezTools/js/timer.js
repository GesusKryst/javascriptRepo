function init()
{
    document.getElementById("timer_start").addEventListener("click", startTimer);
    document.getElementById("timer_stop").addEventListener("click",  stopTimer);
    document.getElementById("timer_lap").addEventListener("click", nut);
    function nut()
    {
        console.log("Nut");
    }

    let timerHandle;
    let timer_time = document.getElementById("timer_time");
    let initialTime = {
        hours: 0,
        minutes: 0,
        seconds: 0,
        milliseconds: 0
    };


    function beginTiming(firstStart = true)
    {   
        timer_time.innerHTML = "0:0:0";
        let timeHandle = setInterval(function(){
            initialTime.milliseconds += 1;
            initialTime.seconds += 1;
            if(initialTime.seconds == 60)
            {
                initialTime.minutes += 1;
                if(initialTime.minutes == 60)
                {
                    initialTime.hours += 1;
                    initialTime.minutes = 0;
                }
                initialTime.seconds = 0;
            }

            timeString = initialTime.hours + ":" + initialTime.minutes + ":" + initialTime.seconds;
            timer_time.innerHTML = timeString;
        }, 1000);
        
        return timeHandle;
    }

    function startTimer()
    {
        timerHandle = beginTiming();
    }
        

        function stopTimer()
    {
        clearInterval(timerHandle);
        document.getElementById("timer_time").innerHTML += "<br>*Timer Stopped*"
    }
}




window.onload = init;