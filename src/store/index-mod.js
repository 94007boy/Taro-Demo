import { observable } from 'mobx'

const indexMod = observable({

  followState: [],

  initFollowState(length){
    this.followState = new Array(length)
  },

  setFollowState(index,isFollow){
    this.followState[index] = isFollow
  }

})

export default indexMod
