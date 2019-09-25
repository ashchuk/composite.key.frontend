import { Transform } from 'class-transformer';
import * as moment from 'moment';
import { Moment } from 'moment';

export class AreaModel {
    id: number;
    name: string;

    @Transform(value => moment(value).isValid() ? moment(value).format('DD/MM/YYYY HH:mm') : null, { toClassOnly: true })
    createdOn: Moment;
    createdById: number;

    @Transform(value => moment(value).isValid() ? moment(value).format('DD/MM/YYYY HH:mm') : null, { toClassOnly: true })
    updatedOn: Moment | null;
    updatedById: number;
}