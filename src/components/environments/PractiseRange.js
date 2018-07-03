import React, {Component} from 'react';
import logo from '../../logo.svg';
import styles from './PractiseRange.scss';
// import DigitalClock from '../exercises/00001-digital-clock/05-organisms/DigitalClock';
import FilterableTable from '../exercises/00002-rr-no1/04-organisms/FilterableTable/FilterableTable';

class PractiseRange extends Component {
    render() {
        return (
            <div className={styles.app}>
                <header className={styles.header}>
                    <img src={logo} className={styles.logo} alt="logo"/>
                    <h1 className={styles.header}>Welcome to My React Practise Range</h1>
                    <h2 className={styles.subHeader}>Exercise "Digital clock"</h2>
                </header>
                <main className={styles.display}>
                    {/*In here I will display the current exercise I am working on*/}
                    <section>
                        <FilterableTable />
                    </section>
                </main>
            </div>
        );
    }
}

export default PractiseRange;
