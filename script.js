// document.querySelectorAll(".resume-btn").forEach(button => {
//     button.addEventListener("click", () => {
//         alert("Opening resume...");
//     });
// });
function toggleDetails(id) {
    var details = document.getElementById(id);
    if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "block";
    } else {
        details.style.display = "none";
    }
}
