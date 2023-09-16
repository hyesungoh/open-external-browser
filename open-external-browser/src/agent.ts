export const getUA = () => {
  if (navigator.userAgent) {
    return navigator.userAgent;
  }

  if (navigator.userAgentData) {
    const allBrands = navigator.userAgentData.brands.map((brand) => brand.brand).join(' ');
    return allBrands;
  }

  throw new Error('There are not user agent data');
};
