import {
  FETCH_PORTFOLIO_INDEX,
  FETCH_PORTFOLIO_SHOW
} from '../actions/types';
import _ from 'lodash';

export default function(state={},action){
  switch (action.type) {
    case FETCH_PORTFOLIO_INDEX:{
        let obj=action.payload;
        return{...state,...obj};
    }
    case FETCH_PORTFOLIO_SHOW:{
        let obj=action.payload;
        return{...state,...obj};
    }
  }
  return state;
}
