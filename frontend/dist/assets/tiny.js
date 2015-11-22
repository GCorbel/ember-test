"use strict";
/* jshint ignore:start */

/* jshint ignore:end */

define('tiny/adapters/application', ['exports', 'ember-data'], function (exports, DS) {

	'use strict';

	exports['default'] = DS['default'].JSONAPIAdapter.extend({ host: 'http://107.170.3.185:5000' });

});
define('tiny/admin/courses/controller', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Controller.extend({
    columns: ['name']
  });

});
define('tiny/admin/courses/edit/controller', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Controller.extend({
    columns: ['name']
  });

});
define('tiny/admin/courses/edit/route', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({
    model: function model(params) {
      return this.store.findRecord('course', params.id);
    },
    actions: {
      submit: function submit() {
        this.transitionTo('admin.courses');
      },
      cancel: function cancel() {
        this.transitionTo('admin.courses');
      }
    }
  });

});
define('tiny/admin/courses/edit/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "topLevel": false,
          "revision": "Ember@2.1.0",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "tiny/admin/courses/edit/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  Edit Course ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          return morphs;
        },
        statements: [
          ["content","model.id",["loc",[null,[2,14],[2,26]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "topLevel": null,
        "revision": "Ember@2.1.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 0
          }
        },
        "moduleName": "tiny/admin/courses/edit/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["block","data-form",[],["model",["subexpr","@mut",[["get","model",["loc",[null,[1,19],[1,24]]]]],[],[]],"submit","submit","cancel","cancel","columns",["subexpr","@mut",[["get","columns",["loc",[null,[1,65],[1,72]]]]],[],[]]],0,null,["loc",[null,[1,0],[3,14]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('tiny/admin/courses/new/controller', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Controller.extend({
    columns: ['name']
  });

});
define('tiny/admin/courses/new/route', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({
    model: function model() {
      return this.store.createRecord('course');
    },
    actions: {
      submit: function submit() {
        this.transitionTo('admin.courses');
      },
      cancel: function cancel() {
        this.transitionTo('admin.courses');
      }
    }
  });

});
define('tiny/admin/courses/new/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "tiny/admin/courses/new/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  New Course\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "topLevel": null,
        "revision": "Ember@2.1.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 0
          }
        },
        "moduleName": "tiny/admin/courses/new/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["block","data-form",[],["model",["subexpr","@mut",[["get","model",["loc",[null,[1,19],[1,24]]]]],[],[]],"submit","submit","cancel","cancel","columns",["subexpr","@mut",[["get","columns",["loc",[null,[1,65],[1,72]]]]],[],[]]],0,null,["loc",[null,[1,0],[3,14]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('tiny/admin/courses/route', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({
    model: function model() {
      return this.store.findAll('course');
    }
  });

});
define('tiny/admin/courses/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0",
          "loc": {
            "source": null,
            "start": {
              "line": 6,
              "column": 0
            },
            "end": {
              "line": 8,
              "column": 0
            }
          },
          "moduleName": "tiny/admin/courses/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1,"class","glyphicon glyphicon-plus");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode(" Create new course\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "topLevel": false,
        "revision": "Ember@2.1.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 10,
            "column": 0
          }
        },
        "moduleName": "tiny/admin/courses/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","row");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","col-xs-12");
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 1]),1,1);
        morphs[1] = dom.createMorphAt(fragment,2,2,contextualElement);
        morphs[2] = dom.createMorphAt(fragment,3,3,contextualElement);
        return morphs;
      },
      statements: [
        ["inline","data-table",[],["model",["subexpr","@mut",[["get","model",["loc",[null,[3,21],[3,26]]]]],[],[]],"title","Courses","columns",["subexpr","@mut",[["get","columns",["loc",[null,[3,51],[3,58]]]]],[],[]],"editRoute","admin.courses.edit"],["loc",[null,[3,2],[3,91]]]],
        ["block","link-to",["admin.courses.new"],["class","btn btn-success"],0,null,["loc",[null,[6,0],[8,12]]]],
        ["content","outlet",["loc",[null,[9,0],[9,10]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('tiny/admin/users/controller', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Controller.extend({
    columns: ['email']
  });

});
define('tiny/admin/users/edit/controller', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Controller.extend({
    columns: ['email']
  });

});
define('tiny/admin/users/edit/route', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({
    model: function model(params) {
      return this.store.findRecord('user', params.id);
    },
    actions: {
      submit: function submit() {
        this.transitionTo('admin.users');
      },
      cancel: function cancel() {
        this.transitionTo('admin.users');
      }
    }
  });

});
define('tiny/admin/users/edit/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "topLevel": false,
          "revision": "Ember@2.1.0",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "tiny/admin/users/edit/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  Edit User ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          return morphs;
        },
        statements: [
          ["content","model.id",["loc",[null,[2,12],[2,24]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "topLevel": null,
        "revision": "Ember@2.1.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 0
          }
        },
        "moduleName": "tiny/admin/users/edit/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["block","data-form",[],["model",["subexpr","@mut",[["get","model",["loc",[null,[1,19],[1,24]]]]],[],[]],"submit","submit","cancel","cancel","columns",["subexpr","@mut",[["get","columns",["loc",[null,[1,65],[1,72]]]]],[],[]]],0,null,["loc",[null,[1,0],[3,14]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('tiny/admin/users/new/controller', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Controller.extend({
    columns: ['email']
  });

});
define('tiny/admin/users/new/route', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({
    model: function model() {
      return this.store.createRecord('user');
    },
    actions: {
      submit: function submit() {
        this.transitionTo('admin.users');
      },
      cancel: function cancel() {
        this.transitionTo('admin.users');
      }
    }
  });

});
define('tiny/admin/users/new/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "tiny/admin/users/new/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  New User\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "topLevel": null,
        "revision": "Ember@2.1.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 0
          }
        },
        "moduleName": "tiny/admin/users/new/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["block","data-form",[],["model",["subexpr","@mut",[["get","model",["loc",[null,[1,19],[1,24]]]]],[],[]],"submit","submit","cancel","cancel","columns",["subexpr","@mut",[["get","columns",["loc",[null,[1,65],[1,72]]]]],[],[]]],0,null,["loc",[null,[1,0],[3,14]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('tiny/admin/users/route', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({
    model: function model() {
      return this.store.findAll('user');
    }
  });

});
define('tiny/admin/users/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0",
          "loc": {
            "source": null,
            "start": {
              "line": 6,
              "column": 0
            },
            "end": {
              "line": 8,
              "column": 0
            }
          },
          "moduleName": "tiny/admin/users/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1,"class","glyphicon glyphicon-plus");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode(" Create new user\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "topLevel": false,
        "revision": "Ember@2.1.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 10,
            "column": 0
          }
        },
        "moduleName": "tiny/admin/users/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","row");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","col-xs-12");
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 1]),1,1);
        morphs[1] = dom.createMorphAt(fragment,2,2,contextualElement);
        morphs[2] = dom.createMorphAt(fragment,3,3,contextualElement);
        return morphs;
      },
      statements: [
        ["inline","data-table",[],["model",["subexpr","@mut",[["get","model",["loc",[null,[3,21],[3,26]]]]],[],[]],"title","Users","columns",["subexpr","@mut",[["get","columns",["loc",[null,[3,49],[3,56]]]]],[],[]],"editRoute","admin.users.edit"],["loc",[null,[3,2],[3,87]]]],
        ["block","link-to",["admin.users.new"],["class","btn btn-success"],0,null,["loc",[null,[6,0],[8,12]]]],
        ["content","outlet",["loc",[null,[9,0],[9,10]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('tiny/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'tiny/config/environment'], function (exports, Ember, Resolver, loadInitializers, config) {

  'use strict';

  var App;

  Ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = Ember['default'].Application.extend({
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix,
    Resolver: Resolver['default']
  });

  loadInitializers['default'](App, config['default'].modulePrefix);

  exports['default'] = App;

});
define('tiny/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'tiny/config/environment'], function (exports, AppVersionComponent, config) {

  'use strict';

  var _config$APP = config['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;

  exports['default'] = AppVersionComponent['default'].extend({
    version: version,
    name: name
  });

});
define('tiny/components/control-within-label', ['exports', 'ember-rapid-forms/components/control-within-label'], function (exports, ControlWithinLabelComponent) {

	'use strict';

	//import Ember from 'ember';
	exports['default'] = ControlWithinLabelComponent['default'];

});
define('tiny/components/data-form/component', ['exports', 'ember', 'ember-validations'], function (exports, Ember, EmberValidations) {

  'use strict';

  exports['default'] = Ember['default'].Component.extend(EmberValidations['default'], {
    actions: {
      submit: function submit() {
        var _this = this;

        this.controller.model.save().then(function () {
          $('.modal').modal('hide');
          _this.sendAction('submit');
        }, function () {});
      },
      cancel: function cancel() {
        this.controller.model.rollbackAttributes();
        this.sendAction('cancel');
      }
    },
    trigger: (function () {
      Ember['default'].run.schedule('afterRender', function () {
        $('.modal').modal();
      });
    }).on('init')
  });

});
define('tiny/components/data-form/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        return {
          meta: {
            "topLevel": null,
            "revision": "Ember@2.1.0",
            "loc": {
              "source": null,
              "start": {
                "line": 16,
                "column": 8
              },
              "end": {
                "line": 18,
                "column": 8
              }
            },
            "moduleName": "tiny/components/data-form/template.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("          ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
            return morphs;
          },
          statements: [
            ["inline","em-input",[],["property",["subexpr","@mut",[["get","column",["loc",[null,[17,30],[17,36]]]]],[],[]],"canShowErrors",true],["loc",[null,[17,10],[17,57]]]]
          ],
          locals: ["column"],
          templates: []
        };
      }());
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0",
          "loc": {
            "source": null,
            "start": {
              "line": 15,
              "column": 6
            },
            "end": {
              "line": 19,
              "column": 6
            }
          },
          "moduleName": "tiny/components/data-form/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [
          ["block","each",[["get","columns",["loc",[null,[16,16],[16,23]]]]],[],0,null,["loc",[null,[16,8],[18,17]]]]
        ],
        locals: [],
        templates: [child0]
      };
    }());
    return {
      meta: {
        "topLevel": false,
        "revision": "Ember@2.1.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 36,
            "column": 0
          }
        },
        "moduleName": "tiny/components/data-form/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","modal");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","modal-dialog");
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","modal-content");
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","modal-header");
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("button");
        dom.setAttribute(el5,"type","button");
        dom.setAttribute(el5,"class","close");
        dom.setAttribute(el5,"data-dismiss","modal");
        dom.setAttribute(el5,"aria-label","Close");
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6,"aria-hidden","true");
        var el7 = dom.createTextNode("×");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h4");
        dom.setAttribute(el5,"class","modal-title");
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n      ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n    ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","modal-body");
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("    ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","modal-footer");
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("button");
        dom.setAttribute(el5,"type","button");
        dom.setAttribute(el5,"class","btn btn-default pull-left");
        dom.setAttribute(el5,"data-dismiss","modal");
        var el6 = dom.createTextNode("Close");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("button");
        dom.setAttribute(el5,"type","button");
        dom.setAttribute(el5,"class","btn btn-primary");
        var el6 = dom.createTextNode("Save changes");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n    ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n  ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" /.modal-content ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" /.modal-dialog ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" /.modal ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1, 1]);
        var element1 = dom.childAt(element0, [1]);
        var element2 = dom.childAt(element1, [1]);
        var element3 = dom.childAt(element0, [5]);
        var element4 = dom.childAt(element3, [1]);
        var element5 = dom.childAt(element3, [3]);
        var morphs = new Array(5);
        morphs[0] = dom.createElementMorph(element2);
        morphs[1] = dom.createMorphAt(dom.childAt(element1, [3]),1,1);
        morphs[2] = dom.createMorphAt(dom.childAt(element0, [3]),1,1);
        morphs[3] = dom.createElementMorph(element4);
        morphs[4] = dom.createElementMorph(element5);
        return morphs;
      },
      statements: [
        ["element","action",["cancel"],[],["loc",[null,[8,14],[8,33]]]],
        ["content","yield",["loc",[null,[11,8],[11,17]]]],
        ["block","em-form",[],["model",["subexpr","@mut",[["get","model",["loc",[null,[15,23],[15,28]]]]],[],[]],"submitButton",false],0,null,["loc",[null,[15,6],[19,18]]]],
        ["element","action",["cancel"],[],["loc",[null,[24,14],[24,33]]]],
        ["element","action",["submit"],[],["loc",[null,[28,14],[28,33]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('tiny/components/data-table/component', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Component.extend({
    actions: {
      'delete': function _delete(model) {
        model.destroyRecord();
      }
    }
  });

});
define('tiny/components/data-table/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        return {
          meta: {
            "topLevel": null,
            "revision": "Ember@2.1.0",
            "loc": {
              "source": null,
              "start": {
                "line": 6,
                "column": 6
              },
              "end": {
                "line": 8,
                "column": 6
              }
            },
            "moduleName": "tiny/components/data-table/template.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("th");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]),0,0);
            return morphs;
          },
          statements: [
            ["content","column",["loc",[null,[7,12],[7,22]]]]
          ],
          locals: ["column"],
          templates: []
        };
      }());
      var child1 = (function() {
        var child0 = (function() {
          return {
            meta: {
              "topLevel": null,
              "revision": "Ember@2.1.0",
              "loc": {
                "source": null,
                "start": {
                  "line": 18,
                  "column": 8
                },
                "end": {
                  "line": 22,
                  "column": 8
                }
              },
              "moduleName": "tiny/components/data-table/template.hbs"
            },
            isEmpty: false,
            arity: 1,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("          ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("td");
              var el2 = dom.createTextNode("\n            ");
              dom.appendChild(el1, el2);
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n          ");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]),1,1);
              return morphs;
            },
            statements: [
              ["inline","get",[["get","record",["loc",[null,[20,18],[20,24]]]],["get","column",["loc",[null,[20,25],[20,31]]]]],[],["loc",[null,[20,12],[20,33]]]]
            ],
            locals: ["column"],
            templates: []
          };
        }());
        var child1 = (function() {
          return {
            meta: {
              "topLevel": null,
              "revision": "Ember@2.1.0",
              "loc": {
                "source": null,
                "start": {
                  "line": 24,
                  "column": 10
                },
                "end": {
                  "line": 26,
                  "column": 10
                }
              },
              "moduleName": "tiny/components/data-table/template.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("            ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("span");
              dom.setAttribute(el1,"class","glyphicon glyphicon-pencil");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() { return []; },
            statements: [

            ],
            locals: [],
            templates: []
          };
        }());
        return {
          meta: {
            "topLevel": null,
            "revision": "Ember@2.1.0",
            "loc": {
              "source": null,
              "start": {
                "line": 13,
                "column": 4
              },
              "end": {
                "line": 33,
                "column": 4
              }
            },
            "moduleName": "tiny/components/data-table/template.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("tr");
            dom.setAttribute(el1,"role","row");
            dom.setAttribute(el1,"class","odd");
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            dom.setAttribute(el2,"class","sorting_1");
            var el3 = dom.createTextNode("\n          ");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n        ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createTextNode("\n");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("          ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("a");
            dom.setAttribute(el3,"href","#");
            dom.setAttribute(el3,"class","btn btn-danger");
            var el4 = dom.createTextNode("\n            ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("span");
            dom.setAttribute(el4,"class","glyphicon glyphicon-trash");
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n          ");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n        ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var element1 = dom.childAt(element0, [5]);
            var element2 = dom.childAt(element1, [3]);
            var morphs = new Array(4);
            morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]),1,1);
            morphs[1] = dom.createMorphAt(element0,3,3);
            morphs[2] = dom.createMorphAt(element1,1,1);
            morphs[3] = dom.createElementMorph(element2);
            return morphs;
          },
          statements: [
            ["content","record.id",["loc",[null,[16,10],[16,23]]]],
            ["block","each",[["get","columns",["loc",[null,[18,16],[18,23]]]]],[],0,null,["loc",[null,[18,8],[22,17]]]],
            ["block","link-to",[["get","editRoute",["loc",[null,[24,21],[24,30]]]],["get","record.id",["loc",[null,[24,31],[24,40]]]]],["class","btn btn-success"],1,null,["loc",[null,[24,10],[26,22]]]],
            ["element","action",["delete",["get","record",["loc",[null,[27,40],[27,46]]]]],["preventDefault",true],["loc",[null,[27,22],[27,68]]]]
          ],
          locals: ["record"],
          templates: [child0, child1]
        };
      }());
      var child2 = (function() {
        return {
          meta: {
            "topLevel": null,
            "revision": "Ember@2.1.0",
            "loc": {
              "source": null,
              "start": {
                "line": 38,
                "column": 6
              },
              "end": {
                "line": 40,
                "column": 6
              }
            },
            "moduleName": "tiny/components/data-table/template.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("th");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]),0,0);
            return morphs;
          },
          statements: [
            ["content","column",["loc",[null,[39,12],[39,22]]]]
          ],
          locals: ["column"],
          templates: []
        };
      }());
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 45,
              "column": 0
            }
          },
          "moduleName": "tiny/components/data-table/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("table");
          dom.setAttribute(el1,"class","table table-bordered table-hover");
          dom.setAttribute(el1,"role","grid");
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("thead");
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("tr");
          dom.setAttribute(el3,"role","row");
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("th");
          var el5 = dom.createTextNode("Id");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("th");
          var el5 = dom.createTextNode("Actions");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n    ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n  ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("tbody");
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("  ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("tfoot");
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("tr");
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("th");
          var el5 = dom.createTextNode("Id");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("th");
          var el5 = dom.createTextNode("Actions");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n    ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n  ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element3 = dom.childAt(fragment, [0]);
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(dom.childAt(element3, [1, 1]),3,3);
          morphs[1] = dom.createMorphAt(dom.childAt(element3, [3]),1,1);
          morphs[2] = dom.createMorphAt(dom.childAt(element3, [5, 1]),3,3);
          return morphs;
        },
        statements: [
          ["block","each",[["get","columns",["loc",[null,[6,14],[6,21]]]]],[],0,null,["loc",[null,[6,6],[8,15]]]],
          ["block","each",[["get","model",["loc",[null,[13,12],[13,17]]]]],[],1,null,["loc",[null,[13,4],[33,13]]]],
          ["block","each",[["get","columns",["loc",[null,[38,14],[38,21]]]]],[],2,null,["loc",[null,[38,6],[40,15]]]]
        ],
        locals: [],
        templates: [child0, child1, child2]
      };
    }());
    return {
      meta: {
        "topLevel": null,
        "revision": "Ember@2.1.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 46,
            "column": 0
          }
        },
        "moduleName": "tiny/components/data-table/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["block","default-box",[],["title",["subexpr","@mut",[["get","title",["loc",[null,[1,21],[1,26]]]]],[],[]]],0,null,["loc",[null,[1,0],[45,16]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('tiny/components/em-checkbox', ['exports', 'ember-rapid-forms/components/em-checkbox'], function (exports, CheckboxComponent) {

	'use strict';

	//import Ember from 'ember';
	exports['default'] = CheckboxComponent['default'];

});
define('tiny/components/em-form-control-help', ['exports', 'ember-rapid-forms/components/em-form-control-help'], function (exports, FormControlHelperComponent) {

	'use strict';

	//import Ember from 'ember';
	exports['default'] = FormControlHelperComponent['default'];

});
define('tiny/components/em-form-group', ['exports', 'ember-rapid-forms/components/em-form-group'], function (exports, FormGroupComponent) {

	'use strict';

	//import Ember from 'ember';
	exports['default'] = FormGroupComponent['default'];

});
define('tiny/components/em-form-label', ['exports', 'ember-rapid-forms/components/em-form-label'], function (exports, FormLabelComponent) {

	'use strict';

	//import Ember from 'ember';
	exports['default'] = FormLabelComponent['default'];

});
define('tiny/components/em-form-submit', ['exports', 'ember-rapid-forms/components/em-form-submit'], function (exports, SubmitButtonComponent) {

	'use strict';

	//import Ember from 'ember';
	exports['default'] = SubmitButtonComponent['default'];

});
define('tiny/components/em-form', ['exports', 'ember-rapid-forms/components/em-form'], function (exports, FormComponent) {

	'use strict';

	//import Ember from 'ember';
	exports['default'] = FormComponent['default'];

});
define('tiny/components/em-input', ['exports', 'ember-rapid-forms/components/em-input'], function (exports, InputComponent) {

	'use strict';

	//import Ember from 'ember';
	exports['default'] = InputComponent['default'];

});
define('tiny/components/em-select', ['exports', 'ember-rapid-forms/components/em-select'], function (exports, SelectComponent) {

	'use strict';

	//import Ember from 'ember';
	exports['default'] = SelectComponent['default'];

});
define('tiny/components/em-text', ['exports', 'ember-rapid-forms/components/em-text'], function (exports, TextComponent) {

	'use strict';

	//import Ember from 'ember';
	exports['default'] = TextComponent['default'];

});
define('tiny/components/erf-html-checkbox', ['exports', 'ember-rapid-forms/components/html-checkbox'], function (exports, html_checkbox) {

	'use strict';



	exports['default'] = html_checkbox['default'];

});
define('tiny/components/erf-html-input', ['exports', 'ember-rapid-forms/components/html-input'], function (exports, html_input) {

	'use strict';



	exports['default'] = html_input['default'];

});
define('tiny/components/erf-html-select', ['exports', 'ember-rapid-forms/components/html-select'], function (exports, html_select) {

	'use strict';



	exports['default'] = html_select['default'];

});
define('tiny/components/erf-html-text', ['exports', 'ember-rapid-forms/components/html-text'], function (exports, html_text) {

	'use strict';



	exports['default'] = html_text['default'];

});
define('tiny/components/fa-icon', ['exports', 'ember-cli-font-awesome/components/fa-icon'], function (exports, fa_icon) {

	'use strict';



	exports['default'] = fa_icon['default'];

});
define('tiny/components/fa-list-icon', ['exports', 'ember-cli-font-awesome/components/fa-list-icon'], function (exports, fa_list_icon) {

	'use strict';



	exports['default'] = fa_list_icon['default'];

});
define('tiny/components/fa-list', ['exports', 'ember-cli-font-awesome/components/fa-list'], function (exports, fa_list) {

	'use strict';



	exports['default'] = fa_list['default'];

});
define('tiny/components/fa-stack', ['exports', 'ember-cli-font-awesome/components/fa-stack'], function (exports, fa_stack) {

	'use strict';



	exports['default'] = fa_stack['default'];

});
define('tiny/components/form-group-control', ['exports', 'ember-rapid-forms/components/form-group-control'], function (exports, FormGroupControlComponent) {

	'use strict';

	//import Ember from 'ember';
	exports['default'] = FormGroupControlComponent['default'];

});
define('tiny/components/form-group', ['exports', 'ember-rapid-forms/components/form-group'], function (exports, FormGroupComponent) {

	'use strict';

	//import Ember from 'ember';
	exports['default'] = FormGroupComponent['default'];

});
define('tiny/controllers/array', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller;

});
define('tiny/controllers/object', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller;

});
define('tiny/helpers/and', ['exports', 'ember', 'ember-truth-helpers/helpers/and'], function (exports, Ember, and) {

  'use strict';

  var forExport = null;

  if (Ember['default'].Helper) {
    forExport = Ember['default'].Helper.helper(and.andHelper);
  } else if (Ember['default'].HTMLBars.makeBoundHelper) {
    forExport = Ember['default'].HTMLBars.makeBoundHelper(and.andHelper);
  }

  exports['default'] = forExport;

});
define('tiny/helpers/eq', ['exports', 'ember', 'ember-truth-helpers/helpers/equal'], function (exports, Ember, equal) {

  'use strict';

  var forExport = null;

  if (Ember['default'].Helper) {
    forExport = Ember['default'].Helper.helper(equal.equalHelper);
  } else if (Ember['default'].HTMLBars.makeBoundHelper) {
    forExport = Ember['default'].HTMLBars.makeBoundHelper(equal.equalHelper);
  }

  exports['default'] = forExport;

});
define('tiny/helpers/gt', ['exports', 'ember', 'ember-truth-helpers/helpers/gt'], function (exports, Ember, gt) {

  'use strict';

  var forExport = null;

  if (Ember['default'].Helper) {
    forExport = Ember['default'].Helper.helper(gt.gtHelper);
  } else if (Ember['default'].HTMLBars.makeBoundHelper) {
    forExport = Ember['default'].HTMLBars.makeBoundHelper(gt.gtHelper);
  }

  exports['default'] = forExport;

});
define('tiny/helpers/gte', ['exports', 'ember', 'ember-truth-helpers/helpers/gte'], function (exports, Ember, gte) {

  'use strict';

  var forExport = null;

  if (Ember['default'].Helper) {
    forExport = Ember['default'].Helper.helper(gte.gteHelper);
  } else if (Ember['default'].HTMLBars.makeBoundHelper) {
    forExport = Ember['default'].HTMLBars.makeBoundHelper(gte.gteHelper);
  }

  exports['default'] = forExport;

});
define('tiny/helpers/is-array', ['exports', 'ember', 'ember-truth-helpers/helpers/is-array'], function (exports, Ember, is_array) {

  'use strict';

  var forExport = null;

  if (Ember['default'].Helper) {
    forExport = Ember['default'].Helper.helper(is_array.isArrayHelper);
  } else if (Ember['default'].HTMLBars.makeBoundHelper) {
    forExport = Ember['default'].HTMLBars.makeBoundHelper(is_array.isArrayHelper);
  }

  exports['default'] = forExport;

});
define('tiny/helpers/lt', ['exports', 'ember', 'ember-truth-helpers/helpers/lt'], function (exports, Ember, lt) {

  'use strict';

  var forExport = null;

  if (Ember['default'].Helper) {
    forExport = Ember['default'].Helper.helper(lt.ltHelper);
  } else if (Ember['default'].HTMLBars.makeBoundHelper) {
    forExport = Ember['default'].HTMLBars.makeBoundHelper(lt.ltHelper);
  }

  exports['default'] = forExport;

});
define('tiny/helpers/lte', ['exports', 'ember', 'ember-truth-helpers/helpers/lte'], function (exports, Ember, lte) {

  'use strict';

  var forExport = null;

  if (Ember['default'].Helper) {
    forExport = Ember['default'].Helper.helper(lte.lteHelper);
  } else if (Ember['default'].HTMLBars.makeBoundHelper) {
    forExport = Ember['default'].HTMLBars.makeBoundHelper(lte.lteHelper);
  }

  exports['default'] = forExport;

});
define('tiny/helpers/not-eq', ['exports', 'ember', 'ember-truth-helpers/helpers/not-equal'], function (exports, Ember, not_equal) {

  'use strict';

  var forExport = null;

  if (Ember['default'].Helper) {
    forExport = Ember['default'].Helper.helper(not_equal.notEqualHelper);
  } else if (Ember['default'].HTMLBars.makeBoundHelper) {
    forExport = Ember['default'].HTMLBars.makeBoundHelper(not_equal.notEqualHelper);
  }

  exports['default'] = forExport;

});
define('tiny/helpers/not', ['exports', 'ember', 'ember-truth-helpers/helpers/not'], function (exports, Ember, not) {

  'use strict';

  var forExport = null;

  if (Ember['default'].Helper) {
    forExport = Ember['default'].Helper.helper(not.notHelper);
  } else if (Ember['default'].HTMLBars.makeBoundHelper) {
    forExport = Ember['default'].HTMLBars.makeBoundHelper(not.notHelper);
  }

  exports['default'] = forExport;

});
define('tiny/helpers/or', ['exports', 'ember', 'ember-truth-helpers/helpers/or'], function (exports, Ember, or) {

  'use strict';

  var forExport = null;

  if (Ember['default'].Helper) {
    forExport = Ember['default'].Helper.helper(or.orHelper);
  } else if (Ember['default'].HTMLBars.makeBoundHelper) {
    forExport = Ember['default'].HTMLBars.makeBoundHelper(or.orHelper);
  }

  exports['default'] = forExport;

});
define('tiny/helpers/xor', ['exports', 'ember', 'ember-truth-helpers/helpers/xor'], function (exports, Ember, xor) {

  'use strict';

  var forExport = null;

  if (Ember['default'].Helper) {
    forExport = Ember['default'].Helper.helper(xor.xorHelper);
  } else if (Ember['default'].HTMLBars.makeBoundHelper) {
    forExport = Ember['default'].HTMLBars.makeBoundHelper(xor.xorHelper);
  }

  exports['default'] = forExport;

});
define('tiny/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'tiny/config/environment'], function (exports, initializerFactory, config) {

  'use strict';

  var _config$APP = config['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;

  exports['default'] = {
    name: 'App Version',
    initialize: initializerFactory['default'](name, version)
  };

});
define('tiny/initializers/export-application-global', ['exports', 'ember', 'tiny/config/environment'], function (exports, Ember, config) {

  'use strict';

  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (config['default'].exportApplicationGlobal !== false) {
      var value = config['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember['default'].String.classify(config['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };

});
define('tiny/initializers/truth-helpers', ['exports', 'ember', 'ember-truth-helpers/utils/register-helper', 'ember-truth-helpers/helpers/and', 'ember-truth-helpers/helpers/or', 'ember-truth-helpers/helpers/equal', 'ember-truth-helpers/helpers/not', 'ember-truth-helpers/helpers/is-array', 'ember-truth-helpers/helpers/not-equal', 'ember-truth-helpers/helpers/gt', 'ember-truth-helpers/helpers/gte', 'ember-truth-helpers/helpers/lt', 'ember-truth-helpers/helpers/lte'], function (exports, Ember, register_helper, and, or, equal, not, is_array, not_equal, gt, gte, lt, lte) {

  'use strict';

  exports.initialize = initialize;

  function initialize() /* container, application */{

    // Do not register helpers from Ember 1.13 onwards, starting from 1.13 they
    // will be auto-discovered.
    if (Ember['default'].Helper) {
      return;
    }

    register_helper.registerHelper('and', and.andHelper);
    register_helper.registerHelper('or', or.orHelper);
    register_helper.registerHelper('eq', equal.equalHelper);
    register_helper.registerHelper('not', not.notHelper);
    register_helper.registerHelper('is-array', is_array.isArrayHelper);
    register_helper.registerHelper('not-eq', not_equal.notEqualHelper);
    register_helper.registerHelper('gt', gt.gtHelper);
    register_helper.registerHelper('gte', gte.gteHelper);
    register_helper.registerHelper('lt', lt.ltHelper);
    register_helper.registerHelper('lte', lte.lteHelper);
  }

  exports['default'] = {
    name: 'truth-helpers',
    initialize: initialize
  };

});
define('tiny/models/course', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  exports['default'] = DS['default'].Model.extend({
    name: DS['default'].attr()
  });

});
define('tiny/models/subscription', ['exports', 'ember-data'], function (exports, DS) {

	'use strict';

	exports['default'] = DS['default'].Model.extend({});

});
define('tiny/models/user', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  exports['default'] = DS['default'].Model.extend({
    email: DS['default'].attr()
  });

});
define('tiny/router', ['exports', 'ember', 'tiny/config/environment'], function (exports, Ember, config) {

  'use strict';

  var Router = Ember['default'].Router.extend({
    location: config['default'].locationType
  });

  Router.map(function () {
    this.route('admin', function () {
      this.route('users', function () {
        this.route('new');
        this.route('edit', { path: '/:id/edit' });
      });
      this.route('courses', function () {
        this.route('new');
        this.route('edit', { path: '/:id/edit' });
      });
    });
    this.route('welcome', { path: '/' });
  });

  exports['default'] = Router;

});
define('tiny/routes/admin/courses', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.Route.extend({
    model: function model() {
      return this.store.findAll('course');
    }
  });

});
define('tiny/services/validations', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var set = Ember['default'].set;

  exports['default'] = Ember['default'].Object.extend({
    init: function init() {
      set(this, 'cache', {});
    }
  });

});
define('tiny/templates/admin', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0",
          "loc": {
            "source": null,
            "start": {
              "line": 38,
              "column": 12
            },
            "end": {
              "line": 38,
              "column": 83
            }
          },
          "moduleName": "tiny/templates/admin.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("i");
          dom.setAttribute(el1,"class","fa fa-link");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode(" ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          var el2 = dom.createTextNode("Users");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child1 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0",
          "loc": {
            "source": null,
            "start": {
              "line": 39,
              "column": 12
            },
            "end": {
              "line": 39,
              "column": 87
            }
          },
          "moduleName": "tiny/templates/admin.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("i");
          dom.setAttribute(el1,"class","fa fa-link");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode(" ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          var el2 = dom.createTextNode("Courses");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "topLevel": false,
        "revision": "Ember@2.1.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 145,
            "column": 0
          }
        },
        "moduleName": "tiny/templates/admin.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","wrapper");
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" Main Header ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("header");
        dom.setAttribute(el2,"class","main-header");
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" Logo ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3,"href","#");
        dom.setAttribute(el3,"class","logo");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment(" mini logo for sidebar mini 50x50 pixels ");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        dom.setAttribute(el4,"class","logo-mini");
        var el5 = dom.createElement("b");
        var el6 = dom.createTextNode("A");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("LT");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment(" logo for regular state and mobile devices ");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        dom.setAttribute(el4,"class","logo-lg");
        var el5 = dom.createElement("b");
        var el6 = dom.createTextNode("Admin");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("LTE");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" Header Navbar ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("nav");
        dom.setAttribute(el3,"class","navbar navbar-static-top");
        dom.setAttribute(el3,"role","navigation");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment(" Sidebar toggle button");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4,"href","#");
        dom.setAttribute(el4,"class","sidebar-toggle");
        dom.setAttribute(el4,"data-toggle","offcanvas");
        dom.setAttribute(el4,"role","button");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5,"class","sr-only");
        var el6 = dom.createTextNode("Toggle navigation");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment(" Navbar Right Menu ");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","navbar-custom-menu");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("ul");
        dom.setAttribute(el5,"class","nav navbar-nav");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("a");
        dom.setAttribute(el7,"href","#");
        dom.setAttribute(el7,"data-toggle","control-sidebar");
        var el8 = dom.createElement("i");
        dom.setAttribute(el8,"class","fa fa-gears");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" Left side column. contains the logo and sidebar ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("aside");
        dom.setAttribute(el2,"class","main-sidebar");
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" sidebar: style can be found in sidebar.less ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("section");
        dom.setAttribute(el3,"class","sidebar");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment(" Sidebar Menu ");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("ul");
        dom.setAttribute(el4,"class","sidebar-menu");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment(" /.sidebar-menu ");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" /.sidebar ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" Content Wrapper. Contains page content ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","content-wrapper");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" Main content ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("section");
        dom.setAttribute(el3,"class","content");
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment(" Your Page Content Here ");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" /.content ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" /.content-wrapper ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" Main Footer ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("footer");
        dom.setAttribute(el2,"class","main-footer");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" To the right ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","pull-right hidden-xs");
        var el4 = dom.createTextNode("\n      Anything you want\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" Default to the left ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("strong");
        var el4 = dom.createTextNode("Copyright © 2015 ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4,"href","#");
        var el5 = dom.createTextNode("Company");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode(".");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" All rights reserved.\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" Control Sidebar ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("aside");
        dom.setAttribute(el2,"class","control-sidebar control-sidebar-dark");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" Create the tabs ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("ul");
        dom.setAttribute(el3,"class","nav nav-tabs nav-justified control-sidebar-tabs");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        dom.setAttribute(el4,"class","active");
        var el5 = dom.createElement("a");
        dom.setAttribute(el5,"href","#control-sidebar-home-tab");
        dom.setAttribute(el5,"data-toggle","tab");
        var el6 = dom.createElement("i");
        dom.setAttribute(el6,"class","fa fa-home");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createElement("a");
        dom.setAttribute(el5,"href","#control-sidebar-settings-tab");
        dom.setAttribute(el5,"data-toggle","tab");
        var el6 = dom.createElement("i");
        dom.setAttribute(el6,"class","fa fa-gears");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" Tab panes ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","tab-content");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment(" Home tab content ");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","tab-pane active");
        dom.setAttribute(el4,"id","control-sidebar-home-tab");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h3");
        dom.setAttribute(el5,"class","control-sidebar-heading");
        var el6 = dom.createTextNode("Recent Activity");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("ul");
        dom.setAttribute(el5,"class","control-sidebar-menu");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("a");
        dom.setAttribute(el7,"href","javascript::;");
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("i");
        dom.setAttribute(el8,"class","menu-icon fa fa-birthday-cake bg-red");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8,"class","menu-info");
        var el9 = dom.createTextNode("\n                ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("h4");
        dom.setAttribute(el9,"class","control-sidebar-subheading");
        var el10 = dom.createTextNode("Langdon's Birthday");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n\n                ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("p");
        var el10 = dom.createTextNode("Will be 23 on April 24th");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n              ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment(" /.control-sidebar-menu ");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h3");
        dom.setAttribute(el5,"class","control-sidebar-heading");
        var el6 = dom.createTextNode("Tasks Progress");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("ul");
        dom.setAttribute(el5,"class","control-sidebar-menu");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("a");
        dom.setAttribute(el7,"href","javascript::;");
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("h4");
        dom.setAttribute(el8,"class","control-sidebar-subheading");
        var el9 = dom.createTextNode("\n                Custom Template Design\n                ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("span");
        dom.setAttribute(el9,"class","label label-danger pull-right");
        var el10 = dom.createTextNode("70%");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n              ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8,"class","progress progress-xxs");
        var el9 = dom.createTextNode("\n                ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("div");
        dom.setAttribute(el9,"class","progress-bar progress-bar-danger");
        dom.setAttribute(el9,"style","width: 70%");
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n              ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment(" /.control-sidebar-menu ");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment(" /.tab-pane ");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment(" Stats tab content ");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","tab-pane");
        dom.setAttribute(el4,"id","control-sidebar-stats-tab");
        var el5 = dom.createTextNode("Stats Tab Content");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment(" /.tab-pane ");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment(" Settings tab content ");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","tab-pane");
        dom.setAttribute(el4,"id","control-sidebar-settings-tab");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("form");
        dom.setAttribute(el5,"method","post");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h3");
        dom.setAttribute(el6,"class","control-sidebar-heading");
        var el7 = dom.createTextNode("General Settings");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6,"class","form-group");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("label");
        dom.setAttribute(el7,"class","control-sidebar-subheading");
        var el8 = dom.createTextNode("\n              Report panel usage\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("input");
        dom.setAttribute(el8,"type","checkbox");
        dom.setAttribute(el8,"class","pull-right");
        dom.setAttribute(el8,"checked","");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("p");
        var el8 = dom.createTextNode("\n              Some information about this general settings option\n            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment(" /.form-group ");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment(" /.tab-pane ");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" /.control-sidebar ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" Add the sidebar's background. This div must be placed\n       immediately after the control sidebar ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","control-sidebar-bg");
        dom.setAttribute(el2,"style","position: fixed; height: auto;");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" ./wrapper ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [7, 3, 3]);
        if (this.cachedFragment) { dom.repairClonedNode(dom.childAt(element0, [21, 7, 15, 1, 3, 1, 1]),[],true); }
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(dom.childAt(element1, [1]),0,0);
        morphs[1] = dom.createMorphAt(dom.childAt(element1, [3]),0,0);
        morphs[2] = dom.createMorphAt(dom.childAt(element0, [11, 3]),3,3);
        return morphs;
      },
      statements: [
        ["block","link-to",["admin.users"],[],0,null,["loc",[null,[38,12],[38,95]]]],
        ["block","link-to",["admin.courses"],[],1,null,["loc",[null,[39,12],[39,99]]]],
        ["content","outlet",["loc",[null,[52,6],[52,16]]]]
      ],
      locals: [],
      templates: [child0, child1]
    };
  }()));

});
define('tiny/templates/application', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "topLevel": null,
        "revision": "Ember@2.1.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "tiny/templates/application.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [
        ["content","outlet",["loc",[null,[1,0],[1,10]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('tiny/templates/components/default-box', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "topLevel": false,
        "revision": "Ember@2.1.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 18,
            "column": 0
          }
        },
        "moduleName": "tiny/templates/components/default-box.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","box");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","box-header");
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h3");
        dom.setAttribute(el3,"class","box-title");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" /.box-header ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","box-body");
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","form-inline dt-bootstrap");
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","row");
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","col-sm-12");
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n      ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n    ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n  ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" /.box-body ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" /.box ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [1, 1]),0,0);
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [5, 1, 1, 1]),1,1);
        return morphs;
      },
      statements: [
        ["content","title",["loc",[null,[3,24],[3,33]]]],
        ["content","yield",["loc",[null,[10,8],[10,17]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('tiny/templates/welcome', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 36
            }
          },
          "moduleName": "tiny/templates/welcome.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Admin Part");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "topLevel": null,
        "revision": "Ember@2.1.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "tiny/templates/welcome.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [
        ["block","link-to",["admin.users"],[],0,null,["loc",[null,[1,0],[1,48]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('tiny/tests/acceptances/subscription_test', ['mocha', 'ember-mocha', 'tiny/tests/helpers/start-app'], function (mocha, ember_mocha, startApp) {

  'use strict';

  startApp['default']();

  mocha.describe('test', function () {
    ember_mocha.it('test', function () {
      visit('/subscriptions/new');
      fillIn('input#name', 'Name');
      click('input#submit');
    });
  });

});
define('tiny/tests/acceptances/subscription_test.jshint', function () {

  'use strict';

  describe('JSHint - acceptances/subscription_test.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'acceptances/subscription_test.js should pass jshint.').to.be.ok; 
  })});

});
define('tiny/tests/adapters/application.jshint', function () {

  'use strict';

  describe('JSHint - adapters/application.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'adapters/application.js should pass jshint.').to.be.ok; 
  })});

});
define('tiny/tests/admin/courses/controller.jshint', function () {

  'use strict';

  describe('JSHint - admin/courses/controller.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'admin/courses/controller.js should pass jshint.').to.be.ok; 
  })});

});
define('tiny/tests/admin/courses/edit/controller.jshint', function () {

  'use strict';

  describe('JSHint - admin/courses/edit/controller.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'admin/courses/edit/controller.js should pass jshint.').to.be.ok; 
  })});

});
define('tiny/tests/admin/courses/edit/route.jshint', function () {

  'use strict';

  describe('JSHint - admin/courses/edit/route.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'admin/courses/edit/route.js should pass jshint.').to.be.ok; 
  })});

});
define('tiny/tests/admin/courses/new/controller.jshint', function () {

  'use strict';

  describe('JSHint - admin/courses/new/controller.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'admin/courses/new/controller.js should pass jshint.').to.be.ok; 
  })});

});
define('tiny/tests/admin/courses/new/route.jshint', function () {

  'use strict';

  describe('JSHint - admin/courses/new/route.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'admin/courses/new/route.js should pass jshint.').to.be.ok; 
  })});

});
define('tiny/tests/admin/courses/route.jshint', function () {

  'use strict';

  describe('JSHint - admin/courses/route.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'admin/courses/route.js should pass jshint.').to.be.ok; 
  })});

});
define('tiny/tests/admin/users/controller.jshint', function () {

  'use strict';

  describe('JSHint - admin/users/controller.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'admin/users/controller.js should pass jshint.').to.be.ok; 
  })});

});
define('tiny/tests/admin/users/edit/controller.jshint', function () {

  'use strict';

  describe('JSHint - admin/users/edit/controller.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'admin/users/edit/controller.js should pass jshint.').to.be.ok; 
  })});

});
define('tiny/tests/admin/users/edit/route.jshint', function () {

  'use strict';

  describe('JSHint - admin/users/edit/route.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'admin/users/edit/route.js should pass jshint.').to.be.ok; 
  })});

});
define('tiny/tests/admin/users/new/controller.jshint', function () {

  'use strict';

  describe('JSHint - admin/users/new/controller.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'admin/users/new/controller.js should pass jshint.').to.be.ok; 
  })});

});
define('tiny/tests/admin/users/new/route.jshint', function () {

  'use strict';

  describe('JSHint - admin/users/new/route.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'admin/users/new/route.js should pass jshint.').to.be.ok; 
  })});

});
define('tiny/tests/admin/users/route.jshint', function () {

  'use strict';

  describe('JSHint - admin/users/route.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'admin/users/route.js should pass jshint.').to.be.ok; 
  })});

});
define('tiny/tests/app.jshint', function () {

  'use strict';

  describe('JSHint - app.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'app.js should pass jshint.').to.be.ok; 
  })});

});
define('tiny/tests/components/data-form/component.jshint', function () {

  'use strict';

  describe('JSHint - components/data-form/component.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'components/data-form/component.js should pass jshint.').to.be.ok; 
  })});

});
define('tiny/tests/components/data-table/component.jshint', function () {

  'use strict';

  describe('JSHint - components/data-table/component.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'components/data-table/component.js should pass jshint.').to.be.ok; 
  })});

});
define('tiny/tests/helpers/resolver', ['exports', 'ember/resolver', 'tiny/config/environment'], function (exports, Resolver, config) {

  'use strict';

  var resolver = Resolver['default'].create();

  resolver.namespace = {
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix
  };

  exports['default'] = resolver;

});
define('tiny/tests/helpers/resolver.jshint', function () {

  'use strict';

  describe('JSHint - helpers/resolver.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'helpers/resolver.js should pass jshint.').to.be.ok; 
  })});

});
define('tiny/tests/helpers/start-app', ['exports', 'ember', 'tiny/app', 'tiny/config/environment'], function (exports, Ember, Application, config) {

  'use strict';



  exports['default'] = startApp;
  function startApp(attrs) {
    var application;

    var attributes = Ember['default'].merge({}, config['default'].APP);
    attributes = Ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    Ember['default'].run(function () {
      application = Application['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }

});
define('tiny/tests/helpers/start-app.jshint', function () {

  'use strict';

  describe('JSHint - helpers/start-app.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'helpers/start-app.js should pass jshint.').to.be.ok; 
  })});

});
define('tiny/tests/integration/components/admin-courses-index-test', ['chai', 'ember-mocha'], function (chai, ember_mocha) {

  'use strict';

  /* jshint expr:true */
  ember_mocha.describeComponent('admin-courses-index', 'Integration: AdminCoursesIndexComponent', {
    integration: true
  }, function () {
    ember_mocha.it('renders', function () {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#admin-courses-index}}
      //     template content
      //   {{/admin-courses-index}}
      // `);

      this.render(Ember.HTMLBars.template((function () {
        return {
          meta: {
            'topLevel': null,
            'revision': 'Ember@2.1.0',
            'loc': {
              'source': null,
              'start': {
                'line': 1,
                'column': 0
              },
              'end': {
                'line': 1,
                'column': 23
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment('');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [['content', 'admin-courses-index', ['loc', [null, [1, 0], [1, 23]]]]],
          locals: [],
          templates: []
        };
      })()));
      chai.expect(this.$()).to.have.length(1);
    });
  });

});
define('tiny/tests/integration/components/admin-courses-index-test.jshint', function () {

  'use strict';

  describe('JSHint - integration/components/admin-courses-index-test.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'integration/components/admin-courses-index-test.js should pass jshint.').to.be.ok; 
  })});

});
define('tiny/tests/integration/components/courses-index-test', ['chai', 'ember-mocha'], function (chai, ember_mocha) {

  'use strict';

  /* jshint expr:true */
  ember_mocha.describeComponent('courses-index', 'Integration: CoursesIndexComponent', {
    integration: true
  }, function () {
    ember_mocha.it('renders', function () {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#courses-index}}
      //     template content
      //   {{/courses-index}}
      // `);

      this.render(Ember.HTMLBars.template((function () {
        return {
          meta: {
            'topLevel': null,
            'revision': 'Ember@2.1.0',
            'loc': {
              'source': null,
              'start': {
                'line': 1,
                'column': 0
              },
              'end': {
                'line': 1,
                'column': 17
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment('');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [['content', 'courses-index', ['loc', [null, [1, 0], [1, 17]]]]],
          locals: [],
          templates: []
        };
      })()));
      chai.expect(this.$()).to.have.length(1);
    });
  });

});
define('tiny/tests/integration/components/courses-index-test.jshint', function () {

  'use strict';

  describe('JSHint - integration/components/courses-index-test.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'integration/components/courses-index-test.js should pass jshint.').to.be.ok; 
  })});

});
define('tiny/tests/integration/components/courses-new-test', ['chai', 'ember-mocha'], function (chai, ember_mocha) {

  'use strict';

  /* jshint expr:true */
  ember_mocha.describeComponent('courses-new', 'Integration: CoursesNewComponent', {
    integration: true
  }, function () {
    ember_mocha.it('renders', function () {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#courses-new}}
      //     template content
      //   {{/courses-new}}
      // `);

      this.render(Ember.HTMLBars.template((function () {
        return {
          meta: {
            'topLevel': null,
            'revision': 'Ember@2.1.0',
            'loc': {
              'source': null,
              'start': {
                'line': 1,
                'column': 0
              },
              'end': {
                'line': 1,
                'column': 15
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment('');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [['content', 'courses-new', ['loc', [null, [1, 0], [1, 15]]]]],
          locals: [],
          templates: []
        };
      })()));
      chai.expect(this.$()).to.have.length(1);
    });
  });

});
define('tiny/tests/integration/components/courses-new-test.jshint', function () {

  'use strict';

  describe('JSHint - integration/components/courses-new-test.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'integration/components/courses-new-test.js should pass jshint.').to.be.ok; 
  })});

});
define('tiny/tests/integration/components/default-box-test', ['chai', 'ember-mocha'], function (chai, ember_mocha) {

  'use strict';

  /* jshint expr:true */
  ember_mocha.describeComponent('default-box', 'Integration: DefaultBoxComponent', {
    integration: true
  }, function () {
    ember_mocha.it('renders', function () {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#default-box}}
      //     template content
      //   {{/default-box}}
      // `);

      this.render(Ember.HTMLBars.template((function () {
        return {
          meta: {
            'topLevel': null,
            'revision': 'Ember@2.1.0',
            'loc': {
              'source': null,
              'start': {
                'line': 1,
                'column': 0
              },
              'end': {
                'line': 1,
                'column': 15
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment('');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [['content', 'default-box', ['loc', [null, [1, 0], [1, 15]]]]],
          locals: [],
          templates: []
        };
      })()));
      chai.expect(this.$()).to.have.length(1);
    });
  });

});
define('tiny/tests/integration/components/default-box-test.jshint', function () {

  'use strict';

  describe('JSHint - integration/components/default-box-test.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'integration/components/default-box-test.js should pass jshint.').to.be.ok; 
  })});

});
define('tiny/tests/integration/components/subscription-form-test', ['chai', 'ember-mocha'], function (chai, ember_mocha) {

  'use strict';

  /* jshint expr:true */
  ember_mocha.describeComponent('subscription-form', 'Integration: SubscriptionFormComponent', {
    integration: true
  }, function () {
    ember_mocha.it('renders', function () {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#subscription-form}}
      //     template content
      //   {{/subscription-form}}
      // `);

      this.render(Ember.HTMLBars.template((function () {
        return {
          meta: {
            'topLevel': null,
            'revision': 'Ember@2.1.0',
            'loc': {
              'source': null,
              'start': {
                'line': 1,
                'column': 0
              },
              'end': {
                'line': 1,
                'column': 21
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment('');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [['content', 'subscription-form', ['loc', [null, [1, 0], [1, 21]]]]],
          locals: [],
          templates: []
        };
      })()));
      chai.expect(this.$()).to.have.length(1);
    });
  });

});
define('tiny/tests/integration/components/subscription-form-test.jshint', function () {

  'use strict';

  describe('JSHint - integration/components/subscription-form-test.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'integration/components/subscription-form-test.js should pass jshint.').to.be.ok; 
  })});

});
define('tiny/tests/integration/course/index-table/component-test', ['chai', 'ember-mocha'], function (chai, ember_mocha) {

  'use strict';

  /* jshint expr:true */
  ember_mocha.describeComponent('course/index-table', 'Integration: CourseIndexTableComponent', {
    integration: true
  }, function () {
    ember_mocha.it('renders', function () {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#course/index-table}}
      //     template content
      //   {{/course/index-table}}
      // `);

      this.render(Ember.HTMLBars.template((function () {
        return {
          meta: {
            'topLevel': null,
            'revision': 'Ember@2.1.0',
            'loc': {
              'source': null,
              'start': {
                'line': 1,
                'column': 0
              },
              'end': {
                'line': 1,
                'column': 22
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment('');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [['content', 'course/index-table', ['loc', [null, [1, 0], [1, 22]]]]],
          locals: [],
          templates: []
        };
      })()));
      chai.expect(this.$()).to.have.length(1);
    });
  });

});
define('tiny/tests/integration/course/index-table/component-test.jshint', function () {

  'use strict';

  describe('JSHint - integration/course/index-table/component-test.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'integration/course/index-table/component-test.js should pass jshint.').to.be.ok; 
  })});

});
define('tiny/tests/integration/data-table/component-test', ['chai', 'ember-mocha'], function (chai, ember_mocha) {

  'use strict';

  /* jshint expr:true */
  ember_mocha.describeComponent('data-table', 'Integration: DataTableComponent', {
    integration: true
  }, function () {
    ember_mocha.it('renders', function () {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#data-table}}
      //     template content
      //   {{/data-table}}
      // `);

      this.render(Ember.HTMLBars.template((function () {
        return {
          meta: {
            'topLevel': null,
            'revision': 'Ember@2.1.0',
            'loc': {
              'source': null,
              'start': {
                'line': 1,
                'column': 0
              },
              'end': {
                'line': 1,
                'column': 14
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment('');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [['content', 'data-table', ['loc', [null, [1, 0], [1, 14]]]]],
          locals: [],
          templates: []
        };
      })()));
      chai.expect(this.$()).to.have.length(1);
    });
  });

});
define('tiny/tests/integration/data-table/component-test.jshint', function () {

  'use strict';

  describe('JSHint - integration/data-table/component-test.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'integration/data-table/component-test.js should pass jshint.').to.be.ok; 
  })});

});
define('tiny/tests/integration/user-form/component-test', ['chai', 'ember-mocha'], function (chai, ember_mocha) {

  'use strict';

  /* jshint expr:true */
  ember_mocha.describeComponent('user-form', 'Integration: UserFormComponent', {
    integration: true
  }, function () {
    ember_mocha.it('renders', function () {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#user-form}}
      //     template content
      //   {{/user-form}}
      // `);

      this.render(Ember.HTMLBars.template((function () {
        return {
          meta: {
            'topLevel': null,
            'revision': 'Ember@2.1.0',
            'loc': {
              'source': null,
              'start': {
                'line': 1,
                'column': 0
              },
              'end': {
                'line': 1,
                'column': 13
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment('');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [['content', 'user-form', ['loc', [null, [1, 0], [1, 13]]]]],
          locals: [],
          templates: []
        };
      })()));
      chai.expect(this.$()).to.have.length(1);
    });
  });

});
define('tiny/tests/integration/user-form/component-test.jshint', function () {

  'use strict';

  describe('JSHint - integration/user-form/component-test.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'integration/user-form/component-test.js should pass jshint.').to.be.ok; 
  })});

});
define('tiny/tests/integration/user-table/component-test', ['chai', 'ember-mocha'], function (chai, ember_mocha) {

  'use strict';

  /* jshint expr:true */
  ember_mocha.describeComponent('user-table', 'Integration: UserTableComponent', {
    integration: true
  }, function () {
    ember_mocha.it('renders', function () {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#user-table}}
      //     template content
      //   {{/user-table}}
      // `);

      this.render(Ember.HTMLBars.template((function () {
        return {
          meta: {
            'topLevel': null,
            'revision': 'Ember@2.1.0',
            'loc': {
              'source': null,
              'start': {
                'line': 1,
                'column': 0
              },
              'end': {
                'line': 1,
                'column': 14
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment('');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [['content', 'user-table', ['loc', [null, [1, 0], [1, 14]]]]],
          locals: [],
          templates: []
        };
      })()));
      chai.expect(this.$()).to.have.length(1);
    });
  });

});
define('tiny/tests/integration/user-table/component-test.jshint', function () {

  'use strict';

  describe('JSHint - integration/user-table/component-test.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'integration/user-table/component-test.js should pass jshint.').to.be.ok; 
  })});

});
define('tiny/tests/models/course.jshint', function () {

  'use strict';

  describe('JSHint - models/course.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'models/course.js should pass jshint.').to.be.ok; 
  })});

});
define('tiny/tests/models/subscription.jshint', function () {

  'use strict';

  describe('JSHint - models/subscription.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'models/subscription.js should pass jshint.').to.be.ok; 
  })});

});
define('tiny/tests/models/user.jshint', function () {

  'use strict';

  describe('JSHint - models/user.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'models/user.js should pass jshint.').to.be.ok; 
  })});

});
define('tiny/tests/router.jshint', function () {

  'use strict';

  describe('JSHint - router.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'router.js should pass jshint.').to.be.ok; 
  })});

});
define('tiny/tests/routes/admin/courses.jshint', function () {

  'use strict';

  describe('JSHint - routes/admin/courses.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'routes/admin/courses.js should pass jshint.').to.be.ok; 
  })});

});
define('tiny/tests/test-helper', ['tiny/tests/helpers/resolver', 'ember-mocha', 'tiny/helpers/start-app'], function (resolver, ember_mocha, startApp) {

	'use strict';

	startApp['default']();

	ember_mocha.setResolver(resolver['default']);

});
define('tiny/tests/test-helper.jshint', function () {

  'use strict';

  describe('JSHint - test-helper.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'test-helper.js should pass jshint.').to.be.ok; 
  })});

});
define('tiny/tests/unit/admin/courses/route-test', ['chai', 'ember-mocha'], function (chai, ember_mocha) {

  'use strict';

  /* jshint expr:true */
  ember_mocha.describeModule('route:admin/courses', 'AdminCoursesRoute', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  }, function () {
    ember_mocha.it('exists', function () {
      var route = this.subject();
      chai.expect(route).to.be.ok;
    });
  });

});
define('tiny/tests/unit/admin/courses/route-test.jshint', function () {

  'use strict';

  describe('JSHint - unit/admin/courses/route-test.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'unit/admin/courses/route-test.js should pass jshint.').to.be.ok; 
  })});

});
define('tiny/tests/unit/admin/subscriptions/route-test', ['chai', 'ember-mocha'], function (chai, ember_mocha) {

  'use strict';

  /* jshint expr:true */
  ember_mocha.describeModule('route:admin/subscriptions', 'AdminSubscriptionsRoute', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  }, function () {
    ember_mocha.it('exists', function () {
      var route = this.subject();
      chai.expect(route).to.be.ok;
    });
  });

});
define('tiny/tests/unit/admin/subscriptions/route-test.jshint', function () {

  'use strict';

  describe('JSHint - unit/admin/subscriptions/route-test.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'unit/admin/subscriptions/route-test.js should pass jshint.').to.be.ok; 
  })});

});
define('tiny/tests/unit/admin/users/controller-test', ['chai', 'ember-mocha'], function (chai, ember_mocha) {

  'use strict';

  /* jshint expr:true */
  ember_mocha.describeModule('controller:admin/users', 'AdminUsersController', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  }, function () {
    // Replace this with your real tests.
    ember_mocha.it('exists', function () {
      var controller = this.subject();
      chai.expect(controller).to.be.ok;
    });
  });

});
define('tiny/tests/unit/admin/users/controller-test.jshint', function () {

  'use strict';

  describe('JSHint - unit/admin/users/controller-test.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'unit/admin/users/controller-test.js should pass jshint.').to.be.ok; 
  })});

});
define('tiny/tests/unit/admin/users/edit/route-test', ['chai', 'ember-mocha'], function (chai, ember_mocha) {

  'use strict';

  /* jshint expr:true */
  ember_mocha.describeModule('route:admin/users/edit', 'AdminUsersEditRoute', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  }, function () {
    ember_mocha.it('exists', function () {
      var route = this.subject();
      chai.expect(route).to.be.ok;
    });
  });

});
define('tiny/tests/unit/admin/users/edit/route-test.jshint', function () {

  'use strict';

  describe('JSHint - unit/admin/users/edit/route-test.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'unit/admin/users/edit/route-test.js should pass jshint.').to.be.ok; 
  })});

});
define('tiny/tests/unit/admin/users/new/route-test', ['chai', 'ember-mocha'], function (chai, ember_mocha) {

  'use strict';

  /* jshint expr:true */
  ember_mocha.describeModule('route:admin/users/new', 'AdminUsersNewRoute', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  }, function () {
    ember_mocha.it('exists', function () {
      var route = this.subject();
      chai.expect(route).to.be.ok;
    });
  });

});
define('tiny/tests/unit/admin/users/new/route-test.jshint', function () {

  'use strict';

  describe('JSHint - unit/admin/users/new/route-test.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'unit/admin/users/new/route-test.js should pass jshint.').to.be.ok; 
  })});

});
define('tiny/tests/unit/admin/users/route-test', ['chai', 'ember-mocha'], function (chai, ember_mocha) {

  'use strict';

  /* jshint expr:true */
  ember_mocha.describeModule('route:admin/users', 'AdminUsersRoute', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  }, function () {
    ember_mocha.it('exists', function () {
      var route = this.subject();
      chai.expect(route).to.be.ok;
    });
  });

});
define('tiny/tests/unit/admin/users/route-test.jshint', function () {

  'use strict';

  describe('JSHint - unit/admin/users/route-test.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'unit/admin/users/route-test.js should pass jshint.').to.be.ok; 
  })});

});
define('tiny/tests/unit/controllers/subscription-test', ['chai', 'ember-mocha'], function (chai, ember_mocha) {

  'use strict';

  /* jshint expr:true */
  ember_mocha.describeModule('controller:subscription', 'SubscriptionController', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  }, function () {
    // Replace this with your real tests.
    ember_mocha.it('exists', function () {
      var controller = this.subject();
      chai.expect(controller).to.be.ok;
    });
  });

});
define('tiny/tests/unit/controllers/subscription-test.jshint', function () {

  'use strict';

  describe('JSHint - unit/controllers/subscription-test.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'unit/controllers/subscription-test.js should pass jshint.').to.be.ok; 
  })});

});
define('tiny/tests/unit/models/subscription-test', ['chai', 'ember-mocha'], function (chai, ember_mocha) {

  'use strict';

  /* jshint expr:true */
  ember_mocha.describeModel('subscription', 'Subscription', {
    // Specify the other units that are required for this test.
    needs: []
  }, function () {
    // Replace this with your real tests.
    ember_mocha.it('exists', function () {
      var model = this.subject();
      // var store = this.store();
      chai.expect(model).to.be.ok;
    });
  });

});
define('tiny/tests/unit/models/subscription-test.jshint', function () {

  'use strict';

  describe('JSHint - unit/models/subscription-test.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'unit/models/subscription-test.js should pass jshint.').to.be.ok; 
  })});

});
define('tiny/tests/unit/routes/welcome-test', ['chai', 'ember-mocha'], function (chai, ember_mocha) {

  'use strict';

  /* jshint expr:true */
  ember_mocha.describeModule('route:welcome', 'WelcomeRoute', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  }, function () {
    ember_mocha.it('exists', function () {
      var route = this.subject();
      chai.expect(route).to.be.ok;
    });
  });

});
define('tiny/tests/unit/routes/welcome-test.jshint', function () {

  'use strict';

  describe('JSHint - unit/routes/welcome-test.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'unit/routes/welcome-test.js should pass jshint.').to.be.ok; 
  })});

});
define('tiny/tests/unit/subscriptions/route-test', ['chai', 'ember-mocha'], function (chai, ember_mocha) {

  'use strict';

  /* jshint expr:true */
  ember_mocha.describeModule('route:subscriptions', 'SubscriptionsRoute', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  }, function () {
    ember_mocha.it('exists', function () {
      var route = this.subject();
      chai.expect(route).to.be.ok;
    });
  });

});
define('tiny/tests/unit/subscriptions/route-test.jshint', function () {

  'use strict';

  describe('JSHint - unit/subscriptions/route-test.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'unit/subscriptions/route-test.js should pass jshint.').to.be.ok; 
  })});

});
/* jshint ignore:start */

/* jshint ignore:end */

/* jshint ignore:start */

define('tiny/config/environment', ['ember'], function(Ember) {
  return { 'default': {"modulePrefix":"tiny","environment":"development","baseURL":"/","locationType":"auto","EmberENV":{"FEATURES":{}},"APP":{"name":"tiny","version":"0.0.0+"},"contentSecurityPolicy":{"default-src":"'self'","script-src":"'self' https://cdn.mxpnl.com","font-src":"'self' http://fonts.gstatic.com","connect-src":"'self' http://localhost:5000 http://107.170.3.185:5000","img-src":"'self'","style-src":"'self' 'unsafe-inline' https://fonts.googleapis.com","media-src":"'self'"},"contentSecurityPolicyHeader":"Content-Security-Policy-Report-Only","exportApplicationGlobal":true}};
});

if (runningTests) {
  require("tiny/tests/test-helper");
} else {
  require("tiny/app")["default"].create({"name":"tiny","version":"0.0.0+"});
}

/* jshint ignore:end */
//# sourceMappingURL=tiny.map