// Generates license badge depending on what license is input
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') {
    return ``
  } else if (license === 'MIT') {
    return `
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
    ` 
  } else if (license === 'Apache') {
    return `
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
`
  }
}

// Generates a license link if there is a license
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') {
    return ``
  } else if (license === 'MIT') {
    return `https://opensource.org/licenses/MIT`
  } else if (license === 'Apache') {
    return `https://opensource.org/licenses/Apache-2.0`
  }
}

// Generates header and content if there is a license input
// If there is no license returns a license header stating that there is no license
function renderLicenseSection(license) {
  if (license === 'None') {
    return `## License
    This project is not covered under any specific license.`
  } else if (license === 'MIT') {
    return `## License
    ${renderLicenseLink(license)}
    
    Copyright 2021

    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

`

  } else if (license === 'Apache') {
    return `## License
    ${renderLicenseLink(license)}

    Copyright 2021

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
   `
  }
}

// Generates README markdown
function generateMarkdown(data) {
  return `
# ${data.title}  
  ${renderLicenseBadge(data.license)}

## Description  
${data.description}  

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${data.install}  

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributing
${data.contribution}

## Tests
${data.test}

## Questions
Who am I?
I am [${data.github}](https://github.com/${data.github}). Click the link to visit my GitHub profile!

What is the best way to contact me? 
You can shoot me an email at ${data.email} with any inquiries. 






`;
}

module.exports = generateMarkdown;
