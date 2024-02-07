export function formatTimeSincePublication(seconds: string) {
    const now = new Date();
    const publicationDate = new Date(parseInt(seconds) * 1000);

    const diffMilliseconds = now.getTime() - publicationDate.getTime();
    const diffSeconds = Math.floor(diffMilliseconds / 1000);

    if (diffSeconds < 60) {
        return "только что";
    } else if (diffSeconds < 3600) {
        return formatMinutes(diffSeconds);
    } else if (diffSeconds < 86400) {
        return formatHours(diffSeconds);
    } else {
        return formatDays(diffSeconds);
    }
}

function formatMinutes(seconds: number) {
    const minutes = Math.floor(seconds / 60);
    if (minutes === 1) {
        return "1 минуту назад";
    } else {
        return `${minutes} минут назад`;
    }
}

function formatHours(seconds: number) {
    const hours = Math.floor(seconds / 3600);
    if (hours === 1) {
        return "1 час назад";
    } else {
        return `${hours} часов назад`;
    }
}

function formatDays(seconds: number) {
    const days = Math.floor(seconds / 86400);
    if (days === 1) {
        return "1 день назад";
    } else {
        return `${days} дней назад`;
    }
}
