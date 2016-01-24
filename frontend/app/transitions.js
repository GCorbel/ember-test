export default function() {
  this.transition(
    this.hasClass('final-options'),
    this.use('fade', {duration: 1000})
  );
  this.transition(
    this.hasClass('payment-options'),
    this.use('fade', {duration: 1000})
  );
  this.transition(
    this.hasClass('choose-subscriber'),
    this.use('fade', {duration: 1000})
  );
  this.transition(
    this.inHelper('liquid-with'),
    this.use('fade', {duration: 1000})
  );
}
