import React from "react";
import PropTypes from 'prop-types'
import styles from './statistics.module.css';

const Statistics = ({title, stats}) => {
    return (
        <section className={styles.statistics}>
            <h2 className={styles.title}>{title}</h2>

            <ul className={styles.stat_list}>
                {stats?.map((item) => {
                    return (
                        <li className={styles.item} key={item.id}>
                            <span className={styles.label}>{item.label}</span>
                            <span className={styles.percentage}>{item.percentage}%</span>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
};

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};