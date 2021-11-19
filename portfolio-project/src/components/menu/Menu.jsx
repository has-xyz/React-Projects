import './Menu.css'
import MenuList from './menuList/MenuList'

export default function Menu({menuOpen, setMenuOpen}) {
    const list = [
        {
            href: '#intro',
            text: 'Home'
        },
        {
            href: '#portfolio',
            text: 'Portfolio'
        }

    ]
    return (
        <div className={'menu ' + (menuOpen && 'active')}>
            <ul>
                {list.map((item) => ((
                    <MenuList href={item.href} text={item.text} setMenuOpen={setMenuOpen}/>
                )))}
            </ul>
        </div>
    )
}
