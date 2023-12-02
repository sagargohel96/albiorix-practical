import React, { useMemo, useState } from "react";
import { Table } from "../../components";
import { Product } from "../../data";
import { Box, Table as MNtable, TextInput } from "@mantine/core";
import RowActionMenu from "../../components/table/rowActionMenu";
import { useSelector } from "react-redux";
import { useTextSearch } from "../../hook/useSearch";
import { IconSearch } from "@tabler/icons-react";

export const Home: React.FC = () => {
  const [searchText, setStateText] = useState("");
  const products = useSelector(
    (state: { products: Product[] }) => state.products
  );
  const searchedProducts = useTextSearch(searchText);
  console.log(searchedProducts, "searching products");

  const head = useMemo(
    () => ["sr no.", "name", "quantity", "price", "status", "action"],
    []
  );

  const headerCells = useMemo(
    () =>
      head.map((item: string, index: number) => (
        <MNtable.Th key={index}>{item}</MNtable.Th>
      )),
    [head]
  );

  const rows = useMemo(
    () =>
      searchedProducts.length ? (
        searchedProducts.map((product: Product, index: number) => (
          <MNtable.Tr key={index}>
            <MNtable.Td>{index + 1}</MNtable.Td>
            <MNtable.Td>{product.name}</MNtable.Td>
            <MNtable.Td>{product.quantity}</MNtable.Td>
            <MNtable.Td>{product.price}</MNtable.Td>
            <MNtable.Td
              style={
                product.status === "Active"
                  ? { color: "green" }
                  : { color: "red" }
              }
            >
              {product.status}
            </MNtable.Td>
            <MNtable.Td>
              <RowActionMenu id={product.id} />
            </MNtable.Td>
          </MNtable.Tr>
        ))
      ) : (
        <MNtable.Tr>
          <MNtable.Td>No data found!</MNtable.Td>
        </MNtable.Tr>
      ),
    [searchedProducts]
  );

  return (
    <>
      <Box style={{ width: "30%", margin: "10px 20px" }}>
        <TextInput
          onChange={(e) => setStateText(e.target.value)}
          placeholder="search"
          leftSection={<IconSearch />}
        />
      </Box>
      <Table row={rows} head={headerCells} />
    </>
  );
};
