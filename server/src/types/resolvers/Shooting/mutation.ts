import { intArg, mutationField, queryField } from '@nexus/schema';
import { Step } from '@prisma/client';
import { ApolloError } from 'apollo-server-express';
import { getUserId } from '../../../utils/auth';

export const shootingMutationAdminField = mutationField((t) => {
  t.field('adminAddShooting', {
    type: 'Shooting',
    args: { shooting: 'AddShootingInput' },
    resolve: async (_, { shooting }, ctx) => {
      const {
        title,
        producer,
        shootingStartAt,
        shootingEndAt,
        headCount,
        content,
        wage,
        meetingPlace,
        meetingTime,
        gender,
        minHeight,
        maxHeight,
        minWeight,
        maxWeight,
        isGlasses,
        isTattoo,
        isDyeing,
      } = shooting!;
      return await ctx.prisma.shooting.create({
        data: {
          title,
          producer,
          shootingStartAt,
          shootingEndAt,
          headCount,
          content,
          wage,
          meetingPlace,
          meetingTime,
          gender,
          minHeight,
          maxHeight,
          minWeight,
          maxWeight,
          isGlasses,
          isTattoo,
          isDyeing,
          step: 'screening',
        },
      });
    },
  });

  t.field('adminRemoveShooting', {
    type: 'Shooting',
    args: { shootingId: intArg({ nullable: false }) },
    resolve: async (_, { shootingId }, ctx) => await ctx.prisma.shooting.delete({
      where: {
        id: shootingId,
      },
    }),
  });

  t.field('adminStepUpShooting', {
    type: 'Shooting',
    args: { shootingId: intArg({ required: true }) },
    resolve: async (_, { shootingId }, ctx) => {
      const shooting = await ctx.prisma.shooting.findOne({
        where: {
          id: shootingId,
        },
      });

      let updateStep : Step = 'screening';
      switch (shooting?.step) {
        case 'screening':
          updateStep = 'toBeShooting';
          break;
        case 'toBeShooting':
          updateStep = 'inShooting';
          break;
        case 'inShooting':
          updateStep = 'shootingComplete';
          break;
        case 'shootingComplete':
          updateStep = 'paymentCompleted';
          break;

        default:
          throw new ApolloError('단계를 업데이트 할 수 없습니다', '403');
      }

      return await ctx.prisma.shooting.update({
        data: {
          step: updateStep,
        },
        where: {
          id: shootingId,
        },
      });
    },
  });
});
