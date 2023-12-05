module.exports.swapItems = function (arr, a, b) {
  arr[a] = arr.splice(b, 1, arr[a])[0];
};

module.exports.clonePlant = function (plant) {
  // const plantCloneDeep = {}
  // for (var key in plant) {
  //   if (key != "customdata") {
  //     plantCloneDeep[key] = plant[key];
  //   }
  // }
  // plantCloneDeep.customdata = []
  // plant.customdata.map((data, index) => {
  //   plantCloneDeep.customdata.push({})
  //   for (let key in data) {
  //     plantCloneDeep.customdata[index][key] = data[key];
  //   }
  // })
  // return plantCloneDeep;
};
