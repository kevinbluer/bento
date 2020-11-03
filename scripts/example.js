const main = async (cb) => {
  try {
    console.log(`👋`)
  } catch(err) {
    console.log(`💥`, err.message);
  }
  cb();
}

module.exports = main;