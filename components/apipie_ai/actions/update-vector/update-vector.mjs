import apipieAi from "../../apipie_ai.app.mjs";
import { ConfigurationError } from "@pipedream/platform";

export default {
  key: "apipie_ai-update-vector",
  name: "Update Vector",
  version: "0.0.3",
  description: "Update an existing vector in the specified collection. Use 'Upsert Vector' to add a new vector to a collection.",
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
            "No IDs found",
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
    metaTag: {
      type: "string",
      label: "Meta Tag",
      description: "The Meta Tag associated with the vector.",
    },
    data: {
      type: "string",
      label: "Data",
      description: "Text you wish to associate with the vector.",
    },
    embedding: {
      type: "string[]",
      label: "Embedding",
      description: "Embedding data you wish to add to the vector. Please input data in the following format `[0.1,0.2,0.3]`.",
    },
  },
  methods: {
    _parseArray(value) {
      try {
        if (!value) {
          return [];
        }

        if (Array.isArray(value)) {
          return value;
        }

        const parsedValue = JSON.parse(value);

        if (!Array.isArray(parsedValue)) {
          throw new Error("Not an array");
        }

        return parsedValue;

      } catch (e) {
        throw new ConfigurationError("Make sure the custom expression contains a valid array object");
      }
    },
  },
  async run({ $ }) {
    try {
      const embeddingArray = this._parseArray(this.embedding);

      const data = {
        collection_name: this.collectionName,
        vector_id: this.vectorID,
        metatag: this.metaTag,
        data: this.data,
        embedding: embeddingArray,
      };

      const response = await this.apipieAi.upsertVectorCollection({
        $,
        data,
        timeout: 1000 * 60 * 5,
      });
      if (response.error) {
        $.export("Error updating Vector Collection", response.error);
        throw new ConfigurationError(response.error.message || "Failed to update collection");
      }

      $.export("$summary", `${response.message}`);
      return response;
    } catch (e) {
      $.export("Error updating Vector Collection", e);
      throw new ConfigurationError(e.message || "Failed to update collection");
    }
  },
};
