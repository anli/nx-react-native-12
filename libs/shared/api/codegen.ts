import { CodegenConfig } from '@graphql-codegen/cli';
import 'dotenv/config';

const config: CodegenConfig = {
  schema: [
    {
      [process.env.GRAPHQL_URL ?? '']: {
        headers: {
          'X-Hasura-Admin-Secret': process.env.HASURA_ADMIN_SECRET ?? '',
          'X-Hasura-Role': 'user',
        },
      },
    },
  ],
  documents: ['./../../**/*.graphql'],
  overwrite: true,
  generates: {
    './src/graphql-types.ts': { plugins: ['typescript'] },
    '@shared/api': {
      preset: 'near-operation-file',
      presetConfig: {
        extension: '.generated.tsx',
        baseTypesPath: '~@shared/api',
      },
      plugins: ['typescript-operations', 'typescript-react-apollo'],
      config: {
        enumsAsConst: true,
        skipTypename: false,
        withHooks: true,
        withHOC: false,
        withComponent: false,
      },
    },
  },
};

export default config;
