import React from 'react'
import classes from './Drower.module.css'
import Backdrop from '../../UI//Backdrop/Backdrop'
import {NavLink} from 'react-router-dom'

class Drower extends React.Component {

    clickHandler = () => {
        this.props.onClose()
    }

    renderLinks(links) {
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

        const links = [{to: '/', lable: 'Список', exect: true}]

        if (this.props.isAuthenticated) {
            links.push({to: '/quiz-creator', lable: 'Создать тест', exect: false})
            links.push({to: '/logout', lable: 'Выйти', exect: false})
        } else {
            links.push({to: '/auth', lable: 'Авторизация', exect: false})
        }

        return (
            <>
                <nav className={cls.join(' ')}>
                    <ul>
                        {this.renderLinks(links)}
                    </ul>
                </nav>
                {(this.props.isOpen) ? <Backdrop onClick={this.props.onClose}/> : null}

            </>

        )
    }
}

export default Drower