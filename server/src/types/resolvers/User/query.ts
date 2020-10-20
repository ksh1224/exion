import { queryField, stringArg } from '@nexus/schema';
import { ApolloError } from 'apollo-server-express';
import { getUserId } from '../../../utils/auth';

export const usersQueryField = queryField((t) => {
  t.connectionField('users', {
    type: 'User',
    additionalArgs: { searchText: stringArg() },
    async nodes(_, args, ctx) {
      const {
        searchText,
      } = args;
      const users = await ctx.prisma.user.findMany({
        where: {
          name: { contains: searchText || undefined },
        },
        orderBy: { id: 'desc' },
      });
      return users;
    },
  });

  t.field('me', {
    type: 'User',
    description: 'Fetch current user profile when authenticated.',
    nullable: true,
    async resolve(_, args, ctx) {
      const userId = getUserId(ctx);
      if (!userId) throw new ApolloError('유저를 찾을 수 없습니다', '403');
      const user = await ctx.prisma.user.findOne({
        where: {
          id: userId,
        },
      });
      return new Promise((resolve, reject) => resolve(user));
    },
  });
});
