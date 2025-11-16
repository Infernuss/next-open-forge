export function generateUsername(firstName: string, lastName: string): string {
  return `${firstName}${lastName}`.toLowerCase().replaceAll(/\s+/g, "");
}
