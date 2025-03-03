console.log("Content scripting is running...")

if (window.location.hostname.includes("linkedIn.com")) {
    const jobTitle = document.querySelector(".top-card-layout__title");
    console.log("Scraped Job Title:", jobTitle);
}