import './menuList.css'

export default function MenuList({href, text, setMenuOpen}) {
    return (
        <li onClick={() => setMenuOpen(false)}>
            <a href={href}>
                {text}
            </a>
        </li>
    )
}
