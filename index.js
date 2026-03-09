var submit=document.querySelector(".submit");
submit.addEventListener("click",function(){
    alert("Message sent successfully!")
})

var projects = document.querySelectorAll(".project-card");

var projectDetails = [

`Full description
Airport and runway detection from aerial imagery using an enhanced YOLO deep learning model. The system achieved 91.3 percent accuracy and was published in an IEEE conference.

Technologies used
Python, Deep Learning, YOLO, Computer Vision, OpenCV, Image Processing`,


`Full description
Drone based airport and runway detection system with GPS integration. Selected under MSME IDEA Hackathon for developing UAV based AI detection for disaster response and navigation.

Technologies used
Python, Deep Learning, UAV Systems, GPS Integration, Computer Vision`,


`Full description
Developed a relational database system for banking operations including account management, deposits, withdrawals, and transaction tracking with secure SQL queries and constraints.

Technologies used
SQL, MySQL, Database Design, Query Optimization`,


`Full description
Hybrid deep learning system combining image dehazing with YOLO based object detection to improve visibility and detection accuracy in foggy environments.

Technologies used
Python, Deep Learning,NLD ,YOLO, Image Processing, OpenCV`

];

for (let i = 0; i < projects.length; i++) {

    projects[i].addEventListener("click", function () {

        alert(projectDetails[i]);

    });

}
