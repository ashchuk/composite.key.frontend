const path = require('path');
const colors = require('colors/safe');
const fs = require('fs');

var date = new Date();
const appVersion = `${date.getFullYear()}.${date.getMonth()}.${date.getDay()}.${date.getHours()}.${date.getMinutes()}`;

console.log(colors.cyan('\nRunning pre-build tasks'));

const devVersionFilePath = path.join(__dirname + '/../../environments/environment.ts');
const prodVersionFilePath = path.join(__dirname + '/../../environments/environment.prod.ts');

const srcDev = `export const environment = {
    production: false,
    version: '${appVersion}'
  };
`;

const srcProd = `export const environment = {
    production: true,
    version: '${appVersion}'
  };
`;

// ensure version module pulls value from package.json
fs.writeFile(devVersionFilePath, srcDev, { flat: 'w' }, function (err) {
    if (err) {
        return console.log(colors.red(err));
    }

    console.log(colors.green(`Updating dev application version ${colors.yellow(appVersion)}`));
    console.log(`${colors.green('Writing dev version module to ')}${colors.yellow(devVersionFilePath)}\n`);
});

// ensure version module pulls value from package.json
fs.writeFile(prodVersionFilePath, srcProd, { flat: 'w' }, function (err) {
    if (err) {
        return console.log(colors.red(err));
    }

    console.log(colors.green(`Updating prod application version ${colors.yellow(appVersion)}`));
    console.log(`${colors.green('Writing prod version module to ')}${colors.yellow(prodVersionFilePath)}\n`);
});