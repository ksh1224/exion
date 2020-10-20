import { intArg, mutationField } from '@nexus/schema';
import { ApolloError } from 'apollo-server-express';
import { getUserId } from '../../../utils/auth';

export const addBookmark = mutationField('addBookmark', {
  type: 'Bookmark',
  args: {
    shootingId: intArg({ required: true }),
  },
  resolve: async (_, { shootingId }, ctx) => {
    const myId = getUserId(ctx);

    if (!myId) throw new ApolloError('토큰을 찾을 수 없습니다', '403');

    return await ctx.prisma.bookmark.create({
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

export const removeBookmark = mutationField('removeBookmark', {
  type: 'Bookmark',
  args: {
    shootingId: intArg({ required: true }),
  },
  resolve: async (_, { shootingId }, ctx) => {
    const myId = getUserId(ctx);

    return await ctx.prisma.bookmark.delete({
      where: {
        userId_shootingId: {
          userId: myId!,
          shootingId,
        },
      },
    });
  },
});
