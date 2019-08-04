function Clock({ template }) {

  let timer;

  function render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  this.stop = function() {
    clearInterval(timer);
  };

  this.start = function() {
    render();
    timer = setInterval(render, 1000);
  };

}


class newClock {
  constructor({ template }) {
    this.template = template;
    console.log(this.template);
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;
    // console.log(`hours: ${hours}`);

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;
    // console.log(`mins: ${mins}`);

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;
    // console.log(`secs: ${secs}`);

    let output = this.template.replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);
    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  };

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
    // this.timer = setInterval(this.render, 1000);
  };

}

class ExtendedClock extends Clock {
  constructor(template) {
    super(template);
    this.precision = template.precision;
  }

  start() {
    this.render();
    setInterval(() => this.render(), this.precision);
  }
}

let clock = new ExtendedClock({
  template: 'h:m:s',
  precision: 1000,
});
// let clock = new newClock({template: 'h:m:s'});
// let clock = new Clock({template: 'h:m:s'});
clock.start();