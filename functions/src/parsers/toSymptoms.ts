import Symptom from '../types/Symptom';

// function toSymptom(symptom: string): Symptom {
//   const sanitized = symptom.trim();

//   if (sanitized === '') {
//     return null;
//   }

//   return sanitized as Symptom;
// }

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function toSymptoms(symptoms: string): Symptom[] {
  // TODO: Currently, symptoms data is blank in ArcGIS
  return [] as Symptom[];
}
