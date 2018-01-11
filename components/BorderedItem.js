import styled from 'react-emotion';

const BorderBox = styled('div')`
  display: inline-block;
  border-left: 1px dashed #ececec;
  padding-left: 1px;
`;

export default props => {
  return (
    <BorderBox style={{ margin: '0 16px 0 2px' }}>
      <BorderBox>
        <BorderBox style={{ paddingLeft: 8 }}>{props.children}</BorderBox>
      </BorderBox>
    </BorderBox>
  );
};
