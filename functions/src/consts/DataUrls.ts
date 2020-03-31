enum DataUrls {
  NCOVIDTRACKER_LOCAL_CASES = 'https://services5.arcgis.com/mnYJ21GiFTR97WFg/arcgis/rest/services/PH_masterlist/FeatureServer/0/query?f=json&where=1%3D1&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=sequ%20ASC&outSR=102100&resultOffset=0&resultRecordCount=10000',
  NCOVIDTRACKER_LOCAL_CASES2 = 'https://services5.arcgis.com/mnYJ21GiFTR97WFg/arcgis/rest/services/PH_masterlist/FeatureServer/0/query?f=json&where=1%3D1&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=sequ%20ASC&outSR=102100&resultOffset=2000&resultRecordCount=10000',
  NCOVIDTRACKER_FOREIGN_NATIONAL_CASES = 'https://services5.arcgis.com/mnYJ21GiFTR97WFg/arcgis/rest/services/FN_masterlist/FeatureServer/0/query?f=json&where=1%3D1&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=FID%20ASC&outSR=102100&resultOffset=0&resultRecordCount=10000',
  NCOVIDTRACKER_OFW_CASES = 'https://services5.arcgis.com/mnYJ21GiFTR97WFg/arcgis/rest/services/OF_masterlist/FeatureServer/0/query?f=json&where=1%3D1&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=num%20ASC&outSR=102100&resultOffset=0&resultRecordCount=10000',
  NCOVIDTRACKER_CONFIRMED_PER_HEALTH_FACILITY = 'https://services5.arcgis.com/mnYJ21GiFTR97WFg/arcgis/rest/services/conf_fac_tracking/FeatureServer/0/query?f=json&where=1%3D1&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=count_%20ASC',
  NCOVIDTRACKER_PUI_PER_HEALTH_FACILITY = 'https://services5.arcgis.com/mnYJ21GiFTR97WFg/arcgis/rest/services/PUI_fac_tracing/FeatureServer/0/query?f=json&where=1%3D1&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*',
  NCOVIDTRACKER_COUNTS = 'https://services5.arcgis.com/mnYJ21GiFTR97WFg/arcgis/rest/services/slide_fig/FeatureServer/0/query?f=json&where=1%3D1&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*',
  NCOVIDTRACKER_CONFIRMED_CASES_TREND = 'https://services5.arcgis.com/mnYJ21GiFTR97WFg/arcgis/rest/services/confirmed/FeatureServer/0/query?f=json&where=1%3D1&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=date%20ASC',
  NCOVIDTRACKER_HOSPITALS_LEVEL_1 = 'https://services5.arcgis.com/mnYJ21GiFTR97WFg/arcgis/rest/services/hosplevel12018/FeatureServer/0/query?f=json&where=1%3D1&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*',
  NCOVIDTRACKER_HOSPITALS_LEVEL_2 = 'https://services5.arcgis.com/mnYJ21GiFTR97WFg/arcgis/rest/services/hosplevel22018/FeatureServer/0/query?f=json&where=1%3D1&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*',
  NCOVIDTRACKER_HOSPITALS_LEVEL_3 = 'https://services5.arcgis.com/mnYJ21GiFTR97WFg/arcgis/rest/services/hosplevel32018/FeatureServer/0/query?f=json&where=1%3D1&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*',
}

export default DataUrls;
