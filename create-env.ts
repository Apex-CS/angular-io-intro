const writeFile = require("fs").writeFile;
// Load node modules
const colors = require('colors');
// console.log('dotenv', require("dovenv"));
require('dotenv').config();

// Configure Angular `environment.ts` file path
const targetPath = process.env.NODE_ENV === "production" ? "./src/environments/environment.prod.ts" : "./src/environments/environment.ts";

// `environment.ts` file structure
const envConfigFile = `export const environment = {
   pokemonApiKey: ${process.env.pokemonApiKey}
   production: ${process.env.production}
   nodeEnv: ${process.env.NODE_ENV}
};
`;
console.log(colors.magenta('The file `env` will be written: \n'));
writeFile(targetPath, envConfigFile, function (err: any) {
   if (err) {
       throw console.error(err);
   } else {
       console.log(colors.magenta(`Angular environment.ts file generated correctly at ${targetPath} \n`));
   }
});
