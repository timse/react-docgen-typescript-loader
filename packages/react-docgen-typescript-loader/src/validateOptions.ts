import validate from "@webpack-contrib/schema-utils";
import LoaderOptions from "./LoaderOptions";

const schema = {
  type: "object",
  additionalProperties: false,
  properties: {
    skipPropsWithName: {
      anyOf: [
        { type: "string", minLength: 1 },
        { type: "array", minItems: 1, items: { type: "string", minLength: 1 } },
      ],
    },

    skipPropsWithoutDoc: {
      type: "boolean",
    },

    tsconfigPath: {
      type: "string",
      minLength: 1,
    },

    compilerOptions: {
      type: "object",
    },

    docgenCollectionName: {
      anyOf: [{ type: "string", minLength: 1 }, { type: "null" }],
    },

    setDisplayName: {
      type: "boolean",
    },

    includes: {
      type: "array",
      items: {
        type: "string",
      },
    },

    excludes: {
      type: "array",
      items: {
        type: "string",
      },
    },
  },
};

function validateOptions(options: LoaderOptions = {}) {
  validate({
    name: "react-docgen-typescript-loader",
    schema,
    target: options,
  });
}

export default validateOptions;
