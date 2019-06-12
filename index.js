import groupBy from 'lodash.groupby';

const createSections = (data, key) =>
  Object.entries(groupBy(data, entry => entry[key])).map(([sectionTitle, sectionData]) => ({
    [key]: sectionTitle,
    data: sectionData,
  }));

export default createSections;
