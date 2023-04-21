var button = document.getElementById('btn');
var dayNum = document.getElementById('day-input');
var monthNum = document.getElementById('month-input');
var yearNum = document.getElementById('year-input');

const day = () => {
    console.log(dayNum.value)
}
const month = () => {
    console.log(monthNum.value)
}
const year = () => {
    console.log(yearNum.value)
}

const calculate = () => {
    var birthDate = (dayNum.value + "/" + monthNum.value + "/" + yearNum.value);

    var currentDate = new Date();

    var birthDateArr = birthDate.split('/');

    var birthDateObj = new Date(birthDateArr[2], birthDateArr[1] - 1, birthDateArr[0]);

    var ageYears = currentDate.getFullYear() - birthDateObj.getFullYear();

    var ageMonths = currentDate.getMonth() - birthDateObj.getMonth();

    var ageDays = currentDate.getDate() - birthDateObj.getDate();

    if (ageDays < 0) {
        ageMonths--;
        var daysInPrevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 0).getDate();
    }

    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    document.getElementById('years').innerHTML = ageYears;
    document.getElementById('months').innerHTML = ageMonths;
    document.getElementById('days').innerHTML = ageDays;
}