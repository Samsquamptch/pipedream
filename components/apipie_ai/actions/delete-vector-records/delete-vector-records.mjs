import apipieAi from "../../apipie_ai.app.mjs";
import { ConfigurationError } from "@pipedream/platform";

export default {
  key: "apipie_ai-delete-vector-records",
  name: "Delete Vector Records",
  version: "0.0.1",
  description: "Deletes specific vector records from a collection using their ids. Use 'delete-vector-collection' to delete an entire vector collection. [See the dashboard](https://apipie.ai/dashboard)",
  type: "action",
  props: {
    apipieAi,
    collectionName: {
      propDefinition: [
        apipieAi,
        "vectorCollectionsList",
      ],
    },
    ids: {
      type: "string[]",
      label: "Document IDs",
      description: "List the ids of the documents you wish to delete.",
      async options() {
        try {
          const data = {
            collection_name: this.collectionName,
          };
          const { vectors } = await this.apipieAi.listVectorID({
            data,
          });
          return vectors.map((v) => v.id).sort((a, b) => a.localeCompare(b));
        } catch (e) {
          console.error("Error fetching Vector IDs:", e);
          throw new ConfigurationError(
            e.message || "Failed to fetch Vector IDs",
          );
        }
      },
    },
  },
  async run({ $ }) {
    try {
      const data = {
        collection_name: this.collectionName,
        delete_all: false,
        ids: this.ids,
      };

      const response = await this.apipieAi.deleteVectorCollection({
        $,
        data,
        timeout: 1000 * 60 * 5,
      });
      if (response.error) {
        $.export("Error deleting Vector Collection", response.error);
        throw new ConfigurationError(response.error.message || "Failed to delete collection");
      }

      $.export("$summary", "Response Returned");
      return response;
    } catch (e) {
      $.export("Error deleting Vector Collection", e);
      throw new ConfigurationError(e.message || "Failed to delete collection");
    }
  },
};
