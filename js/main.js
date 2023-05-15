let arrowButtons = document.getElementsByClassName("arrow");
let reviews = document.getElementsByClassName("review")

for (let i = 0; i < arrowButtons.length; i++) {
    arrowButtons[i].onclick = function () {
        reviews[0].style.display = "none";
        reviews[1].style.display = "none";
        reviews[2].style.display = "none";
        reviews[3].style.display = "block";
        reviews[4].style.display = "block";
        reviews[5].style.display = "block";
    }
}