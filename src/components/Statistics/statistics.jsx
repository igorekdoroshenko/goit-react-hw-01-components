import PropTypes from 'prop-types'
import {
  StatisticsWrap,
  Title,
  Statlist,
  Item,
  Label,
  Percentage
} from './Statistics.styled'

export default function Statistics({ stats }) {
  return (
    <StatisticsWrap>
      <Title>Upload stats</Title>

      <Statlist>
        {stats.map(stat => (
          <Item key = {stat.id} style={{ backgroundColor: getRandomHexColor() }}>
            <Label>{stat.label}</Label>
            <Percentage>{stat.percentage}%</Percentage>
          </Item>
        ))}
      </Statlist>
    </StatisticsWrap>
  );
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};


const getRandomHexColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};