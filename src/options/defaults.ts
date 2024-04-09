export const DefaultOptions = {
  routes: {
    callback: '/api/auth/callback',
    backChannelLogout: '/api/auth/backchannel-logout',
    signIn: '/api/auth/signin',
    signOut: '/api/auth/signout',
    userInfo: '/api/auth/userinfo',
  },
  clockSkew: 60,
  responseTimeout: 10000,
  usePar: false,
  userInfo: true,
  refreshUserInfo: false,
  federatedLogout: true,
  defaultAuthParams: {
    scope: 'openid profile email',
    response_type: 'code',
  },
  session: {
    cookie: {
      httpOnly: true,
      name: 'session',
      path: '/',
      sameSite: 'lax',
      persistent: true,
    },
    sliding: false,
    duration: 24 * 60 * 60,
    maximumDuration: 7 * 24 * 60 * 60,
  },
  state: {
    cookie: {
      httpOnly: true,
      name: 'state',
      path: '/',
      sameSite: 'lax',
      persistent: false,
    },
  },
  idTokenSigningAlg: 'RS256',
  filteredIdTokenClaims: [
    'iss',
    'exp',
    'nbf',
    'aud',
    'nonce',
    'iat',
    'auth_time',
    'c_hash',
    'at_hash',
    's_hash',
  ],
  userAgent: 'node-auth-core-sdk',
};
