export default class Shopper {
  private id: string;
  private tradingName: string;
  private ownerName: string;
  private document: string;
  private coverageArea: any;
  private address: any;

  constructor(id: string, tradingName: string, ownerNamer: string, document: string, coverageArea: any, address: any) {
    this.id = id;
    this.tradingName = tradingName;
    this.ownerName = ownerNamer;
    this.document = document;
    this.coverageArea = coverageArea;
    this.address = address;
  }

  public getId() { return this.id; }
  public getTradingName() { return this.tradingName; }
  public getOwnerName() { return this.ownerName; }
  public getDocument() { return this.document; }
  public getCoverageArea() { return this.coverageArea; }
  public getAddress() { return this.address; }
}
