export default (name: string): string => name.replace(/[^a-zA-Z\d]/g, '').toUpperCase();
