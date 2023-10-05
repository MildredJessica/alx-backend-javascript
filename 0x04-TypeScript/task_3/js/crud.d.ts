import { RowID, RowElement } from './interface';

declare module 'crud.js' {
  export function insertRow(row: RowElement): RowID;
  export function updateRow(rowID: RowID, updatedRow: RowElement): void;
  export function deleteRow(rowID: RowID): void;
}
