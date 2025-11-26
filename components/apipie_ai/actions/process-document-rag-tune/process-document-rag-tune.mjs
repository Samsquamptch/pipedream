import apipieAi from "../../apipie_ai.app.mjs";
import constants from "../../common/constants.mjs";
import { ConfigurationError } from "@pipedream/platform";

export default {
  key: "apipie_ai-process-document-rag-tune",
  name: "Process Document For RAG Tuning",
  version: "0.0.9",
  description: "Processes a document by extracting its content and generating embeddings to be used for RAG tuning. Supported file types: PDF, DOC, DOCX, TXT, CSV, XLS, XLSX. [See the dashboard](https://apipie.ai/dashboard)",
  type: "action",
  props: {
    apipieAi,
    collectionName: {
      type: "string",
      label: "RAG Tune Collection",
      description: "The name of the collection you wish the document to be added to.",
    },
    fileURL: {
      type: "string",
      label: "File URL",
      description: "The Address of the file you wish to process.",
    },
    vectorProvider: {
      type: "string",
      label: "Vector Provider",
      description: "The provider used to store the Vector: Pincone or Qdrant.",
      options: constants.VECTOR_PROVIDER,
    },
    metaTag: {
      type: "string",
      label: "Meta Tag",
      description: "Optional metadata tag to associate with the document.",
      optional: true,
    },
  },
  async run({ $ }) {
    try {
      const data = {
        collection_name: this.collectionName,
        url: this.fileURL,
        vector_provider: this.vectorProvider,
      };
      if (this.metaTag) data.metatag = this.metaTag;

      console.log(data.collection_name);

      const response = await this.apipieAi.processDocumentRAGTune({
        $,
        data,
        timeout: 1000 * 60 * 5,
      });
      if (response.error) {
        $.export("Error processing document for RAG Turning", response.error);
        throw new ConfigurationError(response.error.message || "Failed to process document");
      }

      $.export("$summary", `${response.message}`);
      return response;
    } catch (e) {
      $.export("Error processing document for RAG Turning", e);
      throw new ConfigurationError(e.message || "Failed to process document");
    }
  },
};
