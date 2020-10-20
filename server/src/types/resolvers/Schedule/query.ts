import { intArg, queryField, stringArg } from "@nexus/schema";
import { getUserId } from "../../../utils/auth";

export const scheduleQueryField = queryField((t) => {
  t.connectionField('schedules', {
    type: 'Schedule',
    async nodes(_, { after }, ctx) {
      const cursor = after ? {
        id: parseInt(after, 36),
      } : undefined;
      const id = after ? { not: parseInt(after, 36) } : undefined;
      const userId = getUserId(ctx);
      const scheduleShootings = await ctx.prisma.schedule.findMany({
        cursor,
        where: {
          userId,
          id,
        },
        include: {
          Shooting: true,
        },
        orderBy: { id: 'desc' },
      });
      return scheduleShootings;
    },
  });
});

export const scheduleQueryAdminField = queryField((t) => {
  t.connectionField('adminSchedules', {
    type: 'Schedule',
    additionalArgs: { shootingId: intArg({ nullable: false }) },
    async nodes(_, { shootingId, after }, ctx) {
      const cursor = after ? {
        id: parseInt(after, 36),
      } : undefined;
      const id = after ? { not: parseInt(after, 36) } : undefined;
      const shooting = await ctx.prisma.shooting.findOne({ where: { id: shootingId } });
      const scheduleShootings = await ctx.prisma.schedule.findMany({
        cursor,
        where: {
          shootingId,
          id,
          type: {
            in: shooting?.step === "screening" ? ['apply', 'pass', 'waiting'] : ['pass', "attending", "waiting", "cancel"],
          },
        },
        include: {
          Shooting: true,
        },
        orderBy: { type: 'desc' },
      });
      return scheduleShootings;
    },
  });
});
