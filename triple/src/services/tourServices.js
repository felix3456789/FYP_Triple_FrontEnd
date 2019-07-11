import http from "./httpService";
import API from "../config/config.json";
import { arrayTypeAnnotation } from "@babel/types";
const Backend_Api = API.Backend_Api;
const _ = require("lodash");

export async function getTourById(id) {
  const response = await http.get(Backend_Api + "tour/" + id);
  return response.data;
}

export async function getFeatureTour(num) {
  const response = await http.get(Backend_Api + "tour/feature/tour/" + num);
  return response.data;
}

export async function getRecommendTag() {
  const response = await http.get(Backend_Api + "user/recommendTag");
  console.log(response.data);
  return response.data;
}
export async function getSearchByTag(tag) {
  const response = await http.get(Backend_Api + "tour/recommanded/" + tag);
  return response.data;
}
export async function insertHistory(id) {
  let data = {
    tourId: id
  };
  console.log(id);
  const response = await http.post(Backend_Api + "recommander/insert", data);
}

export async function getCompareList() {
  console.log(sessionStorage.getItem("compareList"));
  return JSON.parse(sessionStorage.getItem("compareList"));
}

export async function editCompareList(id, title) {
  var array = [];

  if (!sessionStorage.getItem("compareList")) {
    //console.log("compareList Not Exist");
    sessionStorage.setItem("compareList", []);
  } else {
    // console.log("List exist");
    array = JSON.parse(sessionStorage.getItem("compareList"));
  }

  array.push({ id: id, title: title });
  //console.log("Tour", { id: id, title: title });
  // console.log("TourList", array);
  let count = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i].id == id) {
      count++;
      //console.log("TourCount", count);
    }
    if (count > 1) {
      //console.log("SameTourCount", count);
      _.pullAllWith(array, [{ id: id, title: title }], _.isEqual);
    }
  }
  if (array.length > 4) {
    alert("抱歉! 可比較旅行團最多4個！");
    array.pop();
    return;
  }
  //console.log("TourListConfirm", array);

  sessionStorage.setItem("compareList", JSON.stringify(array));
}

export default {
  getTourById,
  getFeatureTour,
  getRecommendTag,
  getSearchByTag,
  insertHistory,
  editCompareList,
  getCompareList
};
