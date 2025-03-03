interface IPropertyValue {
  name: string;
  value: string;
}

interface IIdentity {
  type: string;
  value: string;
}

interface IOwnershipInfo {
  ownedBy: {
    name: string;
  };
  ownedFrom: Date;
  ownedThrough?: Date;
}

interface IRepairAction {
  actionStatus: string;
  startTime: Date;
  description: string;
}

interface IOfferWarranty {
  durationOfWarranty: {
    value: number;
    unitCode: string;
  };
  warrantyScope: {
    name: string;
  };
}

interface IOffer {
  price: number;
  priceCurrency: string;
  availability: string;
  itemCondition: string;
  warranty: IOfferWarranty;
}

export interface IProduct {
  name: string;
  url: string;
  image: string[];
  description: string;
  categories: string[];
  tags: string[];
  audience: string[];
  brand: {
    name: string;
  };
  manufacturer: {
    name: string;
    url?: string;
  };
  color: {
    name: string;
    hex: string;
  };
  productionDate: Date;
  offers: IOffer;
  productDimensions: {
    value: string;
    unitText: string;
  };
  weight: {
    value: number;
    unitText: string;
  };
  additionalProperty: IPropertyValue[];
  ownershipHistory: IOwnershipInfo[];
  repairHistory: IRepairAction[];
  identity: IIdentity[];
  manual: string;
  privacyPolicy: string;
  customProperties?: any;
}