import styled from '@emotion/styled';

export const TransactionWrap = styled.table`
  width: 640px;
  margin-left: auto;
  margin-right: auto;
  //   padding: 70px 50px;
  background-color: white;
`;

export const TableHeader = styled.thead`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  text-align: center;
  background-color: #2196f3;
  color: white;
  font-weight: 700;
  font-size: 22px;
  height: 40px;
`;

export const TableBody = styled.tbody`
  margin-left: auto;
  padding: 10px 0px;
  text-align: center;
  margin-right: auto;
  color: grey;
  font-size: 18px;
  line-height: 40px;

  tr:nth-of-type(even) {
    background-color: #f2f2f2;
    }
`;
