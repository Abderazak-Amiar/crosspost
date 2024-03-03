export const deleteImage = async (id: number) => {
  const response = await fetch('/api/images', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id: id }),
  });
  const data = await response.json();
  return data.res;
};
