export const imageToBase64Str = (file: File): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    if (!file) {
      reject(new Error("No file provided"));
      return;
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      resolve(base64String);
    };
    reader.onerror = (error) => {
      reject(error);
    };
    reader.readAsDataURL(file);
  });
};
