import * as React from 'react';
import styled from 'styled-components';

export const Text = styled.p({
  fontSize: '1.2em',
  fontWeight: 300,
  letterSpacing: '0.05em',
  margin: '0.5em',
});

export const Link = styled.a({
  textDecoration: 'none',
  color: '#2196F3',
});

const CodeWrapper = styled.code({});

export const Code = ({ children, style }) => (
  <Text style={style}>
    <CodeWrapper>{children}</CodeWrapper>
  </Text>
);

export const Title = styled.h2({
  fontFamily: '"Avenir Next", system-ui, sans-serif',
  fontSize: '2em',
  textAlign: 'center',
  color: '#fff',
  fontWeight: 700,
});

export const SubTitle = styled.h3({
  fontFamily: '"Avenir Next", system-ui, sans-serif',
  fontSize: '1.7em',
  textAlign: 'center',
  color: '#fff',
  fontWeight: 300,
  margin: '0.4em 0',
  marginTop: '0',
  'h2 + &': {
    marginTop: '-0.5em',
  },
});
