const landing = async (config) => {

  try {

    if (config._[2]) {
      console.log(`Where? ${config._[2]}`);
      console.log(`🌖`);
    } else {
      console.log(`🤷‍♂️`);
    }

  } catch (err) {
    console.log(`Came in a little hard:\n\n${err}`);
  }

}

module.exports = landing;