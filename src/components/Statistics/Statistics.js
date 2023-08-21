import PropTypes from 'prop-types';
import {StatsWrapper} from './StatisticsStyled';
import {StatsList} from './StatisticsStyled';
import {StatsTitle} from './StatisticsStyled';
import {StatsItem} from './StatisticsStyled';
import {StatsLabel} from './StatisticsStyled';
import {StatsPercentage} from './StatisticsStyled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatsWrapper>
      <StatsTitle>{title}</StatsTitle>

      <StatsList>
        {stats.map(({ id, label, percentage }) => (
          <StatsItem key={id}>
            <StatsLabel>{label}</StatsLabel>
            <StatsPercentage>{percentage}%</StatsPercentage>
          </StatsItem>
        ))}
      </StatsList>
    </StatsWrapper>
  );
};


Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
  title: PropTypes.string,
};
