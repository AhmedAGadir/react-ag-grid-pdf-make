import React from "react";

const MyCellRenderer = props => {
  let link = false;
  const styles = {};

  const pdfExportOptions = props.column.colDef.pdfExportOptions;
  if (pdfExportOptions) {
    if (pdfExportOptions.styles) {
      const {
        fontSize,
        bold,
        alignment,
        background,
        color
      } = pdfExportOptions.styles;

      styles.fontSize = fontSize ? fontSize + "px" : null;
      styles.fontWeight = bold ? "bold" : null;
      styles.textAlign = alignment ? alignment : null;
      styles.background = background ? background : null;
      styles.color = color ? color : null;
    }

    if (pdfExportOptions.createURL) {
      link = pdfExportOptions.createURL(props.value);
    }
  }

  if (props.value === undefined) {
    return null;
  }

  return (
    <div style={styles}>
      {link ? (
        <a
          href={link}
          target="popup"
          onClick={() => {
            window.open(link, "popup", "width=600,height=600");
            return false;
          }}
        >
          {props.value}
        </a>
      ) : (
        props.value
      )}
    </div>
  );
};

export default MyCellRenderer;
