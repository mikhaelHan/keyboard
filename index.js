// ====== функция заполнения body ====== //
const content = document.querySelector('body');
function createContent() {
	content.innerHTML = `<div class="wrapper">
	<div class="content">
		<h1 class="title">RSS Виртуальная клавиатура</h1>
		<textarea class="input" name="input" id=""></textarea>
		<div class="keyboard">
			<div class="keyboard__content">
				<div class="keyboard__content-line1">
					<div class="keyboard__key Backquote">
						<span class="rus-end">
							<span value="Ё" class="case">Ё</span>
							<span value="ё" class="case active">ё</span>
						</span>
						<span class="rus-end active">
							<span value="~" class="case">ˋ</span>
							<span value="ˋ" class="case active">ˋ</span>
						</span>
					</div>
					<div class="keyboard__key Digit1">
						<span class="rus-end">
							<span value="!" class="case">1</span>
							<span value="1" class="case active">1</span>
						</span>
						<span class="rus-end active">
							<span value="!" class="case">1</span>
							<span value="1" class="case active">1</span>
						</span>
					</div>
					<div class="keyboard__key Digit2">
						<span class="rus-end">
							<span value='"' class="case">2</span>
							<span value="2" class="case active">2</span>
						</span>
						<span class="rus-end active">
							<span value="@" class="case">2</span>
							<span value="2" class="case active">2</span>
						</span>
					</div>
					<div class="keyboard__key Digit3">
						<span class="rus-end">
							<span value="№" class="case">3</span>
							<span value="3" class="case active">3</span>
						</span>
						<span class="rus-end active">
							<span value="#" class="case">3</span>
							<span value="3" class="case active">3</span>
						</span>
					</div>
					<div class="keyboard__key Digit4">
						<span class="rus-end">
							<span value="4" class="case">4</span>
							<span value=";" class="case active">4</span>
						</span>
						<span class="rus-end active">
							<span value="$" class="case">4</span>
							<span value="4" class="case active">4</span>
						</span>
					</div>
					<div class="keyboard__key Digit5">
						<span class="rus-end">
							<span value="%" class="case">5</span>
							<span value="5" class="case active">5</span>
						</span>
						<span class="rus-end active">
							<span value="%" class="case">5</span>
							<span value="5" class="case active">5</span>
						</span>
					</div>
					<div class="keyboard__key Digit6">
						<span class="rus-end">
							<span value=":" class="case">6</span>
							<span value="6" class="case active">6</span>
						</span>
						<span class="rus-end active">
							<span value="^" class="case">6</span>
							<span value="6" class="case active">6</span>
						</span>
					</div>
					<div class="keyboard__key Digit7">
						<span class="rus-end">
							<span value="?" class="case">7</span>
							<span value="7" class="case active">7</span>
						</span>
						<span class="rus-end active">
							<span value="&" class="case">7</span>
							<span value="7" class="case active">7</span>
						</span>
					</div>
					<div class="keyboard__key Digit8">
						<span class="rus-end">
							<span value="*" class="case">8</span>
							<span value="8" class="case active">8</span>
						</span>
						<span class="rus-end active">
							<span value="*" class="case">8</span>
							<span value="8" class="case active">8</span>
						</span>
					</div>
					<div class="keyboard__key Digit9">
						<span class="rus-end">
							<span value="(" class="case">9</span>
							<span value="9" class="case active">9</span>
						</span>
						<span class="rus-end active">
							<span value="(" class="case">9</span>
							<span value="9" class="case active">9</span>
						</span>
					</div>
					<div class="keyboard__key Digit0">
						<span class="rus-end">
							<span value=")" class="case">0</span>
							<span value="0" class="case active">0</span>
						</span>
						<span class="rus-end active">
							<span value=")" class="case">0</span>
							<span value="0" class="case active">0</span>
						</span>
					</div>
					<div class="keyboard__key Minus">
						<span class="rus-end">
							<span value="_" class="case">-</span>
							<span value="-" class="case active">-</span>
						</span>
						<span class="rus-end active">
							<span value="_" class="case">-</span>
							<span value="-" class="case active">-</span>
						</span>
					</div>
					<div class="keyboard__key Equal">
						<span class="rus-end">
							<span value="+" class="case">=</span>
							<span value="=" class="case active">=</span>
						</span>
						<span class="rus-end active">
							<span value="+" class="case">=</span>
							<span value="=" class="case active">=</span>
						</span>
					</div>
					<div class="keyboard__key Backspace">
						<span class="always">Backspace</span>
					</div>
				</div>
				
				<div class="keyboard__content-line2">
					<div class="keyboard__key Tab">
						<span class="always">Tab</span>
					</div>
					<div class="keyboard__key KeyQ">
						<span class="rus-end">
							<span value="Й" class="case">Й</span>
							<span value="й" class="case active">й</span>
						</span>
						<span class="rus-end active">
							<span value="Q" class="case">Q</span>
							<span value="q" class="case active">q</span>
						</span>
					</div>
					<div class="keyboard__key KeyW">
						<span class="rus-end">
							<span value="Ц" class="case">Ц</span>
							<span value="ц" class="case active">ц</span>
						</span>
						<span class="rus-end active">
							<span value="W" class="case">W</span>
							<span value="w" class="case active">w</span>
						</span>
					</div>
					<div class="keyboard__key KeyE">
						<span class="rus-end">
							<span value="У" class="case">У</span>
							<span value="у" class="case active">у</span>
						</span>
						<span class="rus-end active">
							<span value="E" class="case">E</span>
							<span value="e" class="case active">e</span>
						</span>
					</div>
					<div class="keyboard__key KeyR">
						<span class="rus-end">
							<span value="К" class="case">К</span>
							<span value="к" class="case active">к</span>
						</span>
						<span class="rus-end active">
							<span value="R" class="case">R</span>
							<span value="r" class="case active">r</span>
						</span>
					</div>
					<div class="keyboard__key KeyT">
						<span class="rus-end">
							<span value="Е" class="case">Е</span>
							<span value="е" class="case active">е</span>
						</span>
						<span class="rus-end active">
							<span value="T" class="case">T</span>
							<span value="t" class="case active">t</span>
						</span>
					</div>
					<div class="keyboard__key KeyY">
						<span class="rus-end">
							<span value="Н" class="case">Н</span>
							<span value="н" class="case active">н</span>
						</span>
						<span class="rus-end active">
							<span value="Y" class="case">Y</span>
							<span value="y" class="case active">y</span>
						</span>
					</div>
					<div class="keyboard__key KeyU">
						<span class="rus-end">
							<span value="Г" class="case">Г</span>
							<span value="г" class="case active">г</span>
						</span>
						<span class="rus-end active">
							<span value="U" class="case">U</span>
							<span value="u" class="case active">u</span>
						</span>
					</div>
					<div class="keyboard__key KeyI">
						<span class="rus-end">
							<span value="Ш" class="case">Ш</span>
							<span value="ш" class="case active">ш</span>
						</span>
						<span class="rus-end active">
							<span value="I" class="case">I</span>
							<span value="i" class="case active">i</span>
						</span>
					</div>
					<div class="keyboard__key KeyO">
						<span class="rus-end">
							<span value="Щ" class="case">Щ</span>
							<span value="щ" class="case active">щ</span>
						</span>
						<span class="rus-end active">
							<span value="O" class="case">O</span>
							<span value="o" class="case active">o</span>
						</span>
					</div>
					<div class="keyboard__key KeyP">
						<span class="rus-end">
							<span value="З" class="case">З</span>
							<span value="з" class="case active">з</span>
						</span>
						<span class="rus-end active">
							<span value="P" class="case">P</span>
							<span value="p" class="case active">p</span>
						</span>
					</div>
					<div class="keyboard__key BracketLeft">
						<span class="rus-end">
							<span value="Х" class="case">Х</span>
							<span value="х" class="case active">х</span>
						</span>
						<span class="rus-end active">
							<span value="{" class="case">[</span>
							<span value="[" class="case active">[</span>
						</span>
					</div>
					<div class="keyboard__key BracketRight">
						<span class="rus-end">
							<span value="Ъ" class="case">Ъ</span>
							<span value="ъ" class="case active">ъ</span>
						</span>
						<span class="rus-end active">
							<span value="}" class="case">]</span>
							<span value="]" class="case active">]</span>
						</span>
					</div>
					<div class="keyboard__key Backslash">
						<span class="rus-end">
							<span value="/" class="case">&#92</span>
							<span value="&#92" class="case active">&#92</span>
						</span>
						<span class="rus-end active">
							<span value="|" class="case">&#92</span>
							<span value="&#92" class="case active">&#92</span>
						</span>
					</div>
					<div class="keyboard__key Delete">
						<span class="always">Del</span>
					</div>
				</div>
				
				<div class="keyboard__content-line3">
					<div class="keyboard__key CapsLock">
						<span class="always">CapsLock</span>
					</div>
					<div class="keyboard__key KeyA">
						<span class="rus-end">
							<span value="Ф" class="case">Ф</span>
							<span value="ф" class="case active">ф</span>
						</span>
						<span class="rus-end active">
							<span value="A" class="case">A</span>
							<span value="a" class="case active">a</span>
						</span>
					</div>
					<div class="keyboard__key KeyS">
						<span class="rus-end">
							<span value="Ы" class="case">Ы</span>
							<span value="ы" class="case active">ы</span>
						</span>
						<span class="rus-end active">
							<span value="S" class="case">S</span>
							<span value="s" class="case active">s</span>
						</span>
					</div>
					<div class="keyboard__key KeyD">
						<span class="rus-end">
							<span value="В" class="case">В</span>
							<span value="в" class="case active">в</span>
						</span>
						<span class="rus-end active">
							<span value="D" class="case">D</span>
							<span value="d" class="case active">d</span>
						</span>
					</div>
					<div class="keyboard__key KeyF">
						<span class="rus-end">
							<span value="А" class="case">А</span>
							<span value="а" class="case active">а</span>
						</span>
						<span class="rus-end active">
							<span value="F" class="case">F</span>
							<span value="f" class="case active">f</span>
						</span>
					</div>
					<div class="keyboard__key KeyG">
						<span class="rus-end">
							<span value="П" class="case">П</span>
							<span value="п" class="case active">п</span>
						</span>
						<span class="rus-end active">
							<span value="G" class="case">G</span>
							<span value="g" class="case active">g</span>
						</span>
					</div>
					<div class="keyboard__key KeyH">
						<span class="rus-end">
							<span value="Р" class="case">Р</span>
							<span value="р" class="case active">р</span>
						</span>
						<span class="rus-end active">
							<span value="H" class="case">H</span>
							<span value="h" class="case active">h</span>
						</span>
					</div>
					<div class="keyboard__key KeyJ">
						<span class="rus-end">
							<span value="О" class="case">О</span>
							<span value="о" class="case active">о</span>
						</span>
						<span class="rus-end active">
							<span value="J" class="case">J</span>
							<span value="j" class="case active">j</span>
						</span>
					</div>
					<div class="keyboard__key KeyK">
						<span class="rus-end">
							<span value="Л" class="case">Л</span>
							<span value="л" class="case active">л</span>
						</span>
						<span class="rus-end active">
							<span value="K" class="case">K</span>
							<span value="k" class="case active">k</span>
						</span>
					</div>
					<div class="keyboard__key KeyL">
						<span class="rus-end">
							<span value="Д" class="case">Д</span>
							<span value="д" class="case active">д</span>
						</span>
						<span class="rus-end active">
							<span value="L" class="case">L</span>
							<span value="l" class="case active">l</span>
						</span>
					</div>
					<div class="keyboard__key Semicolon">
						<span class="rus-end">
							<span value="Ж" class="case">Ж</span>
							<span value="ж" class="case active">ж</span>
						</span>
						<span class="rus-end active">
							<span value=":" class="case">;</span>
							<span value=";" class="case active">;</span>
						</span>
					</div>
					<div class="keyboard__key Quote">
						<span class="rus-end">
							<span value="Э" class="case">Э</span>
							<span value="э" class="case active">э</span>
						</span>
						<span class="rus-end active">
							<span value='"' class="case">'</span>
							<span value="'" class="case active">'</span>
						</span>
					</div>
					<div class="keyboard__key Enter">
						<span class="always">Enter</span>
					</div>
				</div>
				
				<div class="keyboard__content-line4">
					<div class="keyboard__key ShiftLeft">
						<span class="always">Shift</span>
					</div>
					<div class="keyboard__key KeyZ">
						<span class="rus-end">
							<span value="Я" class="case">Я</span>
							<span value="я" class="case active">я</span>
						</span>
						<span class="rus-end active">
							<span value="Z" class="case">Z</span>
							<span value="z" class="case active">z</span>
						</span>
					</div>
					<div class="keyboard__key KeyX">
						<span class="rus-end">
							<span value="Ч" class="case">Ч</span>
							<span value="ч" class="case active">ч</span>
						</span>
						<span class="rus-end active">
							<span value="X" class="case">X</span>
							<span value="x" class="case active">x</span>
						</span>
					</div>
					<div class="keyboard__key KeyC">
						<span class="rus-end">
							<span value="С" class="case">С</span>
							<span value="с" class="case active">с</span>
						</span>
						<span class="rus-end active">
							<span value="C" class="case">C</span>
							<span value="c" class="case active">c</span>
						</span>
					</div>
					<div class="keyboard__key KeyV">
						<span class="rus-end">
							<span value="М" class="case">М</span>
							<span value="м" class="case active">м</span>
						</span>
						<span class="rus-end active">
							<span value="V" class="case">V</span>
							<span value="v" class="case active">v</span>
						</span>
					</div>
					<div class="keyboard__key KeyB">
						<span class="rus-end">
							<span value="И" class="case">И</span>
							<span value="и" class="case active">и</span>
						</span>
						<span class="rus-end active">
							<span value="B" class="case">B</span>
							<span value="b" class="case active">b</span>
						</span>
					</div>
					<div class="keyboard__key KeyN">
						<span class="rus-end">
							<span value="Т" class="case">Т</span>
							<span value="т" class="case active">т</span>
						</span>
						<span class="rus-end active">
							<span value="N" class="case">N</span>
							<span value="n" class="case active">n</span>
						</span>
					</div>
					<div class="keyboard__key KeyM">
						<span class="rus-end">
							<span value="Ь" class="case">Ь</span>
							<span value="ь" class="case active">ь</span>
						</span>
						<span class="rus-end active">
							<span value="M" class="case">M</span>
							<span value="m" class="case active">m</span>
						</span>
					</div>
					<div class="keyboard__key Comma">
						<span class="rus-end">
							<span value="Б" class="case">Б</span>
							<span value="б" class="case active">б</span>
						</span>
						<span class="rus-end active">
							<span value="<" class="case">,</span>
							<span value="," class="case active">,</span>
						</span>
					</div>
					<div class="keyboard__key Period">
						<span class="rus-end">
							<span value="Ю" class="case">Ю</span>
							<span value="ю" class="case active">ю</span>
						</span>
						<span class="rus-end active">
							<span value=">" class="case">.</span>
							<span value="." class="case active">.</span>
						</span>
					</div>
					<div class="keyboard__key Slash">
						<span class="rus-end">
							<span value="," class="case">.</span>
							<span value="." class="case active">.</span>
						</span>
						<span class="rus-end active">
							<span value="?" class="case">/</span>
							<span value="/" class="case active">/</span>
						</span>
					</div>
					<div class="keyboard__key ArrowUp">
						<span class="always">˄</span>
					</div>
					<div class="keyboard__key ShiftRight">
						<span class="always">Shift</span>
					</div>
				</div>
				
				<div class="keyboard__content-line5">
					<div class="keyboard__key ControlLeft">
						<span class="always">Ctrl</span>
					</div>
					<div class="keyboard__key MetaLeft">
						<span class="always">Win</span>
					</div>
					<div class="keyboard__key AltLeft">
						<span class="always">Alt</span>
					</div>
					<div class="keyboard__key Space">
						<span class="always"></span>
					</div>
					<div class="keyboard__key AltRight">
						<span class="always">Alt</span>
					</div>
					<div class="keyboard__key ArrowLeft">
						<span class="always">˂</span>
					</div>
					<div class="keyboard__key ArrowDown">
						<span class="always">˅</span>
					</div>
					<div class="keyboard__key ArrowRight">
						<span class="always">˃</span>
					</div>
					<div class="keyboard__key ControlRight">
						<span class="always">Ctrl</span>
					</div>
				</div>
			</div>
		</div>
		<p class="text">Клавиатура создана в операционной системе Windows</p>
		<p class="text">Для переключения языка комбинация: левыe "ctrl + shift"</p>
	</div>
</div>`;
}
createContent();
// ====== функционал ====== //
const input = document.querySelector('.input');
const capsLock = document.querySelector('.CapsLock');
const caseUp = document.querySelectorAll('.case');
const changeLang = document.querySelectorAll('.rus-end');
const virtualClava = document.querySelector('.keyboard__content');
const buttons = document.querySelectorAll('.keyboard__key');
// ====== функция localStorage ====== //
function locStor() {
	function locStorLang() {
		if (localStorage.getItem('Language') === 'null') { localStorage.setItem('Language', '1'); } else if (localStorage.getItem('Language') === '0') changeLanguage();
	}
	locStorLang();
	function locStorcaseUp() {
		if (localStorage.getItem('caseUp') === 'null') { localStorage.setItem('caseUp', '1'); } else if (localStorage.getItem('caseUp') === '0') capsLockPress(capsLock);
	}
	locStorcaseUp();
}
locStor();
// ====== функция смены языка ====== //
function changeLanguage() {
	changeLang.forEach((el) => el.classList.toggle('active'));
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
	caseUp.forEach((el) => el.classList.toggle('active'));
}
// ====== функция Shift ====== //
function shift() {
	caseUp.forEach((el) => el.classList.toggle('active'));
}
// ====== физическая клавиатура, нажатие клавиши ====== //
document.addEventListener('keydown', (event) => {
	if ((event.code === 'ShiftLeft' && event.ctrlKey) || event.metaKey) {
		changeLanguage();
		if (localStorage.getItem('Language') === '1') { localStorage.setItem('Language', '0'); } else localStorage.setItem('Language', '1');
	}
	buttons.forEach((el) => {
		if (event.code === 'CapsLock' && el.classList[1] === 'CapsLock') {
			capsLockPress(el);
			if (localStorage.getItem('caseUp') === 1) { localStorage.setItem('caseUp', 0); } else localStorage.setItem('caseUp', 1);
		} else if (event.code === 'Space' && el.classList[1] === 'Space') {
			input.textContent += ' ';
			el.style.backgroundColor = 'rgb(0, 188, 122)';
		} else if (event.code === 'Delete' && el.classList[1] === 'Delete') {
			input.textContent = '';
			el.style.backgroundColor = 'rgb(0, 188, 122)';
		} else if (event.code === 'Enter' && el.classList[1] === 'Enter') {
			input.textContent += '\n';
			el.style.backgroundColor = 'rgb(0, 188, 122)';
		} else if (event.code === 'Backspace' && el.classList[1] === 'Backspace') {
			input.textContent = input.value.substring(0, input.value.length - 1);
			el.style.backgroundColor = 'rgb(0, 188, 122)';
		} else if ((event.code === 'ShiftLeft' && el.classList[1] === 'ShiftLeft') || (event.code === 'ShiftRight' && el.classList[1] === 'ShiftRight')) {
			shift();
			el.style.backgroundColor = 'rgb(0, 188, 122)';
		} else if (event.code === el.classList[1]) {
			keyPress(el);
			el.style.backgroundColor = 'rgb(0, 188, 122)';
		}
	});
});
// ====== физическая клавиатура, отпускание клавиши ====== //
document.addEventListener('keyup', (event) => {
	buttons.forEach((el) => {
		if ((event.code === 'ShiftLeft' && el.classList[1] === 'ShiftLeft') || (event.code === 'ShiftRight' && el.classList[1] === 'ShiftRight')) {
			shift();
			el.style.backgroundColor = 'rgb(125, 125, 125)';
		} else if (event.code === el.classList[1] && el.classList[1] !== 'CapsLock') el.style.backgroundColor = 'rgb(125, 125, 125)';
	});
});
// ====== виртуальная клавиатура ====== //
virtualClava.addEventListener('click', (event) => {
	if (event.target.closest('.CapsLock')) {
		const el = event.target.closest('.CapsLock');
		capsLockPress(el);
		if (localStorage.getItem('caseUp') === '1') { localStorage.setItem('caseUp', '0'); } else localStorage.setItem('caseUp', '1');
	} else if (event.target.closest('.Space')) input.textContent += ' ';
	else if (event.target.closest('.Delete')) input.textContent = '';
	else if (event.target.closest('.Enter')) input.textContent += '\n';
	else if (event.target.closest('.Backspace')) input.textContent = input.value.substring(0, input.value.length - 1);
	else if (event.target.closest('.Tab')) input.textContent += '    ';
	else if (event.target.closest('.keyboard__key')) {
		const el = event.target.closest('.keyboard__key');
		keyPress(el);
	}
});
virtualClava.addEventListener('mousedown', (event) => {
	if (event.target.closest('.ShiftLeft') || event.target.closest('.ShiftRight')) {
		shift();
	}
});
virtualClava.addEventListener('mouseup', (event) => {
	if (event.target.closest('.ShiftLeft') || event.target.closest('.ShiftRight')) {
		shift();
	}
});
