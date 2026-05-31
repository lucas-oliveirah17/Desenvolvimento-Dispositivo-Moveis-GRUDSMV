// unique([1,2,2]) → [1,2]
export const unique = <T>(arr: T[]): T[] => [...new Set(arr)];

// groupBy([{tipo:'A'},{tipo:'B'}],'tipo') → {A:[…], B:[…]}
export const groupBy = <T>(arr: T[], key: keyof T): Record<string, T[]> =>
  arr.reduce((acc, obj) => {
    // Convertendo explicitamente a chave para string para o TypeScript aceitar como índice de objeto
    const groupKey = String(obj[key]);

    (acc[groupKey] = acc[groupKey] || []).push(obj);
    return acc;
  }, {} as Record<string, T[]>);

// sumBy([{valor:10},{valor:5}], 'valor') → 15
export const sumBy = <T>(arr: T[], key: keyof T): number =>
  arr.reduce((total, obj) => {
    const value = obj[key];

    // Validação estrita para garantir que não somaremos undefined/strings
    const numValue = typeof value === 'number' ? value : 0;
    return total + numValue;
  }, 0);