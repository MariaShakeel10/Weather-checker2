let userInp = prompt(`Enter your area's temperature in celsius(0-39)`);
let userTemp =Number.parseInt(userInp);
let tempObj = [
    { "max": 39, "min": 33, "condition": "Heat Wave", "image": './images/sunny.png' },
    { "max": 32, "min": 27, "condition": "Very Hot", "image": './images/sunny.png' },
    { "max": 26, "min": 23, "condition": "Hot", "image": './images/sunny.png' },
    { "max": 22, "min": 16, "condition": "Room Temprature", "image": './images/sunny.png' },
    { "max": 15, "min": 11, "condition": "Warm", "image": './images/cloudy.png' },
    { "max": 10, "min": 5, "condition": "Mild", "image": './images/cloudy.png' },
    { "max": 4, "min": 0, "condition": "Cold", "image": './images/snow.png' },
];

function weatherChecker(temperature) {
    for (let range of tempObj) {
        if (temperature >= range.min && temperature <= range.max) {
            return range;
        }
    }
    return 0;
};

let weatherInfo = weatherChecker(userTemp);

if (weatherInfo) {
    let report1 = `<div class="card mt-5 m-auto my-card" style="width: 18rem;">
<img src="${weatherInfo.image}" class="card-img-top" alt="Weather pic">
<div class="card-body">
  <h5 class="card-title text-center">Weather Report</h5>
  <p class="card-text text-center">Weather ${weatherInfo.condition}</p>
  <p class="card-text text-center">Temperature: ${userInp}Celsius</p>
</div>
</div>`
document.write(report1)
}
else{
    let report2 = `<div class="card mt-5 m-auto my-card" style="width: 18rem;">
<img src="./images/emoji.png" class="card-img-top" alt="...">
<div class="card-body text-center">
  <p class="card-text text-center">PLease enter a valid Temperature</p>
</div>
</div>`
    document.write(report2)
};