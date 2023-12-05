
import moment from "moment/moment";

const getKeyValue = (arr, key) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name === key) {
      return arr[i];
    }
  }
};

const getKeyValue1 = (arr, key) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name === key) {
      return arr[i].value;
    }
  }
};

export function sortText (orderDirection, byDate, orderBy) {
    byDate.sort((a, b) => getKeyValue1(orderDirection ? b.customdata : a.customdata, orderBy).localeCompare(
      getKeyValue1(orderDirection ? a.customdata : b.customdata, orderBy)
    ));
  }

  export function sortDate(orderDirection, byDate, orderBy) {
    byDate.sort(function (a, b) {
      return moment(getKeyValue(orderDirection ? b.customdata : a.customdata, orderBy, true)).isAfter(
        getKeyValue(orderDirection ? a.customdata : b.customdata, orderBy, true)) ? 1 : -1
    });
  }

  // function sortList() {
    
  // }

  // function sortColor() {
    
  // }

  // function sortNumberWithUnit() {
    
  // }

  // function sortFile() {
    
  // }