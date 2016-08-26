import { BenchConstants } from '../actions/bench_actions.js';

const BenchesReducer = function(state = {}, action){
  switch(action.type){
    case BenchConstants.RECEIVE_BENCHES:
      return action.benches;
    default:
      return state;
  }
};

export default BenchesReducer;
