import * as yup from "yup";

const MAX_FILE_SIZE = 102400; //100KB

const validFileExtensions: any = {
  image: ["jpg", "gif", "png", "jpeg", "svg", "webp"],
};

function isValidFileType(fileName: string, fileType: string) {
  return (
    fileName &&
    validFileExtensions[fileType as string].indexOf(fileName.split(".").pop()) >
      -1
  );
}

export const formValidation = yup.object().shape({
  name: yup.string().required("Name is required"),
  description: yup.string().required("Description is required"),
  price: yup
    .number()
    .min(0, "Price must be greater than or equal to 0")
    .required("Price is required"),
  quantity: yup
    .number()
    .min(0, "Quantity must be greater than or equal to 0")
    .required("Quantity is required"),
  status: yup
    .string()
    .oneOf(["Active", "Inactive"], "Invalid status")
    .required("Status is required"),
  image: yup
    .mixed()
    .required("Please upload a valid file")
    .test(
      "fileFormat",
      "Only support .jpg, .jpeg, .png formats",
      (value: any) => {
        return (
          value.includes("data:image/jpeg;base64,") ||
          value.includes("data:image/png;base64,") ||
          value.includes("data:image/jpg;base64,")
        );
      }
    ),
});
