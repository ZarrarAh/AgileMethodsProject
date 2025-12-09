interface ErrorMessageProps {
    message: string;
    onRetry?: () => void;
}

const ErrorMessage = ({ message, onRetry }: ErrorMessageProps) => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-danger/10 border-2 border-danger rounded-lg p-8 max-w-md">
                <h2 className="text-xl font-bold text-white mb-4">⚠️ Error</h2>
                <p className="text-gray-300 mb-4">{message}</p>
                {onRetry && (
                    <button
                        onClick={onRetry}
                        className="bg-primary-cyan hover:bg-primary-cyan/80 text-dark-bg font-semibold px-6 py-3 rounded-lg"
                    >
                        Prøv igjen
                    </button>
                )}
            </div>
        </div>
    );
};

export default ErrorMessage;