/**
 *
 * LiveEvent
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import Styled from './style';

function LiveEvent({ adminData }) {

  useEffect(() => {
    document.body.style.backgroundColor = '#000';
  }, []);
  
  if(!isEmpty(adminData)) {
    const { liveLink, img_url, isCapture } = adminData
    return (
      <Styled.Root>
        <Styled.Container>
          <Styled.PlayerWrapper>
            <Styled.Player
              // playing
              url={liveLink}
              width='100%'
              height='100%'
              config={{
                vimeo: {
                  playerOptions: {
                    title: false,
                    byline: false,
                    controls: true,
                    portrait: false,
                  }
                }
              }}
            />
          </Styled.PlayerWrapper>
        </Styled.Container>
      </Styled.Root>
    )
  }
  return null
}

LiveEvent.propTypes = {
  adminData: PropTypes.object,
};

export default LiveEvent;
