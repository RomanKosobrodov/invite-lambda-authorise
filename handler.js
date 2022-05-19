"use strict";

const authTokenKey = process.env.AUTH_TOKEN_KEY;
const authRedirectKey = process.env.AUTH_REDIRECT_KEY;
const redirectURL = process.env.REDIRECT_URL;

module.exports.login = async (event) => {
  const statusCode = 200;
  const body = JSON.stringify(
    {
      message: "success",
    },
    null,
    2
  );
  const headers = {};
  headers[authTokenKey] = "token";
  headers[authRedirectKey] = redirectURL;

  return {
    statusCode,
    body,
    headers,
  };
};
