var button = document.getElementById('btn');
var dayNum = document.getElementById('day-input');
var monthNum = document.getElementById('month-input');
var yearNum = document.getElementById('year-input');


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
        ageDays += daysInPrevMonth;
    }

    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    document.getElementById('years').innerHTML = ageYears;
    document.getElementById('months').innerHTML = ageMonths;
    document.getElementById('days').innerHTML = ageDays;


    dayValidate();
    monthValidate();
    yearValidate();
    isDateValid();
    dateNotGiven();
}

const dayValidate = () => {
    var day = dayNum.value;

    var text;

    if (isNaN(day) || day > 31 || day < 1) {
        text = "must be a valid day";
        document.getElementById("day-error").style.color = "red";
        document.getElementById("day-input").style.borderColor = 'red';
        document.getElementById('day-header').style.color = 'red'
        document.getElementById('years').innerHTML = ('-' + '-');
        document.getElementById('months').innerHTML = ('-' + '-');
        document.getElementById('days').innerHTML = ('-' + '-');
    } else {
        text = ""
        document.getElementById("day-input").style.borderColor = '';
        document.getElementById('day-header').style.color = ''
    }
    document.getElementById('day-error').innerHTML = text;


}

const monthValidate = () => {
    var month = monthNum.value;

    var text;

    if (isNaN(month) || month > 12 || month < 1) {
        text = "must be a valid month";
        document.getElementById('month-error').style.color = 'red'
        document.getElementById("month-input").style.borderColor = 'red';
        document.getElementById('month-header').style.color = 'red'
        document.getElementById('years').innerHTML = ('-' + '-');
        document.getElementById('months').innerHTML = ('-' + '-');
        document.getElementById('days').innerHTML = ('-' + '-');
    } else {
        text = ""
        document.getElementById("month-input").style.borderColor = '';
        document.getElementById('month-header').style.color = ''
    }
    document.getElementById('month-error').innerHTML = text;
}

const yearValidate = () => {
    var year = yearNum.value;

    var currentYear = new Date().getFullYear();

    var text;

    if (year > currentYear) {
        text = "must be in the past";
        document.getElementById("year-error").style.color = 'red';
        document.getElementById("year-input").style.borderColor = 'red';
        document.getElementById('year-header').style.color = 'red'
        document.getElementById('years').innerHTML = ('-' + '-');
        document.getElementById('months').innerHTML = ('-' + '-');
        document.getElementById('days').innerHTML = ('-' + '-');
    } else {
        text = ""
        document.getElementById("year-input").style.borderColor = '';
        document.getElementById('year-header').style.color = ''
    }
    document.getElementById('year-error').innerHTML = text;
}

const isDateValid = () => {
    var dateString = (dayNum.value + "/" + monthNum.value + "/" + yearNum.value);

    var dateParts = dateString.split("/");

    var day = parseInt(dateParts[0]);

    var month = parseInt(dateParts[1] - 1); // Subtract 1 from month, as it is zero-indexed in JavaScript

    var year = parseInt(dateParts[2]);

    var date = new Date(year, month, day);
    console.log(date);

    if (date.getFullYear() === year && date.getMonth() === month && date.getDate() === day && !isNaN(date)) {
        return false;
    }
    document.getElementById('day-error').innerHTML = 'must be a valid date';
    document.getElementById("day-error").style.color = "red";
    document.getElementById("day-input").style.borderColor = 'red';
    document.getElementById('day-header').style.color = 'red'
    document.getElementById("month-error").style.color = "red";
    document.getElementById("month-input").style.borderColor = 'red';
    document.getElementById('month-header').style.color = 'red'
    document.getElementById("year-error").style.color = "red";
    document.getElementById("year-input").style.borderColor = 'red';
    document.getElementById('year-header').style.color = 'red'
    document.getElementById('years').innerHTML = ('-' + '-');
    document.getElementById('months').innerHTML = ('-' + '-');
    document.getElementById('days').innerHTML = ('-' + '-');
}


const dateNotGiven = () => {
    var birthDate = (dayNum.value + "/" + monthNum.value + "/" + yearNum.value);

    if (birthDate === ('/' + '/')) {
        document.getElementById("day-error").style.color = "red";
        document.getElementById("day-input").style.borderColor = 'red';
        document.getElementById('day-header').style.color = 'red'
        document.getElementById('day-error').innerHTML = 'this field is required'
        document.getElementById("month-error").style.color = "red";
        document.getElementById("month-input").style.borderColor = 'red';
        document.getElementById('month-header').style.color = 'red'
        document.getElementById('month-error').innerHTML = 'this field is required'
        document.getElementById("year-error").style.color = "red";
        document.getElementById("year-input").style.borderColor = 'red';
        document.getElementById('year-header').style.color = 'red'
        document.getElementById('year-error').innerHTML = 'this field is required'
        document.getElementById('years').innerHTML = ('-' + '-');
        document.getElementById('months').innerHTML = ('-' + '-');
        document.getElementById('days').innerHTML = ('-' + '-');
    }
}