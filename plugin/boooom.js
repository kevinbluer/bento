const liftoff = require("./commands/liftoff");
const landing = require("./commands/landing");
const configExample = require("./commands/config");

module.exports = (config) => {

  console.log(`💥`);

  if (config.help) {
    console.log(`Usage: truffle run boooom [command]`);
    console.log(`Commands: liftoff, landing`);
    return;
  }

  if (config._.length < 2) {
    console.log("No command provided. Run truffle run boooom --help to see the full list.");
    return;
  }

  switch (config._[1]) {
    case "liftoff":
      liftoff(config);
      break;
    case "landing":
      landing(config);
      break;
    case "config":
      configExample(config);
      break;
    default:
      console.log("Command not found. Run truffle run boooom --help to see the full list.");
  }
}