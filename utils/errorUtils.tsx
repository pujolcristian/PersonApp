export const handleError = (error: any, defaultMessage: string) => {
    if (error.response) {
        const errorMessage = error.response.data.message || defaultMessage;
        console.error(error.toString());
        console.error(errorMessage);
        throw new Error(error.response.data.error || errorMessage);
    } else {
        console.error('Network or client error:', error.message, error.response, error.toString());
        throw new Error('Network or client error');
    }
};
