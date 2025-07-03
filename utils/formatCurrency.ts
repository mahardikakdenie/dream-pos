/**
 * Fungsi untuk memformat angka ke format Rupiah
 * @param amount - Angka yang ingin diformat (bisa float atau integer)
 * @returns string - Nilai dalam format Rp1.000.000
 */
export const formatCurrency = (amount: number | string): string => {
  // Pastikan input berupa number
  const numAmount = typeof amount === 'string' ? parseFloat(amount) : amount;

  if (isNaN(numAmount)) return 'Rp0';

  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(numAmount);
}
