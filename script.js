var _a;
(_a = document.getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    var profilePhoto = document.getElementById("profilePhoto");
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var educationElement = document.getElementById("education");
    var experienceElement = document.getElementById("experience");
    var skillsElement = document.getElementById("skills");
    if (profilePhoto && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        var profilePhotoFile = (_a = profilePhoto.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePhotoURL = profilePhotoFile ? URL.createObjectURL(profilePhotoFile) : "";
        var resumeHTML = "\n            <h2>Resume</h2>\n            ".concat(profilePhotoURL ? "<img src=\"".concat(profilePhotoURL, "\" alt=\"Profile Photo\" class=\"profilePicture\">") : "", "\n            <p><strong>Name:</strong> <span class=\"editable\">").concat(nameElement.value, "</span></p>\n            <p><strong>Email:</strong> <span class=\"editable\">").concat(emailElement.value, "</span></p>\n            <p><strong>Phone:</strong> <span class=\"editable\">").concat(phoneElement.value, "</span></p>\n            <h3>Education</h3>\n            <p class=\"editable\">").concat(educationElement.value, "</p>\n            <h3>Experience</h3>\n            <p class=\"editable\">").concat(experienceElement.value, "</p>\n            <h3>Skills</h3>\n            <p class=\"editable\">").concat(skillsElement.value, "</p>\n        ");
        var resumeOutput = document.getElementById("resumeOutput");
        if (resumeOutput) {
            resumeOutput.innerHTML = resumeHTML;
            makeEditable();
        }
    }
});
function makeEditable() {
    var editableElements = document.querySelectorAll(".editable");
    editableElements.forEach(function (element) {
        element.addEventListener("click", function () {
            var input = document.createElement("input");
            input.type = "text";
            input.value = element.innerText;
            element.replaceWith(input);
            input.focus();
            input.addEventListener("blur", function () {
                var span = document.createElement("span");
                span.className = "editable";
                span.textContent = input.value;
                input.replaceWith(span);
                makeEditable(); // Rebind the event listener to the new span
            });
        });
    });
}
