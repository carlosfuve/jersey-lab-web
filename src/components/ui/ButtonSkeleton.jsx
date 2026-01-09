

export default function ButtonSkeleton({ className, colorBg, colorText, handleClick, children }) {

    const baseCSS = 'cursor-pointer rounded-xl text-sm backdrop-blur custom-shadow  px-4 py-2 hover:scale-105 active:scale-95 transition-all duration-150 ease-in-out select-none';
    const finalClassName = baseCSS + ' ' + (className || '') + ' ' + (colorBg || '') + ' ' + (colorText || '');

    return (
        <button className={finalClassName} onClick={handleClick}>
            {children}
        </button>
    )
}