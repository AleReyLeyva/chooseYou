export function validateForm(data) {
  const { name, foodType, price } = data;
  let valid = true;

  if (name.length === 0) valid = false;

  return valid;
}
