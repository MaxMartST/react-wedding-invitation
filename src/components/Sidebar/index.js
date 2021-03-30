import React from 'react';
import { 
    SidebarContainer, 
    Icon, 
    CloseIcon, 
    SidebarWrapper, 
    SidebarMenu, 
    SidebarLink
} from './SidebarElements';  

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='invitation' onClick={toggle}>
                        Приглашение
                    </SidebarLink>
                    <SidebarLink to='timing' onClick={toggle}>
                        Расписание дня
                    </SidebarLink>
                    <SidebarLink to='location' onClick={toggle}>
                        Локация
                    </SidebarLink>
                    <SidebarLink to='dressCode' onClick={toggle}>
                        Дресс-код
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
