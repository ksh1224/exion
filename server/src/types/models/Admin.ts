import { objectType } from '@nexus/schema';

export const Admin = objectType({
  name: 'Admin',
  definition(t) {
    t.model.id();
    t.model.password();
    t.model.userName();
  },
});
