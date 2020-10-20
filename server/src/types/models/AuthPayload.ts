import { objectType } from '@nexus/schema';

export const AuthPayload = objectType({
  name: 'AuthPayload',
  definition(t) {
    t.string('token');
    t.field('user', { type: 'User' });
  },
});

export const AuthPayloadAdmin = objectType({
  name: 'AuthPayloadAdmin',
  definition(t) {
    t.string('token');
    t.field('admin', { type: 'Admin' });
  },
});
