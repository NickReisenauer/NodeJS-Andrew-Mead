// setTimeout(() => {
//   console.log("2 seconds have passed");
// }, 2000);

// const names = ["Andrew", "Nick", "Jesse"];
// const shortNames = names.filter((name) => {
//   return name.length <= 4;
// });

// const geocode = (address, callback) => {
//   setTimeout(() => {
//     const data = {
//       latitude: 0,
//       longitude: 0,
//     };
//     callback(data);
//   }, 2000);
// };

// geocode("Phoenix Arizona", (data) => {
//   console.log(data);
// });

const add = (num1, num2, callback) => {
  setTimeout(() => {
    return callback(num1 + num2);
  }, 2000);
};

add(1, 4, (sum) => {
  console.log(sum);
});
