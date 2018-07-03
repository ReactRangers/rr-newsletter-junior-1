import React from 'react';
import styles from './SearchBar.scss';
import SingleInput from '../../01-atoms/SingleInput/SingleInput';

const SearchBar = (props) => {
    const {
        searchArrayBy,
        controlFunction
    } = props;
    return (
        <form className={styles.form}>
            <SingleInput
                nameVal={'searchInput'}
                placeholderVal={'Let do some filtering!'}
                inputType={'text'}
                controlFunction={controlFunction}
                value={searchArrayBy}
            />
        </form>
    );
};

export default SearchBar;
