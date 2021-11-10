import React from 'react';
import Icon from '@component/icon/icon';
import {useState} from 'react/cjs/react.development';

import commonStyle from '@src/styles/style';
const {colors} = commonStyle;

const VoiceOnOff = ({handleVoice}) => {
  const [isVoiceOn, setIsVoiceOn] = useState(true);

  const toggleVoice = () => {
    setIsVoiceOn(!isVoiceOn);
    handleVoice(isVoiceOn);
  };

  return isVoiceOn ? (
    <>
      <Icon
        onPress={toggleVoice}
        name="microphone"
        background={colors.WHITE_TRANS}
        color={colors.GREEN}
      />
    </>
  ) : (
    <>
      <Icon
        onPress={toggleVoice}
        name="microphone-slash"
        background={colors.WHITE_TRANS}
        color={colors.RED}
      />
    </>
  );
};

export default VoiceOnOff;
