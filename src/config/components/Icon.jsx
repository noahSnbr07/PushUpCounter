export default function Icon({ icon, className, ...props }) {
    return <span {...props} className={`material-symbols-outlined ${className ? className : ''}`}>{icon}</span>
}
