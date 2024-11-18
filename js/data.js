import {getRandomInteger, createRandomIdFromRangeGenerator} from './util.js';

const PHOTOS_COUNT = 25;

const DESCRIPTIONS = [
  'Ловлю гоняюсь за мышью',
  'Гуляю по набережной',
  'Бегаю в парке',
  'Прыгаю на батутах',
  'Завтракаю на берегу моря',
  'Путешествую с любимым хозяином',
  'Учу прыгать малышню',
  'Гуляем с Муркой',
  'Драка с Рудольфом',
  'Убегаю от собаки',
  'Мой идеальный день'
];

const COMMENTS = [
'Всё отлично!',
'В целом всё неплохо. Но не всё.',
'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
]

const NAMES = [
  'Тефтель',
  'Гуляшь',
  'Барсик',
  'Мурка',
  'Курочка',
  'Сима',
  'Кекс',
  'Рудольф',
  'Мурзик',
  'Бифштекс'
]

// const createRandomGenerator = () => {
//   return {
//     name: getRandomArrayElement(NAMES),
//     description: getRandomArrayElement(DESCRIPTIONS),
//     comment: getRandomArrayElement(COMMENTS),
//     likes: getRandomInteger(15, 200)
//   }
// }

// const generatePhotoId = createRandomGenerator(1, 25);
// const generatePhotoNumber = createRandomGenerator (1, 25);
// const generateCommentId =createRandomGenerator (1, 999);

// const createComments = () => ({
//   id: generateCommentId(),
//   avatar: `img/avatar-${ getRandomInteger(1, 6) }.svg`,
//   message: getRandomArrayElement(COMMENTS),
//   name: getRandomArrayElement(NAMES)
// });

// const createPhoto = () => ({
//   id: generatePhotoId(),
//   description: getRandomArrayElement(DESCRIPTIONS),
//   comments: Array.from({length: getRandomInteger(0, 30)}, createComments),
//   url: `photos/${ generatePhotoNumber() }.jpg`
// });

// const createRandomPhotos = () => Array.from({length: PHOTOS_COUNT}, createRandomGenerator, createPhoto);

// export {createRandomPhotos};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];
const getPhotoID = createRandomIdFromRangeGenerator(1, 25);
const generateCommentId = createRandomIdFromRangeGenerator(1, 25);
const getNumberPhoto = createRandomIdFromRangeGenerator(1, 25);

const createComments = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${ getRandomInteger(1, 6) }.svg`,
  message: getRandomArrayElement(COMMENTS),
  name: getRandomArrayElement(NAMES)
});

const createPhotoDescription = () => ({
  id: getPhotoID(),
  url: `photos/${ getNumberPhoto() }.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(15, 200),
  comments: Array.from({length: getRandomInteger(0, 30)}, createComments)
});

const arrayPhotos = Array.from({length: PHOTOS_COUNT}, createPhotoDescription);

export {arrayPhotos};
