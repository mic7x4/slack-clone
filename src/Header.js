import { Avatar } from '@material-ui/core';
import React from 'react';
import './Header.css';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <Avatar
                    className="header__avatar"
                    alt="crookzart"
                    src=""
                />
                <AccessTimeIcon/>
            </div>
            <div className="header__search">
                <SearchIcon/>
                <input placeholder="Search any programmer"/>
            </div>
            <div className="header__right">
                <HelpOutlineOutlinedIcon/>
            </div>
        </div>
    )
}

export default Header
