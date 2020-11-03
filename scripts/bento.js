const Bento = artifacts.require("Bento");

const main = async (cb) => {
  try {
    const i = await Bento.deployed();
    
    process.stdout.write("Setting bento...");
    i.setBento('🍱');
    console.log("set 🎉");

    process.stdout.write("Getting bento...");
    console.log(`got ${await i.getBento()}`);

  } catch(err) {
    console.log(`💥`, err.message);
  }
  cb();
}

module.exports = main;