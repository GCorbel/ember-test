import ActiveModelAdapter from 'active-model-adapter';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default ActiveModelAdapter.extend(DataAdapterMixin, {
  host: Tiny.API_HOST,
  namespace: Tiny.API_NAMESPACE,
  authorizer: 'authorizer:api'
});
