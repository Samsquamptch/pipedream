import apipieAi from "../../apipie_ai.app.mjs";
import { ConfigurationError } from "@pipedream/platform";

export default {
  key: "apipie_ai-delete-rag-tune-collection",
  name: "Delete RAG Tune Collection",
  version: "0.0.2",
  description: "Deletes an entire collection. If you need more fine-grained deletion controls (e.g., deleting specific records), use the /vectors endpoint. [See the dashboard](https://apipie.ai/dashboard)",
  type: "action",
  props: {
    apipieAi,
    collectionName: {
      type: "string",
      label: "RAG Tune Collection",
      description: "The name of the collection you wish to delete.",
    },
    deleteAll: {
      type: "boolean",
      label: "Delete All?",
      description: "Chooses whether to delete all documents in an associated collection. If 'false' is chosen, please use the id and/or filter option to specify what to delete.",
    },
    ids: {
      type: "string[]",
      label: "Document IDs",
      description: "List the ids of the documents you wish to delete.",
      optional: true,
    },
    filer: {
      type: "object",
      label: "Meta Tag Filter",
      description: "Filters documents from the collection. Enter the relevant collection Meta Tag in the empty field.",
      default: {
        metatag: "",
      },
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
      if (this.filter) data.filer = this.filer;

      const response = await this.apipieAi.deleteCollectionRAGTune({
        $,
        data,
        timeout: 1000 * 60 * 5,
      });
      if (response.error) {
        $.export("Error deleting RAG tune collection", response.error);
        throw new ConfigurationError(response.error.message || "Failed to delete collection");
      }

      $.export("$summary", "Response Returned");
      return response;
    } catch (e) {
      $.export("Error Deleting RAG tune collection", e);
      throw new ConfigurationError(e.message || "Failed to delete collection");
    }
  },
};
