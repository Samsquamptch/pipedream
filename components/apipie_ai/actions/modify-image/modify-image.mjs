import { ConfigurationError } from "@pipedream/platform";
import constants from "../../common/constants.mjs";
import apipieAi from "../../apipie_ai.app.mjs";

export default {
  key: "apipie_ai-modify-image",
  name: "Modify Image",
  version: "0.0.1",
  description: "Modifies the supplied image depending on provided parameters. Some models will use the prompt as a parameter. [See the dashboard](https://apipie.ai/dashboard)",
  type: "action",
  props: {
    apipieAi,
    model: {
      propDefinition: [
        apipieAi,
        "imageToImageModelId",
      ],
    },
    prompt: {
      type: "string",
      label: "Prompt",
      description: "Text description of the desired image.",
    },
    imageURL: {
      type: "string",
      label: "Image",
      description: "The URL to an image you want the image model to update.",
    },
    numberOfImages: {
      type: "integer",
      label: "N",
      description: "The number of images to generate. Currently only supports one image.",
      min: 1,
      max: 1,
      default: 1,
      optional: true,
    },
    size: {
      type: "string",
      label: "Image Size",
      description: "The size of the image generated. 1024x1024 is supported by all models.",
      options: constants.IMAGE_SIZES,
      optional: true,
    },
    quality: {
      type: "string",
      label: "Image Quality",
      description: "The quality of the image that will be generated.",
      options: constants.IMAGE_QUALITIES,
      optional: true,
    },
    responseFormat: {
      type: "string",
      label: "Format",
      description: "The format in which the generated images are returned. Set to url by default.",
      options: constants.IMAGE_RESPONSE_FORMATS,
      optional: true,
    },
    style: {
      type: "string",
      label: "Image Style",
      description: "The style of the generated images. If no results are returned, then there are so styles for the chosen model.",
      async options() {
        try {
          const data = this.model;
          const response = await this.apipieAi.listImageModelStylyes(
            data,
          );
          const styles =
        response?.data?.[0]?.supported_input_parameters?.style?.enum || [];

          return styles
            .sort((a, b) => a.localeCompare(b))
            .map((s) => ({
              label: s,
              value: s,
            }));
        } catch (e) {
          console.error("Error fetching model styles", e);
          throw new ConfigurationError(
            e.message || "Failed to fetch Image Model Styles",
          );
        }
      },
      optional: true,
    },
    seed: {
      type: "integer",
      label: "Seed",
      description: "A randomness initializer for image reproducibility. Check specific models for compatibility.",
      min: 0,
      max: 2147483647,
      optional: true,
    },
    steps: {
      type: "integer",
      label: "Steps",
      description: "Amount of computational iterations to run. More is typically higher quality. Check specific models for compatibility.",
      min: 1,
      max: 50,
      default: 30,
      optional: true,
    },
    loras: {
      type: "string[]",
      label: "LoRa Models",
      description: "Augment the output with up to 3 LoRa models. Check specific models for compatibility.",
      optional: true,
    },
    strength: {
      type: "string",
      label: "Strength",
      description: "Controls the strength of the applied effect (Range 0-1). Check specific models for compatibility.",
      optional: true,
    },
    aspectRatio: {
      type: "string",
      label: "Aspect Ratio",
      description: "Aspect Ratio. Check specific models for compatibility.",
      options: constants.ASPECT_RATIO,
      optional: true,
    },
    addText: {
      type: "integer",
      label: "Add Text",
      description: "The number of text lines to add.",
      optional: true,
      reloadProps: true,
    },
  },
  additionalProps() {
    const { addText } = this;

    const props = {};

    if (this.addText) {
      for (let i = 0; i < (addText || 1); i++) {
        props[`text_${i}`] = {
          type: "string",
          label: `Text Input ${i + 1}`,
          description: "The text you wish to input.",
        };
        props[`bbox_${i}`] = {
          type: "string",
          label: `Text Positioning ${i + 1}`,
          description: "The position of the text. Uses bbox positioning. Check specific models for compatibility.",
        };
      }
    }

    return props;
  },
  methods: {
    _buildTextInput() {
      const textInput = [];

      for (let i = 0; i < this.addText; i++) {
        textInput.push({
          text: this[`text_${i}`],
          bbox: this[`bbox_${i}`],
        });
      }
      return textInput;
    },
  },
  async run({ $ }) {
    try {
      const data = {
        model: this.model,
        prompt: this.prompt,
        image: this.imageURL,
      };

      if (this.numberOfImages) data.n = this.numberOfImages;
      if (this.size) data.size = this.size;
      if (this.quality) data.quality = this.quality;
      if (this.responseFormat) data.response_format = this.responseFormat;
      if (this.style) data.style = this.style;
      if (this.seed) data.seed = this.seed;
      if (this.steps) data.steps = this.steps;
      if (this.loras) data.loras = this.loras;
      if (this.strength) data.strength = +this.strength;
      if (this.aspectRatio) data.aspect_ratio = this.aspectRatio;

      if (this.addText) {
        const textInput = this._buildTextInput();
        data.text_layout = textInput;
      }

      const response = await this.apipieAi.createImage({
        $,
        data,
        timeout: 1000 * 60 * 5,
      });
      if (response.error) {
        $.export("Error creating Chat Completion", response.error);
        throw new ConfigurationError(response.error.message || "Failed to create Chat Completion");
      }

      $.export("$summary", `Image generated at timestamp ${response.created}!`);
      return response;
    } catch (e) {
      $.export("Error creating Chat Completion", e);
      throw new ConfigurationError(e.message || "Failed to create Chat Completion");
    }
  },
};
