import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { DataTable } from "../Datatable";

const headers = [
  {
    key: "name",
    text: "name",
  },
  {
    key: "artist",
    text: "artists",
  },
  {
    key: "duration_ms",
    text: "duration",
  },
];
const dataSource = [
  { name: "NAME-TEST-1", artist: "ARTIST-TEST-1", duration_ms: 999 },
  { name: "NAME-TEST-2", artist: "ARTIST-TEST-2", duration_ms: 888 },
  { name: "NAME-TEST-3", artist: "ARTIST-TEST-3", duration_ms: 777 },
];

test("Datatable test", () => {
  render(<DataTable dataSource={dataSource} headers={headers} />);

  headers.forEach((header) => {
    const screenHeader = screen.getByText(header.text);
    expect(screenHeader).toBeInTheDocument();

    dataSource.forEach((data) => {
      const screenData = screen.getByText(data[header.key]);
      expect(screenData).toBeInTheDocument();
    });
  });
});
