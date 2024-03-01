//returns clickable badge (badge + link essentially, license section below.)
function renderLicenseBadge(license) {
  if (license) {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else {
    return "";
  }
}
// creates template sections for data to be injected into
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Table of Contents
* [Description](#description)
* [Installation Instructions](#install)
* [Usage](#usage)
* [Guidelines for Contributors](#Contribution)
* [Tests](#testing)
* [GitHub](#github)
* [Questions](#questions)

## Description
${data.description}

## Installation Instructions:
${data.install}

## Usage
${data.usage}

## Guidelines for Contributors:
${data.contribution}

## License 
${data.license} 

## Tests:
${data.tests}

## My GitHub:
${data.github}

## Questions:
If you have any questions you can reach me via this email address: ${data.email}`;
}

module.exports = generateMarkdown;