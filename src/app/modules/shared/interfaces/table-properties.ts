export interface TableProperties {
  headers: Array<{ name: string; field: string; currency?: boolean }>;
  data: Array<any>;
  edit?: boolean;
}
