const EFFORT_OPTIONS = [
  "high",
  "medium",
  "low",
];
const AUDIO_RESPONSE_FORMATS = [
  "mp3",
  "opus",
  "aac",
  "flac",
  "wav",
  "pcm",
];
const IMAGE_RESPONSE_FORMATS = [
  {
    label: "URL",
    value: "url",
  },
  {
    label: "Base64 JSON",
    value: "b64_json",
  },
];
const IMAGE_QUALITIES = [
  {
    label: "Standard",
    value: "standard",
  },
  {
    label: "HD",
    value: "hd",
  },
];
const IMAGE_STYLES = [
  {
    label: "Natural",
    value: "natural",
  },
  {
    label: "Vivid",
    value: "vivid",
  },
];

const IMAGE_SIZES = [
  "256x256",
  "512x512",
  "1024x1024",
  "1792x1024",
  "1024x1792",
];
const TOOL_TYPES = [
  "code_interpreter",
  "file_search",
  "function",
];
const ASPECT_RATIO = [
  "9:21",
  "21:9",
];
const VECTOR_PROVIDER = [
  {
    label: "Pinecone",
    value: "pinecone",
  },
  {
    label: "Qdrant",
    value: "qdrant",
  },
];
export default {
  EFFORT_OPTIONS,
  AUDIO_RESPONSE_FORMATS,
  IMAGE_RESPONSE_FORMATS,
  IMAGE_QUALITIES,
  IMAGE_STYLES,
  IMAGE_SIZES,
  ASPECT_RATIO,
  TOOL_TYPES,
  VECTOR_PROVIDER,
};
