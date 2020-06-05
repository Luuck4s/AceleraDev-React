import packageJson from "../../../package.json";

const INITIAL_STATE_APP = {
  environment: process.env.NODE_ENV,
  name: packageJson.name,
  version: packageJson.version,
};

const app = (state = INITIAL_STATE_APP, action) => {
  return state;
};

export default app;
