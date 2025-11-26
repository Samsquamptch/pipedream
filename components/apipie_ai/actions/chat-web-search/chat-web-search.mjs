import { ConfigurationError } from "@pipedream/platform";
import constants from "../../common/constants.mjs";
import apipieAi from "../../apipie_ai.app.mjs";

export default {
  key: "apipie_ai-chat-web-search",
  name: "Chat Using Web Search",
  version: "0.0.15",
  description: "Send a chat to a selected LLM model using web search results. [See the dashboard](https://apipie.ai/dashboard)",
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
    systemInstructions: {
      type: "string",
      label: "Instructions",
      description: "Inserts a system (or developer) message as the first item in the model's context. For example 'Summarise these results for me'",
      optional: true,
    },
    searchContext: {
      type: "string",
      label: "Search Context Size",
      description: "Options for web search context size. Can be set to low, medium, or high. Defaults to low.",
      options: constants.EFFORT_OPTIONS,
      optional: true,
    },
    searchWhitelist: {
      type: "string[]",
      label: "URL Whitelist",
      description: "List of root FQDNs to allow for AI search (e.g. bbc.com, apnews.com). If not provided/null, AI can use any URLs that searches present.",
      optional: true,
    },
    searchBlacklist: {
      type: "string[]",
      label: "URL Blacklist",
      description: "List of root FQDNs to block for AI search (e.g., cnn.com, foxnews.com). If not provided/null, no URLs are blocked.",
      optional: true,
    },
    searchGeo: {
      type: "string",
      label: "Country Code",
      description: "Enter your country code for localized results (i.e. 'gb' for news from Great Britain). Set to 'us' by default.",
      optional: true,
    },
    searchLang: {
      type: "string",
      label: "Language",
      description: "The language of search results (i.e. 'en' for results in English). Set to 'en' by default.",
      optional: true,
    },
  },
  methods: {
    _convertListToString(searchList) {
      let stringFromList = searchList[0];
      for (var i = 1; i < searchList.length; i++) {
        stringFromList = stringFromList + "," + searchList[i];
      }
      return stringFromList;
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
      };

      // Convert any optional parameters into apipie styled parameters
      if (this.searchGeo) data.search_geo = this.searchGeo;
      if (this.searchLang) data.search_lang = this.searchLang;

      if (this.searchContext) {
        data.web_search_options = {
          search_context_size: this.searchContext,
        };
      }

      // Converts lists of strings to a single string
      if (this.searchWhitelist) {
        data.search_whitelist = this._convertListToString(this.searchWhitelist);
      }

      if (this.searchBlacklist) {
        data.search_blacklist = this._convertListToString(this.searchBlacklist);
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
      // return response.choices?.[0]?.message?.content;
      return response;
    } catch (e) {
      $.export("Error creating Chat Completion", e);
      throw new ConfigurationError(e.message || "Failed to create Chat Completion");
    }
  },
};
