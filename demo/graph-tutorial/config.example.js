const msalConfig = {
  auth: {
    clientId: 'c7ccdc96-b6b9-4209-b4f0-3fc122424387',
    redirectUri: 'http://localhost:8080'
  }
};

const msalRequest = {
  scopes: [
    'user.read',
    'mailboxsettings.read',
    'calendars.readwrite'
  ]
}