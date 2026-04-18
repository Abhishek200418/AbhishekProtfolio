// Project click details
var projects = document.querySelectorAll(".project-card");

var projectDetails = [

"Airport & Runway Detection\n\nYOLO-based model with 91.3% accuracy.\nTechnologies: Python, YOLO, OpenCV",

"Anti-Boredom Hub\n\nFull stack app for tasks & activities.\nTechnologies: React, Spring Boot, MySQL",

"Bookmark Manager\n\nManage bookmarks easily.\nTechnologies: Angular, Spring Boot, MySQL",

"Hybrid Dehazing\n\nImage dehazing + object detection.\nTechnologies: Python, YOLO"

];

projects.forEach((project, index) => {
    project.addEventListener("click", () => {
        alert(projectDetails[index]);
    });
});