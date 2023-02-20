import {
  navList,
  bookSection,
  formSection,
  contactSection,
} from './navLink.js';

const navigation = () => {
  navList.addEventListener('click', (event) => {
    if (event.target.id === 'book-list') {
      bookSection.classList.remove('disable-section');
      formSection.classList.add('disable-section');
      contactSection.classList.add('disable-section');
    } else if (event.target.id === 'add-book') {
      bookSection.classList.add('disable-section');
      formSection.classList.remove('disable-section');
      contactSection.classList.add('disable-section');
    } else if (event.target.id === 'contact') {
      bookSection.classList.add('disable-section');
      formSection.classList.add('disable-section');
      contactSection.classList.remove('disable-section');
    }
  });
};

export default navigation;
