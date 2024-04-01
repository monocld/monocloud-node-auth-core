// see https://github.com/panva/oauth4webapi/issues/15

import test from "ava";
import { issuer, client, getResponse } from "./_setup.js";
import * as lib from "../../src/openid-client/oauth4webapi.js";

const response = () =>
  getResponse(
    JSON.stringify({ access_token: "foo", token_type: "bearer", scope: "" })
  );

test("handles empty scope from the Token Endpoint", async (t) => {
  await t.notThrowsAsync(() =>
    Promise.all([
      lib.processAuthorizationCodeOAuth2Response(issuer, client, response()),
      lib.processDeviceCodeResponse(issuer, client, response()),
      lib.processClientCredentialsResponse(issuer, client, response()),
      lib.processRefreshTokenResponse(issuer, client, response()),
    ])
  );
});
