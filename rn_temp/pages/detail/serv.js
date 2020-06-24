import request from "../../utils/request";

let _default = class _default {
  static getDetail() {
    return request({
      url: '/videoDetail'
    });
  }
};

export { _default as default };