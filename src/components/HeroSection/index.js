import React, { Component } from 'react';
import Video from '../../videos/video-1.mp4';
import { 
    HeroContainer, 
    HeroBg, 
    VideoBg, 
    HeroContent, 
    HeroH1, 
    CounterContainer,
    CounterSegment,
    CounterValue,
    TimePeriod
} from './HeroSection';

class HeroSection extends Component {
    constructor(props) {
        super(props)
        this.state = {
            days: 0,
            minutes: 0,
            hours: 0,
            secounds: 0,
            time_up:""
        }
        this.x = null
        this.deadline = null

        this.count = this.count.bind(this)
    }

    count () {        
        var now = new Date().getTime();
        var difference = this.deadline - now;

        var days = Math.floor(difference / (1000 * 60 * 60 * 24));
        var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((difference % (1000 * 60)) / 1000);

        this.setState({days, minutes, hours, seconds})

        if (difference < 0) {
            clearInterval(this.x);
            this.setState({ days: 0, minutes: 0, hours: 0, seconds: 0, time_up: "Добро пожаловать на свадьбу!" })
        }
    }

    componentDidMount() {
        this.deadline = new Date("Apr 24, 2021 16:00:00").getTime();
        //this.deadline = new Date("Mar 24, 2021 16:00:00").getTime();
        this.x = setInterval(this.count, 1000);
    }

    render() {
        const { days, seconds, hours, minutes, time_up } = this.state

        const countdown = (
            <>
                <HeroH1>До свадьбы осталось:</HeroH1>
                    <CounterContainer>
                        <CounterSegment>
                            <CounterValue id='day'>{days}</CounterValue>
                            <TimePeriod>Дни</TimePeriod>
                        </CounterSegment>
                        <CounterSegment>
                            <CounterValue id='hour'>{hours}</CounterValue>
                            <TimePeriod>Часы</TimePeriod>
                        </CounterSegment>
                        <CounterSegment>
                            <CounterValue id='minutes'>{minutes}</CounterValue>
                            <TimePeriod>Минуты</TimePeriod>
                        </CounterSegment>
                        <CounterSegment>
                            <CounterValue id='seconds'>{seconds}</CounterValue>
                            <TimePeriod>Секунды</TimePeriod>
                        </CounterSegment>
                    </CounterContainer>
            </>
        );

        return (
            <HeroContainer id='home'>
                <HeroBg>
                    <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
                </HeroBg>
                <HeroContent>
                    {time_up === "" ? countdown : <HeroH1 id="demo">{time_up}</HeroH1>}
                </HeroContent>
            </HeroContainer>
        );
    }


}

export default HeroSection
