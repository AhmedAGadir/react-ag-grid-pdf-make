import React from "react";
import { COLDEFS_WITH_GROUPING, COLDEFS_WITHOUT_GROUPING } from "./columnDefs";

const GridOptionsPanel = props => {
  const updateColumnGrouping = event => {
    const withColumnGroups = event.target.checked;

    props.gridApi.setColumnDefs(
      withColumnGroups ? COLDEFS_WITH_GROUPING : COLDEFS_WITHOUT_GROUPING
    );
  };

  const updateGroupByCountry = event => {
    props.columnApi.applyColumnState({
      state: [
        {
          colId: "country",
          rowGroup: event.target.checked
        }
      ],
      defaultState: {
        rowGroup: false
      }
    });
  };

  const updateFilterByArgentina = event => {
    const countryFilterComponent = props.gridApi.getFilterInstance("country");
    const filterModel = event.target.checked ? { values: ["Argentina"] } : null;
    countryFilterComponent.setModel(filterModel);
    props.gridApi.onFilterChanged();
  };

  const updateSortAthleteAsc = event => {
    let athleteSort = event.target.checked ? "asc" : null;

    props.columnApi.applyColumnState({
      state: [{ colId: "athlete", sort: athleteSort }],
      defaultState: { sort: null }
    });
  };

  return (
    <form>
      <h4 className="text-secondary">Grid Options</h4>
      <span className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id="grid-setting-column-groups"
          onChange={updateColumnGrouping}
        />
        <label className="form-check-label" for="grid-setting-column-groups">
          Column Groups
        </label>
      </span>
      <span className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id="grid-setting-group-country"
          onChange={updateGroupByCountry}
        />
        <label className="form-check-label" for="grid-setting-group-country">
          Group by "country"
        </label>
      </span>
      <span className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id="grid-setting-filter-argentina"
          onChange={updateFilterByArgentina}
        />
        <label className="form-check-label" for="grid-setting-filter-argentina">
          Filter by "Argentina"
        </label>
      </span>
      <span className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id="grid-setting-sort-athlete-asc"
          onChange={updateSortAthleteAsc}
        />
        <label className="form-check-label" for="grid-setting-sort-athlete-asc">
          Sort Athlete (ascending)
        </label>
      </span>
    </form>
  );
};

export default GridOptionsPanel;
