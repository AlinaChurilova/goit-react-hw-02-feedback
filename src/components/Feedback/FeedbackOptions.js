import React from 'react';
import PropTypes from 'prop-types';
import s from'./Feedback.module.css';

const FeedbackOptions = ({options, onLeaveFeedback}) => (

    <div className={s.ButtonStyle}>
           <button className={s.Button} type="button" onClick={onLeaveFeedback.goodFeedbackIncrease}>{ options[0]}</button>
           <button className={s.Button} type="button" onClick={onLeaveFeedback.neutralFeedbackIncrease}>{ options[1]}</button>
           <button className={s.Button} type="button" onClick={onLeaveFeedback.badFeedbackIncrease}>{ options[2]}</button> 
         </div>
  
);

FeedbackOptions.propTypes = {
    options: PropTypes.array,
    onLeaveFeedback: PropTypes.object,

}

export default FeedbackOptions;