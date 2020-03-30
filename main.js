const jobTitle = 'Application Developer';
const resumeFile = 'file:///D:/Projects/Personal_Website/Resume.pdf';
const linkedinLink = 'http://www.linkedin.com/in/cameronlabounty';
const githubLink = 'https://github.com/cLaBounty';


document.getElementById('jobTitle').innerHTML = jobTitle;


function showResume() {
    window.open(resumeFile);
}

function openLinkedin() {
    window.open(linkedinLink);
}

function openGithub() {
    window.open(githubLink);
}