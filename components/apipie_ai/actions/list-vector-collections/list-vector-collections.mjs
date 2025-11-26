import apipieAi from "../../apipie_ai.app.mjs";
import { ConfigurationError } from "@pipedream/platform";

export default {
  key: "apipie_ai-list-vector-collections",
  name: "List Vector Collections",
  version: "0.0.5",
  description: "Returns a list of vector collections for the authenticated user. A collection is equivalent to a namespace, this is not a pinecone enterprise 'collection'.",
  type: "action",
  props: {
    apipieAi,
  },
  async run({ $ }) {
    try {
      const response = await this.apipieAi.listVectorCollection({
        $,
      });
      if (response.error) {
        $.export("Error listing Vector Collections", response.error);
        throw new ConfigurationError(response.error.message || "Failed to list collections");
      }

      $.export("$summary", "Successfully retrieved collection(s)!");
      return response;
    } catch (e) {
      $.export("Error listing Vector Collections", e);
      throw new ConfigurationError(e.message || "Failed to list collections");
    }
  },
};
