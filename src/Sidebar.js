import React from 'react';
import './Sidebar.css';
import './Sidebar';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import SidebarOption from './SidebarOption';
import InsertCommentIcon from '@material-ui/icons/InsertComment';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2>React Programming</h2>
                        <h3>
                            <FiberManualRecordIcon/>
                            Crookz Artwork
                        </h3>
                </div>
                <CreateIcon/>
            </div>
                <SidebarOption Icon={InsertCommentIcon} title="Threads"/>
                <SidebarOption title="Youtube"/>
        </div>
    )
}

export default Sidebar
