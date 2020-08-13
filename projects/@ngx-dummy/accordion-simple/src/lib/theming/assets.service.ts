import { Injectable } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';

/**
 * @description
 *  A service to hold alternative images to be
 */
@Injectable()
export class AssetsService {
  private readonly itemAlterAssetsMap = new Map<number, {}>();

  constructor() { }

  setItem(itemIdx: number, assets: { openImg: string | SafeResourceUrl, closeImg: string | SafeResourceUrl; }) {
    if (!this.itemAlterAssetsMap.has(itemIdx))
      this.itemAlterAssetsMap.set(itemIdx, assets);
  }

  getItem(itemIdx: number) {
    if (!this.itemAlterAssetsMap.has(itemIdx)) throw Error(`AssetsSvc->itemAlterAssetsMap does not have ${itemIdx} entry ..!`);
    return this.itemAlterAssetsMap.get(itemIdx);
  }
  
}
