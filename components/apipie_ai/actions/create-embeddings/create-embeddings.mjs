import apipieAi from "../../apipie_ai.app.mjs";
import { ConfigurationError } from "@pipedream/platform";

export default {
  key: "apipie_ai-create-embeddings",
  name: "Create Embeddings",
  description: "Generate embeddings for the given input text using the specified model. [See the documentation](https://apipie.ai/docs/Features/Voices)",
  version: "0.0.9",
  type: "action",
  props: {
    apipieAi,
    model: {
      propDefinition: [
        apipieAi,
        "embeddingModelId",
      ],
    },
    input: {
      type: "string",
      label: "Input",
      description: "Input text to generate embeddings for.",
    },
    encodingFormat: {
      type: "string",
      label: "Encoding Format",
      description: "Format of the output encoding. Only supported by OpenAI.",
      options: [
        "float",
        "np",
      ],
      optional: true,
    },
    dimensions: {
      type: "integer",
      label: "Dimensions",
      description: "Number of dimensions for the embedding vector. Maximum value is between 384-1536. Check the models route for max_tokens per model. Only supported by OpenAI.",
      optional: true,
    },
  },
  async run({ $ }) {
    try {
      const data = {
        model: this.model,
        input: this.input,
      };

      if (this.encodingFormat) data.encoding_format = this.encodingFormat;
      if (this.dimensions) data.dimensions = this.dimensions;

      const response = await this.apipieAi.createEmbedding({
        $,
        data,
        timeout: 1000 * 60 * 5,
      });

      if (response.error) {
        $.export("Failed to create Embedding", response.error);
        throw new ConfigurationError(response.error.message || "Failed to create Embedding");
      }

      $.export("$summary", "A new embedding request was successfully created!");
      return response;

    } catch (e) {
      $.export("Failed to create Embedding", e);
      throw new ConfigurationError(e.message || "Failed to create Embedding");
    }
  },
};
