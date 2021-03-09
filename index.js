import React, { useState } from "react";
import { render } from "react-dom";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import { simpleHttpRequest } from "ag-grid-community";
import MyCellRenderer from "./MyCellRenderer";
import { COLDEFS_WITHOUT_GROUPING } from "./columnDefs";

import GridOptionsPanel from "./GridOptionsPanel";
import PDFExportPanel from "./pdfExport/PDFExportPanel.js";

import "ag-grid-enterprise";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

import "./style.css";

const App = () => {
  const [gridApi, setGridApi] = useState(null);
  const [columnApi, setColumnApi] = useState(null);

  const [rowData, setRowData] = useState([]);

  const onGridReady = params => {
    setGridApi(params.api);
    setColumnApi(params.columnApi);

    simpleHttpRequest({
      url: "https://www.ag-grid.com/example-assets/olympic-winners.json"
    }).then(function(data) {
      data.forEach(r => {
        r.date = new Date();
      });
      setRowData(data.slice(1500, 2000));
    });
  };

  const onFirstDataRendered = params => {
    params.columnApi.autoSizeAllColumns();
  };

  const onColumnEverythingChanged = params => {
    let selectionCol = params.columnApi.getColumn("selection-col");
    if (selectionCol) {
      params.columnApi.moveColumn(selectionCol, 0);
    }
  };

  return (
    <div>
      <div className="form-wrap">
        <GridOptionsPanel gridApi={gridApi} columnApi={columnApi} />
        <PDFExportPanel gridApi={gridApi} columnApi={columnApi} />
      </div>
      <div className="grid-container">
        <div className="ag-theme-alpine" style={{ height: "100%" }}>
          <AgGridReact
            columnDefs={COLDEFS_WITHOUT_GROUPING}
            rowData={rowData}
            suppressPropertyNamesCheck
            defaultColDef={{
              cellRenderer: "myCellRenderer",
              filter: true,
              sortable: true,
              resizable: true,
              enableRowGroup: true,
              menuTabs: ["filterMenuTab"]
            }}
            frameworkComponents={{
              myCellRenderer: MyCellRenderer
            }}
            groupSelectsChildren
            rowSelection="multiple"
            onColumnEverythingChanged={onColumnEverythingChanged}
            onFirstDataRendered={onFirstDataRendered}
            onGridReady={onGridReady}
          />
        </div>
      </div>
    </div>
  );
};

render(<App />, document.getElementById("root"));
