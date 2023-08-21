const dateSelector = document.querySelectorAll('.dashboard-dates');

for(let i = 0; i < dateSelector.length; i++){
    
    dateSelector[i].addEventListener('click', function() {
        dateSelector.forEach(el => {
            el.classList.remove('text-white')
        })
        this.classList.add('text-white')
    })
}

const dailyBtn = document.getElementById('daily')
const weeklyBtn = document.getElementById('weekly')
const monthlyBtn = document.getElementById('monthly')


fetch('./data.json')
.then(dashboardData => dashboardData.json())
.then(data => showInfo(data))
const trackerTitle = document.querySelectorAll('.title')
const currentTracker = document.querySelectorAll('.current')
const previousTracker = document.querySelectorAll('.previous')

function showInfo(data){
    for(let i = 0; i < trackerTitle.length; i++){
        trackerTitle[i].innerHTML = data[i].title
        dailyBtn.addEventListener('click', function(){
            currentTracker[i].innerHTML = data[i].timeframes.daily.current;
            previousTracker[i].innerHTML = "Yesterday - " + String(data[i].timeframes.daily.previous) + "hr/s"
        })
        weeklyBtn.addEventListener('click', function(){
            currentTracker[i].innerHTML = data[i].timeframes.weekly.current;
            previousTracker[i].innerHTML = "Last Week - " + String(data[i].timeframes.weekly.previous) + "hr/s"
        })
        monthlyBtn.addEventListener('click', function(){
            currentTracker[i].innerHTML = data[i].timeframes.monthly.current;
            previousTracker[i].innerHTML = "Last Month - " + String(data[i].timeframes.monthly.previous) + "hr/s"
        })
        
    }
    
    let res = data[0].timeframes.daily.previous

    console.log(res)
}
