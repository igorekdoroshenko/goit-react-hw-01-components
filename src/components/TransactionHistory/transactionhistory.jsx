import PropTypes from 'prop-types'
import {
  TransactionWrap,
  TableHeader,
  TableBody
} from './TransactionHistory.styled'

export default function TransactionHistory({ items }) {
  return (
    <TransactionWrap>
      <TableHeader>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </TableHeader>

      <TableBody>
        {items.map(item => (
          <tr key = {item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </TableBody>
    </TransactionWrap>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};