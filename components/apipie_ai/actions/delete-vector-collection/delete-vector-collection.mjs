import apipieAi from "../../apipie_ai.app.mjs";
import { ConfigurationError } from "@pipedream/platform";

export default {
  key: "apipie_ai-delete-vector-collection",
  name: "Delete Vector Collection",
  version: "0.0.1",
  description: "Deletes the entire vector collection. Use 'delete-vector-record' to delete specific vectors by id. [See the dashboard](https://apipie.ai/dashboard)",
  type: "action",
  props: {
    apipieAi,
    collectionName: {
      propDefinition: [
        apipieAi,
        "vectorCollectionsList",
      ],
    },
  },
  async run({ $ }) {
    try {
      const data = {
        collection_name: this.collectionName,
        delete_all: true,
      };

      const response = await this.apipieAi.deleteVectorCollection({
        $,
        data,
        timeout: 1000 * 60 * 5,
      });
      if (response.error) {
        $.export("Error deleting Vector collection", response.error);
        throw new ConfigurationError(response.error.message || "Failed to delete collection");
      }

      $.export("$summary", "Response Returned");
      return response;
    } catch (e) {
      $.export("Error Deleting Vector Collection", e);
      throw new ConfigurationError(e.message || "Failed to delete collection");
    }
  },
};
