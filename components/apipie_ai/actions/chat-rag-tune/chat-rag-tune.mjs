import { ConfigurationError } from "@pipedream/platform";
import apipieAi from "../../apipie_ai.app.mjs";

export default {
  key: "apipie_ai-chat-rag-tune",
  name: "Chat Using RAG Tune",
  version: "0.0.1",
  description: "Send a chat to a selected LLM model using data stored in a RAG tune collection. [See the dashboard](https://apipie.ai/dashboard)",
  type: "action",
  props: {
    apipieAi,
    model: {
      propDefinition: [
        apipieAi,
        "chatCompletionModelId",
      ],
    },
    userMessage: {
      type: "string",
      label: "Chat Input",
      description: "Text inputs to the model used to generate a response",
    },
    ragTuneCollection: {
      type: "string",
      label: "RAG Tune Collection",
      description: "The RAG Tune collection for the model to use.",
    },
    systemInstructions: {
      type: "string",
      label: "Instructions",
      description: "Inserts a system (or developer) message as the first item in the model's context. For example 'Summarise these results for me'",
      optional: true,
    },
  },
  async run({ $ }) {
    const messages = [];

    messages.push({
      role: "user",
      content: this.userMessage,
    });

    if (this.systemInstructions) {
      messages.push({
        role: "system",
        content: this.systemInstructions,
      });
    }

    try {
      const data = {
        model: this.model,
        messages,
        rag_tune: this.ragTuneCollection,
        stream: false,
      };

      const response = await this.apipieAi.sendChatCompletionRequest({
        $,
        data,
        timeout: 1000 * 60 * 5,
      });
      if (response.error) {
        $.export("Error creating Chat Completion", response.error);
        throw new ConfigurationError(response.error.message || "Failed to create Chat Completion");
      }

      $.export("$summary", `A new chat completion request with Id: ${response.id} was successfully created!`);
      return response;
    } catch (e) {
      $.export("Error creating Chat Completion", e);
      throw new ConfigurationError(e.message || "Failed to create Chat Completion");
    }
  },
};
