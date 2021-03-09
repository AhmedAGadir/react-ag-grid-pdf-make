import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

import getDocDefinition from "./docDefinition";

function printDoc(printParams, gridApi, columnApi) {
  console.log("Exporting to PDF...");
  const docDefinition = getDocDefinition(printParams, gridApi, columnApi);
  pdfMake.createPdf(docDefinition).download();
}

export default printDoc;
