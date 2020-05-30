/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 */

import React from 'react';
import { Result, Button } from 'antd';

import Footer from 'components/Footer';
import Styled from './style';

export default function NotFound() {
  return (
    <Styled.Root>
      <Styled.Container>
        <Result
          status="404"
          title="404"
          subTitle="Sorry, the page you visited does not exist."
          extra={<Button type="primary" href="/">Back Home</Button>}
        />
      </Styled.Container>
      <Footer />
    </Styled.Root>
  );
}
