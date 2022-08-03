export default function Button({ label, type, onClick, disabled }) {
    return (
        <button
            className={`button-container ${type}`}
            onClick={onClick}
            disabled={disabled}
            style={{ opacity: disabled ? 0.5 : 1 }}
        >
            {label}
        </button>
    );
};