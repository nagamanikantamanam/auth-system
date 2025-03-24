import pgPromise from 'pg-promise';
import { dbConfig } from '../config/db.config';
import { ApiError } from '../utils/api-error';
import { StatusCodes } from 'http-status-codes';

const pgp = pgPromise({
  error(err, e) {
    throw new ApiError(
      'Database operation failed',
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  },
});

export const db = pgp(dbConfig);
