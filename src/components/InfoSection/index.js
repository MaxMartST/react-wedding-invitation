import React from 'react';
import { 
    InfoContainer, 
    InfoWrapper, 
    InfoRow, 
    Column1, 
    Column2, 
    TextWrapper, 
    Heading,
    Subtitle,
    Img, 
    ImgWrap
} from './InfoElements';

const InfoSection = ({lightBg, id, imgStart, lightText, headLine, darkText, description, img, alt, arrDescription}) => {
    
    const dataDes = arrDescription.map((item) => {
        const {id, text} = item;

        return(
            <Subtitle key={id} darkText={darkText}>{text}</Subtitle>
        )
    });

    return (
        <>
            <InfoContainer lightBg={lightBg} id={id} >
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <Heading lightText={lightText}>{headLine}</Heading>
                                {dataDes}
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>        
        </>
    )
}

export default InfoSection
