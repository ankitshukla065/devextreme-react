export interface IModel {
  customTypes: ICustomType[];
  widgets: IWidget[];
}

export interface IWidget {
  complexOptions: IComplexProp[];
  exportPath: string;
  isEditor: boolean;
  isExtension: boolean;
  name: string;
  options: IProp[];
  templates: string[];
}

export interface IProp {
  isSubscribable: boolean;
  name: string;
  props: IProp[];
  types: ITypeDescr[];
}

export interface IComplexProp {
  isCollectionItem: boolean;
  name: string;
  optionName: string;
  owner: string;
  props: IProp[];
  templates: string[];
}

export interface ICustomType {
  name: string;
  props: IProp[];
  templates: string[];
  types: ITypeDescr[];
}

export interface ITypeDescr {
  acceptableValues: string[];
  isCustomType: boolean;
  type: string;
}

export interface IArrayDescr extends ITypeDescr {
  itemTypes: ITypeDescr[];
}

export interface IFunctionDescr extends ITypeDescr {
  params: {
    name: string;
    types: ITypeDescr[];
  }[]; // tslint:disable-line:array-type
  returnValueType: ITypeDescr;
}

export interface IObjectDescr extends ITypeDescr {
  fields: {
    name: string;
    types: ITypeDescr[];
  }[]; // tslint:disable-line:array-type
}
