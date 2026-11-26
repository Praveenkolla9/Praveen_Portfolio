const MONTHS = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
];

/**
 * Formats a YYYY-MM string into "MMM YYYY" (e.g., "2025-10" -> "Oct 2025").
 */
export function formatMonthYear(value) {
  if (!value) return 'Present';
  const [year, month] = value.split('-');
  const idx = parseInt(month, 10) - 1;
  if (Number.isNaN(idx) || idx < 0 || idx > 11) return value;
  return `${MONTHS[idx]} ${year}`;
}

export function formatDateRange(startDate, endDate, isCurrent = false) {
  const start = formatMonthYear(startDate);
  const end = isCurrent || !endDate ? 'Present' : formatMonthYear(endDate);
  return `${start} – ${end}`;
}
