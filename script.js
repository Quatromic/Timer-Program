const date = new Date()
const datetag = document.getElementById("date")
const timeTag = document.getElementById("time")
const btn = document.getElementById("setter")

const day = (date) => {
    switch(date.getDay()){
        case 1:
        default:
            return "Monday"
        case 2:
            return "Tuesday"
        case 3:
            return "Wednesday"
        case 4:
            return "Thursday"
        case 5:
            return "Friday"
        case 6:
            return "Saturday"
        case 7:
            return "Sunday"
    }
}

const month = (date) => {
    switch(date.getMonth() + 1){
        case 1:
        default:
            return "Jan"
        case 2:
            return "Feb"
        case 3:
            return "Mar"
        case 4:
            return "Apr"
        case 5:
            return "May"
        case 6:
            return "Jun"
        case 7:
            return "Jul"
        case 8:
            return "Aug"
        case 9:
            return "Sep"
        case 10:
            return "Oct"
        case 11:
            return "Nov"
        case 12:
            return "Dec"
    }
}

const time = () => {
    const now = new Date()
    datetag.innerText = `${day(date)}, ${date.getDate()} ${month(date)} ${date.getFullYear()}`
    const hours = now.getHours().toString().padStart(2,0),min = now.getMinutes().toString().padStart(2,0),seconds = now.getSeconds().toString().padStart(2,0)
    const meridiem = (hours >= 12 ? "pm": "am")
    const timeString = `${hours} : ${min} : ${seconds} ${meridiem}`
    timeTag.textContent = timeString
}
let interval = setInterval(time, 1000);

//stopwatch and timer to come up next