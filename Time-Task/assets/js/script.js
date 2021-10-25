let click = document.querySelector("button");

click.addEventListener("click", function(e) {
    e.preventDefault;
    let il = document.querySelectorAll(".inputs input")[0].value;
    let ay = document.querySelectorAll(".inputs input")[1].value;
    let gun = document.querySelectorAll(".inputs input")[2].value;


    let dogumtarixi = new Date(il, ay - 1, gun, 0, 0, 0, 0);

    console.log(dogumtarixi);


    let ms1 = dogumtarixi.getTime();


    let indikizaman = new Date();

    let ms2 = indikizaman.getTime();

    let lifems = ms2 - ms1;
    let lifeyear = lifems / 1000 / 60 / 60 / 24 / 30 / 12;
    let lifeday = (lifeyear % 1) * 365;
    let lifehour = (lifeday % 1) * 24;
    let lifemin = (lifehour % 1) * 60;
    let lifesec = (lifemin % 1) * 60;

    document.querySelectorAll(".result-inputs input")[0].value = Math.floor(lifeyear);
    document.querySelectorAll(".result-inputs input")[1].value = Math.floor(lifeday);
    document.querySelectorAll(".result-inputs input")[2].value = Math.floor(lifehour);
    document.querySelectorAll(".result-inputs input")[3].value = Math.floor(lifemin);
    document.querySelectorAll(".result-inputs input")[4].value = Math.floor(lifesec);

})