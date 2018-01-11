import styled, { css } from 'react-emotion';
import Link from './Link';

export const PostBody = styled('p')`
  font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica,
    ubuntu, roboto, noto, segoe ui, arial, sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: rgba(0, 0, 20, 1);
`;

export const Heading1 = styled('h1')`
  font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica,
    ubuntu, roboto, noto, segoe ui, arial, sans-serif;
  font-size: 40px;
  line-height: 48px;
  font-weight: 600;
  color: rgba(0, 0, 20, 1);
`;

export const Heading2 = styled('h1')`
  font-weight: 400;
  color: rgba(0, 0, 20, 1);
  line-height: 20px;
  font-size: 12px;
`;

export const Heading3 = styled('h1')`
  font-weight: 400;
  color: rgba(0, 0, 20, 1);
  line-height: 20px;
  font-size: 12px;
`;

export const Heading4 = styled('h1')`
  font-weight: 400;
  color: rgba(0, 0, 20, 1);
  line-height: 20px;
  font-size: 12px;
`;

export const Paragraph = styled('p')`
  font-weight: 400;
  color: rgba(0, 0, 20, 1);
  line-height: 20px;
  font-size: 12px;
`;

export const PageTitle = styled('h1')`
  color: rgba(0, 0, 20, 1);
  font-weight: 600;
  line-height: 20px;
  font-size: 12px;
`;

export const Anchor = props => {
  const basicStyles = css`
    font-weight: 400;
    color: #0000ff;
    &:visited {
      color: #00008b;
    }
    &:hover {
      color: #0000ff;
    }
  `;

  return <Link {...props} className={basicStyles} />;
};
