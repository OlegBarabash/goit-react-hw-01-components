import PropTypes, { arrayOf } from 'prop-types';
import {
  StatisticsSection,
  Title,
  StatList,
  ListItem,
  Percentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <ListItem key={id} theme={getRandomColor()}>
            <span>{label}</span>
            <Percentage>{percentage}</Percentage>
          </ListItem>
        ))}
      </StatList>
    </StatisticsSection>
  );
};

function getRandomColor() {
  return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
}

function getRandomHex() {
  return Math.round(Math.random() * 256)
    .toString(16)
    .padStart(2, '0');
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
