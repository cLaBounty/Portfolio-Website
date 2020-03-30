const jobTitle = 'Application Developer';
const resumeFile = 'file:///D:/Projects/Portfolio Website/documents/Resume.pdf';
const linkedinLink = 'http://www.linkedin.com/in/cameronlabounty';
const githubLink = 'https://github.com/cLaBounty';

// to easily change job title
// document.getElementById('jobTitle').innerHTML = jobTitle;

function showResume() {
    window.open(resumeFile);
}

function openLinkedin() {
    window.open(linkedinLink);
}

function openGithub() {
    window.open(githubLink);
}