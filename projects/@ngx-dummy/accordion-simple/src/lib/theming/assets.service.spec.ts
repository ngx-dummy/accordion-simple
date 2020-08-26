import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AssetsService, AssetsServiceToken, assetsSvcFactoryProvider } from './assets.service';

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
    // expect(true).toBeTruthy();
  });

  it('should give info about asset', () => {
    assetSvc.setItem({ aKey: 'src', aVal: '../../helpers/test-assets/logo.png' });
  });
});