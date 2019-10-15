import { TestBed, inject } from '@angular/core/testing';
import { Constants } from '../app.constants';
import { AppService } from './app.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('AppService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [AppService],
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: AppService = TestBed.get(AppService);
    expect(service).toBeTruthy();
  });

  it('should get the users', inject([HttpTestingController, AppService],
    (httpMock: HttpTestingController, appService: AppService) => {
      const mockUsers = [
        {
          "id": 1,
          "name": "Leanne Graham",
          "username": "Bret",
          "email": "Sincere@april.biz",
          "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
              "lat": "-37.3159",
              "lng": "81.1496"
            }
          }
        }
      ]
      appService.getData().subscribe(data => {
        expect(data.length).toBe(1);
        expect(data).toEqual(mockUsers);
      });
      const mockReq = httpMock.expectOne(Constants.DataApi);
      expect(mockReq.cancelled).toBeFalsy();
      expect(mockReq.request.method).toEqual('GET');
      expect(mockReq.request.responseType).toEqual('json');
      mockReq.flush(mockUsers);
      httpMock.verify();
    })
  );
});