var time;
function timeplay() {
    time = setInterval(function () {
        var day = new Date();
        document.getElementsByClassName("gio")[0].innerHTML = day.getHours();
        document.getElementsByClassName("phut")[0].innerHTML = day.getMinutes();
        document.getElementsByClassName("giay")[0].innerHTML = day.getSeconds();

    }, 1000)
}


document.getElementsByClassName("start")[0].addEventListener("click", function () {

    timeplay();
    document.getElementsByClassName("alert")[0].style.display = 'flex';
    document.getElementsByClassName("alertt")[0].innerText = "Thời gian tiếp tục";

    setTimeout(function () {
        document.getElementsByClassName("alert")[0].style.display = 'none';



    }, 3000)

});

document.getElementsByClassName("pause")[0].addEventListener("click", function () {
    clearInterval(time);

    document.getElementsByClassName("alert")[0].style.display = 'flex';
    document.getElementsByClassName("alertt")[0].innerText = "Thời gian dừng lại";

    setTimeout(function () {
        document.getElementsByClassName("alert")[0].style.display = 'none';



    }, 3000)
});
timeplay();