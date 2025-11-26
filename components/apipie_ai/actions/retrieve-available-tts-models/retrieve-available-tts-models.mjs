import apipieAi from "../../apipie_ai.app.mjs";
import { ConfigurationError } from "@pipedream/platform";

export default {
  key: "apipie_ai-retrieve-available-tts-models",
  name: "Retrieve Available TTS Models",
  version: "0.0.76",
  description: "Returns a list of TTS models available through the API. [See the dashboard](https://apipie.ai/dashboard)",
  type: "action",
  props: {
    apipieAi,
    model: {
      propDefinition: [
        apipieAi,
        "ttsModelId",
      ],
    },
  },
  async run({ $ }) {
    try {
      const [
        ,
        provider,
        route,
      ] = this.model.split("|");
      const response = await this.apipieAi.listVoices(
        provider,
        route,
      );
      $.export("$summary", "Successfully retrieved available Voice model(s)!");
      return response.data;
    } catch (e) {
      $.export("Error fetching TTS Models", e);
      throw new ConfigurationError(e.message || "Failed to fetch TTS models");
    }
  },
};
