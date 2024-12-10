document.getElementById("resumeForm")?.addEventListener("submit", function (event) {
    event.preventDefault();
    const profilePhoto = document.getElementById("profilePhoto") as HTMLInputElement;
    const nameElement = document.getElementById("name") as HTMLInputElement;
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const phoneElement = document.getElementById("phone") as HTMLInputElement;
    const educationElement = document.getElementById("education") as HTMLTextAreaElement;
    const experienceElement = document.getElementById("experience") as HTMLTextAreaElement;
    const skillsElement = document.getElementById("skills") as HTMLTextAreaElement;

    if (profilePhoto && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        const profilePhotoFile = profilePhoto.files?.[0];
        const profilePhotoURL = profilePhotoFile ? URL.createObjectURL(profilePhotoFile) : "";
        const resumeHTML = `
            <h2>Resume</h2>
            ${profilePhotoURL ? `<img src="${profilePhotoURL}" alt="Profile Photo" class="profilePicture">` : ""}
            <p><strong>Name:</strong> <span class="editable">${nameElement.value}</span></p>
            <p><strong>Email:</strong> <span class="editable">${emailElement.value}</span></p>
            <p><strong>Phone:</strong> <span class="editable">${phoneElement.value}</span></p>
            <h3>Education</h3>
            <p class="editable">${educationElement.value}</p>
            <h3>Experience</h3>
            <p class="editable">${experienceElement.value}</p>
            <h3>Skills</h3>
            <p class="editable">${skillsElement.value}</p>
        `;
        const resumeOutput = document.getElementById("resumeOutput");
        if (resumeOutput) {
            resumeOutput.innerHTML = resumeHTML;
            makeEditable();
        }
    }
});

function makeEditable() {
    const editableElements = document.querySelectorAll(".editable");
    editableElements.forEach(element => {
        element.addEventListener("click", function () {
            const input = document.createElement("input");
            input.type = "text";
            input.value = (element as HTMLElement).innerText;
            element.replaceWith(input);
            input.focus();

            input.addEventListener("blur", function () {
                const span = document.createElement("span");
                span.className = "editable";
                span.textContent = input.value;
                input.replaceWith(span);
                makeEditable(); // Rebind the event listener to the new span
            });
        });
    });
}
