import { inputObjectType } from '@nexus/schema';

export const UserInputType = inputObjectType({
  name: 'UserCreateInput',
  definition(t) {
    t.string('phoneNumber', {
      required: true,
    });
    t.string('password', {
      required: true,
    });
    t.string('name');
    t.string('photoURL');
    t.string('photoURL2');
    t.date('birthday');
    t.gender('gender');
    t.int('weight');
    t.int('height');
    t.boolean('isGlasses');
    t.boolean('isTattoo');
    t.boolean('isDyeing');
  },
});

export const UserUpdateInputType = inputObjectType({
  name: 'UserUpdateInput',
  definition(t) {
    t.string('phoneNumber');
    t.string('name');
    t.string('photoURL');
    t.string('photoURL2');
    t.date('birthday');
    t.gender('gender');
    t.int('weight');
    t.int('height');
    t.boolean('isGlasses');
    t.boolean('isTattoo');
    t.boolean('isDyeing');
  },
});
