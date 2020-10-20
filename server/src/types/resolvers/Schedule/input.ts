import { inputObjectType } from '@nexus/schema';

export const UpdateScheduleInputType = inputObjectType({
  name: 'UpdateScheduleTypeInput',
  definition(t) {
    t.int('shootingId');
    t.scheduleType('scheduleType');
    t.list.int('scheduleIds', { nullable: false });
  },
});
