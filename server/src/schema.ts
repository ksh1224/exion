import path from 'path';
import { connectionPlugin, makeSchema } from '@nexus/schema';

import { nexusSchemaPrisma } from 'nexus-plugin-prisma/schema';
import * as types from './types';

export const schema = makeSchema({
  types,
  plugins: [
    nexusSchemaPrisma(),
    connectionPlugin({
      cursorFromNode(node) {
        return node.id.toString(36);
      },
    }),
  ],
  outputs: {
    schema: path.join(__dirname, './generated/schema.gql'),
    typegen: path.join(__dirname, './generated/nexus.ts'),
  },
  typegenAutoConfig: {
    sources: [
      {
        source: '@prisma/client',
        alias: 'client',
      },
      {
        source: require.resolve('./context'),
        alias: 'Context',
      },
    ],
    contextType: 'Context.Context',
  },
});
