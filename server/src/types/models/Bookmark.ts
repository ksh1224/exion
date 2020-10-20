import { objectType } from '@nexus/schema';

export const Bookmark = objectType({
  name: 'Bookmark',
  definition(t) {
    t.model.userId();
    t.model.shootingId();
  },
});
