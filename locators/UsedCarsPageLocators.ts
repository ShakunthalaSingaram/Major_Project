
export const UsedCarsPageLocators = {
  usedCarsNavLink: 'a[data-track-label="nav-used-car"]',
  cityDropdownTitle: (cityName: string) => `title=${cityName}`, // Function typed with string param
  popularModelList: '.gsc_thin_scroll ul[class*="zw-sr-secLev"]',
  scrollLocatorXPath: '.gsc_thin_scroll',
  usedCarsHeaderXPath: '#usedcarttlID'
};

