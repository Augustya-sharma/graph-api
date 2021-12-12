/* eslint-disable */
const config = {
  appId: "892b55ac-991c-4cab-ac8f-453adc364567",
  redirectUri: "http://localhost:3001/", //https://remo.azurewebsites.net/
  postLogoutRedirectUri:
    "https://login.microsoftonline.com/777cfeff-82ef-45a9-a2b8-b78a830138d2/oauth2/logout?",
  scopes: ["user.read", "mailboxsettings.read", "calendars.readwrite"],
};

export default config;
