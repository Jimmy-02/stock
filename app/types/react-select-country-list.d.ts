declare module "react-select-country-list" {
  export interface CountryData {
    label: string;
    value: string;
  }

  interface CountryListInstance {
    getData: () => CountryData[];
    getLabel: (value: string) => string;
    getValue: (label: string) => string;
    getLabels: () => string[];
    getValues: () => string[];
    setLabel: (value: string, label: string) => void;
    setEmpty: () => void;
    native: () => CountryListInstance;
  }

  function countryList(): CountryListInstance;

  export default countryList;
}