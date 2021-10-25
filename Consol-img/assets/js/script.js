let div = document.getElementsByClassName("user-img")[0];
let file;
div.querySelector("button").onclick = () => {
    div.querySelector("input").click();
}

div.querySelector("input").addEventListener("change", function() {
    file = this.files[0];
    let fileReader = new FileReader();
    fileReader.onload = () => {
        let fileURL = fileReader.result;
        let imgTag = `<img src="${fileURL}" alt="">`;
        div.innerHTML = imgTag;
    }
    fileReader.readAsDataURL(file);
})