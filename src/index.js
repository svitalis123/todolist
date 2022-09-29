import './style.css';
import tryr1 from './modules/trueExecute.js';
import falsetoggle from './modules/falseexecution.js';

let mydata = JSON.parse(localStorage.getItem('newdata')) ? JSON.parse(localStorage.getItem('newdata')) : [];

const loadData = () => {
  const sortedData = mydata.sort((a, b) => a.index - b.index);
  const useData = sortedData.map((dat) => `
    <div class="lists_li">
      <div class="list_li_inputs"  >
        <input type="checkbox" name="" id="${dat.index}" onchange="handleChange(${dat.index})" value="${dat.completed}">
        <label for="${dat.index}"id="label${dat.index}" >${dat.description}</label>
      </div>
      <div class="make_dots" onclick="removeBlock(${dat.index})">
        <div class="dots"></div>
        <div class="dots"></div>
        <div class="dots"></div>
      </div>
    </div>
  `);

  document.getElementById('list').innerHTML = useData.join('');
};

document.addEventListener('DOMContentLoaded', loadData());

const addToLocal = (a, b) => {
  localStorage.setItem(a, JSON.stringify(b));
};

const addNewData = (obj) => {
  mydata.push(obj);
  addToLocal('newdata', mydata);
};

const removeBlock = (id) => {
  const themydata = mydata.filter((item) => item.index !== id);
  mydata = themydata;
  addToLocal('newdata', themydata);
  loadData();
};

const handleChange = (s) => {
  const boos = document.getElementById(`label${s}`);
  const boo = document.getElementById(s).checked;
  if (boo === true) {
    boos.style.textDecoration = 'line-through';
    boos.style.color = 'rgba(0,0,0,0.45)';
    tryr1(mydata, s);
    addToLocal('newdata', mydata);
  } else {
    boos.style.textDecoration = 'none';
    boos.style.color = 'rgb(0,0,0)';
    falsetoggle(mydata, s);
    addToLocal('newdata', mydata);
  }
};

// on click form
const formx = document.getElementById('new_form');

formx.addEventListener('submit', (e) => {
  e.preventDefault();
  const newlength = mydata.length;
  let thenewlength = mydata[newlength - 1]?.index ? mydata[newlength - 1]?.index : 0;
  thenewlength += 1;
  const obje = {
    index: thenewlength,
    description: formx.new_value.value,
    completed: false,
  };
  addNewData(obje);
  loadData();
});
const clearall = document.getElementById('clear_all');
clearall.addEventListener('click', () => {
  const filterall = mydata.filter((item) => item.completed !== true);
  mydata = filterall;
  addToLocal('newdata', filterall);
  loadData();
});
window.removeBlock = removeBlock;
window.handleChange = handleChange;
