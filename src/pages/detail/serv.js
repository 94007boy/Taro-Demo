import request from '@utils/request';

export default class {
  static getDetail(){
    return request({
      url:'/videoDetail',
    })
  }
}
