const Realm = require("realm");

const REALM_APP_ID = "tasktracker-wekwg";
const appConfig = {
  id: REALM_APP_ID,
  timeout: 10000,
};

const app = new Realm.App(appConfig);
/*  Change the logLevel to increase or decrease the 
    amount of messages you see in the console.
    Valid options are:
    fatal, error, warn, info, detail, debug, and trace
*/
Realm.App.Sync.setLogLevel(app, "error");



// // Create a custom jwt credential
const jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkNhbGViIiwiaWF0IjoxNjE3MzEzNDIwLCJleHAiOjE2NDg4NDk0MjAsImF1ZCI6InRhc2t0cmFja2VyLXdla3dnIn0.u5SiC6E12s2kHmmnXjVfSM6x5ONKWvN3pnZ8RU5x7_M" //await authenticateWithExternalSystem();
const customLogin= async()=>{
    const credentials = Realm.Credentials.jwt(jwt);
    try {
      const user = await app.logIn(credentials);
      console.log("Successfully logged in!", user.id);
      return user;
    } catch (err) {
      console.error("Failed to log in", err.message);
    }
}

customLogin()