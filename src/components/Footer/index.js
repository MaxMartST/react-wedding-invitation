import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { 
    FooterContainer, 
    FooterWrap, 
    SocialMedia, 
    SocialMediaWrap,
    SocialLogo
} from './FooterElements';

const toggleHome = () => {
    scroll.scrollToTop();
} ;

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo 
                            to='/'
                            onClick={toggleHome}
                        >
                            M&D
                        </SocialLogo>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
