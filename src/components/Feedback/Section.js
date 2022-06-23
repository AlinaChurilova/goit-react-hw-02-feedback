import React from 'react';
import PropTypes from 'prop-types';
import s from './Feedback.module.css';

const Section = ({title, children}) => (
   
        <div>
            {title && <h2 className={s.Title}>{title}</h2>}
            {children}
        </div>
    
)

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
};

export default Section;