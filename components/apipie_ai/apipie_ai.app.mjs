import { axios } from "@pipedream/platform";
import { ConfigurationError } from "@pipedream/platform";
import constants from "./common/constants.mjs";
import rawAxios  from "axios";

export default {
  type: "app",
  app: "apipie_ai",
  propDefinitions: {
    chatCompletionModelId: {
      type: "string",
      label: "Model",
      description: "The ID of the LLM model to use for completions.",
      async options() {
        try {
          const { data } = await this.listModels("type=llm");
          const uniqueModels = new Map();
          data.forEach(({
            id, model,
          }) => {
            if (!uniqueModels.has(id)) {
              uniqueModels.set(id, model);
            }
          });
          return Array.from(uniqueModels.entries())
            .map(([
              value,
              label,
            ]) => ({
              label,
              value,
            }))
            .sort((a, b) => a.label.localeCompare(b.label));
        } catch (e) {
          console.error("Error fetching LLM Models", e);
          throw new ConfigurationError(
            e.message || "Failed to fetch LLM models",
          );
        }
      },
    },
    chatToolsModelId: {
      type: "string",
      label: "Model",
      description: "The ID of the LLM model to use for functions in chat completions.",
      async options() {
        try {
          const { data } = await this.listModels("subtype=tools");
          const uniqueModels = new Map();
          data.forEach(({
            id, model,
          }) => {
            if (!uniqueModels.has(id)) {
              uniqueModels.set(id, model);
            }
          });
          return Array.from(uniqueModels.entries())
            .map(([
              value,
              label,
            ]) => ({
              label,
              value,
            }))
            .sort((a, b) => a.label.localeCompare(b.label));
        } catch (e) {
          console.error("Error fetching LLM Models", e);
          throw new ConfigurationError(
            e.message || "Failed to fetch LLM models",
          );
        }
      },
    },
    imageModelId: {
      type: "string",
      label: "Model",
      description: "The ID of the image model to use for completions.",
      async options() {
        try {
          const { data } = await this.listModels("type=image");
          const uniqueModels = new Map();
          data.forEach(({
            id, model,
          }) => {
            if (!uniqueModels.has(id)) {
              uniqueModels.set(id, model);
            }
          });
          return Array.from(uniqueModels.entries())
            .map(([
              value,
              label,
            ]) => ({
              label,
              value,
            }))
            .sort((a, b) => a.label.localeCompare(b.label));
        } catch (e) {
          console.error("Error fetching Image models:", e);
          throw new ConfigurationError(
            e.message || "Failed to fetch Image models",
          );
        }
      },
    },
    textToImageModelId: {
      type: "string",
      label: "Model",
      description: "The ID of the text to image model to use for image generation.",
      async options() {
        try {
          const { data } = await this.listModels("subtype=text-to-image");
          const uniqueModels = new Map();
          data.forEach(({
            id, model,
          }) => {
            if (!uniqueModels.has(id)) {
              uniqueModels.set(id, model);
            }
          });
          return Array.from(uniqueModels.entries())
            .map(([
              value,
              label,
            ]) => ({
              label,
              value,
            }))
            .sort((a, b) => a.label.localeCompare(b.label));
        } catch (e) {
          console.error("Error fetching Image models:", e);
          throw new ConfigurationError(
            e.message || "Failed to fetch Image models",
          );
        }
      },
    },
    imageToImageModelId: {
      type: "string",
      label: "Model",
      description: "The ID of the image to image model to use for image modification.",
      async options() {
        try {
          const { data } = await this.listModels("subtype=image-to-image");
          const uniqueModels = new Map();
          data.forEach(({
            id, model,
          }) => {
            if (!uniqueModels.has(id)) {
              uniqueModels.set(id, model);
            }
          });
          return Array.from(uniqueModels.entries())
            .map(([
              value,
              label,
            ]) => ({
              label,
              value,
            }))
            .sort((a, b) => a.label.localeCompare(b.label));
        } catch (e) {
          console.error("Error fetching Image models:", e);
          throw new ConfigurationError(
            e.message || "Failed to fetch Image models",
          );
        }
      },
    },
    // ttsModelId: {
    //   type: "string",
    //   label: "Model",
    //   description: "The ID of the tts model to use for completions.",
    //   async options() {
    //     try {
    //       const { data } = await this.listModels("subtype=text-to-speech");
    //       const uniqueModels = new Map();
    //       data.forEach(({
    //         id, model,
    //       }) => {
    //         if (!uniqueModels.has(id)) {
    //           uniqueModels.set(id, model);
    //         }
    //       });
    //       return Array.from(uniqueModels.entries())
    //         .map(([
    //           value,
    //           label,
    //         ]) => ({
    //           label,
    //           value,
    //         }))
    //         .sort((a, b) => a.label.localeCompare(b.label));
    //     } catch (e) {
    //       console.error("Error fetching TTS models:", e);
    //       throw new ConfigurationError(
    //         e.message || "Failed to fetch TTS models",
    //       );
    //     }
    //   },
    // },
    ttsModelId: {
      type: "string",
      label: "Model",
      description: "The ID of the tts model to use for completions.",
      async options() {
        try {
          const { data } = await this.listModels("subtype=text-to-speech");
          const uniqueModels = new Map();
          data.forEach(({
            id, model, provider, route,
          }) => {
            if (!uniqueModels.has(id)) {
              uniqueModels.set(id, {
                model,
                provider,
                route,
              });
            }
          });

          return Array.from(uniqueModels.entries())
            .map(([
              id,
              info,
            ]) => ({
              label: info.model,
              value: `${id}|${info.provider}|${info.route}`,
            }))
            .sort((a, b) => a.label.localeCompare(b.label));

        } catch (e) {
          console.error("Error fetching TTS models:", e);
          throw new ConfigurationError(
            e.message || "Failed to fetch TTS models",
          );
        }
      },
    },
    voiceModelId: {
      type: "string",
      label: "Voice",
      description: "The ID of the voice model to use for completions.",
      async options() {
        try {
          const { data } = await this.listModels("voices");
          console.log("step 1");
          const uniqueModels = new Map();
          data.forEach(({
            voice_id, name,
          }) => {
            if (!uniqueModels.has(voice_id)) {
              uniqueModels.set(voice_id, name);
            }
          });
          console.log("step 2");
          return Array.from(uniqueModels.entries())
            .map(([
              value,
              label,
            ]) => ({
              label,
              value,
            }))
            .sort((a, b) => a.label.localeCompare(b.label));
        } catch (e) {
          console.error("Error fetching Voice models:", e);
          throw new ConfigurationError(
            e.message || "Failed to fetch Voice models",
          );
        }
      },
    },
    embeddingModelId: {
      type: "string",
      label: "Model",
      description: "The ID of the embedding model.",
      async options() {
        try {
          const { data } = await this.listModels("type=embedding");
          const uniqueModels = new Map();
          data.forEach(({
            id, model,
          }) => {
            if (!uniqueModels.has(id)) {
              uniqueModels.set(id, model);
            }
          });
          return Array.from(uniqueModels.entries())
            .map(([
              value,
              label,
            ]) => ({
              label,
              value,
            }))
            .sort((a, b) => a.label.localeCompare(b.label));
        } catch (e) {
          console.error("Error fetching Embedding models:", e);
          throw new ConfigurationError(
            e.message || "Failed to fetch Embedding models",
          );
        }
      },
    },
    vectorCollectionsList: {
      type: "string",
      label: "Collection Name",
      description: "The name of the collection.",
      async options() {
        try {
          const data = await this.listVectorCollection();
          return !data
            ? []
            : data.map((item) => item.collection).sort((a, b) => a.localeCompare(b));
        } catch (e) {
          console.error("Error fetching Embedding models:", e);
          throw new ConfigurationError(
            e.message || "Failed to fetch Embedding models",
          );
        }
      },
    },
    vectorIdsList: {
      type: "string[]",
      label: "Collection IDs",
      description: "The IDs inside the vector collection.",
      reloadProps: true,
      async options() {
        try {
          const data = await this.listVectorID();
          return !data
            ? []
            : data.map((item) => item.collection).sort((a, b) => a.localeCompare(b));
        } catch (e) {
          console.error("Error fetching Embedding models:", e);
          throw new ConfigurationError(
            e.message || "Failed to fetch Embedding models",
          );
        }
      },
    },
    maxTokens: {
      type: "integer",
      label: "Max Tokens",
      description:
        "Maximum number of tokens. **(range: [1, context_length))**.",
      min: 1,
      optional: true,
    },
    temperature: {
      type: "string",
      label: "Temperature",
      description: "Sampling temperature. **(range: [0, 2])**.",
      default: "0",
      optional: true,
    },
    seed: {
      type: "string",
      label: "Seed",
      description: "Seed for deterministic outputs.",
      optional: true,
    },
    topP: {
      type: "string",
      label: "Top P",
      description: "Top-p sampling value. **(range: (0, 1])**.",
      default: "0",
      optional: true,
    },
    topK: {
      type: "string",
      label: "Top K",
      description: "Top-k sampling value. **(range: [1, Infinity))**.",
      default: "1",
      optional: true,
    },
    frequencyPenalty: {
      type: "string",
      label: "Frequency Penalty",
      description: "Frequency penalty. **(range: [-2, 2])**.",
      default: "0",
      optional: true,
    },
    presencePenalty: {
      type: "string",
      label: "Presence Penalty",
      description: "Presence penalty. **(range: [-2, 2])**.",
      default: "0",
      optional: true,
    },
    repetitionPenalty: {
      type: "string",
      label: "Repetition Penalty",
      description: "Repetition penalty. **(range: (0, 2])**.",
      default: "0",
      optional: true,
    },
    reasoningEffort: {
      type: "string",
      label: "Reasoning Effort",
      description: "OpenAI-style reasoning effort setting.",
      options: constants.EFFORT_OPTIONS,
      optional: true,
    },
    input: {
      type: "string",
      label: "Input",
      description:
        "The text to generate audio for. The maximum length is 4096 characters.",
    },
    audioResponseFormat: {
      type: "string",
      label: "Response Format",
      description:
        "The format to generate audio in. Supported formats are mp3, opus, aac, flac, wav, and pcm.",
      options: constants.AUDIO_RESPONSE_FORMATS,
      optional: true,
    },
    speed: {
      type: "string",
      label: "Speed",
      description:
        "The speed of the generated audio. Provide a value from 0.25 to 4.0.",
      default: "1.0",
      optional: true,
    },
    prompt: {
      label: "Prompt",
      description: "A text description of the desired image(s).",
      type: "string",
    },
    imageResponseFormat: {
      label: "Response Format",
      description: "The format in which the generated images are returned.",
      type: "string",
      optional: true,
      options: constants.IMAGE_RESPONSE_FORMATS,
      default: "url",
      reloadProps: true,
    },
    size: {
      label: "Size",
      description: "The size of the generated images.",
      type: "string",
      optional: true,
      options: constants.IMAGE_SIZES,
      default: "1024x1024",
    },
    n: {
      type: "integer",
      label: "N",
      description:
        "The number of images to generate. Must be between 1 and 10. not supported for all models.",
      optional: true,
      default: 1,
      min: 1,
      max: 10,
    },
    quality: {
      type: "string",
      label: "Quality",
      description: "The quality of the image",
      options: constants.IMAGE_QUALITIES,
      optional: true,
      default: "standard",
    },
    style: {
      type: "string",
      label: "Style",
      description: "The style of the image, not supported for all models.",
      options: constants.IMAGE_STYLES,
      optional: true,
      default: "natural",
    },
    systemInstructions: {
      type: "string",
      label: "System Instructions",
      description: "Instructions to give for the system role. For example 'You are a helpful assistant that speaks only in Swedish.'",
      optional: true,
    },
  },
  methods: {
    _apiKey() {
      return this.$auth.api_key;
    },
    _apiUrl() {
      return "https://apipie.ai/v1";
    },
    _vectorApiUrl() {
      return "https://apipie.ai";
    },
    _getHeaders() {
      return {
        "Authorization": `Bearer ${this._apiKey()}`,
        "User-Agent": "@PipedreamHQ/pipedream v1.0",
        "Accept-Encoding": "identity",
      };
    },
    _makeRequest({
      $, path, ...opts
    }) {
      $ = $ || this.$;
      return axios($, {
        url: `${this._apiUrl()}/${path}`,
        headers: this._getHeaders(),
        ...opts,
      });
    },
    async _rawRequest({
      path, ...opts
    }) {
      const res = await rawAxios({
        url: `${this._apiUrl()}/${path}`,
        headers: this._getHeaders(),
        ...opts,
      });
      return res.data;
    },
    _makeVectorRequest({
      $, path, ...opts
    }) {
      $ = $ || this.$;
      return axios($, {
        url: `${this._vectorApiUrl()}/${path}`,
        headers: this._getHeaders(),
        ...opts,
      });
    },
    listModels(filter) {
      return this._makeRequest({
        path: `models?${filter}`,
      });
    },
    async listVoices(provider, route) {
      console.log(`models?voices&provider=${provider}&model=${route}`);
      const model = await this._rawRequest({
        path: `models?voices&provider=${provider}&model=${route}`,
      });
      return model;
    },
    listImageModelStylyes(model) {
      return this._makeRequest({
        path: `models/detailed?model=${model}`,
      });
    },
    sendChatCompletionRequest(opts = {}) {
      return this._makeRequest({
        method: "POST",
        path: "chat/completions",
        ...opts,
      });
    },
    processDocumentRAGTune(opts = {}) {
      return this._makeVectorRequest({
        path: "ragtune",
        method: "POST",
        ...opts,
      });
    },
    listCollectionRAGTune(opts = {}) {
      return this._makeRequest({
        path: "ragtune/listcollections",
        method: "POST",
        ...opts,
      });
    },
    deleteCollectionRAGTune(opts = {}) {
      return this._makeRequest({
        path: "ragtune/delete",
        method: "POST",
        ...opts,
      });
    },
    createImage(args = {}) {
      return this._makeRequest({
        path: "images/generations",
        method: "POST",
        ...args,
      });
    },
    createSpeech(args = {}) {
      return this._makeRequest({
        path: "audio/speech",
        method: "POST",
        ...args,
      });
    },
    createVectorCollection(args = {}) {
      return this._makeVectorRequest({
        path: "vectors",
        method: "POST",
        ...args,
      });
    },
    upsertVectorCollection(args = {}) {
      return this._makeVectorRequest({
        path: "vectors/upsert",
        method: "PUT",
        ...args,
      });
    },
    listVectorCollection(args = {}) {
      return this._makeVectorRequest({
        path: "vectors/listcollections",
        method: "POST",
        ...args,
      });
    },
    listVectorID(args = {}) {
      return this._makeVectorRequest({
        path: "vectors/list",
        method: "POST",
        ...args,
      });
    },
    deleteVectorCollection(opts = {}) {
      return this._makeVectorRequest({
        path: "vectors/delete",
        method: "POST",
        ...opts,
      });
    },
    getVectorRecord(args = {}) {
      const {
        collection_name, ids, ...rest
      } = args.data || {};

      const query = new URLSearchParams({
        collection_name,
        ids,
      }).toString();
      return this._makeVectorRequest({
        path: `vectors/fetch?${query}`,
        method: "GET",
        ...rest,
      });
    },
    createEmbedding(args = {}) {
      return this._makeRequest({
        path: "embeddings",
        method: "POST",
        ...args,
      });
    },
  },
};
