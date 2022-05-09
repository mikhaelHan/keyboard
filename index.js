const input = document.querySelector('.input');
const capsLock = document.querySelector('.CapsLock');
const caseUp = document.querySelectorAll('.case');
const changeLang = document.querySelectorAll('.rus-end')
const virtualClava = document.querySelector('.keyboard__content');
const buttons = document.querySelectorAll('.keyboard__key');

// ====== функция localStorage ====== //
function locStor() {
	function locStorLang() {
		if (localStorage.getItem('Language') == null) { localStorage.setItem('Language', 1) }
		else if (localStorage.getItem('Language') == 0) changeLanguage()
	}
	locStorLang()
	function locStorcaseUp() {
		if (localStorage.getItem('caseUp') == null) { localStorage.setItem('caseUp', 1) }
		else if (localStorage.getItem('caseUp') == 0) capsLockPress(capsLock)
	}
	locStorcaseUp()
}
locStor();

// ====== функция смены языка ====== //
function changeLanguage() {
	changeLang.forEach(el => el.classList.toggle("active"));
}

// ====== функция ceyPress ====== //
function keyPress(element) {
	if (element.querySelector('.rus-end.active')) {
		input.textContent += element.querySelector('.rus-end.active').querySelector('.case.active').getAttribute('value');
	}
}

// ====== функция capsLock ====== //
function capsLockPress(element) {
	element.classList.toggle('active');
	caseUp.forEach(el => el.classList.toggle("active"));
}

// ====== функция Shift ====== //
function shift() {
	caseUp.forEach(el => el.classList.toggle("active"));
}

// ====== физическая клавиатура, нажатие клавиши ====== //
document.addEventListener('keydown', (event) => {
	if (event.code == 'ShiftLeft' && event.ctrlKey || event.metaKey) {
		changeLanguage();
		if (localStorage.getItem('Language') == 1) { localStorage.setItem('Language', 0) }
		else localStorage.setItem('Language', 1)
	}
	buttons.forEach(el => {
		if (event.code === 'CapsLock' && el.classList[1] === 'CapsLock') {
			capsLockPress(el);
			if (localStorage.getItem('caseUp') == 1) { localStorage.setItem('caseUp', 0) }
			else localStorage.setItem('caseUp', 1)
		}
		else if (event.code === 'Space' && el.classList[1] === 'Space') {
			input.textContent += ' ';
			el.style.backgroundColor = 'rgb(0, 188, 122)'
		}
		else if (event.code === 'Delete' && el.classList[1] === 'Delete') {
			input.textContent = '';
			el.style.backgroundColor = 'rgb(0, 188, 122)'
		}
		else if (event.code === 'Enter' && el.classList[1] === 'Enter') {
			input.textContent += '\n';
			el.style.backgroundColor = 'rgb(0, 188, 122)'
		}
		else if (event.code === 'Backspace' && el.classList[1] === 'Backspace') {
			input.textContent = input.value.substring(0, input.value.length - 1);
			el.style.backgroundColor = 'rgb(0, 188, 122)'
			return
		}
		else if ((event.code === 'ShiftLeft' && el.classList[1] === 'ShiftLeft') || (event.code === 'ShiftRight' && el.classList[1] === 'ShiftRight')) {
			shift();
			el.style.backgroundColor = 'rgb(0, 188, 122)'
		}
		else if (event.code == el.classList[1]) {
			keyPress(el);
			el.style.backgroundColor = 'rgb(0, 188, 122)'
		}
	})
});

// ====== физическая клавиатура, отпускание клавиши ====== //
document.addEventListener('keyup', (event) => {
	buttons.forEach(el => {
		if ((event.code === 'ShiftLeft' && el.classList[1] === 'ShiftLeft') || (event.code === 'ShiftRight' && el.classList[1] === 'ShiftRight')) {
			shift();
			el.style.backgroundColor = 'rgb(125, 125, 125)'
		}
		else if (event.code == el.classList[1] && el.classList[1] !== 'CapsLock') el.style.backgroundColor = 'rgb(125, 125, 125)'
	})
})

// ====== виртуальная клавиатура ====== //
virtualClava.addEventListener('click', (event) => {
	if (event.target.closest('.CapsLock')) {
		let el = event.target.closest('.CapsLock');
		capsLockPress(el);
		if (localStorage.getItem('caseUp') == 1) { localStorage.setItem('caseUp', 0) }
		else localStorage.setItem('caseUp', 1)
	}
	else if (event.target.closest('.Space')) input.textContent += ' '
	else if (event.target.closest('.Delete')) input.textContent = ''
	else if (event.target.closest('.Enter')) input.textContent += '\n'
	else if (event.target.closest('.Backspace')) input.textContent = input.value.substring(0, input.value.length - 1)
	else if (event.target.closest('.Tab')) input.textContent += '    '
	else if (event.target.closest('.keyboard__key')) {
		let el = event.target.closest('.keyboard__key');
		keyPress(el)
	}
})
virtualClava.addEventListener('mousedown', (event) => {
	if (event.target.closest('.ShiftLeft') || event.target.closest('.ShiftRight')) {
		shift();
	}
})
virtualClava.addEventListener('mouseup', (event) => {
	if (event.target.closest('.ShiftLeft') || event.target.closest('.ShiftRight')) {
		shift();
	}
})