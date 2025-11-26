import apipieAi from "../../apipie_ai.app.mjs";
import { ConfigurationError } from "@pipedream/platform";

export default {
  key: "apipie_ai-delete-vectors",
  name: "Delete Vectors",
  version: "0.0.4",
  description: "Delete vectors based on ids or filters, or delete an entire vector collection. [See the dashboard](https://apipie.ai/dashboard)",
  type: "action",
  props: {
    apipieAi,
    collectionName: {
      propDefinition: [
        apipieAi,
        "vectorCollectionsList",
      ],
    },
    deleteAll: {
      type: "boolean",
      label: "Delete Entire Collection?",
      description: "Set to True if you wish to delete the entire collection. Use the optional parameters to specify which records to delete",
    },
    ids: {
      type: "string[]",
      label: "Document IDs",
      description: "List the ids of the documents you wish to delete.",
      optional: true,
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
    filter: {
      type: "object",
      label: "Filter by Value",
      description: "Filter by metadata. For example 'metatag' and 'sampleTag' will filter for vectors with the Meta Tag 'sampleTag'.",
      optional: true,
    },
  },
  async run({ $ }) {
    try {
      const data = {
        collection_name: this.collectionName,
        delete_all: this.deleteAll,
      };

      if (this.ids) data.ids = this.ids;
      if (this.filter) data.filter = this.filter;

      console.log("Sending payload:", JSON.stringify(data, null, 2));

      const response = await this.apipieAi.deleteVectorCollection({
        $,
        data,
        timeout: 1000 * 60 * 5,
      });
      if (response.error) {
        $.export("Error deleting Vectors", response.error);
        throw new ConfigurationError(response.error.message || "Failed to delete vectors");
      }

      $.export("$summary", "Response Returned");
      return response;
    } catch (e) {
      $.export("Error Deleting Vectors", e);
      throw new ConfigurationError(e.message || "Failed to delete vectors");
    }
  },
};
