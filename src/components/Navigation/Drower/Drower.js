import React from 'react' 
import classes from './Drower.module.css'
import Backdrop from '../../UI//Backdrop/Backdrop'
import {NavLink} from 'react-router-dom'

const links = [
    {to: '/', lable: 'Список', exect: true},
    {to: '/auth', lable: 'Авторизация', exect: false},
    {to: '/quiz-creator', lable: 'Создать тест', exect: false},
]

class Drower extends React.Component {

    clickHandler = () => {
        this.props.onClose()
    }

    renderLinks() {
        return links.map((link, index) => {
            return (
                <li key={index}> 
                    <NavLink
                        to={link.to}
                        exact={link.exect}
                        activeClassName={classes.active}
                        onClick={this.clickHandler}
                    >
                        {link.lable}
                    </NavLink>
                </li>
            )
        })
    }

    render() {
        const cls = [classes.Drower]

        if (!this.props.isOpen) {
            cls.push(classes.close)
        }

        return (
            <>
                <nav className={cls.join(' ')}>
                    <ul>
                        {this.renderLinks()}
                    </ul>
                </nav>
                {(this.props.isOpen) ? <Backdrop onClick={this.props.onClose} /> : null}
                
            </>

        )
    }
}

export default Drower