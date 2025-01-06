const ResumeDetail = {
    Name: "",
    WhoAreYou: "",
    Email: "",
    ContactNumber: "",
    Address: "",
    Summary: "",
    Exp: [],
    Education: [],
    Skills: [],
    Strengths: [],
    Languages: [],
    Certificates: [],
};

let generate = document.getElementById("generate");
generate.addEventListener("click", () => {
    let DetailBox = document.querySelector("#Detail-Box");
    let Children = Array.from(DetailBox.children);

    Children.forEach((element) => {
        if (element.id == "Exp") {
            function CompanyBlueprint(CompName, Years, Location, Cnumber, Summary) {
                this.CompName = CompName;
                this.Years = Years;
                this.Location = Location;
                this.Cnumber = Cnumber;
                this.Summary = Summary;
            }
            let comp = document.querySelectorAll(".company");
            comp.forEach((element) => {
                const CompChild = element.children;
                const OBJ = new CompanyBlueprint(
                    CompChild[1].value,
                    CompChild[3].value,
                    CompChild[5].value,
                    CompChild[7].value,
                    CompChild[9].value
                );
                ResumeDetail.Exp.push(OBJ);
            });
        } else if (
            element.id == "AddButton" ||
            element.id == "AddSkills" ||
            element.id == "AddStrengths" ||
            element.id == "AddLanguages" ||
            element.id == "AddCertificates"
        ) {
            console.log("Nothing");
        } else if (element.id == "Education") {
            let InputEducation = document.getElementById("Education");
            let EducationObj = {
                Institutename: InputEducation.children[2].value,
                Degree: InputEducation.children[4].value,
                YearOfPassing: InputEducation.children[6].value,
            };
            ResumeDetail.Education.push(EducationObj);
        } else if (element.id == "Skills") {
            let InputAllskills = document.getElementById("Skills");
            SetTheInput(ResumeDetail.Skills, InputAllskills);
        } else if (element.id == "Strengths") {
            let InputStrengths = document.getElementById("Strengths");
            SetTheInput(ResumeDetail.Strengths, InputStrengths);
        } else if (element.id == "Languages") {
            let InputLanguages = document.getElementById("Languages");
            SetTheInput(ResumeDetail.Languages, InputLanguages);
        } else if (element.id == "Certificates") {
            let InputCertificates = document.getElementById("Certificates");
            SetTheInput(ResumeDetail.Certificates, InputCertificates);
        } else {
            let inputvalue = element.children[1].value;
            ResumeDetail[element.id] = inputvalue;
        }
    });

    GeneRateTemplate();
});

function SetTheInput(object, dataNode) {
    Array.from(dataNode.children).forEach((child) => {
        if (child.tagName === "INPUT" || child.tagName === "TEXTAREA") {
            let value = child.value || "empty";
            object.push(value);
        }
    });
}

function GeneRateTemplate() {
    const container = document.createElement("div");
    container.className = "container";

    const header = document.createElement("div");
    header.className = "header";

    const headerTitle = document.createElement("h1");
    headerTitle.textContent = ResumeDetail.Name;
    const headerSubtitle = document.createElement("p");
    headerSubtitle.textContent = ResumeDetail.WhoAreYou;
    const headerInfo = document.createElement("p");
    headerInfo.textContent = `${ResumeDetail.Address} | ${ResumeDetail.Email}`;

    header.appendChild(headerTitle);
    header.appendChild(headerSubtitle);
    header.appendChild(headerInfo);

    const summarySection = document.createElement("div");
    summarySection.className = "section";
    const summaryTitle = document.createElement("h2");
    summaryTitle.textContent = "Summary";
    const summaryText = document.createElement("p");
    summaryText.textContent = ResumeDetail.Summary;
    summarySection.appendChild(summaryTitle);
    summarySection.appendChild(summaryText);

    const experienceSection = document.createElement("div");
    experienceSection.className = "section";
    const experienceTitle = document.createElement("h2");
    experienceTitle.textContent = "Experience";
    const experienceList = document.createElement("ul");
    ResumeDetail.Exp.forEach((exp) => {
        const experienceItem = document.createElement("li");
        experienceItem.innerHTML = `<strong>${exp.CompName}</strong> - ${exp.Years} (${exp.Cnumber})<br>- ${exp.Summary}`;
        experienceList.appendChild(experienceItem);
    });
    experienceSection.appendChild(experienceTitle);
    experienceSection.appendChild(experienceList);

    const educationSection = document.createElement("div");
    educationSection.className = "section";
    const educationTitle = document.createElement("h2");
    educationTitle.textContent = "Education";
    const educationList = document.createElement("ul");
    ResumeDetail.Education.forEach((edu) => {
        const educationItem = document.createElement("li");
        educationItem.innerHTML = `<strong>${edu.Institutename}</strong> - ${edu.Degree} (${edu.YearOfPassing})`;
        educationList.appendChild(educationItem);
    });
    educationSection.appendChild(educationTitle);
    educationSection.appendChild(educationList);

    const skillsSection = document.createElement("div");
    skillsSection.className = "section";
    const skillsTitle = document.createElement("h2");
    skillsTitle.textContent = "Skills";
    const skillsContainer = document.createElement("div");
    skillsContainer.className = "skills";
    ResumeDetail.Skills.forEach((skill) => {
        const skillSpan = document.createElement("span");
        skillSpan.textContent = skill;
        skillsContainer.appendChild(skillSpan);
    });
    skillsSection.appendChild(skillsTitle);
    skillsSection.appendChild(skillsContainer);

    const strengthsSection = document.createElement("div");
    strengthsSection.className = "section";
    const strengthsTitle = document.createElement("h2");
    strengthsTitle.textContent = "Strengths";
    const strengthsContainer = document.createElement("div");
    strengthsContainer.className = "strengths";
    ResumeDetail.Strengths.forEach((strength) => {
        const strengthSpan = document.createElement("span");
        strengthSpan.textContent = strength;
        strengthsContainer.appendChild(strengthSpan);
    });
    strengthsSection.appendChild(strengthsTitle);
    strengthsSection.appendChild(strengthsContainer);

    const languagesSection = document.createElement("div");
    languagesSection.className = "section";
    const languagesTitle = document.createElement("h2");
    languagesTitle.textContent = "Languages";
    const languagesContainer = document.createElement("div");
    languagesContainer.className = "languages";
    ResumeDetail.Languages.forEach((lang) => {
        const langSpan = document.createElement("span");
        langSpan.textContent = lang;
        languagesContainer.appendChild(langSpan);
    });
    languagesSection.appendChild(languagesTitle);
    languagesSection.appendChild(languagesContainer);

    container.appendChild(header);
    container.appendChild(summarySection);
    container.appendChild(experienceSection);
    container.appendChild(educationSection);
    container.appendChild(skillsSection);
    container.appendChild(strengthsSection);
    container.appendChild(languagesSection);

    document.body.appendChild(container);

    let DetailBox = document.getElementById("Detail-Box");
    DetailBox.style.display = "none";
    generate.innerHTML = "Download";
    generate.removeEventListener('click', GeneRateTemplate);
    generate.addEventListener('click' , Down);
}

function Down() {
    let container = document.querySelector('.container'); // Ensure correct selection
    if (!container) {
        console.error('Error: No container found to generate the image.');
        return;
    }

    domtoimage.toPng(container).then((dataUrl) => {
        let link = document.createElement('a');
        link.download = 'Your_Resume.png';
        link.href = dataUrl;
        link.click();
    }).catch((error) => {
        console.error('Error generating image:', error);
    });
}
