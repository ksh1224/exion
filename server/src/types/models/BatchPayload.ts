import { objectType } from '@nexus/schema';

export const BatchPayload = objectType({
  name: 'BatchPayload',
  definition(t) {
    t.int('count');
  },
});
