const getFormData = (imgRef: React.RefObject<HTMLInputElement>) => {
  const formData = new FormData();
  const file = imgRef.current?.files;
  if (!file?.length) return '';
  formData.append('image', file[0]);
  return formData;
};

export default getFormData;
