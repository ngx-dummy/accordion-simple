import { Injectable, InjectionToken, Provider } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { SafeResourceUrl } from '@angular/platform-browser';

const l = console.log;


export type NameImgsMap = { [key in 'src' | 'openSign' | 'closeSign']?: string };
export type Assets = { [K in keyof NameImgsMap]: NameImgsMap[K] };

@Injectable()
export class AssetsService {
  private readonly itemAlterAssetsMap = new Map<string, any>();

  constructor(private http: HttpClient) { }

  setItem<T extends Assets, K extends keyof Assets>({ aKey, aVal }: { aKey: K, aVal: T[K]; }) {
    if (this.keyInAssetsMap(aKey)) return;
    let res = this.getAssetsByKey(aVal);
    this.itemAlterAssetsMap.set(aKey, res.value);
    return this.getItem(aKey);
  }

  getItem(itemKey: string): Blob | string | Observable<Blob> | (() => unknown) {
    if (!this.itemAlterAssetsMap.has(itemKey)) throw Error(`AssetsSvc->itemAlterAssetsMap does not have ${itemKey} entry ..!`);
    let currValInMpa = this.itemAlterAssetsMap.get(itemKey);
    if (currValInMpa instanceof Observable) {
      let sub = currValInMpa.subscribe((blobRes: string | SafeResourceUrl) => {
        this.itemAlterAssetsMap.set(itemKey, blobRes);
      });
      return () => sub.unsubscribe();
    }
    return this.itemAlterAssetsMap.get(itemKey);
  }

  private keyInAssetsMap = (key: string) => (this.itemAlterAssetsMap.has(key));
  private getAssetsByKey = <T extends Assets, K extends keyof T>(val: T[K]) => ({ 'value': this.getImageBin(val) });

  private getImageBin(srcSrt): Observable<Blob> {
    return this.http.get(srcSrt, {
      headers: new HttpHeaders({ 'Accept': "image/png,image/*" }),
      observe: 'body',
      responseType: 'blob'
    }).pipe(
      tap(val => {
        l('BINARY ASSETS is  ::');
        l(val);
        l(typeof val);
      })
      // ,map(val => blobToSafeRes(v))
    );
  }

}

export const assetsSvcFactory = (http: HttpClient) => (new AssetsService(http));
export const AssetsServiceToken = new InjectionToken<AssetsService>('AssetsServiceToken');

export const assetsSvcFactoryProvider: Provider = {
  provide: AssetsServiceToken,
  useFactory: assetsSvcFactory,
  deps: [HttpClient]
};