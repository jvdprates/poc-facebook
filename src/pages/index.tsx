import { Box } from "@mui/material";
import { NextPage } from "next";
import FacebookLogin, { FailResponse, SuccessResponse } from '@greatsumini/react-facebook-login';

const onSuccess = (success: SuccessResponse) => {
  console.log("🚀 ~ file: index.tsx:7 ~ successFacebook ~ success:", success)
}

const onFail = (fail: FailResponse) => {
  console.log("🚀 ~ file: index.tsx:11 ~ onClick ~ fail:", fail)
}

const facebookAppId = process.env.FACEBOOK_APP_ID ?? '';

const Index: NextPage = () => (
  <Box
    display="flex"
    height="100vh"
    alignItems="center"
    justifyContent="center">
    <Box>
      <FacebookLogin
        appId={facebookAppId}
        fields="name,email,picture"
        onSuccess={onSuccess}
        onFail={onFail}
      />
    </Box>
  </Box>
);

export default Index;