/* jshint expr:true */
import { expect } from 'chai';
import {
  describeModel,
  it
} from 'ember-mocha';

describeModel(
  'subscription',
  'Subscription',
  {
    needs: ['model:course', 'model:payment-option', 'model:contact']
  },
  function() {
    it('say if its an adult', function() {
      let model = this.subject();
      model.set('birthDate', '2016-01-01');
      expect(model.get('isAdult')).to.be.equal(false);

      model.set('birthDate', '1990-01-01');
      expect(model.get('isAdult')).to.be.equal(true);
    });
  }
);
