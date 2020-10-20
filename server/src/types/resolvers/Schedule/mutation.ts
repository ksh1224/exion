import { intArg, mutationField, stringArg } from '@nexus/schema';
import { ApolloError } from 'apollo-server-express';
import { getUserId } from '../../../utils/auth';

export const scheduleMutationField = mutationField((t) => {
  t.field('addSchedule', {
    type: 'Schedule',
    args: {
      shootingId: intArg({ required: true }),
    },
    resolve: async (_, { shootingId }, ctx) => {
      const myId = getUserId(ctx);

      if (!myId) throw new ApolloError('토큰을 찾을 수 없습니다', '403');

      return await ctx.prisma.schedule.create({
        data: {
          Shooting: {
            connect: {
              id: shootingId,
            },
          },
          User: {
            connect: {
              id: myId,
            },
          },
        },
        include: {
          Shooting: true,
          User: true,
        },
      });
    },
  });
  t.field('removeSchedule', {
    type: 'Schedule',
    args: {
      scheduleId: intArg({ required: true }),
    },
    resolve: async (_, { scheduleId }, ctx) => {
      const myId = getUserId(ctx);

      return await ctx.prisma.schedule.delete({
        where: {
          id: scheduleId,
        },
      });
    },
  });
});

export const scheduleMutationAdminField = mutationField((t) => {
  t.field('adminUpdateTypeSchedules', {
    type: 'Schedule',
    list: true,
    args: { scheduleInput: 'UpdateScheduleTypeInput' },
    resolve: async (_, { scheduleInput }, ctx) => {
      const { scheduleType, shootingId, scheduleIds } = scheduleInput!;
      await ctx.prisma.schedule.updateMany({
        where: {
          id: {
            in: scheduleIds.filter((x): x is number => x !== null),
          },
        },
        data: {
          type: scheduleType,
        },
      });

      return await ctx.prisma.schedule.findMany({
        where: {
          id: {
            in: scheduleIds.filter((x): x is number => x !== null),
          },
        },
      });
    },
  });
});
