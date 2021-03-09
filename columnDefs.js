const COL_SELECTION = {
  headerCheckboxSelection: true,
  checkboxSelection: true,
  colId: "selection-col",
  maxWidth: 50,
  pdfExportOptions: {
    skipColumn: true
  }
};

const COL_ATHLETE = {
  headerName: "Athlete",
  field: "athlete",
  width: 100,
  pdfExportOptions: {
    createURL: value => {
      if (!value) {
        return "";
      }
      return `https://en.wikipedia.org/wiki/${value.replace(/\s/g, "_")}`;
    }
  }
};
const COL_COUNTRY = {
  headerName: "Country",
  field: "country",
  pdfExportOptions: {
    styles: {
      background: "lightseagreen",
      bold: true,
      color: "white",
      alignment: "center"
    }
  }
};
const COL_AGE = {
  headerName: "Age (Not Exported)",
  field: "age",
  minWidth: 60,
  pdfExportOptions: {
    skipColumn: true
  }
};
const COL_DATE = {
  headerName: "Date",
  colId: "date",
  valueGetter: params => {
    if (params.node.group) {
      return null;
    }
    let date = params.data.date;
    var dd = String(date.getDate()).padStart(2, "0");
    var mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = date.getFullYear();
    return mm + "/" + dd + "/" + yyyy;
  }
};
const COL_SPORT = { headerName: "Sport", field: "sport" };
const COL_GOLD = { headerName: "Gold", field: "gold", aggFunc: "sum" };
const COL_SILVER = { headerName: "Silver", field: "silver", aggFunc: "sum" };
const COL_BRONZE = { headerName: "Bronze", field: "bronze", aggFunc: "sum" };

export const COLDEFS_WITH_GROUPING = [
  COL_SELECTION,
  {
    headerName: "Athlete Details",
    colId: "athlete-details",
    children: [COL_ATHLETE, COL_COUNTRY, COL_SPORT]
  },
  COL_AGE,
  COL_DATE,
  {
    headerName: "Medals",
    colId: "medals",
    children: [COL_GOLD, COL_SILVER, COL_BRONZE]
  }
];

export const COLDEFS_WITHOUT_GROUPING = [
  COL_SELECTION,
  COL_ATHLETE,
  COL_COUNTRY,
  COL_SPORT,
  COL_AGE,
  COL_DATE,
  COL_GOLD,
  COL_SILVER,
  COL_BRONZE
];
