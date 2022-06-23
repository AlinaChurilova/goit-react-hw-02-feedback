import React from 'react';
import PropTypes from 'prop-types';
import s from './Feedback.module.css';


const Statistics = ({good, neutral, bad, total, positivePercentage}) => (
    
    <ul>
        <li className={s.List}>Good: {good}</li>
        <li className={s.List}>Neutral: {neutral}</li>
        <li className={s.List}>Bad: {bad}</li>
        <li className={s.List}>Total: {total} </li>
        <li className={s.List}>Positive feedback: {positivePercentage}%</li>
    </ul>
);

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
}

export default Statistics;