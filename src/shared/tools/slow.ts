export const slow = (seconds: number) => {
  return new Promise((sucess) => {
    setTimeout(() => {
      sucess(true);
    }, seconds * 1000);
  });
};
