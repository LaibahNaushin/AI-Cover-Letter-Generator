// ===========================================
// AI COVER LETTER GENERATOR
// Part 3A
// ===========================================

// -----------------------------
// Elements
// -----------------------------

const nameInput = document.getElementById("name");
const roleInput = document.getElementById("role");
const companyInput = document.getElementById("company");
const skillsInput = document.getElementById("skills");
const resumeInput = document.getElementById("resume");

const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");

const loading = document.getElementById("loading");
const output = document.getElementById("output");

// Resume Text
let resumeText = "";

// -----------------------------
// Generate Button
// -----------------------------

generateBtn.addEventListener("click", generateCoverLetter);

// -----------------------------
// Copy Button
// -----------------------------

copyBtn.addEventListener("click", () => {

    const text = output.innerText.trim();

    if (
        text === "" ||
        text === "Your generated cover letter will appear here..."
    ) {
        showToast("Nothing to copy");
        return;
    }

    navigator.clipboard.writeText(text);

    showToast("Cover Letter Copied!");
});

// -----------------------------
// Generate Cover Letter
// -----------------------------

function generateCoverLetter() {

    const name = nameInput.value.trim();
    const role = roleInput.value.trim();
    const company = companyInput.value.trim();
    const skills = skillsInput.value.trim();

    if (
        name === "" ||
        role === "" ||
        company === "" ||
        skills === ""
    ) {
        showToast("Please fill all fields");
        return;
    }

    loading.classList.remove("hidden");

    generateBtn.disabled = true;
    generateBtn.innerHTML =
        `<i class="ri-loader-4-line"></i> Generating...`;

    setTimeout(() => {

        const letter = createTemplate(
            name,
            role,
            company,
            skills
        );

        output.classList.add("fadeIn");

        output.innerText = letter;

        loading.classList.add("hidden");

        generateBtn.disabled = false;

        generateBtn.innerHTML =
        `<i class="ri-magic-line"></i> Generate Cover Letter`;

    },2000);

}

// -----------------------------
// Template
// -----------------------------

function createTemplate(
    name,
    role,
    company,
    skills
){

return `Dear Hiring Manager,

I am writing to express my interest in the ${role} position at ${company}.

My name is ${name}, and I have developed strong technical skills in ${skills}. I enjoy solving real-world problems, creating responsive web applications, and continuously learning modern technologies.

I believe my technical knowledge, dedication, and ability to work collaboratively make me a valuable candidate for your organization.

I would welcome the opportunity to contribute my skills and enthusiasm to ${company}. Thank you for considering my application.

Sincerely,

${name}`;

}

// -----------------------------
// Toast
// -----------------------------

function showToast(message){

const oldToast=document.querySelector(".toast");

if(oldToast){

oldToast.remove();

}

const toast=document.createElement("div");

toast.className="toast";

toast.innerText=message;

document.body.appendChild(toast);

setTimeout(()=>{

toast.remove();

},2500);

}