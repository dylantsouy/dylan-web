export const emailValidator = () => {
  return /^([a-zA-Z0-9_.\-+])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
};
export const numValidator = () => {
  return /^\d+$/;
};

export const noChineseValidator = () => {
  return /^[^\u4e00-\u9fa5]+$/;
};
