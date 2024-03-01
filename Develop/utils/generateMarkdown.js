//returns clickable badge (badge + link essentially)
function renderLicenseBadge(license) {
  if (license) {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else {
    return "";
  }
}
// creates template sections for data to be injected into
function generateMarkdown(data) {
  return `# ${data.title}`;
  $renderLicenseBadge(data.license)}

module.exports = generateMarkdown;
