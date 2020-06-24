import request from "../../utils/request";

let _default = class _default {
  static getVideos(id) {
    return request({
      url: '/videoRecommend',
      data: { id }
    });
  }
};

export { _default as default };