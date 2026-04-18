document.addEventListener("DOMContentLoaded", function () {

    const projects = document.querySelectorAll(".project-card");
    const buttons = document.querySelectorAll(".source-btn");

    const projectDetails = [
        "Airport & Runway Detection\n\nYOLO-based model with 91.3% accuracy.\nTechnologies: Python, YOLO, OpenCV",

        "Anti-Boredom Hub\n\nFull stack app for tasks & activities.\nTechnologies: React, Spring Boot, MySQL",

        "Bookmark Manager\n\nManage bookmarks easily.\nTechnologies: Angular, Spring Boot, MySQL",

        "Hybrid Dehazing\n\nImage dehazing + object detection.\nTechnologies: Python, YOLO"
    ];

    const links = [
        "",
        "https://github.com/Abhishek200418/Anti-Boredom-Hub-",
        "https://github.com/Abhishek200418/BookMark",
        "https://github.com/Abhishek200418/image-dehazing-object-detection"
    ];

    projects.forEach((project, index) => {
        project.addEventListener("click", () => {
            alert(projectDetails[index]);
        });
    });

    buttons.forEach((btn, index) => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();

            if (links[index]) {
                window.open(links[index]);
            }
        });
    });

});