import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AssetsService, AssetsServiceToken, assetsSvcFactoryProvider } from './assets.service';
import { Observable } from 'rxjs';

const l = console.log;

describe('AssetsService', () => {
  let assetSvc: AssetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [assetsSvcFactoryProvider]
    });
    assetSvc = TestBed.inject(AssetsServiceToken);
  });

  it('should be created', () => {
    expect(assetSvc).toBeTruthy();
  });
});