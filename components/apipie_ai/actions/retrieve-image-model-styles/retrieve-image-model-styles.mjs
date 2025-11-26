import { ConfigurationError } from "@pipedream/platform";
import apipieAi from "../../apipie_ai.app.mjs";

export default {
  key: "apipie_ai-retrieve-image-model-styles",
  name: "Retrieve Image Model Styles",
  version: "0.0.4",
  description: "Generates images based on the prompt using OpenAI's image generation API. [See the dashboard](https://apipie.ai/dashboard)",
  type: "action",
  props: {
    apipieAi,
    model: {
      propDefinition: [
        apipieAi,
        "imageModelId",
      ],
    },
  },
  async run({ $ }) {
    try {

      const response = await this.apipieAi._makeRequest({
        $,
        path: `models/detailed?model=${this.model}`,
        timeout: 1000 * 60 * 5,
      });
      if (response.error) {
        $.export("Error creating Chat Completion", response.error);
        throw new ConfigurationError(response.error.message || "Failed to create Chat Completion");
      }

      $.export("$summary", `Image generated at timestamp ${response.created}!`);
      return response.data[0].supported_input_parameters.style.enum;
    } catch (e) {
      $.export("Error creating Chat Completion", e);
      throw new ConfigurationError(e.message || "Failed to create Chat Completion");
    }
  },
};
