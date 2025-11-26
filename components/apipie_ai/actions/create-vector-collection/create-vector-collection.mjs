import apipieAi from "../../apipie_ai.app.mjs";
import constants from "../../common/constants.mjs";
import { ConfigurationError } from "@pipedream/platform";

export default {
  key: "apipie_ai-create-vector-collection",
  name: "Create New Vector Collection",
  version: "0.0.6",
  description: "Creates a new vector collection with the specified name and dimension. (equivalent to creating an index and namespace on pinecone).",
  type: "action",
  props: {
    apipieAi,
    collectionName: {
      type: "string",
      label: "Collection Name",
      description: "The name of the collection you wish to create.",
    },
    dimension: {
      type: "integer",
      label: "Dimension",
      description: "How many numbers each embedding vector in that collection will have.",
    },
    vectorProvider: {
      type: "string",
      label: "Vector Provider",
      description: "The provider used to store the Vector: Pincone or Qdrant.",
      options: constants.VECTOR_PROVIDER,
    },
  },
  async run({ $ }) {
    try {
      const validatedCollectionName = this.collectionName.replaceAll(" ", "-");

      const data = {
        collection_name: validatedCollectionName,
        dimension: this.dimension,
        vector_provider: this.vectorProvider,
      };
      if (this.metaTag) data.metatag = this.metaTag;

      const response = await this.apipieAi.createVectorCollection({
        $,
        data,
        timeout: 1000 * 60 * 5,
      });
      if (response.error) {
        $.export("Error creating Vector Collection", response.error);
        throw new ConfigurationError(response.error.message || "Failed to create collection");
      }

      $.export("$summary", `${response.message}`);
      return response;
    } catch (e) {
      $.export("Error creating Vector Collection", e);
      throw new ConfigurationError(e.message || "Failed to create collection");
    }
  },
};
