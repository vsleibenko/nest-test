import { Injectable } from '@nestjs/common';
import moment from 'moment';
import { v4 } from 'uuid';
import { CreateSessionDto } from './session.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Session } from './session.model';

@Injectable()
export class SessionService {
  constructor(
    @InjectModel(Session)
    private sessionModel: typeof Session
  ) {}

  createSession({ fingerprint, userId }: CreateSessionDto) {
    return this.sessionModel.create({
      expiresIn: moment().add(30, 'd').unix(),
      refreshToken: v4(),
      fingerprint,
      userId,
    });
  }
}
