import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AreaModel } from './models/area.model';
import { plainToClass } from 'class-transformer';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { AreaAddModel } from './models/area-add.model';
import { AreaUpdateModel } from './models/area-update.model';

@Injectable()
export class AreaService {

    private readonly _areasUrl: string = 'api/areas';

    constructor(private http: HttpClient) { }

    getAreas(): Observable<AreaModel[]> {
        return this.http.get<AreaModel[]>(`${this._areasUrl}`)
            .map(record => plainToClass(AreaModel, record));
    }

    getArea(id: number): Observable<AreaModel> {
        return this.http.get<AreaModel>(`${this._areasUrl}/${id}`)
            .map(record => plainToClass(AreaModel, record));
    }

    addArea(area: AreaAddModel): Observable<any> {
        return this.http.put<AreaAddModel>(`${this._areasUrl}/create`, area);
    }

    updateArea(area: AreaUpdateModel): Observable<any> {
        return this.http.put<AreaUpdateModel>(`${this._areasUrl}/edit`, area);
    }

    deleteArea(id: number): Observable<any> {
        return this.http.delete(`${this._areasUrl}/${id}`);
    }
}