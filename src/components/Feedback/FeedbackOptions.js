import React from 'react';
import PropTypes from 'prop-types';
import s from'./Feedback.module.css';

const FeedbackOptions = ({options, onLeaveFeedback}) => (

    <div className={s.ButtonStyle}>
        {options.map(option => (
            <button key={option} className={s.Button} type="button" onClick={() => onLeaveFeedback(option)}>{option}</button> 
        ))}
      
    </div>
  
);
 
FeedbackOptions.propTypes = {
    options: PropTypes.array,
    onLeaveFeedback: PropTypes.func,

}

export default FeedbackOptions;