const jobTitle = 'Application Developer';
const resumeFile = 'documents/Resume.pdf';
const linkedinLink = 'http://www.linkedin.com/in/cameronlabounty';
const githubLink = 'https://github.com/cLaBounty';

// to easily change job title
// document.getElementById('jobTitle').innerHTML = jobTitle;

function showResume() {
    window.open(resumeFile, null);
}

function openLinkedin() {
    window.open(linkedinLink);
}

function openGithub() {
    window.open(githubLink);
}
