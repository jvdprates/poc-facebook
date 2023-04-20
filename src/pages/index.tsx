import {Box} from '@mui/material';
import {NextPage} from 'next';
import FacebookLogin from 'react-facebook-login';
import GFacebookLogin, {
  FailResponse,
  SuccessResponse,
} from '@greatsumini/react-facebook-login';
import {MouseEvent} from 'react';

const onSuccess = (success: SuccessResponse) => {
  console.log('🚀 ~ file: index.tsx:7 ~ successFacebook ~ success:', success);
};

const onFail = (fail: FailResponse) => {
  console.log('🚀 ~ file: index.tsx:11 ~ onClick ~ fail:', fail);
};

const onClick = (e: MouseEvent<HTMLDivElement>) => {
  console.log('🚀 ~ Click', e.detail);
};

const onCallback = (response: FailResponse) => {
  console.log('🚀 ~ file: index.tsx:20 ~ onCallback ~ response:', response);
};

const facebookAppId = process.env.NEXT_PUBLIC_FACEBOOK_APP_ID ?? '';

const Index: NextPage = () => (
  <Box
    display="flex"
    height="100vh"
    alignItems="center"
    justifyContent="center">
    <Box display="flex" flexDirection="column" gap="16px">
      <GFacebookLogin
        appId={facebookAppId}
        fields="name,email,picture"
        onSuccess={onSuccess}
        onFail={onFail}
      />
      <FacebookLogin
        appId={facebookAppId}
        fields="name,email,picture"
        onClick={onClick}
        callback={onCallback}
      />
    </Box>
  </Box>
);

export default Index;
