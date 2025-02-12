export const formatTimeAgo = (date: string) => {
  const now = new Date();
  const createdAt = new Date(date);
  const diffInSeconds = Math.floor((now.getTime() - createdAt.getTime()) / 1000);
  
  const seconds = diffInSeconds;
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30); // Aproximação para meses
  const years = Math.floor(months / 12);
  
  if (years > 0) return `${years}a`; // anos
  if (months > 0) return `${months}m`; // meses
  if (weeks > 0) return `${weeks}sem`; // semanas
  if (days > 0) return `${days}d`; // dias
  if (hours > 0) return `${hours}hr`; // horas
  if (minutes > 0) return `${minutes}min`; // minutos
  if (seconds > 0) return `${seconds}s`; // segundos
  return 'Agora'; // Caso não haja diferença
};
