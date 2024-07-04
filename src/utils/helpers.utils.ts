export const timeAgo = (epoch: number): string => {
  const normalizeEpoch =
    epoch.toString().length > 10 ? Math.floor(epoch / 1000) : epoch; // Normalize to seconds if it's milliseconds

  const currentTime = Math.floor(Date.now() / 1000);
  const timeDifference = currentTime - normalizeEpoch;

  if (timeDifference < 0) {
    return 'The input epoch time is in the future.';
  }

  const minutes = Math.floor(timeDifference / 60);
  const hours = Math.floor(timeDifference / 3600);
  const days = Math.floor(timeDifference / 86400);

  if (minutes < 60) {
    return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
  } else if (hours < 24) {
    return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
  } else {
    return `${days} day${days !== 1 ? 's' : ''} ago`;
  }
};
