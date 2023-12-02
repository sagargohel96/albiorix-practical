import { Box, Button, Select, TextInput, Textarea, Title } from "@mantine/core";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import s from "./form.module.css";
import { useFormik } from "formik";
import { formValidation } from "../../validationSchema/";
import { Error } from "../error";
import { v4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store";
import { create, edit } from "../../../src/reducer";
import { Product } from "../../data";
import { Dropzone } from "../dropzone";

export const ProductForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();

  const products = useSelector(
    (state: { products: Product[] }) => state.products
  );

  const formik = useFormik({
    initialValues: {
      id: v4(),
      name: "",
      quantity: 0,
      price: 0,
      status: "Active",
      description: "",
      image: "",
    },
    validationSchema: formValidation,
    onSubmit: (values) => {
      console.log(values, "valid");
      if (id) {
        dispatch(edit({ id: id, product: values }));
        resetForm();
        navigate("/");
      } else {
        dispatch(create(values));
        resetForm();
        navigate("/");
      }
    },
  });

  const { handleBlur, handleChange, handleSubmit, touched, errors, resetForm } =
    formik;

  useEffect(() => {
    const product = products.find((product) => product.id === id);
    if (id && product) {
      formik.setValues(product);
    }
  }, [id]);

  return (
    <Box style={{ width: "100%" }}>
      <Title pl={20} mt={10}>
        Add product
      </Title>
      <form onSubmit={handleSubmit}>
        <Box className={s.container}>
          <Box>
            <TextInput
              id="name"
              placeholder="name "
              withAsterisk
              autoComplete="off"
              label="name"
              value={formik.values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Box className={s.error}>
              {touched.name && errors.name && <Error name={errors.name} />}
            </Box>
          </Box>
          <Box>
            <TextInput
              id="quantity"
              placeholder="quantity"
              withAsterisk
              autoComplete="off"
              label="quantity"
              value={formik.values.quantity}
              onChange={handleChange}
              onBlur={handleBlur}
              type="number"
              onFocus={() => formik.setFieldValue("quantity", "")}
            />
            <Box className={s.error}>
              {touched.quantity && errors.quantity && (
                <Error name={errors.quantity} />
              )}
            </Box>
          </Box>
          <Box>
            <TextInput
              id="price"
              placeholder="price"
              withAsterisk
              autoComplete="off"
              label="price"
              value={formik.values.price}
              onChange={handleChange}
              onBlur={handleBlur}
              type="number"
              onFocus={() => formik.setFieldValue("price", "")}
            />
            <Box className={s.error}>
              {touched.price && errors.price && <Error name={errors.price} />}
            </Box>
          </Box>
          <Box>
            <Select
              onChange={(e) => formik.setFieldValue("status", e)}
              onBlur={handleBlur}
              value={formik.values.status}
              id="status"
              label="status"
              placeholder="status"
              data={["Active", "Inactive"]}
            />
          </Box>
          <Box>
            <Textarea
              id="description"
              label="description"
              placeholder="description"
              value={formik.values.description}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Box className={s.error}>
              {touched.description && errors.description && (
                <Error name={errors.description} />
              )}
            </Box>
          </Box>
          <Box>
            <Dropzone
              setFiledValue={formik.setFieldValue}
              error={errors.image}
              value={formik.values.image}
            />
            <Box
              style={{
                justifyContent: "flex-end",
                display: "flex",
              }}
            >
              <Button type="submit" w={200} h={50}>
                submit
              </Button>
            </Box>
          </Box>
        </Box>
      </form>
    </Box>
  );
};
