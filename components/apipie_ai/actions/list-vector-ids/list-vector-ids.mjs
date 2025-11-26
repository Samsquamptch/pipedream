import apipieAi from "../../apipie_ai.app.mjs";
import { ConfigurationError } from "@pipedream/platform";

export default {
  key: "apipie_ai-list-vector-ids",
  name: "List Vector IDs",
  version: "0.0.10",
  description: "Retrieves a list of vector IDs for the specified collection.",
  type: "action",
  props: {
    apipieAi,
    collectionName: {
      propDefinition: [
        apipieAi,
        "vectorCollectionsList",
      ],
    },
    limit: {
      type: "integer",
      label: "Limit",
      description: "How many results you wish to be returned.",
      optional: true,
    },
    prefix: {
      type: "string",
      label: "Prefix filter",
      description: "Filters results based on the prefix entered.",
      optional: true,
    },
    paginationToken: {
      type: "string",
      label: "Pagination Token",
      description: "If returned list is too long, you will be provided with a pagination token to continue from that position in the list.",
      optional: true,
    },
  },
  async run({ $ }) {
    try {
      const data = {
        collection_name: this.collectionName,
      };
      if (this.limit) data.limit = this.limit;
      if (this.prefix) data.prefix = this.prefix;
      if (this.paginationToken) data.pagination_token = this.paginationToken;

      const response = await this.apipieAi.listVectorID({
        $,
        data,
        timeout: 1000 * 60 * 5,
      });
      if (response.error) {
        $.export("Error returning Vector IDs", response.error);
        throw new ConfigurationError(response.error.message || "Failed to list vector ids");
      }

      $.export("$summary", `${response.message}`);
      return response;
    } catch (e) {
      $.export("Error returning Vector IDs", e);
      throw new ConfigurationError(e.message || "Failed to list vector ids");
    }
  },
};
