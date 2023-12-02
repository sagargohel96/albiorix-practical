import React from "react";
import { Box, Table as MNtable, TextInput } from "@mantine/core";

interface TableProps {
  row: React.ReactNode | undefined;
  head: React.ReactNode;
}
export const Table: React.FC<TableProps> = ({ row, head }) => {
  return (
    <Box style={{ padding: "20px" }}>
      <MNtable.ScrollContainer minWidth={100} style={{ width: "100%" }}>
        <MNtable withTableBorder highlightOnHover>
          <MNtable.Thead>{head}</MNtable.Thead>
          <MNtable.Tbody>{row}</MNtable.Tbody>
        </MNtable>
      </MNtable.ScrollContainer>
    </Box>
  );
};
