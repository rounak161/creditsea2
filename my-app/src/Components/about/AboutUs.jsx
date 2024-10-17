import React from 'react';
import classes from './about.module.css';
import { FaDollarSign, FaMoneyBillWave, FaExchangeAlt, FaUniversity, FaSearch } from 'react-icons/fa'; // React Icons

const AboutUs = () => {
  return (
    <div className={classes.container}>
      {/* Row 1 */}
      <div className={classes.row}>
        <div className={classes.icon}>
          <FaDollarSign size={50} className={classes.deficitIcon} /> {/* Deficit Icon */}
        </div>
        <button className={classes.loanButton}>Get a Loan</button> {/* Get a Loan Button */}
      </div>

      {/* Row 2 */}
      <div className={classes.row}>
        <button className={classes.optionButton}>
          <FaMoneyBillWave className={classes.optionIcon} /> Borrow Cash
        </button>
        <button className={classes.optionButton}>
          <FaExchangeAlt className={classes.optionIcon} /> Transact
        </button>
        <button className={classes.optionButton}>
          <FaUniversity className={classes.optionIcon} /> Deposit Cash
        </button>
      </div>

      {/* Row 3 */}
      <div className={classes.row}>
        <div className={classes.searchSection}>
          <FaSearch size={40} className={classes.searchIcon} />
          <span className={classes.searchText}>Search for Loan Options</span>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
