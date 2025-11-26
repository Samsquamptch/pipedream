import { ConfigurationError } from "@pipedream/platform";
import apipieAi from "../../apipie_ai.app.mjs";

export default {
  key: "apipie_ai-chat-functions",
  name: "Chat Using Functions",
  version: "0.0.10",
  description: "Send a chat to a selected LLM model using functions. [See the dashboard](https://apipie.ai/dashboard)",
  type: "action",
  props: {
    apipieAi,
    model: {
      propDefinition: [
        apipieAi,
        "chatToolsModelId",
      ],
    },
    userMessage: {
      type: "string",
      label: "Chat Input",
      description: "Text inputs to the model used to generate a response",
    },
    functions: {
      type: "string",
      label: "Functions",
      description: "A valid JSON array of functions. Function calls are handled in Open AI standard request/response format.",
      default:
`[
  {
    "type": "function",
    "name": "your_function_name",
    "description": "Details on when and how to use the function",
    "strict": true,
    "parameters": {
      "type": "object",
      "properties": {
        "property_name": {
          "type": "property_type",
          "description": "A description for this property"
        }
      },
      "required": [
        "list",
        "of",
        "required",
        "properties",
        "for",
        "this",
        "object"
      ],
      "additionalProperties": false
    }
  }
]`,
    },
    systemInstructions: {
      type: "string",
      label: "Instructions",
      description: "Inserts a system (or developer) message as the first item in the model's context. For example 'Summarise these results for me'",
      optional: true,
    },
    toolChoice: {
      type: "string",
      label: "Tool Choice",
      description: "\n- 'Auto' means the model can pick between generating a message or calling one or more tools. \n- 'Required' means the model must call one or more tools.",
      options: [
        "auto",
        "required",
      ],
      default: "auto",
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
        stream: false,
        tools: [],
      };

      let functions = this.functions;
      if (typeof functions === "string") {
        try {
          functions = JSON.parse(functions);
        } catch (error) {
          throw new Error("Invalid JSON format in the provided Functions Schema");
        }
      }

      if (Array.isArray(functions)) {
        data.tools.push(...functions);
      } else {
        data.tools.push(functions);
      }

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
