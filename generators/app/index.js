'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var chmod = require('chmod');
var fs = require('fs');

module.exports = Generator.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to ' + chalk.red('generator-dmg')
    ));

    var prompts = [{
      type: 'input',
      name: 'name',
      message: 'What´s the name of your project?',
      default : this.appname
    },
    {
      type: 'input',
      name: 'message',
      message: 'Which message should we display on the screen?',
      default : 'Hello world!'
    }];

    return this.prompt(prompts).then(function (props) {
      this.props = props;
    }.bind(this));
  },

  writing: function () {

    const { name, message } = this.props;
    this.fs.copy(
      this.templatePath('bin'),
      this.destinationPath('bin')
    );
    this.fs.copy(
      this.templatePath('include'),
      this.destinationPath('include')
    );
    this.fs.copy(
      this.templatePath('build'),
      this.destinationPath('build')
    );
    this.fs.copyTpl(
      this.templatePath('main.z80'),
      this.destinationPath('main.z80'),
      { message }
    );
    this.fs.copyTpl(
      this.templatePath('make.sh'),
      this.destinationPath('make.sh'),
      { name }
    );
    this.fs.copyTpl(
      this.templatePath('flash.sh'),
      this.destinationPath('flash.sh'),
      { name }
    );
    this.fs.copyTpl(
      this.templatePath('run.sh'),
      this.destinationPath('run.sh'),
      { name }
    );
  },

  install: function() {
    chmod(this.templatePath('make.sh'), 777);
    chmod(this.templatePath('run.sh'), 777);
    chmod(this.templatePath('flash.sh'), 777);
  }

});
