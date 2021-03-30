export const homeObjOne = {
    id: 'invitation',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    headLine: 'Любимые и дорогие друзья!',
    arrDescription: [
        {id: 1, text:'Мы пришлашеаем Вас на нашу свадебную вечеринку, которая состоится 24 апреля 2021 года.'}
    ],
    imgStart: false,
    img: require('../../images/md-1.svg').default,
    alt: 'max-and-dasha',
    darkText: false 
};

export const homeObjTwo = {
    id: 'timing',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    headLine: 'Расписание дня',
    arrDescription: [
        {id: 1, text:'11:30 Регистрация в ЗАГСе'}, 
        {id: 2, text: '15:30 Сбор гостей на локации'}, 
        {id: 3, text: '16:00 - ∞ Праздничный банкет'}],
    imgStart: false,
    img: require('../../images/md-2.svg').default,
    alt: 'timing',
    darkText: true 
};

export const homeObjThree = {
    id: 'location',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Unlimited Access',
    headLine: 'Локация',
    arrDescription: [
        {id: 1, text:'г. Йошкар-Ола, ул. Героев Сталинградской Битвы, д. 93, Michurin Club.'}
    ],
    imgStart: true,
    img: require('../../images/home.svg').default,
    alt: 'location',
    darkText: false
};

export const homeObjFour = {
    id: 'dressCode',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Unlimited Access',
    headLine: 'Дресс-код',
    arrDescription: [
        {id: 1, text:'Наша свадьба пройдёт уютно и расслабленно. Главное - чтобы вам было комфортно и удобно.'},
        {id: 2, text: 'Пожелания с нашей стороны - это одежда в пыльно-розовых, бежевых, коричнивых, серых и зелёных оттенках.'},
        {id: 3, text: 'Не забудьте взять с собой купальники, плавки и полотенца. P.S. в доме отличный бассейн и хаммам.'}
    ],
    imgStart: false,
    img: require('../../images/dress-code.svg').default,
    alt: 'dressCode',
    darkText: true 
};