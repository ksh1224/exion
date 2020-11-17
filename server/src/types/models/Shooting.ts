import { objectType } from '@nexus/schema';
import { sep } from 'path';
import { getUserId } from '../../utils/auth';

export const Shooting = objectType({
  name: 'Shooting',
  definition(t) {
    t.model.id();
    t.model.title();
    t.model.producer();
    t.model.shootingStartAt();
    t.model.shootingEndAt();
    t.model.headCount();
    t.model.content();
    t.model.wage();
    t.model.meetingPlace();
    t.model.meetingTime();
    t.model.gender();
    t.model.minHeight();
    t.model.maxHeight();
    t.model.maxWeight();
    t.model.minWeight();
    t.model.isGlasses();
    t.model.isTattoo();
    t.model.isDyeing();
    t.model.step();
    t.model.createdAt();
    t.model.updatedAt();
    t.model.deletedAt();
    t.field('bookmark', {
      type: 'Bookmark',
      resolve(root, args, ctx) {
        const myId = getUserId(ctx);
        console.log('root.id', root.id);
        console.log('myId', myId);
        if (!myId) return;
        return ctx.prisma.bookmark.findOne({
          where: {
            userId_shootingId: {
              userId: myId,
              shootingId: root.id,
            },
          },
        });
      },
    });
  },
});

// export const AdminShooting = objectType({
//   name: 'AdminShooting',
//   definition(t) {
//     t.model.id();
//     t.model.title();
//     t.model.producer();
//     t.model.shootingStartAt();
//     t.model.shootingEndAt();
//     t.model.headCount();
//     t.model.content();
//     t.model.wage();
//     t.model.meetingPlace();
//     t.model.meetingTime();
//     t.model.gender();
//     t.model.minHeight();
//     t.model.maxHeight();
//     t.model.maxWeight();
//     t.model.minWeight();
//     t.model.isGlasses();
//     t.model.isTattoo();
//     t.model.isDyeing();
//     t.model.step();
//     t.model.createdAt();
//     t.model.updatedAt();
//     t.model.deletedAt();
//   },
// });
