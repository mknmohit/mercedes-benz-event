/**
 *
 * LiveEvent
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { isEmpty, isNull } from 'lodash';
import { saveAs } from 'file-saver';

import CaptureImg from 'images/capture.svg';
import Styled from './style';

function LiveEvent({ adminData, talkLink }) {
  useEffect(() => {
    document.body.style.backgroundColor = '#000';
  }, []);

  const onSaveImage = () => {
    const { img_url: imgUrl } = adminData;
    saveAs(imgUrl, 'screenshot.png');
  };

  const renderCaptureBtn = () => {
    const { isCapture } = adminData;
    if (isCapture) {
      return (
        <Styled.BtnWrapper>
          <Styled.CaptureInfo>Take screenshot</Styled.CaptureInfo>
          <Styled.Btn onClick={onSaveImage}>
            <Styled.BtnImg src={CaptureImg} alt="capture" />
            <span>Capture</span>
          </Styled.Btn>
        </Styled.BtnWrapper>
      );
    }
    return <div />;
  };

  const renderTalkBtn = () => {

    if (!isNull(talkLink)) {
      if (!isEmpty(talkLink)) {
        return (
          <Styled.TalkBox>
            <Styled.TalkInfo>Your guest is live</Styled.TalkInfo>
            <Styled.Btn href={talkLink} target="_blank">
              Talk Now
            </Styled.Btn>
          </Styled.TalkBox>
        );
      }
      return <Styled.TalkBox>Talk to the guest in few minutes</Styled.TalkBox>;
    }
    return null;
  };

  const renderMobileContent = () => (
    <Styled.ProductLaunch>
      <Styled.EventDetails>
        <Styled.Heading>Mercedes-Benz</Styled.Heading>
        <Styled.SubHeading>New Product Launch</Styled.SubHeading>
      </Styled.EventDetails>
    </Styled.ProductLaunch>
  );

  if (!isEmpty(adminData)) {
    const { liveLink } = adminData;
    return (
      <Styled.Root>
        {renderMobileContent()}
        <Styled.Container>
          <Styled.PlayerWrapper>
            <Styled.Player
              playing
              url={liveLink}
              width="100%"
              height="100%"
              config={{
                vimeo: {
                  playerOptions: {
                    title: false,
                    byline: false,
                    controls: true,
                    portrait: false,
                  },
                },
              }}
            />
          </Styled.PlayerWrapper>
          <Styled.Content>
            {renderCaptureBtn()}
            <Styled.Hr />
            {renderTalkBtn()}
          </Styled.Content>
        </Styled.Container>
      </Styled.Root>
    );
  }
  return null;
}

LiveEvent.propTypes = {
  adminData: PropTypes.object,
  talkLink: PropTypes.string,
};

export default LiveEvent;
