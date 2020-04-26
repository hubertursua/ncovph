import toLocation from 'ncovph-parser/dist/parsers/toLocation';
import Location from 'ncovph-parser/dist/types/Location';

export default (cityProvince: string): Location => {
  const sanitized = cityProvince.trim()
    .replace(/(Oriental\sMindoro)/g, 'Mindoro Oriental')
    .replace(/(Occidental\sMindoro)/g, 'Mindoro Occidental');

  return toLocation(sanitized);
};
