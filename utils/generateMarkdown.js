// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var url; 
 if(license === "APACHE 2.0"){
   url = "https://img.shields.io/static/v1?label=license&message=APACHE%202.0&color=blue"
   return `![](${url})`
 }
 else if (license === "BSD 3"){
  url = "https://img.shields.io/static/v1?label=license&message=BSD%203&color=blue"
  return `![](${url})`
 }
 else if(license === "MIT"){
 url = "https://img.shields.io/static/v1?label=license&message=" + license +"&color=blue"
return `![](${url})`
 }
 else{
   return ''
 }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
if(license === "None"){
 
    return ``
  }
  else{
  return   `* [License](#license)`
  
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === "None"){
    return ``
  }
  else{
  return `## License 
  
  This project is licensed under the ${license} license.`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  
  return (`# ${data.projectName}

  ${renderLicenseBadge(data.license)}
  ## Description 

  ${data.description}
  ## Table of Contents 

* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
${renderLicenseLink(data.license)}

## Installation

To install necessary dependencies, run the following command:

\`\`\`
${data.dependencies}
\`\`\`

## Usage 

${data.usage}


${renderLicenseSection(data.license)}

## Contributing 

${data.contribute}

## Tests

To run tests, run the following command:
\`\`\`
${data.tests}
\`\`\`
## Questions 

GitHub Username: ${data.username}
GitHub Profile Link: https://github.com/${data.username}
Email: ${data.email}
If you have any additonal questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at https://github.com/${data.username}.

`);

}

module.exports = generateMarkdown;

