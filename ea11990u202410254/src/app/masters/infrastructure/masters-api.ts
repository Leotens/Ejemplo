import { BaseApi } from '../../shared/infrastructure/base-api';
import {Vehicle} from '../domain/model/vehicle.entity';
import { HttpClient } from '@angular/common/http';
import {VehiclesApiEndpoint} from './vehicles-api-endpoint';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MastersApi extends BaseApi {
  private readonly vehiclesEndpoint: VehiclesApiEndpoint;

  constructor(http: HttpClient) {
    super();
    this.vehiclesEndpoint = new VehiclesApiEndpoint(http);
  }

  getVehicles(): Observable<Vehicle[]> {
    return this.vehiclesEndpoint.getAll();
  }

  getVehicle(id: number): Observable<Vehicle> {
    return this.vehiclesEndpoint.getById(id);
  }

  createVehicle(vehicle: Vehicle): Observable<Vehicle> {
    return this.vehiclesEndpoint.create(vehicle);
  }

  updateVehicle(vehicle: Vehicle): Observable<Vehicle> {
    return this.vehiclesEndpoint.update(vehicle, vehicle.id);
  }

  deleteVehicle(id: number): Observable<void> {
    return this.vehiclesEndpoint.delete(id);
  }
}
