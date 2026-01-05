

export default function ButtonSkeleton({ className, children }) {

    return (
        <button className={`rounded-xl border text-sm custom-border custom-shadow ${className}`}>
            {children}
        </button>
    )
}