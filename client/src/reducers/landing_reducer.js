import {
  FETCH_LANDING
} from '../actions/types';

export default function(state={},action){
  switch (action.type) {
    case FETCH_LANDING:{
        let obj=action.payload;
        return{...state,...obj};
    }
  }
  return state;
}
