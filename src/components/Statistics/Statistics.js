import PropTypes from 'prop-types';
import {StatsWrapper,
StatsList, 
StatsTitle,
StatsItem,
StatsLabel,
StatsPercentage} from './StatisticsStyled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatsWrapper>
        {title && <StatsTitle>{title}</StatsTitle>}

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
