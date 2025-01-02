const day=['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const daySection=document.querySelector('.days');
const fullDate=document.querySelector('.fullDate')
const todayDay=document.querySelector('.day')

const hour=document.querySelector('.hour')
const minute=document.querySelector('.minute')
const second=document.querySelector('.second')
const todayObj = new Date();
const currentDay = todayObj.toLocaleString('en-US', { weekday: 'short' });
day.forEach(item => {
    const spanDay = document.createElement('div');
    spanDay.className = 'sevenDays';               
    spanDay.textContent = item;               

    if (item === currentDay) {
      spanDay.classList.add('highlight');         
    }

    daySection.appendChild(spanDay);       
  });
  
setInterval(() => {
const todayObj = new Date();
const currentDay = todayObj.toLocaleString('en-US', { weekday: 'long' }); 
const currentDate = todayObj.getDate();
const currentMonth = todayObj.toLocaleString('en-US', { month: 'long' });
const currentYear = todayObj.getFullYear(); 

const hours = todayObj.getHours().toString().padStart(2, '0');
const minutes = todayObj.getMinutes().toString().padStart(2, '0');
const seconds = todayObj.getSeconds().toString().padStart(2, '0');

hour.textContent=hours;
minute.textContent=minutes;
second.textContent=seconds;

const today = `${currentMonth} ${currentDate}, ${currentYear}`;
fullDate.textContent = today; 
todayDay.textContent=currentDay;

}, 1000);

