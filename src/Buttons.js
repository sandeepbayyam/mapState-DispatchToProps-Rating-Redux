import React from 'react';
import './style.css';
import { connect } from 'react-redux';
import { RateAction } from './store/reducer.actions.js';

const Buttons = (props) => {
  console.log(props);
  var stars = [1, 2, 3, 4, 5];
  return (
    <div>
      {stars.map((e, i) => {
        return (
          <>
            <i
              className={
                props.currentRating > i ? 'bi bi-star-fill' : 'bi bi-star'
              }
              onClick={() => {
                props.Rate(e);
              }}
            ></i>
            &nbsp;&nbsp;
          </>
        );
      })}
       <hr/>
    </div>
   
  );
};
function mapStateToProps(state) {
  return state;
}
function mapDispatchToProps(dispatch) {
  return {
    Rate: (e) => {
      return dispatch(RateAction(e));
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Buttons);
