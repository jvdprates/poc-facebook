import {useEffect} from 'react';
import {Box, Button} from '@mui/material';
import {NextPage} from 'next';
// import FacebookLogin from 'react-facebook-login';
import {
  //GFacebookLogin,
  FacebookLoginClient,
  LoginResponse,
  //FailResponse,
  //SuccessResponse,
} from '@greatsumini/react-facebook-login';

// const onSuccess = (success: SuccessResponse) => {
//   console.log('🚀 ~ file: index.tsx:7 ~ successFacebook ~ success:', success);
// };

// const onFail = (fail: FailResponse) => {
//   console.log('🚀 ~ file: index.tsx:11 ~ onClick ~ fail:', fail);
// };

// const onCallback = (response: FailResponse) => {
//   console.log('🚀 ~ file: index.tsx:20 ~ onCallback ~ response:', response);
// };

const facebookAppId = process.env.NEXT_PUBLIC_FACEBOOK_APP_ID ?? '';

const Index: NextPage = () => {
  useEffect(() => {
    loadFB();
  }, []);

  const onClick = () => {
    FacebookLoginClient.login(
      (res: LoginResponse) => {
        console.log('🚀 ~ file: index.tsx:31 ~ onClick ~ res:', res);
      },
      {
        scope: 'public_profile, email',
      },
    );
  };

  const loadFB = async () => {
    FacebookLoginClient.clear();
    await FacebookLoginClient.loadSdk('en_US');
    FacebookLoginClient.init({appId: facebookAppId, version: 'v10.0'});
  };

  return (
    <Box
      display="flex"
      height="100vh"
      alignItems="center"
      justifyContent="center">
      <Box display="flex" flexDirection="column" gap="16px">
        {/* <GFacebookLogin
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
      /> */}
        <Button type="button" color="primary" onClick={onClick}>
          Login with facebook
        </Button>
      </Box>
    </Box>
  );
};
export default Index;
