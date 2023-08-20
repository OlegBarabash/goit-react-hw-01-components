import styled from 'styled-components';

export const TransactionsTable = styled.table`
  width: 400px;
  margin: 0 auto;
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;

  th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #6c7ae0;
    color: white;
  }

  td,
  th {
    border: 1px solid #ddd;
    padding: 8px;
  }
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
`;
