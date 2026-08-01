const toTimestamp = () => new Date().toISOString();

const buildErrorPayload = ({ error, req, status, message, reason }) => ({
    timestamp: toTimestamp(),
    method: req?.method || '',
    url: req?.originalUrl || req.url ||'',
    ip: req?.ip || '',
    userAgent: req?.headers['user-agent'] || '',
    status,
    message,
    reason,
});

const writeErrorLog = (payload) => {
    console.error('[ERROR]', payload);
};

export const logError = ({ error, req, status, message, reason }) => {
    const payload = buildErrorPayload({ error, req, status, message, reason });
    writeErrorLog(payload);
};