import styled from 'react-emotion';

const DottedLine = styled('hr')`
  border: 0;
  margin: 0;
  height: 1px;
  border-bottom: 1px dashed #ececec;
`;

export default () => {
  return (
    <div>
      <DottedLine />
      <DottedLine />
      <DottedLine />
      <DottedLine />
    </div>
  );
};
