const generateMarkdown = data => {
  return `# ${data.title}
  ![Badge License](https://img.shields.io/badge/license-${data.license}-blue.svg)

  ## Description 
  ${data.description}

  ## Table oF Contents
  * [Installation](#Instalation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installations
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  This project is using ${data.license}

  ## Contributing 
  ${data.contributing}

  ## Test
  ${data.test}

  ## Questions

  Please contact me here:
  [Github](https://github.com/${data.githubUsername})

  [Email: ${data.email}]
  `;
}

module.exports = generateMarkdown;






