import clientStorage from './js/api/clientStorage';
import apartmentApi from './js/api/apartmentApi';
import apartmentsTemplate from './templates/apartments.hbs';

import './css/styles.css';

const renderApartments = async () => {
  const apartmentsWrapperRef = document.querySelector('.apartments-wrapper');
  const apartments = await apartmentApi.getApartments();
  apartmentsWrapperRef.innerHTML = apartmentsTemplate(apartments);
};

const session = clientStorage.getItem('session');

if (!session?.token) {
  window.location = 'login.html';
} else {
  renderApartments();
}

const logOutBtnRef = document.querySelector('button[data-action="log-out"]');
logOutBtnRef.addEventListener('click', () => {
  localStorage.removeItem('session');
  window.location = 'login.html';
});