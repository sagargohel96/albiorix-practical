import React, { useMemo } from "react";
import { Box, Card, CardSection, Image, Text, Title } from "@mantine/core";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Product } from "../../data";

export const Details = () => {
  const { id } = useParams();
  const products = useSelector(
    (state: { products: Product[] }) => state.products
  );
  const product: Product | undefined = products.find(
    (p: Product) => p.id === id
  );
  console.log(product?.image, "image");

  return (
    <Box
      style={{
        width: "100%",
        alignItems: "center",
        display: "flex",
        margin: "30px",
      }}
    >
      <Card shadow="sm" style={{ maxWidth: 300 }}>
        <Image src={product?.image} alt="alt" />
        <Title order={3} mt="xs">
          {product?.name}
        </Title>
        <Text>{product?.description}</Text>
        <Text>Quantity : {product?.quantity}</Text>
        <Text
          style={
            product?.status === "Active" ? { color: "green" } : { color: "red" }
          }
        >
          Status : {product?.status}
        </Text>
        <Text>Price : {product?.price}</Text>
      </Card>
    </Box>
  );
};
