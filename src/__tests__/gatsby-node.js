import { testPluginOptionsSchema } from 'gatsby-plugin-utils';

import { pluginOptionsSchema } from '../gatsby-node';

it(`should provide meaningful errors when fields are invalid`, async () => {
  const expectedErrors = [`"optionA" is not allowed`];

  const { errors, isValid } = await testPluginOptionsSchema(
    pluginOptionsSchema,
    { optionA: `This option shouldn't exist` }
  );

  expect(errors).toEqual(expectedErrors);
  expect(isValid).toBe(false);
});

it.each`
  options
  ${undefined}
  ${{}}
`(`should validate the schema: $options`, async ({ options }) => {
  const { errors, isValid } = await testPluginOptionsSchema(
    pluginOptionsSchema,
    options
  );

  expect(errors).toEqual([]);
  expect(isValid).toBe(true);
});
