import NavItem from "./NavItem"

const navItems = [
    {
    label: 'Why Cypress?',
    path: '/',
    dataTest:'nav-item-why-cypress'
    },
    {
    label: 'Overview',
    path: '/overview',
    dataTest:'nav-item-overview'
    },
    {
    label: 'Fundamentals',
    path: '/fundamentals',
    dataTest:'nav-item-fundamentals'
    },
    {
        label: 'Forms',
        path: '/forms',
        dataTest:'nav-item-forms'
    },
    {
        label: 'Examples',
        path: '/examples',
        dataTest:'nav-item-examples'
    },
    {
        label: 'Component',
        path: '/component',
        dataTest:'nav-item-component'
    },
    {
        label: 'Best Practices',
        path: '/best-practices',
        dataTest:'nav-item-best-practices'
    },
]

export default function NavBar(){
    return (
        <ul className="nav-bar">
            {
                navItems.map((item)=> (
                    <NavItem key={item.label} 
                    label={item.label} 
                    path={item.path} 
                    dataTest={item.dataTest}
                    />
                ))
            }
        </ul>
    )
}