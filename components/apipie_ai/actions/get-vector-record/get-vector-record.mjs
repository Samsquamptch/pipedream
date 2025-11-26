import apipieAi from "../../apipie_ai.app.mjs";
import { ConfigurationError } from "@pipedream/platform";

export default {
  key: "apipie_ai-get-vector-record",
  name: "Get Vector Record",
  version: "0.0.22",
  description: "Fetch the content of a specific record in a selected vector collection by ID.",
  type: "action",
  props: {
    apipieAi,
    collectionName: {
      propDefinition: [
        apipieAi,
        "vectorCollectionsList",
      ],
    },
    vectorID: {
      type: "string",
      label: "Vector ID",
      description: "The ID of a vector inside of a collection.",
      async options() {
        try {
          if (!this.collectionName) return [
            {
              label: "No collection selected",
              value: "",
            },
          ];
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
        ids: this.vectorID,
      };

      const response = await this.apipieAi.getVectorRecord({
        $,
        data,
        timeout: 1000 * 60 * 5,
      });
      if (response.error) {
        $.export("Error returning Vector Record", response.error);
        throw new ConfigurationError(response.error.message || "Failed to return vector record");
      }

      $.export("$summary", `${response.message}`);
      return response;
    } catch (e) {
      $.export("Error returning Vector Record", e);
      throw new ConfigurationError(e.message || "Failed to return vector record");
    }
  },
};
