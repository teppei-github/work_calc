let box = "";
const boxarray = [];

$("#one").on("click", function () {
  numberbuttonclick("1");
});
$("#two").on("click", function () {
  numberbuttonclick("2");
});
$("#third").on("click", function () {
  numberbuttonclick("3");
});
$("#four").on("click", function () {
  numberbuttonclick("4");
});
$("#five").on("click", function () {
  numberbuttonclick("5");
});
$("#six").on("click", function () {
  numberbuttonclick("6");
});
$("#seven").on("click", function () {
  numberbuttonclick("7");
});
$("#eigth").on("click", function () {
  numberbuttonclick("8");
});
$("#nine").on("click", function () {
  numberbuttonclick("9");
});
$("#zero").on("click", function () {
  numberbuttonclick("0");
});

$("#plus").on("click", function () {
  boxarray.push(box);
  box = "";
  $(".window").text(box);
});

$("#equal").on("click", function () {
  boxarray.push(box);
  let total = 0;
  boxarray.forEach((b) => {
    total += Number(b);
  });
  $(".window").text(total);
});

const numberbuttonclick = (num) => {
  box = box + num;
  $(".window").text(box);
};
