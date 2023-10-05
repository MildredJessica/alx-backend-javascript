// task_3/js/main.ts

/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from 'crud.js';

// Create a row with the type RowElement
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

// Insert the row and get the assigned RowID
const newRowID: RowID = CRUD.insertRow(row);

// Update the row's age field
const updatedRow: RowElement = {
  ...row,
  age: 23,
};

// Call the updateRow and deleteRow commands
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
