import { asNexusMethod, scalarType } from '@nexus/schema';

import { GraphQLDate } from 'graphql-iso-date';

export enum AuthType {
  email = 'email',
  facebook = 'facebook',
  google = 'google',
  apple = 'apple',
}

export const Auth = scalarType({
  name: 'Auth',
  asNexusMethod: 'auth',
  parseValue(value: AuthType): AuthType | undefined {
    if (AuthType[value]) {
      return value;
    }
  },
  serialize(value) {
    return value;
  },
});

export enum Gender {
  male = 'male',
  female = 'female',
}

export const gender = scalarType({
  name: 'Gender',
  asNexusMethod: 'gender',
  parseValue(value: Gender): Gender | undefined {
    if (Gender[value]) {
      return value;
    }
  },
  serialize(value) {
    return value;
  },
});

export enum Step {
  screening = 'screening',
  toBeShooting = 'toBeShooting',
  inShooting = 'inShooting',
  shootingComplete = 'shootingComplete',
  paymentCompleted = 'paymentCompleted',
}

export const step = scalarType({
  name: 'Step',
  asNexusMethod: 'step',
  parseValue(value: Step): Step | undefined {
    if (Step[value]) {
      return value;
    }
  },
  serialize(value) {
    return value;
  },
});

export enum ScheduleType {
  apply= 'apply',
  fail= 'fail',
  waiting= 'waiting',
  pass= 'pass',
  attending= 'attending',
  cancel= 'cancel',
}

export const scheduleType = scalarType({
  name: 'ScheduleType',
  asNexusMethod: 'scheduleType',
  parseValue(value: ScheduleType): ScheduleType | undefined {
    if (ScheduleType[value]) {
      return value;
    }
  },
  serialize(value) {
    return value;
  },
});

export const GQLDate = asNexusMethod(GraphQLDate, 'date', 'Date');
