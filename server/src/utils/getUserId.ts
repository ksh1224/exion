import jwt from 'jsonwebtoken';

const APP_SECRET = 'GraphQL-is-aw3some';

function getUserId(context: any) {
  const Authorization = context.request.get('Authorization');
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '');
    const { userId }: any = jwt.verify(token, APP_SECRET);
    return userId;
  }

  throw new Error('Not authenticated');
}

export default {
  APP_SECRET,
  getUserId,
};
