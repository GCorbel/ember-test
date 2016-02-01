/* jshint expr:true */
import { expect } from 'chai';
import { describeModule, it } from 'ember-mocha';
import startApp from '../../helpers/start-app';
import sinon from 'sinon';

var app, container, store;

describeModule(
  'service:create-subscriptions',
  'CreateSubscriptionsService',
  {
    needs: []
  },
  function() {
    before(function() {
      app = startApp();
      container = app.__container__;
      store = container.lookup('service:store');
    }),
    it('returns items in json format', function() {
      let service = this.subject();

      var user = store.createRecord('user', { email: 'bla@bla.com' });
      service.set('user', user);

      var course = store.createRecord('course', {id: 1});
      var subscription = store.createRecord('subscription',
          {email: 'test@test.com', course: course, firstName: 'Guirec',
            user: user});
      service.subscriptions.pushObject(subscription);

      var contact = store.createRecord('contact', {fullname: 'Guirec Corbel'});
      service.contacts.pushObject(contact);

      var result = service.toJSON();
      var subscriptionsAttributes = result.subscriptions_attributes[0];
      var contactsAttributes = subscriptionsAttributes.contacts_attributes[0];

      expect(result.email).to.equal('bla@bla.com');
      expect(subscriptionsAttributes.first_name).to.equal('Guirec');
      expect(subscriptionsAttributes.email).to.equal('test@test.com');
      expect(subscriptionsAttributes.course_id).to.equal('1');
      expect(contactsAttributes.fullname).to.equal('Guirec Corbel');
    }),
    it('saves items', function() {
      let service = this.subject();
      var mock = sinon.mock(Ember.$);
      var ajaxParams;

      var user = store.createRecord('user', { email: 'bla@bla.com' });
      var course = store.createRecord('course', {id: 2});
      var subscription = store.createRecord('subscription',
          {email: 'test@test.com', course: course, firstName: 'Guirec', user: user});
      service.set('user', user);
      service.subscriptions.pushObject(subscription);

      mock.expects('ajax').once();
      service.save();
      mock.verify();
    }),
    it('trigger the callback', function() {
      let service = this.subject();
      var flag = false;
      var user = store.createRecord('user', { email: 'bla@bla.com' });

      sinon.stub(Ember.$, 'ajax').yieldsTo('success');

      service.set('user', user);
      service.save(() => { flag = true; });

      expect(flag).to.be.true
    });
  }
);
