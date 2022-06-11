const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");
const fs = require("fs/promises");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  let arrTidakMarah = [];
  let arrMarah = [];

  try {
    let getPromiseTheaterIXX = await promiseTheaterIXX();
    let getPromiseTheaterVGC = await promiseTheaterVGC();

    //kondisi jika tidak marah
    if (emosi === "tidak marah") {
      //looping masing2 theater
      getPromiseTheaterIXX.forEach((val) => {
        if (val.hasil === "tidak marah") arrTidakMarah.push(val.hasil);
      });
      //looping masing2 theater
      getPromiseTheaterVGC.forEach((val) => {
        if (val.hasil === "tidak marah") arrTidakMarah.push(val.hasil);
      });
      return arrTidakMarah.length;
    }

    //kondisi jika marah
    if (emosi === "marah") {
      //looping masing2 theater
      getPromiseTheaterIXX.forEach((val) => {
        if (val.hasil === "marah") arrMarah.push(val.hasil);
      });
      //looping masing2 theater
      getPromiseTheaterVGC.forEach((val) => {
        if (val.hasil === "marah") arrMarah.push(val.hasil);
      });
      return arrMarah.length;
    }
  } catch (error) {
    console.log("ada error : " + error);
  }
};

module.exports = {
  promiseOutput,
};
