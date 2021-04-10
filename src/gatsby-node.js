if (process.env.GATSBY_EXPERIMENTAL_PLUGIN_OPTION_VALIDATION) {
  exports.pluginOptionsSchema = ({ Joi }) => Joi.object({});
}
