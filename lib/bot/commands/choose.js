'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _command = require('./command');

var _command2 = _interopRequireDefault(_command);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Choose = function (_Command) {
	_inherits(Choose, _Command);

	function Choose() {
		_classCallCheck(this, Choose);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Choose).apply(this, arguments));
	}

	_createClass(Choose, [{
		key: 'authorize',
		value: function authorize(msg, suffix, next) {
			// Everyone is allowed to use choose.
			next(true);
		}
	}, {
		key: 'process',
		value: function process(msg, suffix) {
			// Get all the choices and weed out the blank ones.
			var choices = suffix.split(';').map(function (c) {
				return c.trim();
			}).filter(function (c) {
				return c.length > 0;
			});

			// Make sure there is at least one choice.
			if (choices.length == 0) {
				this.client.reply(msg, 'You have to give me at least one choice, idiot.');
				return;
			}

			// Generate a random number and turn it into an index.
			var index = Math.floor(Math.random() * choices.length);

			// Return the choice.
			this.client.sendMessage(msg, choices[index]);
		}
	}, {
		key: 'usage',
		get: function get() {
			return '<choice1>;[choice2];...';
		}
	}, {
		key: 'description',
		get: function get() {
			return 'randomly choose something';
		}
	}]);

	return Choose;
}(_command2.default);

exports.default = Choose;