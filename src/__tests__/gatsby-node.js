import { testPluginOptionsSchema } from 'gatsby-plugin-utils';

import { pluginOptionsSchema } from '../gatsby-node';

it(`should provide meaningful errors when fields are invalid`, async () => {
  const expectedWarnings = [`"optionA" is not allowed`];

  const { hasWarnings, isValid, warnings } = await testPluginOptionsSchema(
    pluginOptionsSchema,
    { optionA: `This option shouldn't exist` }
  );

  expect(hasWarnings).toBe(true);
  expect(isValid).toBe(true);
  expect(warnings).toEqual(expectedWarnings);
});

it.each`
  options
  ${undefined}
  ${{}}
`(`should validate the schema: $options`, async ({ options }) => {
  const { hasWarnings, isValid, warnings } = await testPluginOptionsSchema(
    pluginOptionsSchema,
    options
  );

  expect(hasWarnings).toBe(false);
  expect(isValid).toBe(true);
  expect(warnings).toEqual([]);
});
