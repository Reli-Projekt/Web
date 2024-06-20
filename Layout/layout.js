fetch("./Layout/footer.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        //document.getElementById("footer").innerHTML = '<object type="text/html" data="./Layout/footer.html"></object>';
        document.querySelector("footer").innerHTML = data;
    });

fetch("./Layout/navBarTop.html")
    .then(response => {
        return response.text()
    })
    .then(data => {

        document.querySelector("header").innerHTML = data;
    });
const toastLiveExample = document.getElementById('liveToast')
const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
toastBootstrap.show()
console.log("Cookies!")