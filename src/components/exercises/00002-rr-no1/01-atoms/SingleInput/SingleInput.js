import React from 'react';
import PropTypes from 'prop-types';
import styles from './SingleInput.scss';

const SingleInput = (props) => {
    /*
   * Extract vars from the props
   */
    const {
        nameVal,
        placeholderVal,
        inputType,
        controlFunction,
    } = props;


    /*
   * Return the SingleInput
   */
    return (
        <input
            name={nameVal}
            placeholder={placeholderVal}
            type={inputType}
            onChange={controlFunction}
            className={styles.singleInput}
        />
    );
};

/*
 * Defualt props
 */
SingleInput.defaultProps = {
    nameVal: 'singleInput',
    placeholderVal: 'Filter table contents...',
    inputType: 'text'
};

/*
 * Proptypes
 */
SingleInput.propTypes = {
    nameVal: PropTypes.string,
    placeholderVal: PropTypes.string,
    inputType: PropTypes.oneOf(['text', 'number']).isRequired,
    controlFunction: PropTypes.func.isRequired
};

export default SingleInput;
