'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _plugin = require('plugin');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Help = function (_Command) {
	_inherits(Help, _Command);

	function Help() {
		_classCallCheck(this, Help);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Help).apply(this, arguments));
	}

	_createClass(Help, [{
		key: 'authorize',
		value: regeneratorRuntime.mark(function authorize(msg, suffix) {
			return regeneratorRuntime.wrap(function authorize$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							return _context.abrupt('return', true);

						case 1:
						case 'end':
							return _context.stop();
					}
				}
			}, authorize, this);
		})
	}, {
		key: 'process',
		value: regeneratorRuntime.mark(function process(msg, suffix) {
			var prefix, enabledCommands, entry, helpText, entries, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, command, _entry;

			return regeneratorRuntime.wrap(function process$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							// Get the command prefix.
							prefix = void 0;

							if (!msg.channel.isPrivate) {
								_context2.next = 5;
								break;
							}

							prefix = this.config.COMMAND_PREFIX;
							_context2.next = 8;
							break;

						case 5:
							_context2.next = 7;
							return this.bot.Prefix.getEntry(msg.server.id, this.config.COMMAND_PREFIX);

						case 7:
							prefix = _context2.sent.val();

						case 8:
							_context2.next = 10;
							return this.bot.EnabledCommands.getEntry(msg.server.id, this.bot.enabledCommands);

						case 10:
							enabledCommands = _context2.sent.val();

							if (!(suffix.length > 0)) {
								_context2.next = 18;
								break;
							}

							_context2.next = 14;
							return this.generateEntry(prefix, msg, suffix, enabledCommands);

						case 14:
							entry = _context2.sent;


							// Check if the entry actually exists.
							if (entry != null) {
								// Reply with the entry.a
								this.client.sendMessage(msg, entry);
							} else {
								// Error!
								this.client.sendMessage(msg, '`' + suffix + '` isn\'t an actual command, dumbass.');
							}
							_context2.next = 50;
							break;

						case 18:
							// Show all help entries.
							helpText = '**Available Directives:**\n';
							entries = [];
							_iteratorNormalCompletion = true;
							_didIteratorError = false;
							_iteratorError = undefined;
							_context2.prev = 23;
							_iterator = Object.keys(enabledCommands)[Symbol.iterator]();

						case 25:
							if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
								_context2.next = 34;
								break;
							}

							command = _step.value;
							_context2.next = 29;
							return this.generateEntry(prefix, msg, command, enabledCommands);

						case 29:
							_entry = _context2.sent;

							if (_entry != null) {
								entries.push(_entry);
							}

						case 31:
							_iteratorNormalCompletion = true;
							_context2.next = 25;
							break;

						case 34:
							_context2.next = 40;
							break;

						case 36:
							_context2.prev = 36;
							_context2.t0 = _context2['catch'](23);
							_didIteratorError = true;
							_iteratorError = _context2.t0;

						case 40:
							_context2.prev = 40;
							_context2.prev = 41;

							if (!_iteratorNormalCompletion && _iterator.return) {
								_iterator.return();
							}

						case 43:
							_context2.prev = 43;

							if (!_didIteratorError) {
								_context2.next = 46;
								break;
							}

							throw _iteratorError;

						case 46:
							return _context2.finish(43);

						case 47:
							return _context2.finish(40);

						case 48:
							helpText += entries.join('\n');
							this.client.sendMessage(msg, helpText);

						case 50:
						case 'end':
							return _context2.stop();
					}
				}
			}, process, this, [[23, 36, 40, 48], [41,, 43, 47]]);
		})

		/*
   * Generates a help entry.
   *
   * @param prefix The command prefix.
   * @param msg The message that triggered the command.
   * @param command The name of the command to generate the entry from.
   * @param commands The enabled commands.
   *
   * @return The help entry if the command exists and the user is allowed, null otherwise.
   */

	}, {
		key: 'generateEntry',
		value: regeneratorRuntime.mark(function generateEntry(prefix, msg, command, commands) {
			var cmd, entry;
			return regeneratorRuntime.wrap(function generateEntry$(_context3) {
				while (1) {
					switch (_context3.prev = _context3.next) {
						case 0:
							if (commands[command]) {
								_context3.next = 2;
								break;
							}

							return _context3.abrupt('return', null);

						case 2:
							_context3.next = 4;
							return this.bot.commands[command].authorize(msg, '');

						case 4:
							if (_context3.sent) {
								_context3.next = 6;
								break;
							}

							return _context3.abrupt('return', null);

						case 6:

							// Get the command.
							cmd = this.bot.commands[command];

							// Construct the entry.

							entry = '`' + prefix + command;

							if (cmd.usage) entry += ' ' + cmd.usage;
							entry += '`: ' + cmd.description;

							// Return the entry.
							return _context3.abrupt('return', entry);

						case 11:
						case 'end':
							return _context3.stop();
					}
				}
			}, generateEntry, this);
		})
	}, {
		key: 'usage',
		get: function get() {
			return '[command]';
		}
	}, {
		key: 'description',
		get: function get() {
			return 'show this helpful list!';
		}
	}]);

	return Help;
}(_plugin.Command);

exports.default = Help;