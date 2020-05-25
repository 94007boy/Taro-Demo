import request from '@utils/request';

export default class {
  static getVideos(id){
    return request({
      url:'/videoRecommend',
      data:{id}
    })
  }
}
