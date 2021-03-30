import styled from 'styled-components';

export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;

    :before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.2) 0%,
                rgba(0, 0, 0, 0.6) 100%
            ),
            linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.2) 0%,
                transparent 100%);
        z-index: 2;
    }
`;

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflowe: hidden;
`;

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34:
`;

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: inline-block;
    flex-direction: column;
    align-items: center;
`;

export const CounterContainer = styled.div`
    font-family: sans-serif;
    color: #fff;
    font-weight: 100;
    text-align: center;
    font-size: 30px;
`;

export const CounterSegment = styled.div`
    padding: 10px;
    border-radius: 3px;
    display: inline-block;
`;

export const CounterValue = styled.span`
    padding: 15px;
    font-size: 50px;
    border-radius: 3px;
    display: inline-block;
`;

export const TimePeriod = styled.div`
    padding-top: 5px;
    font-size: 24px;
`;

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 768px;){
        font-size: 40px;
    }

    @media screen and (max-width: 480px;){
        font-size: 32px;
    }
`;