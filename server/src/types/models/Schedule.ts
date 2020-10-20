import { objectType } from '@nexus/schema';
import { type } from 'os';
import { sep } from 'path';

export const Schedule = objectType({
  name: 'Schedule',
  definition(t) {
    t.model.id();
    t.model.type();
    t.model.shootingId();
    t.model.userId();
    t.field('user', {
      type: 'User',
      resolve(root, args, ctx) {
        return ctx.prisma.user.findOne({ where: { id: root.userId } });
      },
    });
  },
});
