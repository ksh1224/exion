import { objectType } from '@nexus/schema';
import { sep } from 'path';

export const Profile = objectType({
  name: 'Profile',
  definition(t) {
    t.model.socialId();
    t.model.authType();
  },
});

export const User = objectType({
  name: 'User',
  definition(t) {
    t.model.id();
    t.model.phoneNumber();
    t.model.password();
    t.model.photoURL();
    t.model.photoURL2();
    t.model.name();
    t.model.birthday();
    t.model.gender();
    t.model.weight();
    t.model.height();
    t.model.isGlasses();
    t.model.isTattoo();
    t.model.isDyeing();
    t.model.profile();
    t.model.createdAt();
    t.model.updatedAt();
    t.model.deletedAt();
  },
});
