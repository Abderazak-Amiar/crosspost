import axios from 'axios';

export const uploadImage = async (formData: FormData) => {
  const status = await axios
    .post('/api/images', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then(function (response) {
      return response.status;
    })
    .catch(function (error) {
      console.log(error);
    });
  return status;
};
