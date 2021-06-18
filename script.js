const trackbtn = document.querySelector(".btn");
const ip = document.querySelector(".address");
const loc = document.querySelector(".location");
const gloc = document.querySelector(".geo");
const homemap = document.querySelector(".map");

trackbtn.addEventListener("click", () => {

    axios.get("https://ipapi.co/json/").then((response) => {
        ip.textContent = `IP Address : ${response.data.ip}`;
        loc.textContent = `Location : ${response.data.city}, ${response.data.region}, ${response.data.country_name}`;
        gloc.textContent = `Coordinates : ${response.data.latitude}, ${response.data.longitude}`;
        

        document.getElementById("maps").src = `https://www.google.com/maps/embed/v1/view?key=AIzaSyCYKGoBvxSupFJ5cnNqDf0cRMhYPKRckE0&center=${response.data.latitude},${response.data.longitude}&zoom=18&maptype=satellite`;
        
    });
});