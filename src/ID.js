const pool = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const idLeng = 6;

const ID = () => {
  let s = "";
  while (s.length < idLeng) {
    s += pool[Math.floor(Math.random() * pool.length)];
  }
  return s;
};

module.exports = { idLeng, ID };
