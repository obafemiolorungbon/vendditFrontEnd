export const GetFormData =  (object, formData) => {
  Object.keys(object).forEach((key) => formData.append(key, object[key]));
  return formData;
}
