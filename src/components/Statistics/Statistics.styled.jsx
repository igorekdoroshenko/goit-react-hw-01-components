import styled from '@emotion/styled';

export const StatisticsWrap = styled.section`
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  width: 300px;
  padding: 60px 60px;
  background-color: #c0c0c0;
`;

export const Title = styled.h2`
  margin-left: auto;
  margin-right: auto;
  padding-top: 30px;
  padding-bottom: 30px;
  text-align: center;
  text-transform: uppercase;
  background-color: white;
  color:grey;
`;

export const Statlist = styled.ul`
  margin-left: auto;
  margin-right: auto;
    display: flex;
  justify-content: center;
  text-align: center;
  color:white;
`;

export const Item = styled.li`
  padding: 10px 5px;
  width: 50px;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.span`
  font-weight: 500;
  font-size: 16px;
`;

export const Percentage = styled.span`
  font-weight: 700;
  font-size: 18px;
  margin-top: 5px;
`;
