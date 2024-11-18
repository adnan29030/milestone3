var resumeForm = document.getElementById("form");
var resumeOutput = document.getElementById("resumeOutput");
// function to generate resume
if (resumeForm && resumeOutput) {
    resumeForm.addEventListener('submit', function (event) {
        event.preventDefault();
        var myName = document.getElementById("name").value;
        var myDesignation = document.getElementById("des").value;
        var myPhone = document.getElementById("phone").value;
        var myEmail = document.getElementById("email").value;
        var myAddress = document.getElementById("add").value;
        var myPassing_Years = document.getElementById("pss").value;
        var myDegree = document.getElementById("degree").value;
        var myBoard = document.getElementById("bu").value;
        var myskill1 = document.getElementById("skill").value;
        var mylang1 = document.getElementById("lang").value;
        var mystartyear = document.getElementById("sy").value;
        var myendingyear = document.getElementById("ey").value;
        var myCompany = document.getElementById("comadd").value;
        var myJob = document.getElementById("jobt").value;
        var myReward1 = document.getElementById("rew").value;
        var resumeHTML = "\n            <h2> Generate Resume </h2>\n            <p> <storng> Name: </strong>".concat(myName, "</p>\n            <p> <storng> Designation:</strong>").concat(myDesignation, "</p>\n            <p> <storng> Phone No:</strong>").concat(myPhone, "</p>\n            <p> <storng> Email:</strong>").concat(myEmail, "</p>\n            <p> <storng> Address:</strong>").concat(myAddress, "</p>\n            <p> <storng> Passing_Years:</strong>").concat(myPassing_Years, "</p>\n            <p> <storng> Degree:</strong>").concat(myDegree, "</p>\n            <p> <storng> Board:</strong>").concat(myBoard, "</p>\n            <p> <storng> skill1:</strong>").concat(myskill1, "</p>\n            <p> <storng> language:</strong>").concat(mylang1, "</p>\n            <p> <storng> Admission :</strong>").concat(mystartyear, "</p>\n            <p> <storng> Passing Year:</strong>").concat(myendingyear, "</p>\n            <p> <storng> Company:</strong>").concat(myCompany, "</p>\n            <p> <storng> Job:</strong>").concat(myJob, "</p>\n            <p> <storng> Reward:</strong>").concat(myReward1, "</p>\n            ");
        resumeOutput.innerHTML = resumeHTML;
    });
}
else {
    console.error("form of out put div not found in the DOM");
}
