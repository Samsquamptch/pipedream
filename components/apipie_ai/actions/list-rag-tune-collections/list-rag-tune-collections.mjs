import apipieAi from "../../apipie_ai.app.mjs";
import constants from "../../common/constants.mjs";
import { ConfigurationError } from "@pipedream/platform";

export default {
  key: "apipie_ai-list-rag-tune-collections",
  name: "List RAG Tune Collections",
  version: "0.0.2",
  description: "Returns a list of collections associated with the user identified by the API key. [See the dashboard](https://apipie.ai/dashboard)",
  type: "action",
  props: {
    apipieAi,
    vectorProvider: {
      type: "string",
      label: "Vector Provider",
      description: "The provider used to store the Vector: Pincone or Qdrant.",
      options: constants.VECTOR_PROVIDER,
    },
  },
  async run({ $ }) {
    try {
      const data = {
        vector_provider: this.vectorProvider,
      };

      const response = await this.apipieAi.listCollectionRAGTune({
        $,
        data,
        timeout: 1000 * 60 * 5,
      });
      if (response.error) {
        $.export("Error producing list of RAG tune collections", response.error);
        throw new ConfigurationError(response.error.message || "Failed to list collections");
      }

      $.export("$summary", "Response Returned");
      return response;
    } catch (e) {
      $.export("Error producing list of RAG tune collections", e);
      throw new ConfigurationError(e.message || "Failed to list collections");
    }
  },
};
