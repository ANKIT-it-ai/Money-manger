export const formatMoney = (value) =>
  new Intl.NumberFormat('en-IN', {
    maximumFractionDigits: 0,
    style: 'currency',
    currency: 'INR',
  }).format(Number.isFinite(value) ? value : 0)

export const readNumber = (value) => Number(value) || 0
