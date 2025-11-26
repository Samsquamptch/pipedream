import { axios } from "@pipedream/platform";
import apipie_aiApp from "./components/apipie_ai/apipie_ai.app.mjs";

export default {
  name: "Action Demo",
  description: "Testing to see if I can call the apipie api with the auth keys",
  key: "apipie_testing",
  version: "0.0.2",
  type: "action",
  props: {
    apipie_aiApp,
  },
  async run({ $ }) {
    const data = await axios($, {
      url: "https://apipie.ai/v1/models",
      headers: this.apipie_aiApp.authKeys(),
    });
    return data.data;
  },
};
