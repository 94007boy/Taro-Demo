let Utils = class Utils {
  static timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  static formatDuration(duration) {
    let level = parseInt(duration / 60);
    return (level > 9 ? level : '0' + level) + ':' + (duration % 60 > 9 ? duration % 60 : '0' + duration % 60);
  }

};


export default Utils;