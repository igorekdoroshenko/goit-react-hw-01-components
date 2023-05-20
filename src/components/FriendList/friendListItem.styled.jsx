import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  background-color: white;
  width: 300px;
  padding: 10px;
  margin-top: 50px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  margin-left: auto;
  margin-right: auto;
`;

export const Status = styled.span`
  width: 15px;
  height: 15px;
  margin-right: 15px;
  border-radius: 50%;
  background-color: ${props => (props.statusType ? 'green' : 'red')};
`;

export const Avatar = styled.img`
  margin-left: 10px;
`;

export const Name = styled.p`
  margin-left: 20px;
  text-align: center;
  font-weight: 700;
  font-size: 22px;
`;
