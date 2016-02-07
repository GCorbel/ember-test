"use strict";
/* jshint ignore:start */

/* jshint ignore:end */

define('tiny/adapters/application', ['exports', 'active-model-adapter', 'ember-simple-auth/mixins/data-adapter-mixin'], function (exports, ActiveModelAdapter, DataAdapterMixin) {

  'use strict';

  exports['default'] = ActiveModelAdapter['default'].extend(DataAdapterMixin['default'], {
    host: Tiny.API_HOST,
    namespace: Tiny.API_NAMESPACE,
    authorizer: 'authorizer:api'
  });

});
define('tiny/admin/admin_users/controller', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Controller.extend({
    columns: [{ property: 'email', label: 'Email' }]
  });

});
define('tiny/admin/admin_users/edit/controller', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Controller.extend({
    columns: [{ property: 'email', label: 'Email' }, { property: 'password', label: 'Password', type: 'password' }, { property: 'passwordConfirmation', label: 'Password Confirmation',
      type: 'password' }]
  });

});
define('tiny/admin/admin_users/edit/route', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({
    model: function model(params) {
      return this.store.findRecord('admin_user', params.id);
    },
    actions: {
      submit: function submit() {
        this.transitionTo('admin.admin_users');
      },
      cancel: function cancel() {
        this.transitionTo('admin.admin_users');
      }
    }
  });

});
define('tiny/admin/admin_users/edit/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": [
              "wrong-type",
              "multiple-nodes"
            ]
          },
          "revision": "Ember@2.3.1",
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
          "moduleName": "tiny/admin/admin_users/edit/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  Edit Admin ");
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
          ["content","model.id",["loc",[null,[2,13],[2,25]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": [
            "wrong-type"
          ]
        },
        "revision": "Ember@2.3.1",
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
        "moduleName": "tiny/admin/admin_users/edit/template.hbs"
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
define('tiny/admin/admin_users/new/controller', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Controller.extend({
    columns: [{ property: 'email', label: 'Email' }, { property: 'password', label: 'Password', type: 'password' }, { property: 'passwordConfirmation', label: 'Password Confirmation',
      type: 'password' }]
  });

});
define('tiny/admin/admin_users/new/route', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({
    model: function model() {
      return this.store.createRecord('admin_user');
    },
    actions: {
      submit: function submit() {
        this.transitionTo('admin.admin_users');
      },
      cancel: function cancel() {
        this.transitionTo('admin.admin_users');
      }
    }
  });

});
define('tiny/admin/admin_users/new/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": [
              "wrong-type"
            ]
          },
          "revision": "Ember@2.3.1",
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
          "moduleName": "tiny/admin/admin_users/new/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  New Admin\n");
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
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": [
            "wrong-type"
          ]
        },
        "revision": "Ember@2.3.1",
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
        "moduleName": "tiny/admin/admin_users/new/template.hbs"
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
define('tiny/admin/admin_users/route', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({
    model: function model() {
      return this.store.findAll('admin_user');
    }
  });

});
define('tiny/admin/admin_users/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.3.1",
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
          "moduleName": "tiny/admin/admin_users/template.hbs"
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
          var el1 = dom.createTextNode(" Create new admin\n");
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
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": [
            "multiple-nodes",
            "wrong-type"
          ]
        },
        "revision": "Ember@2.3.1",
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
        "moduleName": "tiny/admin/admin_users/template.hbs"
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
        ["inline","data-table",[],["model",["subexpr","@mut",[["get","model",["loc",[null,[3,21],[3,26]]]]],[],[]],"title","Administators","columns",["subexpr","@mut",[["get","columns",["loc",[null,[3,57],[3,64]]]]],[],[]],"editRoute","admin.admin_users.edit"],["loc",[null,[3,2],[3,101]]]],
        ["block","link-to",["admin.admin_users.new"],["class","btn btn-success"],0,null,["loc",[null,[6,0],[8,12]]]],
        ["content","outlet",["loc",[null,[9,0],[9,10]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('tiny/admin/course/route', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({
    model: function model(params) {
      return this.store.find('course', params.id);
    }
  });

});
define('tiny/admin/course/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        var child0 = (function() {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.3.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 22,
                  "column": 10
                },
                "end": {
                  "line": 24,
                  "column": 10
                }
              },
              "moduleName": "tiny/admin/course/template.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("            ");
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
              ["content","subscription.firstName",["loc",[null,[23,12],[23,38]]]]
            ],
            locals: [],
            templates: []
          };
        }());
        var child1 = (function() {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.3.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 27,
                  "column": 10
                },
                "end": {
                  "line": 29,
                  "column": 10
                }
              },
              "moduleName": "tiny/admin/course/template.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("            ");
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
              ["content","subscription.lastName",["loc",[null,[28,12],[28,37]]]]
            ],
            locals: [],
            templates: []
          };
        }());
        var child2 = (function() {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.3.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 32,
                  "column": 10
                },
                "end": {
                  "line": 34,
                  "column": 10
                }
              },
              "moduleName": "tiny/admin/course/template.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("            ");
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
              ["content","subscription.email",["loc",[null,[33,12],[33,34]]]]
            ],
            locals: [],
            templates: []
          };
        }());
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.3.1",
            "loc": {
              "source": null,
              "start": {
                "line": 16,
                "column": 4
              },
              "end": {
                "line": 40,
                "column": 4
              }
            },
            "moduleName": "tiny/admin/course/template.hbs"
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
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createTextNode("\n");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("        ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createTextNode("\n");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("        ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createTextNode("\n");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("        ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createTextNode("\n          ");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
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
            var morphs = new Array(5);
            morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]),1,1);
            morphs[1] = dom.createMorphAt(dom.childAt(element0, [3]),1,1);
            morphs[2] = dom.createMorphAt(dom.childAt(element0, [5]),1,1);
            morphs[3] = dom.createMorphAt(dom.childAt(element0, [7]),1,1);
            morphs[4] = dom.createMorphAt(dom.childAt(element0, [9]),1,1);
            return morphs;
          },
          statements: [
            ["content","subscription.id",["loc",[null,[19,10],[19,29]]]],
            ["block","link-to",["admin.subscriptions.edit",["get","subscription",["loc",[null,[22,48],[22,60]]]]],[],0,null,["loc",[null,[22,10],[24,22]]]],
            ["block","link-to",["admin.subscriptions.edit",["get","subscription",["loc",[null,[27,48],[27,60]]]]],[],1,null,["loc",[null,[27,10],[29,22]]]],
            ["block","link-to",["admin.subscriptions.edit",["get","subscription",["loc",[null,[32,48],[32,60]]]]],[],2,null,["loc",[null,[32,10],[34,22]]]],
            ["content","subscription.paid",["loc",[null,[37,10],[37,31]]]]
          ],
          locals: ["subscription"],
          templates: [child0, child1, child2]
        };
      }());
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.3.1",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 0
            },
            "end": {
              "line": 52,
              "column": 0
            }
          },
          "moduleName": "tiny/admin/course/template.hbs"
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
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("th");
          var el5 = dom.createTextNode("First Name");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("th");
          var el5 = dom.createTextNode("Last Name");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("th");
          var el5 = dom.createTextNode("Email");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("th");
          var el5 = dom.createTextNode("Paid");
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
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("th");
          var el5 = dom.createTextNode("First Name");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("th");
          var el5 = dom.createTextNode("Last Name");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("th");
          var el5 = dom.createTextNode("Email");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("th");
          var el5 = dom.createTextNode("Paid");
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
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 3]),1,1);
          return morphs;
        },
        statements: [
          ["block","each",[["get","model.subscriptions",["loc",[null,[16,12],[16,31]]]]],[],0,null,["loc",[null,[16,4],[40,13]]]]
        ],
        locals: [],
        templates: [child0]
      };
    }());
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": [
            "multiple-nodes",
            "wrong-type"
          ]
        },
        "revision": "Ember@2.3.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 53,
            "column": 0
          }
        },
        "moduleName": "tiny/admin/course/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h1");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]),1,1);
        morphs[1] = dom.createMorphAt(fragment,2,2,contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["content","model.name",["loc",[null,[2,2],[2,16]]]],
        ["block","default-box",[],["title","Subscription"],0,null,["loc",[null,[4,0],[52,16]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('tiny/admin/courses/controller', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Controller.extend({
    columns: [{ property: 'name', label: 'Name' }, { property: 'price', label: 'Price' }]
  });

});
define('tiny/admin/courses/edit/controller', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Controller.extend({
    columns: [{ property: 'name', label: 'Name' }, { property: 'price', label: 'Price' }, { property: 'nbPlaces', label: 'Number of places' }]
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
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": [
              "wrong-type",
              "multiple-nodes"
            ]
          },
          "revision": "Ember@2.3.1",
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
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": [
            "wrong-type"
          ]
        },
        "revision": "Ember@2.3.1",
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
    columns: [{ property: 'name', label: 'Name' }, { property: 'price', label: 'Price' }, { property: 'nbPlaces', label: 'Number of places' }]
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
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": [
              "wrong-type"
            ]
          },
          "revision": "Ember@2.3.1",
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
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": [
            "wrong-type"
          ]
        },
        "revision": "Ember@2.3.1",
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
          "fragmentReason": false,
          "revision": "Ember@2.3.1",
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
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": [
            "multiple-nodes",
            "wrong-type"
          ]
        },
        "revision": "Ember@2.3.1",
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
        ["inline","data-table",[],["model",["subexpr","@mut",[["get","model",["loc",[null,[3,21],[3,26]]]]],[],[]],"title","Courses","columns",["subexpr","@mut",[["get","columns",["loc",[null,[3,51],[3,58]]]]],[],[]],"editRoute","admin.courses.edit","showRoute","admin.course"],["loc",[null,[3,2],[3,116]]]],
        ["block","link-to",["admin.courses.new"],["class","btn btn-success"],0,null,["loc",[null,[6,0],[8,12]]]],
        ["content","outlet",["loc",[null,[9,0],[9,10]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('tiny/admin/custom_fields/edit/controller', ['exports', 'custom-fields/admin/custom_fields/edit/controller'], function (exports, controller) {

	'use strict';



	exports['default'] = controller['default'];

});
define('tiny/admin/custom_fields/edit/route', ['exports', 'custom-fields/admin/custom_fields/edit/route'], function (exports, route) {

	'use strict';



	exports['default'] = route['default'];

});
define('tiny/admin/custom_fields/edit/template', ['exports', 'custom-fields/admin/custom_fields/edit/template'], function (exports, template) {

	'use strict';



	exports['default'] = template['default'];

});
define('tiny/admin/dashboard/route', ['exports', 'ember', 'ember-simple-auth/mixins/authenticated-route-mixin'], function (exports, Ember, AuthenticatedRouteMixin) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend(AuthenticatedRouteMixin['default'], {
    model: function model() {
      return Ember['default'].RSVP.hash({
        subscriptions: this.store.findAll('subscription'),
        courses: this.store.findAll('course'),
        amount: this.amount()
      });
    }, amount: function amount() {
      var _this = this;

      return new Ember['default'].RSVP.Promise(function (resolve) {
        _this.store.findAll('subscription').then(function (subscriptions) {
          Ember['default'].RSVP.all(subscriptions.mapBy('course')).then(function () {
            var sum = 0;
            subscriptions.forEach(function (subscription) {
              sum += parseInt(subscription.get('course.price'));
            });
            resolve(sum);
          });
        });
      });
    }
  });

});
define('tiny/admin/dashboard/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.3.1",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 2
            },
            "end": {
              "line": 4,
              "column": 2
            }
          },
          "moduleName": "tiny/admin/dashboard/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    Total : ");
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
          ["content","model.subscriptions.length",["loc",[null,[3,12],[3,42]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    var child1 = (function() {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.3.1",
          "loc": {
            "source": null,
            "start": {
              "line": 7,
              "column": 2
            },
            "end": {
              "line": 9,
              "column": 2
            }
          },
          "moduleName": "tiny/admin/dashboard/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    Total : ");
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
          ["content","model.courses.length",["loc",[null,[8,12],[8,36]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    var child2 = (function() {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.3.1",
          "loc": {
            "source": null,
            "start": {
              "line": 12,
              "column": 2
            },
            "end": {
              "line": 14,
              "column": 2
            }
          },
          "moduleName": "tiny/admin/dashboard/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    Total : ");
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
          ["content","model.amount",["loc",[null,[13,12],[13,28]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": [
            "multiple-nodes"
          ]
        },
        "revision": "Ember@2.3.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 16,
            "column": 0
          }
        },
        "moduleName": "tiny/admin/dashboard/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","col-sm-4");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","col-sm-4");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","col-sm-4");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]),1,1);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [2]),1,1);
        morphs[2] = dom.createMorphAt(dom.childAt(fragment, [4]),1,1);
        return morphs;
      },
      statements: [
        ["block","default-box",[],["title","Subscription"],0,null,["loc",[null,[2,2],[4,18]]]],
        ["block","default-box",[],["title","Courses"],1,null,["loc",[null,[7,2],[9,18]]]],
        ["block","default-box",[],["title","Amount"],2,null,["loc",[null,[12,2],[14,18]]]]
      ],
      locals: [],
      templates: [child0, child1, child2]
    };
  }()));

});
define('tiny/admin/edit/controller', ['exports', 'custom-fields/admin/custom_fields/edit/controller'], function (exports, controller) {

	'use strict';



	exports['default'] = controller['default'];

});
define('tiny/admin/edit/route', ['exports', 'custom-fields/admin/edit/route'], function (exports, route) {

	'use strict';



	exports['default'] = route['default'];

});
define('tiny/admin/edit/template', ['exports', 'custom-fields/admin/edit/template'], function (exports, template) {

	'use strict';



	exports['default'] = template['default'];

});
define('tiny/admin/newsletter/controller', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Controller.extend({
    body: function body() {
      return '';
    },
    courses: (function () {
      return this.store.findAll('course');
    }).property('courses'),
    selectedCourses: (function () {
      return this.store.findAll('course');
    }).property('selectedCourses')
  });

});
define('tiny/admin/newsletter/route', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({
    model: function model() {
      return this.store.createRecord('newsletter');
    },
    actions: {
      submit: function submit() {
        this.controller.model.save();
      }
    }
  });

});
define('tiny/admin/newsletter/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        var child0 = (function() {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.3.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 4,
                  "column": 4
                },
                "end": {
                  "line": 6,
                  "column": 4
                }
              },
              "moduleName": "tiny/admin/newsletter/template.hbs"
            },
            isEmpty: false,
            arity: 1,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("      ");
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
              ["content","selectedCourse.name",["loc",[null,[5,6],[5,29]]]]
            ],
            locals: ["selectedCourse"],
            templates: []
          };
        }());
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.3.1",
            "loc": {
              "source": null,
              "start": {
                "line": 3,
                "column": 2
              },
              "end": {
                "line": 7,
                "column": 2
              }
            },
            "moduleName": "tiny/admin/newsletter/template.hbs"
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
            ["block","power-select-multiple",[],["options",["subexpr","@mut",[["get","courses",["loc",[null,[4,37],[4,44]]]]],[],[]],"selected",["subexpr","@mut",[["get","selectedCourses",["loc",[null,[4,54],[4,69]]]]],[],[]],"onchange",["subexpr","action",[["subexpr","mut",[["get","model.selectedCourses",["loc",[null,[4,92],[4,113]]]]],[],["loc",[null,[4,87],[4,114]]]]],[],["loc",[null,[4,79],[4,115]]]]],0,null,["loc",[null,[4,4],[6,30]]]]
          ],
          locals: [],
          templates: [child0]
        };
      }());
      var child1 = (function() {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.3.1",
            "loc": {
              "source": null,
              "start": {
                "line": 8,
                "column": 2
              },
              "end": {
                "line": 10,
                "column": 2
              }
            },
            "moduleName": "tiny/admin/newsletter/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
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
            ["inline","summer-note",[],["content",["subexpr","@mut",[["get","model.body",["loc",[null,[9,26],[9,36]]]]],[],[]],"btnSize",["subexpr","@mut",[["get","bs-sm",["loc",[null,[9,45],[9,50]]]]],[],[]],"airMode",false],["loc",[null,[9,4],[9,67]]]]
          ],
          locals: [],
          templates: []
        };
      }());
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": [
              "wrong-type",
              "multiple-nodes"
            ]
          },
          "revision": "Ember@2.3.1",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 11,
              "column": 0
            }
          },
          "moduleName": "tiny/admin/newsletter/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          morphs[1] = dom.createMorphAt(fragment,3,3,contextualElement);
          morphs[2] = dom.createMorphAt(fragment,4,4,contextualElement);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [
          ["inline","em-input",[],["property","title","label","Titre"],["loc",[null,[2,2],[2,45]]]],
          ["block","em-custom-input",[],["label","Courses","property","courses"],0,null,["loc",[null,[3,2],[7,22]]]],
          ["block","em-custom-input",[],["label","Message","property","body"],1,null,["loc",[null,[8,2],[10,22]]]]
        ],
        locals: [],
        templates: [child0, child1]
      };
    }());
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": [
            "wrong-type"
          ]
        },
        "revision": "Ember@2.3.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 12,
            "column": 0
          }
        },
        "moduleName": "tiny/admin/newsletter/template.hbs"
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
        ["block","em-form",[],["model",["subexpr","@mut",[["get","model",["loc",[null,[1,17],[1,22]]]]],[],[]]],0,null,["loc",[null,[1,0],[11,12]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('tiny/admin/route', ['exports', 'ember', 'ember-simple-auth/mixins/authenticated-route-mixin'], function (exports, Ember, AuthenticatedRouteMixin) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend(AuthenticatedRouteMixin['default'], {
    session: Ember['default'].inject.service('session'),
    actions: {
      invalidateSession: function invalidateSession() {
        var _this = this;

        this.get('session').invalidate().then(function () {
          _this.transitionTo('login');
        });
      },
      didTransition: function didTransition() {
        Ember['default'].run.scheduleOnce('afterRender', this, function () {
          $.AdminLTE.layout.activate();
        });
      }
    }
  });

});
define('tiny/admin/subscription/route', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({
    model: function model(params) {
      return this.store.find('subscription', params.id);
    }
  });

});
define('tiny/admin/subscription/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.3.1",
            "loc": {
              "source": null,
              "start": {
                "line": 32,
                "column": 6
              },
              "end": {
                "line": 47,
                "column": 6
              }
            },
            "moduleName": "tiny/admin/subscription/template.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("tr");
            dom.setAttribute(el1,"role","row");
            var el2 = dom.createTextNode("\n          ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createTextNode("\n            ");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n          ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n          ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createTextNode("\n            ");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n          ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n          ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createTextNode("\n            ");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n          ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n          ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            var el3 = dom.createTextNode("\n            ");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n          ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var morphs = new Array(4);
            morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]),1,1);
            morphs[1] = dom.createMorphAt(dom.childAt(element0, [3]),1,1);
            morphs[2] = dom.createMorphAt(dom.childAt(element0, [5]),1,1);
            morphs[3] = dom.createMorphAt(dom.childAt(element0, [7]),1,1);
            return morphs;
          },
          statements: [
            ["content","record.id",["loc",[null,[35,12],[35,25]]]],
            ["content","record.fullname",["loc",[null,[38,12],[38,31]]]],
            ["content","record.phone",["loc",[null,[41,12],[41,28]]]],
            ["content","record.email",["loc",[null,[44,12],[44,28]]]]
          ],
          locals: ["contact"],
          templates: []
        };
      }());
      var child1 = (function() {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.3.1",
            "loc": {
              "source": null,
              "start": {
                "line": 47,
                "column": 6
              },
              "end": {
                "line": 53,
                "column": 6
              }
            },
            "moduleName": "tiny/admin/subscription/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("tr");
            dom.setAttribute(el1,"role","row");
            var el2 = dom.createTextNode("\n          ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("td");
            dom.setAttribute(el2,"colspan","4");
            var el3 = dom.createTextNode("\n            No contacts\n          ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
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
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": [
              "multiple-nodes"
            ]
          },
          "revision": "Ember@2.3.1",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 64,
              "column": 0
            }
          },
          "moduleName": "tiny/admin/subscription/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","form-group");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("label");
          dom.setAttribute(el2,"class","control-label");
          var el3 = dom.createTextNode("Phone");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","form-group");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("label");
          dom.setAttribute(el2,"class","control-label");
          var el3 = dom.createTextNode("Email");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","form-group");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("label");
          dom.setAttribute(el2,"class","control-label");
          var el3 = dom.createTextNode("Phone");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","form-group");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("label");
          dom.setAttribute(el2,"class","control-label");
          var el3 = dom.createTextNode("Paid");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","form-group");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("label");
          dom.setAttribute(el2,"class","control-label");
          var el3 = dom.createTextNode("Comments");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("table");
          dom.setAttribute(el1,"class","table table-bordered table-hover");
          dom.setAttribute(el1,"role","grid");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("thead");
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("tr");
          dom.setAttribute(el3,"role","row");
          var el4 = dom.createTextNode("\n        ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("th");
          var el5 = dom.createTextNode("Id");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n        ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("th");
          var el5 = dom.createTextNode("Fullname");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n        ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("th");
          var el5 = dom.createTextNode("Phone");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n        ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("th");
          var el5 = dom.createTextNode("Email");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("tbody");
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("tfoot");
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("tr");
          var el4 = dom.createTextNode("\n        ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("th");
          var el5 = dom.createTextNode("Id");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n        ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("th");
          var el5 = dom.createTextNode("Fullname");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n        ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("th");
          var el5 = dom.createTextNode("Phone");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n        ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("th");
          var el5 = dom.createTextNode("Email");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(6);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 3]),0,0);
          morphs[1] = dom.createMorphAt(dom.childAt(fragment, [3, 3]),0,0);
          morphs[2] = dom.createMorphAt(dom.childAt(fragment, [5, 3]),0,0);
          morphs[3] = dom.createMorphAt(dom.childAt(fragment, [7, 3]),0,0);
          morphs[4] = dom.createMorphAt(dom.childAt(fragment, [9, 3]),0,0);
          morphs[5] = dom.createMorphAt(dom.childAt(fragment, [11, 3]),1,1);
          return morphs;
        },
        statements: [
          ["content","model.phone",["loc",[null,[4,9],[4,24]]]],
          ["content","model.email",["loc",[null,[8,9],[8,24]]]],
          ["content","model.phone",["loc",[null,[12,9],[12,24]]]],
          ["content","model.paid",["loc",[null,[16,9],[16,23]]]],
          ["content","model.comments",["loc",[null,[20,9],[20,27]]]],
          ["block","each",[["get","model.contacts",["loc",[null,[32,14],[32,28]]]]],[],0,1,["loc",[null,[32,6],[53,15]]]]
        ],
        locals: [],
        templates: [child0, child1]
      };
    }());
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": [
            "wrong-type"
          ]
        },
        "revision": "Ember@2.3.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 65,
            "column": 0
          }
        },
        "moduleName": "tiny/admin/subscription/template.hbs"
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
        ["block","default-box",[],["title",["subexpr","@mut",[["get","model.fullname",["loc",[null,[1,21],[1,35]]]]],[],[]]],0,null,["loc",[null,[1,0],[64,16]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('tiny/admin/subscriptions/controller', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Controller.extend({
    columns: ['user', 'course'],
    actions: {
      'delete': function _delete(model) {
        model.destroyRecord();
      }
    }
  });

});
define('tiny/admin/subscriptions/edit/route', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({
    model: function model(params) {
      return this.store.findRecord('subscription', params.id);
    },

    actions: {
      submit: function submit() {
        var _this = this;

        this.saveSubscription(function (subscription) {
          $('.modal').modal('hide');
          _this.transitionTo('admin.subscriptions');
        }, function () {});
      },
      cancel: function cancel() {
        this.controller.model.rollbackAttributes();
        this.transitionTo('admin.subscriptions');
      }
    },

    saveSubscription: function saveSubscription(callback) {
      this.controller.model.saveWithContacts(callback);
    },

    trigger: (function () {
      var _this2 = this;

      Ember['default'].run.schedule('afterRender', function () {
        $('.modal').modal().on('hidden.bs.modal', function () {
          _this2.send('cancel');
        });
      });
    }).on('init')
  });

});
define('tiny/admin/subscriptions/edit/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.3.1",
            "loc": {
              "source": null,
              "start": {
                "line": 17,
                "column": 8
              },
              "end": {
                "line": 19,
                "column": 8
              }
            },
            "moduleName": "tiny/admin/subscriptions/edit/template.hbs"
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
            ["inline","component",[["get","plugin.component",["loc",[null,[18,22],[18,38]]]]],["model",["subexpr","@mut",[["get","model",["loc",[null,[18,45],[18,50]]]]],[],[]]],["loc",[null,[18,10],[18,52]]]]
          ],
          locals: ["plugin"],
          templates: []
        };
      }());
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.3.1",
          "loc": {
            "source": null,
            "start": {
              "line": 15,
              "column": 6
            },
            "end": {
              "line": 27,
              "column": 6
            }
          },
          "moduleName": "tiny/admin/subscriptions/edit/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","form-group");
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("label");
          dom.setAttribute(el2,"for","paid");
          dom.setAttribute(el2,"class","control-label");
          var el3 = dom.createTextNode("Paid");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          var el3 = dom.createTextNode("\n            ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          morphs[1] = dom.createMorphAt(dom.childAt(fragment, [3, 3]),1,1);
          return morphs;
        },
        statements: [
          ["block","each",[["get","env.APP.plugins",["loc",[null,[17,16],[17,31]]]]],[],0,null,["loc",[null,[17,8],[19,17]]]],
          ["inline","em-checkbox",[],["label","Paid","property","paid"],["loc",[null,[24,12],[24,56]]]]
        ],
        locals: [],
        templates: [child0]
      };
    }());
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": [
            "multiple-nodes",
            "wrong-type"
          ]
        },
        "revision": "Ember@2.3.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 44,
            "column": 0
          }
        },
        "moduleName": "tiny/admin/subscriptions/edit/template.hbs"
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
        dom.setAttribute(el2,"class","modal-dialog modal-lg");
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
        var el6 = dom.createTextNode(" ");
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
        var element3 = dom.childAt(element1, [3]);
        var element4 = dom.childAt(element0, [5]);
        var element5 = dom.childAt(element4, [1]);
        var element6 = dom.childAt(element4, [3]);
        var morphs = new Array(6);
        morphs[0] = dom.createElementMorph(element2);
        morphs[1] = dom.createMorphAt(element3,1,1);
        morphs[2] = dom.createMorphAt(element3,3,3);
        morphs[3] = dom.createMorphAt(dom.childAt(element0, [3]),1,1);
        morphs[4] = dom.createElementMorph(element5);
        morphs[5] = dom.createElementMorph(element6);
        return morphs;
      },
      statements: [
        ["element","action",["cancel"],[],["loc",[null,[8,14],[8,33]]]],
        ["content","model.firstName",["loc",[null,[11,8],[11,27]]]],
        ["content","model.lastName",["loc",[null,[11,28],[11,46]]]],
        ["block","subscription-form",[],["model",["subexpr","@mut",[["get","model",["loc",[null,[15,33],[15,38]]]]],[],[]]],0,null,["loc",[null,[15,6],[27,28]]]],
        ["element","action",["cancel"],[],["loc",[null,[32,14],[32,33]]]],
        ["element","action",["submit"],[],["loc",[null,[36,14],[36,33]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('tiny/admin/subscriptions/new/route', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({
    model: function model(params) {
      return this.store.createRecord('subscription');
    },
    actions: {
      submit: function submit() {
        var _this = this;

        this.saveSubscription(function (subscription) {
          $('.modal').modal('hide');
          _this.transitionTo('admin.subscriptions');
        }, function () {});
      },
      cancel: function cancel() {
        this.controller.model.rollbackAttributes();
        this.transitionTo('admin.subscriptions');
      }
    },
    saveSubscription: function saveSubscription(callback) {
      this.controller.model.saveWithContacts(callback);
    },
    trigger: (function () {
      var _this2 = this;

      Ember['default'].run.schedule('afterRender', function () {
        $('.modal').modal().on('hidden.bs.modal', function () {
          _this2.send('cancel');
        });
      });
    }).on('init'),
    courses: (function () {
      return this.store.findAll('course');
    }).property('courses')
  });

});
define('tiny/admin/subscriptions/new/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.3.1",
            "loc": {
              "source": null,
              "start": {
                "line": 17,
                "column": 8
              },
              "end": {
                "line": 19,
                "column": 8
              }
            },
            "moduleName": "tiny/admin/subscriptions/new/template.hbs"
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
            ["inline","component",[["get","plugin.component",["loc",[null,[18,22],[18,38]]]]],["model",["subexpr","@mut",[["get","model",["loc",[null,[18,45],[18,50]]]]],[],[]]],["loc",[null,[18,10],[18,52]]]]
          ],
          locals: ["plugin"],
          templates: []
        };
      }());
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.3.1",
          "loc": {
            "source": null,
            "start": {
              "line": 15,
              "column": 6
            },
            "end": {
              "line": 27,
              "column": 6
            }
          },
          "moduleName": "tiny/admin/subscriptions/new/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","form-group");
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("label");
          dom.setAttribute(el2,"for","paid");
          dom.setAttribute(el2,"class","control-label");
          var el3 = dom.createTextNode("Paid");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          var el3 = dom.createTextNode("\n            ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          morphs[1] = dom.createMorphAt(dom.childAt(fragment, [3, 3]),1,1);
          return morphs;
        },
        statements: [
          ["block","each",[["get","env.APP.plugins",["loc",[null,[17,16],[17,31]]]]],[],0,null,["loc",[null,[17,8],[19,17]]]],
          ["inline","em-checkbox",[],["label","Paid","property","paid"],["loc",[null,[24,12],[24,56]]]]
        ],
        locals: [],
        templates: [child0]
      };
    }());
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": [
            "multiple-nodes",
            "wrong-type"
          ]
        },
        "revision": "Ember@2.3.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 44,
            "column": 0
          }
        },
        "moduleName": "tiny/admin/subscriptions/new/template.hbs"
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
        dom.setAttribute(el2,"class","modal-dialog modal-lg");
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
        ["block","subscription-form",[],["model",["subexpr","@mut",[["get","model",["loc",[null,[15,33],[15,38]]]]],[],[]]],0,null,["loc",[null,[15,6],[27,28]]]],
        ["element","action",["cancel"],[],["loc",[null,[32,14],[32,33]]]],
        ["element","action",["submit"],[],["loc",[null,[36,14],[36,33]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('tiny/admin/subscriptions/route', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({
    model: function model() {
      return this.store.findAll('subscription');
    }
  });

});
define('tiny/admin/subscriptions/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        var child0 = (function() {
          var child0 = (function() {
            return {
              meta: {
                "fragmentReason": false,
                "revision": "Ember@2.3.1",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 27,
                    "column": 10
                  },
                  "end": {
                    "line": 29,
                    "column": 10
                  }
                },
                "moduleName": "tiny/admin/subscriptions/template.hbs"
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
                dom.setAttribute(el1,"class","glyphicon glyphicon-eye-open");
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
          var child1 = (function() {
            return {
              meta: {
                "fragmentReason": false,
                "revision": "Ember@2.3.1",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 30,
                    "column": 10
                  },
                  "end": {
                    "line": 32,
                    "column": 10
                  }
                },
                "moduleName": "tiny/admin/subscriptions/template.hbs"
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
              "fragmentReason": false,
              "revision": "Ember@2.3.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 15,
                  "column": 6
                },
                "end": {
                  "line": 39,
                  "column": 6
                }
              },
              "moduleName": "tiny/admin/subscriptions/template.hbs"
            },
            isEmpty: false,
            arity: 0,
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
              var el2 = dom.createTextNode("\n          ");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("td");
              var el3 = dom.createTextNode("\n            ");
              dom.appendChild(el2, el3);
              var el3 = dom.createComment("");
              dom.appendChild(el2, el3);
              var el3 = dom.createTextNode("\n          ");
              dom.appendChild(el2, el3);
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n          ");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("td");
              var el3 = dom.createTextNode("\n            ");
              dom.appendChild(el2, el3);
              var el3 = dom.createComment("");
              dom.appendChild(el2, el3);
              var el3 = dom.createTextNode("\n          ");
              dom.appendChild(el2, el3);
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n        ");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("td");
              var el3 = dom.createTextNode("\n");
              dom.appendChild(el2, el3);
              var el3 = dom.createComment("");
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
              var element1 = dom.childAt(element0, [7]);
              var element2 = dom.childAt(element1, [4]);
              var morphs = new Array(6);
              morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]),1,1);
              morphs[1] = dom.createMorphAt(dom.childAt(element0, [3]),1,1);
              morphs[2] = dom.createMorphAt(dom.childAt(element0, [5]),1,1);
              morphs[3] = dom.createMorphAt(element1,1,1);
              morphs[4] = dom.createMorphAt(element1,2,2);
              morphs[5] = dom.createElementMorph(element2);
              return morphs;
            },
            statements: [
              ["content","record.id",["loc",[null,[18,10],[18,23]]]],
              ["content","record.course.name",["loc",[null,[21,12],[21,34]]]],
              ["content","record.email",["loc",[null,[24,12],[24,28]]]],
              ["block","link-to",["admin.subscription",["get","record.id",["loc",[null,[27,42],[27,51]]]]],["class","btn btn-primary"],0,null,["loc",[null,[27,10],[29,22]]]],
              ["block","link-to",["admin.subscriptions.edit",["get","record.id",["loc",[null,[30,48],[30,57]]]]],["class","btn btn-success"],1,null,["loc",[null,[30,10],[32,22]]]],
              ["element","action",["delete",["get","record",["loc",[null,[33,40],[33,46]]]]],["preventDefault",true],["loc",[null,[33,22],[33,68]]]]
            ],
            locals: [],
            templates: [child0, child1]
          };
        }());
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.3.1",
            "loc": {
              "source": null,
              "start": {
                "line": 14,
                "column": 4
              },
              "end": {
                "line": 40,
                "column": 4
              }
            },
            "moduleName": "tiny/admin/subscriptions/template.hbs"
          },
          isEmpty: false,
          arity: 1,
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
            ["block","unless",[["get","record.isNew",["loc",[null,[15,16],[15,28]]]]],[],0,null,["loc",[null,[15,6],[39,17]]]]
          ],
          locals: ["record"],
          templates: [child0]
        };
      }());
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.3.1",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 0
            },
            "end": {
              "line": 51,
              "column": 0
            }
          },
          "moduleName": "tiny/admin/subscriptions/template.hbs"
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
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("th");
          var el5 = dom.createTextNode("Course");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("th");
          var el5 = dom.createTextNode("Email");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n      ");
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
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("th");
          var el5 = dom.createTextNode("Course");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("th");
          var el5 = dom.createTextNode("Email");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n      ");
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
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 3]),1,1);
          return morphs;
        },
        statements: [
          ["block","each",[["get","model",["loc",[null,[14,12],[14,17]]]]],[],0,null,["loc",[null,[14,4],[40,13]]]]
        ],
        locals: [],
        templates: [child0]
      };
    }());
    var child1 = (function() {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.3.1",
          "loc": {
            "source": null,
            "start": {
              "line": 54,
              "column": 0
            },
            "end": {
              "line": 56,
              "column": 0
            }
          },
          "moduleName": "tiny/admin/subscriptions/template.hbs"
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
          var el1 = dom.createTextNode(" Create new subscription\n");
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
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": [
            "multiple-nodes",
            "wrong-type"
          ]
        },
        "revision": "Ember@2.3.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 58,
            "column": 0
          }
        },
        "moduleName": "tiny/admin/subscriptions/template.hbs"
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
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
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
        ["block","default-box",[],["title",["subexpr","@mut",[["get","title",["loc",[null,[3,21],[3,26]]]]],[],[]]],0,null,["loc",[null,[3,0],[51,16]]]],
        ["block","link-to",["admin.subscriptions.new"],["class","btn btn-success"],1,null,["loc",[null,[54,0],[56,12]]]],
        ["content","outlet",["loc",[null,[57,0],[57,10]]]]
      ],
      locals: [],
      templates: [child0, child1]
    };
  }()));

});
define('tiny/admin/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.3.1",
          "loc": {
            "source": null,
            "start": {
              "line": 38,
              "column": 12
            },
            "end": {
              "line": 38,
              "column": 91
            }
          },
          "moduleName": "tiny/admin/template.hbs"
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
          var el2 = dom.createTextNode("Dashboard");
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
          "fragmentReason": false,
          "revision": "Ember@2.3.1",
          "loc": {
            "source": null,
            "start": {
              "line": 39,
              "column": 12
            },
            "end": {
              "line": 39,
              "column": 98
            }
          },
          "moduleName": "tiny/admin/template.hbs"
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
          var el2 = dom.createTextNode("Administrators");
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
    var child2 = (function() {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.3.1",
          "loc": {
            "source": null,
            "start": {
              "line": 40,
              "column": 12
            },
            "end": {
              "line": 40,
              "column": 87
            }
          },
          "moduleName": "tiny/admin/template.hbs"
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
    var child3 = (function() {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.3.1",
          "loc": {
            "source": null,
            "start": {
              "line": 41,
              "column": 12
            },
            "end": {
              "line": 41,
              "column": 98
            }
          },
          "moduleName": "tiny/admin/template.hbs"
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
          var el2 = dom.createTextNode("Subscription");
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
    var child4 = (function() {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.3.1",
          "loc": {
            "source": null,
            "start": {
              "line": 42,
              "column": 12
            },
            "end": {
              "line": 42,
              "column": 93
            }
          },
          "moduleName": "tiny/admin/template.hbs"
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
          var el2 = dom.createTextNode("Infolettre");
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
    var child5 = (function() {
      var child0 = (function() {
        var child0 = (function() {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.3.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 45,
                  "column": 16
                },
                "end": {
                  "line": 45,
                  "column": 95
                }
              },
              "moduleName": "tiny/admin/template.hbs"
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
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(dom.childAt(fragment, [2]),0,0);
              return morphs;
            },
            statements: [
              ["content","route.label",["loc",[null,[45,73],[45,88]]]]
            ],
            locals: [],
            templates: []
          };
        }());
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.3.1",
            "loc": {
              "source": null,
              "start": {
                "line": 44,
                "column": 10
              },
              "end": {
                "line": 46,
                "column": 10
              }
            },
            "moduleName": "tiny/admin/template.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("li");
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
            ["block","link-to",[["get","route.route",["loc",[null,[45,27],[45,38]]]]],[],0,null,["loc",[null,[45,16],[45,107]]]]
          ],
          locals: ["route"],
          templates: [child0]
        };
      }());
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.3.1",
          "loc": {
            "source": null,
            "start": {
              "line": 43,
              "column": 8
            },
            "end": {
              "line": 47,
              "column": 8
            }
          },
          "moduleName": "tiny/admin/template.hbs"
        },
        isEmpty: false,
        arity: 1,
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
          ["block","each",[["get","plugin.routes",["loc",[null,[44,18],[44,31]]]]],[],0,null,["loc",[null,[44,10],[46,19]]]]
        ],
        locals: ["plugin"],
        templates: [child0]
      };
    }());
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": [
            "multiple-nodes",
            "wrong-type"
          ]
        },
        "revision": "Ember@2.3.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 154,
            "column": 0
          }
        },
        "moduleName": "tiny/admin/template.hbs"
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
        var el8 = dom.createTextNode("Logout");
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
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
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
        var element1 = dom.childAt(element0, [3, 7, 7, 1, 1, 1]);
        var element2 = dom.childAt(element0, [7, 3, 3]);
        if (this.cachedFragment) { dom.repairClonedNode(dom.childAt(element0, [21, 7, 15, 1, 3, 1, 1]),[],true); }
        var morphs = new Array(8);
        morphs[0] = dom.createElementMorph(element1);
        morphs[1] = dom.createMorphAt(dom.childAt(element2, [1]),0,0);
        morphs[2] = dom.createMorphAt(dom.childAt(element2, [3]),0,0);
        morphs[3] = dom.createMorphAt(dom.childAt(element2, [5]),0,0);
        morphs[4] = dom.createMorphAt(dom.childAt(element2, [7]),0,0);
        morphs[5] = dom.createMorphAt(dom.childAt(element2, [9]),0,0);
        morphs[6] = dom.createMorphAt(element2,11,11);
        morphs[7] = dom.createMorphAt(dom.childAt(element0, [11, 3]),3,3);
        return morphs;
      },
      statements: [
        ["element","action",["invalidateSession"],[],["loc",[null,[24,54],[24,84]]]],
        ["block","link-to",["admin.dashboard"],[],0,null,["loc",[null,[38,12],[38,103]]]],
        ["block","link-to",["admin.admin_users"],[],1,null,["loc",[null,[39,12],[39,110]]]],
        ["block","link-to",["admin.courses"],[],2,null,["loc",[null,[40,12],[40,99]]]],
        ["block","link-to",["admin.subscriptions"],[],3,null,["loc",[null,[41,12],[41,110]]]],
        ["block","link-to",["admin.newsletter"],[],4,null,["loc",[null,[42,12],[42,105]]]],
        ["block","each",[["get","env.APP.plugins",["loc",[null,[43,16],[43,31]]]]],[],5,null,["loc",[null,[43,8],[47,17]]]],
        ["content","outlet",["loc",[null,[61,6],[61,16]]]]
      ],
      locals: [],
      templates: [child0, child1, child2, child3, child4, child5]
    };
  }()));

});
define('tiny/admin_users/edit_password/route', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({
    session: Ember['default'].inject.service('session'),
    model: function model(params, transition) {
      return Ember['default'].Object.create({ token: params.token,
        id: transition.params.admin_users.id });
    },
    actions: {
      submit: function submit() {
        var _this = this;

        var model = this.controller.model;
        Ember['default'].$.ajax({
          url: '' + Tiny.API_HOST + Tiny.API_NAMESPACE + '/passwords/',
          type: 'PATCH',
          data: {
            password: {
              id: model.get('id'),
              token: model.get('token'),
              password_reset: {
                password: model.get('password') || '',
                password_confirmation: model.get('password_confirmation') || ''
              }
            }
          }
        }).then(function (data) {
          _this.get('session').authenticate('authenticator:api', data.email, data.password).then(function () {
            _this.transitionTo('admin');
          });
        }, function (response) {
          model.set('errors', response.responseJSON.errors);
        });
      }
    }
  });

});
define('tiny/admin_users/edit_password/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        var child0 = (function() {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.3.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 11,
                  "column": 8
                },
                "end": {
                  "line": 13,
                  "column": 8
                }
              },
              "moduleName": "tiny/admin_users/edit_password/template.hbs"
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
              ["content","error",["loc",[null,[12,10],[12,19]]]]
            ],
            locals: ["error"],
            templates: []
          };
        }());
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.3.1",
            "loc": {
              "source": null,
              "start": {
                "line": 10,
                "column": 6
              },
              "end": {
                "line": 14,
                "column": 6
              }
            },
            "moduleName": "tiny/admin_users/edit_password/template.hbs"
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
            ["block","each",[["get","model.errors",["loc",[null,[11,16],[11,28]]]]],[],0,null,["loc",[null,[11,8],[13,17]]]]
          ],
          locals: [],
          templates: [child0]
        };
      }());
      var child1 = (function() {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.3.1",
            "loc": {
              "source": null,
              "start": {
                "line": 19,
                "column": 10
              },
              "end": {
                "line": 19,
                "column": 37
              }
            },
            "moduleName": "tiny/admin_users/edit_password/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("Sign in");
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
          "fragmentReason": false,
          "revision": "Ember@2.3.1",
          "loc": {
            "source": null,
            "start": {
              "line": 9,
              "column": 4
            },
            "end": {
              "line": 25,
              "column": 4
            }
          },
          "moduleName": "tiny/admin_users/edit_password/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","row");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2,"class","col-xs-6");
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2,"class","col-xs-6 pull-right");
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("button");
          dom.setAttribute(el3,"type","submit");
          dom.setAttribute(el3,"class","btn btn-primary btn-block btn-flat");
          var el4 = dom.createTextNode("Change Password");
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
          var morphs = new Array(4);
          morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
          morphs[1] = dom.createMorphAt(fragment,2,2,contextualElement);
          morphs[2] = dom.createMorphAt(fragment,4,4,contextualElement);
          morphs[3] = dom.createMorphAt(dom.childAt(fragment, [6, 1]),1,1);
          dom.insertBoundary(fragment, 0);
          return morphs;
        },
        statements: [
          ["block","if",[["get","model.errors.length",["loc",[null,[10,12],[10,31]]]]],[],0,null,["loc",[null,[10,6],[14,13]]]],
          ["inline","em-input",[],["model",["subexpr","@mut",[["get","model",["loc",[null,[15,23],[15,28]]]]],[],[]],"label","Password","property","password","type","password"],["loc",[null,[15,6],[15,83]]]],
          ["inline","em-input",[],["model",["subexpr","@mut",[["get","model",["loc",[null,[16,23],[16,28]]]]],[],[]],"label","Confirmation","property","password_confirmation","type","password"],["loc",[null,[16,6],[16,100]]]],
          ["block","link-to",["login"],[],1,null,["loc",[null,[19,10],[19,49]]]]
        ],
        locals: [],
        templates: [child0, child1]
      };
    }());
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.3.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 29,
            "column": 0
          }
        },
        "moduleName": "tiny/admin_users/edit_password/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","login-box");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","login-logo");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("b");
        var el4 = dom.createTextNode("Admin");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("LTE\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" /.login-logo ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","login-box-body");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        dom.setAttribute(el3,"class","login-box-msg");
        var el4 = dom.createTextNode("Sign in to start your session");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" /.login-box-body ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 5]),3,3);
        return morphs;
      },
      statements: [
        ["block","em-form",[],["model",["subexpr","@mut",[["get","model",["loc",[null,[9,21],[9,26]]]]],[],[]],"submitButton",false],0,null,["loc",[null,[9,4],[25,16]]]]
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
define('tiny/authenticators/api', ['exports', 'ember-simple-auth/authenticators/base'], function (exports, Base) {

  'use strict';

  exports['default'] = Base['default'].extend({
    restore: function restore(data) {
      return new Ember.RSVP.Promise(function (resolve, reject) {
        if (!Ember.isEmpty(data.admin_user.id)) {
          Ember.$.ajaxSetup({
            headers: {
              'Authorization': 'Token token="' + data.admin_user.access_token + '"'
            }
          });
          resolve(data);
        } else {
          reject();
        }
      });
    },
    authenticate: function authenticate(email, password) {
      return new Ember.RSVP.Promise(function (resolve, reject) {
        Ember.$.ajax({
          url: '' + Tiny.API_HOST + Tiny.API_NAMESPACE + '/session',
          type: 'POST',
          data: {
            session: {
              email: email,
              password: password
            }
          }
        }).then(function (response) {
          Ember.run(function () {
            Ember.$.ajaxSetup({
              headers: {
                'Authorization': 'Token token="' + response.admin_user.access_token + '"'
              }
            });
            resolve(response);
          });
        }, function (xhr, status, error) {
          Ember.run(function () {
            console.log(JSON.stringify(xhr));
            reject(xhr.responseJSON);
          });
        });
      });
    },
    invalidate: function invalidate(data) {
      return new Ember.RSVP.Promise(function (resolve) {
        Ember.$.ajax({
          url: '' + Tiny.API_HOST + Tiny.API_NAMESPACE + '/session',
          type: 'DELETE'
        }).always(function () {
          Ember.$.ajaxSetup({
            headers: {
              'Authorization': 'Token token="None"'
            }
          });
          resolve();
        });
      });
    }
  });

});
define('tiny/authorizers/api', ['exports', 'ember-simple-auth/authorizers/base'], function (exports, Base) {

  'use strict';

  var _Ember = Ember;
  var isEmpty = _Ember.isEmpty;

  exports['default'] = Base['default'].extend({
    authorize: function authorize(data, block) {
      var token = data.admin_user.access_token;
      if (!isEmpty(token)) {
        block('Authorization', 'Token token="' + token + '"');
      }
    }
  });

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
define('tiny/components/basic-dropdown', ['exports', 'ember-basic-dropdown/components/basic-dropdown'], function (exports, basic_dropdown) {

	'use strict';



	exports['default'] = basic_dropdown['default'];

});
define('tiny/components/control-within-label', ['exports', 'ember-rapid-forms/components/control-within-label'], function (exports, ControlWithinLabelComponent) {

	'use strict';

	//import Ember from 'ember';
	exports['default'] = ControlWithinLabelComponent['default'];

});
define('tiny/components/custom-fields-component/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": [
            "wrong-type"
          ]
        },
        "revision": "Ember@2.3.1",
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
        "moduleName": "tiny/components/custom-fields-component/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("Template\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() { return []; },
      statements: [

      ],
      locals: [],
      templates: []
    };
  }()));

});
define('tiny/components/custom-fields-fields/component', ['exports', 'custom-fields/components/custom-fields-fields/component'], function (exports, component) {

	'use strict';



	exports['default'] = component['default'];

});
define('tiny/components/data-form/component', ['exports', 'ember', 'ember-validations'], function (exports, Ember, EmberValidations) {

  'use strict';

  exports['default'] = Ember['default'].Component.extend(EmberValidations['default'], {
    model: null,
    actions: {
      submit: function submit() {
        var _this = this;

        this.model.validate().then(function () {
          _this.model.save().then(function () {
            $('.modal').modal('hide');
            _this.sendAction('submit');
          }, function () {});
        })['catch'](function () {
          _this.model.showErrors();
        });
      },
      cancel: function cancel() {
        this.model.rollbackAttributes();
        this.sendAction('cancel');
      }
    },
    trigger: (function () {
      var _this2 = this;

      Ember['default'].run.schedule('afterRender', function () {
        $('.modal').modal().on('hidden.bs.modal', function () {
          _this2.send('cancel');
        });
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
            "fragmentReason": false,
            "revision": "Ember@2.3.1",
            "loc": {
              "source": null,
              "start": {
                "line": 16,
                "column": 8
              },
              "end": {
                "line": 21,
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
            ["inline","em-input",[],["property",["subexpr","@mut",[["get","column.property",["loc",[null,[17,30],[17,45]]]]],[],[]],"type",["subexpr","@mut",[["get","column.type",["loc",[null,[18,17],[18,28]]]]],[],[]],"canShowErrors",["subexpr","get",[["get","model.visibleErrors",["loc",[null,[19,31],[19,50]]]],["get","column.property",["loc",[null,[19,51],[19,66]]]]],[],["loc",[null,[19,26],[19,67]]]],"label",["subexpr","@mut",[["get","column.label",["loc",[null,[20,18],[20,30]]]]],[],[]]],["loc",[null,[17,10],[20,32]]]]
          ],
          locals: ["column"],
          templates: []
        };
      }());
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.3.1",
          "loc": {
            "source": null,
            "start": {
              "line": 15,
              "column": 6
            },
            "end": {
              "line": 22,
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
          ["block","each",[["get","columns",["loc",[null,[16,16],[16,23]]]]],[],0,null,["loc",[null,[16,8],[21,17]]]]
        ],
        locals: [],
        templates: [child0]
      };
    }());
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": [
            "multiple-nodes",
            "wrong-type"
          ]
        },
        "revision": "Ember@2.3.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 39,
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
        dom.setAttribute(el2,"class","modal-dialog modal-lg");
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
        ["block","em-form",[],["model",["subexpr","@mut",[["get","model",["loc",[null,[15,23],[15,28]]]]],[],[]],"submitButton",false],0,null,["loc",[null,[15,6],[22,18]]]],
        ["element","action",["cancel"],[],["loc",[null,[27,14],[27,33]]]],
        ["element","action",["submit"],[],["loc",[null,[31,14],[31,33]]]]
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
            "fragmentReason": false,
            "revision": "Ember@2.3.1",
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
            ["content","column.label",["loc",[null,[7,12],[7,28]]]]
          ],
          locals: ["column"],
          templates: []
        };
      }());
      var child1 = (function() {
        var child0 = (function() {
          var child0 = (function() {
            return {
              meta: {
                "fragmentReason": false,
                "revision": "Ember@2.3.1",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 19,
                    "column": 8
                  },
                  "end": {
                    "line": 23,
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
                ["inline","get",[["get","record",["loc",[null,[21,18],[21,24]]]],["get","column.property",["loc",[null,[21,25],[21,40]]]]],[],["loc",[null,[21,12],[21,42]]]]
              ],
              locals: ["column"],
              templates: []
            };
          }());
          var child1 = (function() {
            var child0 = (function() {
              return {
                meta: {
                  "fragmentReason": false,
                  "revision": "Ember@2.3.1",
                  "loc": {
                    "source": null,
                    "start": {
                      "line": 26,
                      "column": 12
                    },
                    "end": {
                      "line": 28,
                      "column": 12
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
                  var el1 = dom.createTextNode("              ");
                  dom.appendChild(el0, el1);
                  var el1 = dom.createElement("span");
                  dom.setAttribute(el1,"class","glyphicon glyphicon-eye-open");
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
                "fragmentReason": false,
                "revision": "Ember@2.3.1",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 25,
                    "column": 10
                  },
                  "end": {
                    "line": 29,
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
                ["block","link-to",[["get","showRoute",["loc",[null,[26,23],[26,32]]]],["get","record.id",["loc",[null,[26,33],[26,42]]]]],["class","btn btn-primary"],0,null,["loc",[null,[26,12],[28,24]]]]
              ],
              locals: [],
              templates: [child0]
            };
          }());
          var child2 = (function() {
            return {
              meta: {
                "fragmentReason": false,
                "revision": "Ember@2.3.1",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 30,
                    "column": 10
                  },
                  "end": {
                    "line": 32,
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
              "fragmentReason": false,
              "revision": "Ember@2.3.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 14,
                  "column": 6
                },
                "end": {
                  "line": 39,
                  "column": 6
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
              var element2 = dom.childAt(element1, [4]);
              var morphs = new Array(5);
              morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]),1,1);
              morphs[1] = dom.createMorphAt(element0,3,3);
              morphs[2] = dom.createMorphAt(element1,1,1);
              morphs[3] = dom.createMorphAt(element1,2,2);
              morphs[4] = dom.createElementMorph(element2);
              return morphs;
            },
            statements: [
              ["content","record.id",["loc",[null,[17,10],[17,23]]]],
              ["block","each",[["get","columns",["loc",[null,[19,16],[19,23]]]]],[],0,null,["loc",[null,[19,8],[23,17]]]],
              ["block","if",[["get","showRoute",["loc",[null,[25,16],[25,25]]]]],[],1,null,["loc",[null,[25,10],[29,17]]]],
              ["block","link-to",[["get","editRoute",["loc",[null,[30,21],[30,30]]]],["get","record.id",["loc",[null,[30,31],[30,40]]]]],["class","btn btn-success"],2,null,["loc",[null,[30,10],[32,22]]]],
              ["element","action",["delete",["get","record",["loc",[null,[33,40],[33,46]]]]],["preventDefault",true],["loc",[null,[33,22],[33,68]]]]
            ],
            locals: [],
            templates: [child0, child1, child2]
          };
        }());
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.3.1",
            "loc": {
              "source": null,
              "start": {
                "line": 13,
                "column": 4
              },
              "end": {
                "line": 40,
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
            ["block","unless",[["get","record.isNew",["loc",[null,[14,16],[14,28]]]]],[],0,null,["loc",[null,[14,6],[39,17]]]]
          ],
          locals: ["record"],
          templates: [child0]
        };
      }());
      var child2 = (function() {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.3.1",
            "loc": {
              "source": null,
              "start": {
                "line": 45,
                "column": 6
              },
              "end": {
                "line": 47,
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
            ["content","column.label",["loc",[null,[46,12],[46,28]]]]
          ],
          locals: ["column"],
          templates: []
        };
      }());
      return {
        meta: {
          "fragmentReason": {
            "name": "triple-curlies"
          },
          "revision": "Ember@2.3.1",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 52,
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
          ["block","each",[["get","model",["loc",[null,[13,12],[13,17]]]]],[],1,null,["loc",[null,[13,4],[40,13]]]],
          ["block","each",[["get","columns",["loc",[null,[45,14],[45,21]]]]],[],2,null,["loc",[null,[45,6],[47,15]]]]
        ],
        locals: [],
        templates: [child0, child1, child2]
      };
    }());
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": [
            "wrong-type"
          ]
        },
        "revision": "Ember@2.3.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 53,
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
        ["block","default-box",[],["title",["subexpr","@mut",[["get","title",["loc",[null,[1,21],[1,26]]]]],[],[]]],0,null,["loc",[null,[1,0],[52,16]]]]
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
define('tiny/components/em-custom-input', ['exports', 'ember-rapid-forms/components/em-custom-input'], function (exports, CustomInputComponent) {

	'use strict';

	exports['default'] = CustomInputComponent['default'];

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
define('tiny/components/ember-wormhole', ['exports', 'ember-wormhole/components/ember-wormhole'], function (exports, ember_wormhole) {

	'use strict';



	exports['default'] = ember_wormhole['default'];

});
define('tiny/components/erf-html-checkbox', ['exports', 'ember-rapid-forms/components/html-checkbox'], function (exports, html_checkbox) {

	'use strict';



	exports['default'] = html_checkbox['default'];

});
define('tiny/components/erf-html-custom-input', ['exports', 'ember-rapid-forms/components/html-custom-input'], function (exports, html_custom_input) {

	'use strict';



	exports['default'] = html_custom_input['default'];

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
define('tiny/components/lf-outlet', ['exports', 'liquid-fire/ember-internals'], function (exports, ember_internals) {

	'use strict';

	exports['default'] = ember_internals.StaticOutlet;

});
define('tiny/components/lf-overlay', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var COUNTER = '__lf-modal-open-counter';

  exports['default'] = Ember['default'].Component.extend({
    tagName: 'span',
    classNames: ['lf-overlay'],

    didInsertElement: function didInsertElement() {
      var body = Ember['default'].$('body');
      var counter = body.data(COUNTER) || 0;
      body.addClass('lf-modal-open');
      body.data(COUNTER, counter + 1);
    },

    willDestroy: function willDestroy() {
      var body = Ember['default'].$('body');
      var counter = body.data(COUNTER) || 0;
      body.data(COUNTER, counter - 1);
      if (counter < 2) {
        body.removeClass('lf-modal-open lf-modal-closing');
      }
    }
  });

});
define('tiny/components/liquid-bind', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var LiquidBind = Ember['default'].Component.extend({
    tagName: '',
    positionalParams: ['value'] // needed for Ember 1.13.[0-5] and 2.0.0-beta.[1-3] support
  });

  LiquidBind.reopenClass({
    positionalParams: ['value']
  });

  exports['default'] = LiquidBind;

});
define('tiny/components/liquid-child', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Component.extend({
    classNames: ['liquid-child'],

    didInsertElement: function didInsertElement() {
      var $container = this.$();
      if ($container) {
        $container.css('visibility', 'hidden');
      }
      this.sendAction('liquidChildDidRender', this);
    }

  });

});
define('tiny/components/liquid-container', ['exports', 'ember', 'liquid-fire/growable', 'tiny/components/liquid-measured'], function (exports, Ember, Growable, liquid_measured) {

  'use strict';

  exports['default'] = Ember['default'].Component.extend(Growable['default'], {
    classNames: ['liquid-container'],

    lockSize: function lockSize(elt, want) {
      elt.outerWidth(want.width);
      elt.outerHeight(want.height);
    },

    unlockSize: function unlockSize() {
      var _this = this;

      var doUnlock = function doUnlock() {
        _this.updateAnimatingClass(false);
        var elt = _this.$();
        if (elt) {
          elt.css({ width: '', height: '' });
        }
      };
      if (this._scaling) {
        this._scaling.then(doUnlock);
      } else {
        doUnlock();
      }
    },

    // We're doing this manually instead of via classNameBindings
    // because it depends on upward-data-flow, which generates warnings
    // under Glimmer.
    updateAnimatingClass: function updateAnimatingClass(on) {
      if (this.isDestroyed || !this._wasInserted) {
        return;
      }
      if (arguments.length === 0) {
        on = this.get('liquidAnimating');
      } else {
        this.set('liquidAnimating', on);
      }
      if (on) {
        this.$().addClass('liquid-animating');
      } else {
        this.$().removeClass('liquid-animating');
      }
    },

    startMonitoringSize: Ember['default'].on('didInsertElement', function () {
      this._wasInserted = true;
      this.updateAnimatingClass();
    }),

    actions: {

      willTransition: function willTransition(versions) {
        if (!this._wasInserted) {
          return;
        }

        // Remember our own size before anything changes
        var elt = this.$();
        this._cachedSize = liquid_measured.measure(elt);

        // And make any children absolutely positioned with fixed sizes.
        for (var i = 0; i < versions.length; i++) {
          goAbsolute(versions[i]);
        }

        // Apply '.liquid-animating' to liquid-container allowing
        // any customizable CSS control while an animating is occuring
        this.updateAnimatingClass(true);
      },

      afterChildInsertion: function afterChildInsertion(versions) {
        var elt = this.$();
        var enableGrowth = this.get('enableGrowth') !== false;

        // Measure  children
        var sizes = [];
        for (var i = 0; i < versions.length; i++) {
          if (versions[i].view) {
            sizes[i] = liquid_measured.measure(versions[i].view.$());
          }
        }

        // Measure ourself again to see how big the new children make
        // us.
        var want = liquid_measured.measure(elt);
        var have = this._cachedSize || want;

        // Make ourself absolute
        if (enableGrowth) {
          this.lockSize(elt, have);
        } else {
          this.lockSize(elt, {
            height: Math.max(want.height, have.height),
            width: Math.max(want.width, have.width)
          });
        }

        // Make the children absolute and fixed size.
        for (i = 0; i < versions.length; i++) {
          goAbsolute(versions[i], sizes[i]);
        }

        // Kick off our growth animation
        if (enableGrowth) {
          this._scaling = this.animateGrowth(elt, have, want);
        }
      },

      afterTransition: function afterTransition(versions) {
        for (var i = 0; i < versions.length; i++) {
          goStatic(versions[i]);
        }
        this.unlockSize();
      }
    }
  });

  function goAbsolute(version, size) {
    if (!version.view) {
      return;
    }
    var elt = version.view.$();
    var pos = elt.position();
    if (!size) {
      size = liquid_measured.measure(elt);
    }
    elt.outerWidth(size.width);
    elt.outerHeight(size.height);
    elt.css({
      position: 'absolute',
      top: pos.top,
      left: pos.left
    });
  }

  function goStatic(version) {
    if (version.view && !version.view.isDestroyed) {
      version.view.$().css({ width: '', height: '', position: '' });
    }
  }

});
define('tiny/components/liquid-if', ['exports', 'ember', 'liquid-fire/ember-internals'], function (exports, Ember, ember_internals) {

  'use strict';

  var LiquidIf = Ember['default'].Component.extend({
    positionalParams: ['predicate'], // needed for Ember 1.13.[0-5] and 2.0.0-beta.[1-3] support
    tagName: '',
    helperName: 'liquid-if',
    didReceiveAttrs: function didReceiveAttrs() {
      this._super();
      var predicate = ember_internals.shouldDisplay(this.getAttr('predicate'));
      this.set('showFirstBlock', this.inverted ? !predicate : predicate);
    }
  });

  LiquidIf.reopenClass({
    positionalParams: ['predicate']
  });

  exports['default'] = LiquidIf;

});
define('tiny/components/liquid-measured', ['exports', 'liquid-fire/components/liquid-measured'], function (exports, liquid_measured) {

	'use strict';



	exports['default'] = liquid_measured['default'];
	exports.measure = liquid_measured.measure;

});
define('tiny/components/liquid-modal', ['exports', 'ember', 'ember-getowner-polyfill'], function (exports, Ember, getOwner) {

  'use strict';

  exports['default'] = Ember['default'].Component.extend({
    classNames: ['liquid-modal'],
    currentContext: Ember['default'].computed('owner.modalContexts.lastObject', function () {
      var context = this.get('owner.modalContexts.lastObject');
      if (context) {
        context.view = this.innerView(context);
      }
      return context;
    }),

    owner: Ember['default'].inject.service('liquid-fire-modals'),

    innerView: function innerView(current) {
      var self = this,
          name = current.get('name'),
          owner = getOwner['default'](this),
          component = owner.lookup('component-lookup:main').lookupFactory(name);
      Ember['default'].assert("Tried to render a modal using component '" + name + "', but couldn't find it.", !!component);

      var args = Ember['default'].copy(current.get('params'));

      args.registerMyself = Ember['default'].on('init', function () {
        self.set('innerViewInstance', this);
      });

      // set source so we can bind other params to it
      args._source = Ember['default'].computed(function () {
        return current.get("source");
      });

      var otherParams = current.get("options.otherParams");
      var from, to;
      for (from in otherParams) {
        to = otherParams[from];
        args[to] = Ember['default'].computed.alias("_source." + from);
      }

      var actions = current.get("options.actions") || {};

      // Override sendAction in the modal component so we can intercept and
      // dynamically dispatch to the controller as expected
      args.sendAction = function (name) {
        var actionName = actions[name];
        if (!actionName) {
          this._super.apply(this, Array.prototype.slice.call(arguments));
          return;
        }

        var controller = current.get("source");
        var args = Array.prototype.slice.call(arguments, 1);
        args.unshift(actionName);
        controller.send.apply(controller, args);
      };

      return component.extend(args);
    },

    actions: {
      outsideClick: function outsideClick() {
        if (this.get('currentContext.options.dismissWithOutsideClick')) {
          this.send('dismiss');
        } else {
          proxyToInnerInstance(this, 'outsideClick');
        }
      },
      escape: function escape() {
        if (this.get('currentContext.options.dismissWithEscape')) {
          this.send('dismiss');
        } else {
          proxyToInnerInstance(this, 'escape');
        }
      },
      dismiss: function dismiss() {
        Ember['default'].$('body').addClass('lf-modal-closing');
        var source = this.get('currentContext.source'),
            proto = source.constructor.proto(),
            params = this.get('currentContext.options.withParams'),
            clearThem = {};

        for (var key in params) {
          if (proto[key] instanceof Ember['default'].ComputedProperty) {
            clearThem[key] = undefined;
          } else {
            clearThem[key] = proto[key];
          }
        }
        source.setProperties(clearThem);
      }
    }
  });

  function proxyToInnerInstance(self, message) {
    var vi = self.get('innerViewInstance');
    if (vi) {
      vi.send(message);
    }
  }

});
define('tiny/components/liquid-outlet', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var LiquidOutlet = Ember['default'].Component.extend({
    positionalParams: ['inputOutletName'], // needed for Ember 1.13.[0-5] and 2.0.0-beta.[1-3] support
    tagName: '',
    didReceiveAttrs: function didReceiveAttrs() {
      this._super();
      this.set('outletName', this.attrs.inputOutletName || 'main');
    }
  });

  LiquidOutlet.reopenClass({
    positionalParams: ['inputOutletName']
  });

  exports['default'] = LiquidOutlet;

});
define('tiny/components/liquid-spacer', ['exports', 'liquid-fire/components/liquid-spacer'], function (exports, liquid_spacer) {

	'use strict';



	exports['default'] = liquid_spacer['default'];

});
define('tiny/components/liquid-unless', ['exports', 'tiny/components/liquid-if'], function (exports, LiquidIf) {

  'use strict';

  exports['default'] = LiquidIf['default'].extend({
    helperName: 'liquid-unless',
    layoutName: 'components/liquid-if',
    inverted: true
  });

});
define('tiny/components/liquid-versions', ['exports', 'ember', 'liquid-fire/ember-internals'], function (exports, Ember, ember_internals) {

  'use strict';

  var get = Ember['default'].get;
  var set = Ember['default'].set;

  exports['default'] = Ember['default'].Component.extend({
    tagName: "",
    name: 'liquid-versions',

    transitionMap: Ember['default'].inject.service('liquid-fire-transitions'),

    didReceiveAttrs: function didReceiveAttrs() {
      this._super();
      if (!this.versions || this._lastVersion !== this.getAttr('value')) {
        this.appendVersion();
        this._lastVersion = this.getAttr('value');
      }
    },

    appendVersion: function appendVersion() {
      var versions = this.versions;
      var firstTime = false;
      var newValue = this.getAttr('value');
      var oldValue;

      if (!versions) {
        firstTime = true;
        versions = Ember['default'].A();
      } else {
        oldValue = versions[0];
      }

      // TODO: may need to extend the comparison to do the same kind of
      // key-based diffing that htmlbars is doing.
      if (!firstTime && (!oldValue && !newValue || oldValue === newValue)) {
        return;
      }

      this.notifyContainer('willTransition', versions);
      var newVersion = {
        value: newValue,
        shouldRender: newValue || get(this, 'renderWhenFalse')
      };
      versions.unshiftObject(newVersion);

      this.firstTime = firstTime;
      if (firstTime) {
        set(this, 'versions', versions);
      }

      if (!newVersion.shouldRender && !firstTime) {
        this._transition();
      }
    },

    _transition: function _transition() {
      var _this = this;

      var versions = get(this, 'versions');
      var transition;
      var firstTime = this.firstTime;
      this.firstTime = false;

      this.notifyContainer('afterChildInsertion', versions);

      transition = get(this, 'transitionMap').transitionFor({
        versions: versions,
        parentElement: Ember['default'].$(ember_internals.containingElement(this)),
        use: get(this, 'use'),
        // Using strings instead of booleans here is an
        // optimization. The constraint system can match them more
        // efficiently, since it treats boolean constraints as generic
        // "match anything truthy/falsy" predicates, whereas string
        // checks are a direct object property lookup.
        firstTime: firstTime ? 'yes' : 'no',
        helperName: get(this, 'name'),
        outletName: get(this, 'outletName')
      });

      if (this._runningTransition) {
        this._runningTransition.interrupt();
      }
      this._runningTransition = transition;

      transition.run().then(function (wasInterrupted) {
        // if we were interrupted, we don't handle the cleanup because
        // another transition has already taken over.
        if (!wasInterrupted) {
          _this.finalizeVersions(versions);
          _this.notifyContainer("afterTransition", versions);
        }
      }, function (err) {
        _this.finalizeVersions(versions);
        _this.notifyContainer("afterTransition", versions);
        throw err;
      });
    },

    finalizeVersions: function finalizeVersions(versions) {
      versions.replace(1, versions.length - 1);
    },

    notifyContainer: function notifyContainer(method, versions) {
      var target = get(this, 'notify');
      if (target) {
        target.send(method, versions);
      }
    },

    actions: {
      childDidRender: function childDidRender(child) {
        var version = get(child, 'version');
        set(version, 'view', child);
        this._transition();
      }
    }

  });

});
define('tiny/components/liquid-with', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var LiquidWith = Ember['default'].Component.extend({
    name: 'liquid-with',
    positionalParams: ['value'], // needed for Ember 1.13.[0-5] and 2.0.0-beta.[1-3] support
    tagName: '',
    iAmDeprecated: Ember['default'].on('init', function () {
      Ember['default'].deprecate("liquid-with is deprecated, use liquid-bind instead -- it accepts a block now.");
    })
  });

  LiquidWith.reopenClass({
    positionalParams: ['value']
  });

  exports['default'] = LiquidWith;

});
define('tiny/components/lm-container', ['exports', 'ember', 'liquid-fire/tabbable', 'liquid-fire/is-browser'], function (exports, Ember, __dep1__, isBrowser) {

  'use strict';

  /*
     Parts of this file were adapted from ic-modal

     https://github.com/instructure/ic-modal
     Released under The MIT License (MIT)
     Copyright (c) 2014 Instructure, Inc.
  */

  var lastOpenedModal = null;

  if (isBrowser['default']()) {
    Ember['default'].$(document).on('focusin', handleTabIntoBrowser);
  }

  function handleTabIntoBrowser() {
    if (lastOpenedModal) {
      lastOpenedModal.focus();
    }
  }

  exports['default'] = Ember['default'].Component.extend({
    classNames: ['lm-container'],
    attributeBindings: ['tabindex'],
    tabindex: 0,

    keyUp: function keyUp(event) {
      // Escape key
      if (event.keyCode === 27) {
        this.sendAction();
      }
    },

    keyDown: function keyDown(event) {
      // Tab key
      if (event.keyCode === 9) {
        this.constrainTabNavigation(event);
      }
    },

    didInsertElement: function didInsertElement() {
      this.focus();
      lastOpenedModal = this;
    },

    willDestroy: function willDestroy() {
      lastOpenedModal = null;
    },

    focus: function focus() {
      if (this.get('element').contains(document.activeElement)) {
        // just let it be if we already contain the activeElement
        return;
      }
      var target = this.$('[autofocus]');
      if (!target.length) {
        target = this.$(':tabbable');
      }

      if (!target.length) {
        target = this.$();
      }

      target[0].focus();
    },

    constrainTabNavigation: function constrainTabNavigation(event) {
      var tabbable = this.$(':tabbable');
      var finalTabbable = tabbable[event.shiftKey ? 'first' : 'last']()[0];
      var leavingFinalTabbable = finalTabbable === document.activeElement ||
      // handle immediate shift+tab after opening with mouse
      this.get('element') === document.activeElement;
      if (!leavingFinalTabbable) {
        return;
      }
      event.preventDefault();
      tabbable[event.shiftKey ? 'last' : 'first']()[0].focus();
    },

    click: function click(event) {
      if (event.target === this.get('element')) {
        this.sendAction('clickAway');
      }
    }
  });

});
define('tiny/components/power-select/before-options', ['exports', 'ember-power-select/components/power-select/before-options'], function (exports, before_options) {

	'use strict';



	exports['default'] = before_options['default'];

});
define('tiny/components/power-select/options', ['exports', 'ember-power-select/components/power-select/options'], function (exports, options) {

	'use strict';



	exports['default'] = options['default'];

});
define('tiny/components/power-select/trigger', ['exports', 'ember-power-select/components/power-select/trigger'], function (exports, trigger) {

	'use strict';



	exports['default'] = trigger['default'];

});
define('tiny/components/power-select-multiple/options', ['exports', 'ember-power-select/components/power-select-multiple/options'], function (exports, options) {

	'use strict';



	exports['default'] = options['default'];

});
define('tiny/components/power-select-multiple/trigger', ['exports', 'ember-power-select/components/power-select-multiple/trigger'], function (exports, trigger) {

	'use strict';



	exports['default'] = trigger['default'];

});
define('tiny/components/power-select-multiple', ['exports', 'ember-power-select/components/power-select-multiple'], function (exports, power_select_multiple) {

	'use strict';



	exports['default'] = power_select_multiple['default'];

});
define('tiny/components/power-select', ['exports', 'ember-power-select/components/power-select'], function (exports, power_select) {

	'use strict';



	exports['default'] = power_select['default'];

});
define('tiny/components/subscription-form/component', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Component.extend({
    store: Ember['default'].inject.service(),
    courses: (function () {
      return this.get('store').findAll('course');
    }).property('courses'),
    actions: {
      addContact: function addContact() {
        var subscription = this.controller.model;
        var contact = this.get('store').createRecord('contact');
        subscription.get('contacts').pushObject(contact);
        contact.set('subscription', subscription);
      },
      removeContact: function removeContact(contact) {
        var subscription = this.controller.model;
        contact.set('_destroy', true);
      }
    }
  });

});
define('tiny/components/subscription-form/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        var child0 = (function() {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.3.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 13,
                  "column": 4
                },
                "end": {
                  "line": 29,
                  "column": 4
                }
              },
              "moduleName": "tiny/components/subscription-form/template.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("      ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("div");
              dom.setAttribute(el1,"class","row");
              var el2 = dom.createTextNode("\n        ");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("div");
              dom.setAttribute(el2,"class","col-md-3");
              var el3 = dom.createTextNode("\n          ");
              dom.appendChild(el2, el3);
              var el3 = dom.createComment("");
              dom.appendChild(el2, el3);
              var el3 = dom.createTextNode("\n        ");
              dom.appendChild(el2, el3);
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n        ");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("div");
              dom.setAttribute(el2,"class","col-md-3");
              var el3 = dom.createTextNode("\n          ");
              dom.appendChild(el2, el3);
              var el3 = dom.createComment("");
              dom.appendChild(el2, el3);
              var el3 = dom.createTextNode("\n        ");
              dom.appendChild(el2, el3);
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n\n        ");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("div");
              dom.setAttribute(el2,"class","col-md-3");
              var el3 = dom.createTextNode("\n          ");
              dom.appendChild(el2, el3);
              var el3 = dom.createComment("");
              dom.appendChild(el2, el3);
              var el3 = dom.createTextNode("\n        ");
              dom.appendChild(el2, el3);
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n        ");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("div");
              dom.setAttribute(el2,"class","col-md-3 pull-bottom");
              var el3 = dom.createTextNode("\n          ");
              dom.appendChild(el2, el3);
              var el3 = dom.createElement("a");
              dom.setAttribute(el3,"class","btn btn-danger btn-flat pull-bottom");
              var el4 = dom.createTextNode("Remove");
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
              var element1 = dom.childAt(element0, [7, 1]);
              var morphs = new Array(4);
              morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]),1,1);
              morphs[1] = dom.createMorphAt(dom.childAt(element0, [3]),1,1);
              morphs[2] = dom.createMorphAt(dom.childAt(element0, [5]),1,1);
              morphs[3] = dom.createElementMorph(element1);
              return morphs;
            },
            statements: [
              ["inline","em-input",[],["model",["subexpr","@mut",[["get","contact",["loc",[null,[16,27],[16,34]]]]],[],[]],"label","Name","cid",["subexpr","concat",["contact_",["get","i",["loc",[null,[16,71],[16,72]]]],"_name"],[],["loc",[null,[16,52],[16,81]]]],"property","fullname"],["loc",[null,[16,10],[16,103]]]],
              ["inline","em-input",[],["model",["subexpr","@mut",[["get","contact",["loc",[null,[19,27],[19,34]]]]],[],[]],"label","Email","cid",["subexpr","concat",["contact_",["get","i",["loc",[null,[19,72],[19,73]]]],"_email"],[],["loc",[null,[19,53],[19,83]]]],"property","email"],["loc",[null,[19,10],[19,102]]]],
              ["inline","em-input",[],["model",["subexpr","@mut",[["get","contact",["loc",[null,[23,27],[23,34]]]]],[],[]],"label","Phone","cid",["subexpr","concat",["contact_",["get","i",["loc",[null,[23,72],[23,73]]]],"_phone"],[],["loc",[null,[23,53],[23,83]]]],"property","phone"],["loc",[null,[23,10],[23,102]]]],
              ["element","action",["removeContact",["get","contact",["loc",[null,[26,82],[26,89]]]]],[],["loc",[null,[26,57],[26,91]]]]
            ],
            locals: [],
            templates: []
          };
        }());
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.3.1",
            "loc": {
              "source": null,
              "start": {
                "line": 12,
                "column": 2
              },
              "end": {
                "line": 30,
                "column": 2
              }
            },
            "moduleName": "tiny/components/subscription-form/template.hbs"
          },
          isEmpty: false,
          arity: 2,
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
            ["block","unless",[["get","contact._destroy",["loc",[null,[13,14],[13,30]]]]],[],0,null,["loc",[null,[13,4],[29,15]]]]
          ],
          locals: ["contact","i"],
          templates: [child0]
        };
      }());
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": [
              "multiple-nodes",
              "wrong-type"
            ]
          },
          "revision": "Ember@2.3.1",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 35,
              "column": 0
            }
          },
          "moduleName": "tiny/components/subscription-form/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","row");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2,"class","col-md-12");
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("a");
          dom.setAttribute(el1,"class","btn btn-default btn-flat");
          var el2 = dom.createTextNode("Add contact");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("br");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("br");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element2 = dom.childAt(fragment, [1, 1]);
          var element3 = dom.childAt(fragment, [5]);
          var morphs = new Array(9);
          morphs[0] = dom.createMorphAt(element2,1,1);
          morphs[1] = dom.createMorphAt(element2,3,3);
          morphs[2] = dom.createMorphAt(element2,5,5);
          morphs[3] = dom.createMorphAt(element2,7,7);
          morphs[4] = dom.createMorphAt(element2,9,9);
          morphs[5] = dom.createMorphAt(element2,11,11);
          morphs[6] = dom.createMorphAt(fragment,3,3,contextualElement);
          morphs[7] = dom.createElementMorph(element3);
          morphs[8] = dom.createMorphAt(fragment,11,11,contextualElement);
          return morphs;
        },
        statements: [
          ["inline","em-input",[],["label","First Name","property","firstName"],["loc",[null,[4,6],[4,58]]]],
          ["inline","em-input",[],["label","Last Name","property","lastName"],["loc",[null,[5,6],[5,56]]]],
          ["inline","em-input",[],["label","Phone","property","phone"],["loc",[null,[6,6],[6,49]]]],
          ["inline","em-input",[],["label","Email","property","email"],["loc",[null,[7,6],[7,49]]]],
          ["inline","em-select",[],["label","Course","property","course","content",["subexpr","@mut",[["get","courses",["loc",[null,[8,59],[8,66]]]]],[],[]],"prompt"," ","propertyIsModel",true,"optionLabelPath","name"],["loc",[null,[8,6],[8,123]]]],
          ["inline","em-text",[],["label","Comments","property","comments"],["loc",[null,[9,6],[9,54]]]],
          ["block","each",[["get","model.contacts",["loc",[null,[12,10],[12,24]]]]],[],0,null,["loc",[null,[12,2],[30,11]]]],
          ["element","action",["addContact"],[],["loc",[null,[31,38],[31,62]]]],
          ["content","yield",["loc",[null,[34,2],[34,11]]]]
        ],
        locals: [],
        templates: [child0]
      };
    }());
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": [
            "wrong-type"
          ]
        },
        "revision": "Ember@2.3.1",
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
        "moduleName": "tiny/components/subscription-form/template.hbs"
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
        ["block","em-form",[],["model",["subexpr","@mut",[["get","model",["loc",[null,[1,17],[1,22]]]]],[],[]],"submitButton",false],0,null,["loc",[null,[1,0],[35,12]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('tiny/components/summer-note', ['exports', 'ember-cli-summernote/components/summer-note'], function (exports, SummerNoteComponent) {

	'use strict';

	/*
		This is just a proxy file requiring the component from the /addon folder and
		making it available to the dummy application!
	 */
	exports['default'] = SummerNoteComponent['default'];

});
define('tiny/components/user-form/component', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Component.extend({
    store: Ember['default'].inject.service(),

    owner: (function () {
      var owner = this.get('store').createRecord('contact');
      owner.set('paymentOption', this.get('paymentOptions.firstObject'));
      return owner;
    }).property('owner'),

    paymentOptions: (function () {
      return this.get('store').findAll('paymentOption');
    }).property('paymentOptions'),

    courses: (function () {
      return this.get('store').findAll('course');
    }).property('courses'),

    setPaymentOptions: (function () {
      var options = this.get('store').findAll('paymentOption');
      this.controller.set('paymentOptions', options);
    }).on('init'),

    addDatePicker: function addDatePicker() {
      Ember['default'].run.scheduleOnce('afterRender', function () {
        $('.date input').bootstrapMaterialDatePicker({ weekStart: 0, time: false, format: 'DD-MM-YYYY', lang: 'fr' });
      });
    },

    scrollTo: function scrollTo(item) {
      Ember['default'].run.scheduleOnce('afterRender', function () {
        var position = item.get('position');
        var scrollTo = $('#item-' + position).position().top;
        $("html, body").animate({ scrollTop: scrollTo }, 'slow');
      });
    },

    scrollToBottom: function scrollToBottom() {
      var scrollTo = $(document).height();
      $("html, body").animate({ scrollTop: scrollTo }, 'slow');
    },

    scrollOnError: function scrollOnError() {
      Ember['default'].run.scheduleOnce('afterRender', function () {
        if ($('div.form-group.has-error').length > 0) {
          var scrollTo = $('div.form-group.has-error:first').offset().top;
          $("html, body").animate({ scrollTop: scrollTo }, 'slow');
        }
      });
    },

    validate: function validate(successCallback) {
      var _this = this;

      var promises = this.get('items').map(function (item) {
        return item.validate();
      });
      promises.pushObject(this.get('owner').validate());

      Ember['default'].RSVP.all(promises).then(function (values) {
        successCallback();
      })['catch'](function () {
        _this.get('items').forEach(function (item) {
          item.showErrors();
        });
        _this.scrollOnError();
      });
    },

    validateContacts: function validateContacts(successCallback, failCallback) {
      if (this.get('contacts.length') > 0) {
        this.set('hasNoContacts', false);
        successCallback();
      } else {
        this.set('hasNoContacts', true);
        failCallback();
      }
    },

    createItem: function createItem(type) {
      var values = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      var item = this.get('store').createRecord(type, values);
      item.set('objectType', type);
      item.set('position', this.get('items.length'));
      this.get('items').pushObject(item);
      this.get(type + 's').pushObject(item);
      return item;
    },

    actions: {
      addContact: function addContact() {
        var _this2 = this;

        this.validate(function () {
          var contact = _this2.createItem('contact');
          _this2.controller.set('showPaymentOptions', false);
          _this2.scrollTo(contact);
        });
      },

      subscribeMyself: function subscribeMyself(subscription, value) {
        subscription.set('creator', value);
        subscription.set('hasToChooseCreator', false);
        if (value) {
          this.controller.set('owner', subscription);
          subscription.set('paymentOption', this.get('paymentOptions.firstObject'));
          this.controller.set('myselfSubscribed', true);
        }
        this.controller.set('showFinalOptions', true);
        this.addDatePicker();
        this.scrollTo(subscription);
      },

      removeContact: function removeContact(contact) {
        this.get('items').removeObject(contact);
        this.get('contacts').removeObject(contact);
        this.controller.set('showFinalOptions', true);
      },
      removeSubscription: function removeSubscription(subscription) {
        this.get('items').removeObject(subscription);
        this.get('subscriptions').removeObject(subscription);
        subscription.destroy();

        if (subscription.get('creator')) {
          this.controller.set('myselfSubscribed', false);
        }

        if (this.get('items.length') === 0) {
          var newSubscription = this.get('store').createRecord('subscription');

          newSubscription.set('objectType', 'subscription');
          newSubscription.set('position', 0);
          newSubscription.set('hasToChooseCreator', true);
          this.get('items').pushObject(newSubscription);
          this.get('subscriptions').pushObject(newSubscription);

          this.controller.set('showFinalOptions', false);
          this.controller.set('showPaymentOptions', false);
        }
      },

      addSubscription: function addSubscription() {
        var _this3 = this;

        this.validate(function () {
          var subscriptions = _this3.get('subscriptions');
          var lastSubscription = subscriptions[subscriptions.length - 1];

          var subscription = _this3.createItem('subscription', lastSubscription.toJSON());
          subscription.set('birthDate', lastSubscription.get('birthDate'));
          subscription.set('course', lastSubscription.get('course'));
          if (_this3.controller.get('myselfSubscribed')) {
            subscription.set('creator', false);
            subscription.set('hasToChooseCreator', false);
          } else {
            subscription.set('hasToChooseCreator', true);
          }

          _this3.controller.set('showFinalOptions', true);
          _this3.controller.set('showPaymentOptions', false);
          _this3.addDatePicker();

          _this3.scrollTo(subscription);
        });
      },

      doShowPaymentOptions: function doShowPaymentOptions() {
        var _this4 = this;

        this.validateContacts(function () {
          _this4.validate(function () {
            _this4.controller.set('showPaymentOptions', true);
            _this4.scrollToBottom();
          });
        }, function () {
          _this4.validate();
        });
      },

      choosePaymentOption: function choosePaymentOption() {
        var _this5 = this;

        this.validate(function () {
          _this5.controller.set('showPaymentOptions', true);
        });
      },

      submit: function submit() {
        var _this6 = this;

        this.validateContacts(function () {
          _this6.validate(function () {
            _this6.sendAction('submit', _this6.get('subscriptions'), _this6.get('contacts'), _this6.get('owner'));
          });
        }, function () {
          _this6.validate();
        });
      }

    }
  });

});
define('tiny/components/user-form/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        var child0 = (function() {
          var child0 = (function() {
            var child0 = (function() {
              return {
                meta: {
                  "fragmentReason": false,
                  "revision": "Ember@2.3.1",
                  "loc": {
                    "source": null,
                    "start": {
                      "line": 8,
                      "column": 10
                    },
                    "end": {
                      "line": 19,
                      "column": 10
                    }
                  },
                  "moduleName": "tiny/components/user-form/template.hbs"
                },
                isEmpty: false,
                arity: 0,
                cachedFragment: null,
                hasRendered: false,
                buildFragment: function buildFragment(dom) {
                  var el0 = dom.createDocumentFragment();
                  var el1 = dom.createTextNode("            ");
                  dom.appendChild(el0, el1);
                  var el1 = dom.createElement("div");
                  dom.setAttribute(el1,"class","col-md-6");
                  var el2 = dom.createTextNode("\n              ");
                  dom.appendChild(el1, el2);
                  var el2 = dom.createElement("a");
                  dom.setAttribute(el2,"class","btn btn-raised btn-default btn-block");
                  var el3 = dom.createTextNode("\n                ");
                  dom.appendChild(el2, el3);
                  var el3 = dom.createComment("");
                  dom.appendChild(el2, el3);
                  var el3 = dom.createTextNode("\n              ");
                  dom.appendChild(el2, el3);
                  dom.appendChild(el1, el2);
                  var el2 = dom.createTextNode("\n            ");
                  dom.appendChild(el1, el2);
                  dom.appendChild(el0, el1);
                  var el1 = dom.createTextNode("\n            ");
                  dom.appendChild(el0, el1);
                  var el1 = dom.createElement("div");
                  dom.setAttribute(el1,"class","col-md-6");
                  var el2 = dom.createTextNode("\n              ");
                  dom.appendChild(el1, el2);
                  var el2 = dom.createElement("a");
                  dom.setAttribute(el2,"class","btn btn-raised btn-default btn-block");
                  var el3 = dom.createTextNode("\n                ");
                  dom.appendChild(el2, el3);
                  var el3 = dom.createComment("");
                  dom.appendChild(el2, el3);
                  var el3 = dom.createTextNode("\n              ");
                  dom.appendChild(el2, el3);
                  dom.appendChild(el1, el2);
                  var el2 = dom.createTextNode("\n            ");
                  dom.appendChild(el1, el2);
                  dom.appendChild(el0, el1);
                  var el1 = dom.createTextNode("\n");
                  dom.appendChild(el0, el1);
                  return el0;
                },
                buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                  var element10 = dom.childAt(fragment, [1, 1]);
                  var element11 = dom.childAt(fragment, [3, 1]);
                  var morphs = new Array(4);
                  morphs[0] = dom.createElementMorph(element10);
                  morphs[1] = dom.createMorphAt(element10,1,1);
                  morphs[2] = dom.createElementMorph(element11);
                  morphs[3] = dom.createMorphAt(element11,1,1);
                  return morphs;
                },
                statements: [
                  ["element","action",["subscribeMyself",["get","item",["loc",[null,[10,89],[10,93]]]],true],[],["loc",[null,[10,62],[10,101]]]],
                  ["inline","t",["subscribe-myself"],[],["loc",[null,[11,16],[11,40]]]],
                  ["element","action",["subscribeMyself",["get","item",["loc",[null,[15,89],[15,93]]]],false],[],["loc",[null,[15,62],[15,102]]]],
                  ["inline","t",["subscribe-someone-else"],[],["loc",[null,[16,16],[16,46]]]]
                ],
                locals: [],
                templates: []
              };
            }());
            return {
              meta: {
                "fragmentReason": false,
                "revision": "Ember@2.3.1",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 6,
                    "column": 8
                  },
                  "end": {
                    "line": 21,
                    "column": 8
                  }
                },
                "moduleName": "tiny/components/user-form/template.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("\n");
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
                ["block","default-box",[],["title",["subexpr","t",["who-do-you-subscribe"],[],["loc",[null,[8,31],[8,57]]]]],0,null,["loc",[null,[8,10],[19,26]]]]
              ],
              locals: [],
              templates: [child0]
            };
          }());
          var child1 = (function() {
            var child0 = (function() {
              var child0 = (function() {
                return {
                  meta: {
                    "fragmentReason": false,
                    "revision": "Ember@2.3.1",
                    "loc": {
                      "source": null,
                      "start": {
                        "line": 24,
                        "column": 12
                      },
                      "end": {
                        "line": 31,
                        "column": 12
                      }
                    },
                    "moduleName": "tiny/components/user-form/template.hbs"
                  },
                  isEmpty: false,
                  arity: 0,
                  cachedFragment: null,
                  hasRendered: false,
                  buildFragment: function buildFragment(dom) {
                    var el0 = dom.createDocumentFragment();
                    var el1 = dom.createTextNode("              ");
                    dom.appendChild(el0, el1);
                    var el1 = dom.createElement("div");
                    dom.setAttribute(el1,"class","col-md-12");
                    var el2 = dom.createTextNode("\n                ");
                    dom.appendChild(el1, el2);
                    var el2 = dom.createComment("");
                    dom.appendChild(el1, el2);
                    var el2 = dom.createTextNode("\n                ");
                    dom.appendChild(el1, el2);
                    var el2 = dom.createComment("");
                    dom.appendChild(el1, el2);
                    var el2 = dom.createTextNode("\n                ");
                    dom.appendChild(el1, el2);
                    var el2 = dom.createComment("");
                    dom.appendChild(el1, el2);
                    var el2 = dom.createTextNode("\n                ");
                    dom.appendChild(el1, el2);
                    var el2 = dom.createComment("");
                    dom.appendChild(el1, el2);
                    var el2 = dom.createTextNode("\n              ");
                    dom.appendChild(el1, el2);
                    dom.appendChild(el0, el1);
                    var el1 = dom.createTextNode("\n");
                    dom.appendChild(el0, el1);
                    return el0;
                  },
                  buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                    var element9 = dom.childAt(fragment, [1]);
                    var morphs = new Array(4);
                    morphs[0] = dom.createMorphAt(element9,1,1);
                    morphs[1] = dom.createMorphAt(element9,3,3);
                    morphs[2] = dom.createMorphAt(element9,5,5);
                    morphs[3] = dom.createMorphAt(element9,7,7);
                    return morphs;
                  },
                  statements: [
                    ["inline","user-form-input",[],["property","fullname","item",["subexpr","@mut",[["get","item",["loc",[null,[26,59],[26,63]]]]],[],[]]],["loc",[null,[26,16],[26,65]]]],
                    ["inline","user-form-input",[],["property","phone","item",["subexpr","@mut",[["get","item",["loc",[null,[27,56],[27,60]]]]],[],[]]],["loc",[null,[27,16],[27,62]]]],
                    ["inline","user-form-input",[],["property","email","item",["subexpr","@mut",[["get","item",["loc",[null,[28,56],[28,60]]]]],[],[]]],["loc",[null,[28,16],[28,62]]]],
                    ["inline","user-form-input",[],["property","comments","item",["subexpr","@mut",[["get","item",["loc",[null,[29,59],[29,63]]]]],[],[]]],["loc",[null,[29,16],[29,65]]]]
                  ],
                  locals: [],
                  templates: []
                };
              }());
              return {
                meta: {
                  "fragmentReason": false,
                  "revision": "Ember@2.3.1",
                  "loc": {
                    "source": null,
                    "start": {
                      "line": 22,
                      "column": 10
                    },
                    "end": {
                      "line": 33,
                      "column": 10
                    }
                  },
                  "moduleName": "tiny/components/user-form/template.hbs"
                },
                isEmpty: false,
                arity: 0,
                cachedFragment: null,
                hasRendered: false,
                buildFragment: function buildFragment(dom) {
                  var el0 = dom.createDocumentFragment();
                  var el1 = dom.createTextNode("\n");
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
                  ["block","default-box",[],["title",["subexpr","t",["information-principal-contact"],[],["loc",[null,[24,33],[24,68]]]]],0,null,["loc",[null,[24,12],[31,28]]]]
                ],
                locals: [],
                templates: [child0]
              };
            }());
            var child1 = (function() {
              var child0 = (function() {
                var child0 = (function() {
                  return {
                    meta: {
                      "fragmentReason": false,
                      "revision": "Ember@2.3.1",
                      "loc": {
                        "source": null,
                        "start": {
                          "line": 45,
                          "column": 16
                        },
                        "end": {
                          "line": 47,
                          "column": 16
                        }
                      },
                      "moduleName": "tiny/components/user-form/template.hbs"
                    },
                    isEmpty: false,
                    arity: 1,
                    cachedFragment: null,
                    hasRendered: false,
                    buildFragment: function buildFragment(dom) {
                      var el0 = dom.createDocumentFragment();
                      var el1 = dom.createTextNode("                  ");
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
                      ["inline","component",[["get","plugin.component",["loc",[null,[46,30],[46,46]]]]],["model",["subexpr","@mut",[["get","item",["loc",[null,[46,53],[46,57]]]]],[],[]]],["loc",[null,[46,18],[46,59]]]]
                    ],
                    locals: ["plugin"],
                    templates: []
                  };
                }());
                return {
                  meta: {
                    "fragmentReason": false,
                    "revision": "Ember@2.3.1",
                    "loc": {
                      "source": null,
                      "start": {
                        "line": 35,
                        "column": 12
                      },
                      "end": {
                        "line": 53,
                        "column": 12
                      }
                    },
                    "moduleName": "tiny/components/user-form/template.hbs"
                  },
                  isEmpty: false,
                  arity: 0,
                  cachedFragment: null,
                  hasRendered: false,
                  buildFragment: function buildFragment(dom) {
                    var el0 = dom.createDocumentFragment();
                    var el1 = dom.createTextNode("              ");
                    dom.appendChild(el0, el1);
                    var el1 = dom.createElement("div");
                    dom.setAttribute(el1,"class","col-md-12");
                    var el2 = dom.createTextNode("\n                ");
                    dom.appendChild(el1, el2);
                    var el2 = dom.createComment("");
                    dom.appendChild(el1, el2);
                    var el2 = dom.createTextNode("\n                ");
                    dom.appendChild(el1, el2);
                    var el2 = dom.createComment("");
                    dom.appendChild(el1, el2);
                    var el2 = dom.createTextNode("\n                ");
                    dom.appendChild(el1, el2);
                    var el2 = dom.createComment("");
                    dom.appendChild(el1, el2);
                    var el2 = dom.createTextNode("\n                ");
                    dom.appendChild(el1, el2);
                    var el2 = dom.createComment("");
                    dom.appendChild(el1, el2);
                    var el2 = dom.createTextNode("\n                ");
                    dom.appendChild(el1, el2);
                    var el2 = dom.createComment("");
                    dom.appendChild(el1, el2);
                    var el2 = dom.createTextNode("\n                ");
                    dom.appendChild(el1, el2);
                    var el2 = dom.createComment("");
                    dom.appendChild(el1, el2);
                    var el2 = dom.createTextNode("\n                ");
                    dom.appendChild(el1, el2);
                    var el2 = dom.createComment("");
                    dom.appendChild(el1, el2);
                    var el2 = dom.createTextNode("\n\n");
                    dom.appendChild(el1, el2);
                    var el2 = dom.createComment("");
                    dom.appendChild(el1, el2);
                    var el2 = dom.createTextNode("\n              ");
                    dom.appendChild(el1, el2);
                    dom.appendChild(el0, el1);
                    var el1 = dom.createTextNode("\n              ");
                    dom.appendChild(el0, el1);
                    var el1 = dom.createElement("div");
                    dom.setAttribute(el1,"class","col-md-2 pull-right");
                    var el2 = dom.createTextNode("\n                ");
                    dom.appendChild(el1, el2);
                    var el2 = dom.createElement("a");
                    dom.setAttribute(el2,"class","btn");
                    var el3 = dom.createTextNode("Supprimer");
                    dom.appendChild(el2, el3);
                    dom.appendChild(el1, el2);
                    var el2 = dom.createTextNode("\n              ");
                    dom.appendChild(el1, el2);
                    dom.appendChild(el0, el1);
                    var el1 = dom.createTextNode("\n");
                    dom.appendChild(el0, el1);
                    return el0;
                  },
                  buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                    var element7 = dom.childAt(fragment, [1]);
                    var element8 = dom.childAt(fragment, [3, 1]);
                    var morphs = new Array(9);
                    morphs[0] = dom.createMorphAt(element7,1,1);
                    morphs[1] = dom.createMorphAt(element7,3,3);
                    morphs[2] = dom.createMorphAt(element7,5,5);
                    morphs[3] = dom.createMorphAt(element7,7,7);
                    morphs[4] = dom.createMorphAt(element7,9,9);
                    morphs[5] = dom.createMorphAt(element7,11,11);
                    morphs[6] = dom.createMorphAt(element7,13,13);
                    morphs[7] = dom.createMorphAt(element7,15,15);
                    morphs[8] = dom.createElementMorph(element8);
                    return morphs;
                  },
                  statements: [
                    ["inline","user-form-input",[],["property","firstName","item",["subexpr","@mut",[["get","item",["loc",[null,[37,60],[37,64]]]]],[],[]]],["loc",[null,[37,16],[37,66]]]],
                    ["inline","user-form-input",[],["property","lastName","item",["subexpr","@mut",[["get","item",["loc",[null,[38,59],[38,63]]]]],[],[]]],["loc",[null,[38,16],[38,65]]]],
                    ["inline","user-form-input",[],["property","birthDate","extraClass","date","item",["subexpr","@mut",[["get","item",["loc",[null,[39,78],[39,82]]]]],[],[]]],["loc",[null,[39,16],[39,84]]]],
                    ["inline","user-form-input",[],["property","phone","item",["subexpr","@mut",[["get","item",["loc",[null,[40,56],[40,60]]]]],[],[]]],["loc",[null,[40,16],[40,62]]]],
                    ["inline","user-form-input",[],["property","email","item",["subexpr","@mut",[["get","item",["loc",[null,[41,56],[41,60]]]]],[],[]]],["loc",[null,[41,16],[41,62]]]],
                    ["inline","em-select",[],["canShowErrors",["subexpr","@mut",[["get","item.visibleErrors.course",["loc",[null,[42,42],[42,67]]]]],[],[]],"cid",["subexpr","concat",["subscription",["get","item.position",["loc",[null,[42,95],[42,108]]]],"-course"],[],["loc",[null,[42,72],[42,119]]]],"model",["subexpr","@mut",[["get","item",["loc",[null,[42,126],[42,130]]]]],[],[]],"label",["subexpr","t",["course"],[],["loc",[null,[42,137],[42,149]]]],"class","form-group label-floating is-empty","property","course","content",["subexpr","@mut",[["get","courses",["loc",[null,[42,219],[42,226]]]]],[],[]],"prompt"," ","propertyIsModel",true,"optionLabelPath","name"],["loc",[null,[42,16],[42,283]]]],
                    ["inline","em-text",[],["canShowErrors",["subexpr","@mut",[["get","item.visibleErrors.comments",["loc",[null,[43,40],[43,67]]]]],[],[]],"cid",["subexpr","concat",["subscription",["get","item.position",["loc",[null,[43,95],[43,108]]]],"-comments"],[],["loc",[null,[43,72],[43,121]]]],"model",["subexpr","@mut",[["get","item",["loc",[null,[43,128],[43,132]]]]],[],[]],"label",["subexpr","t",["comments"],[],["loc",[null,[43,139],[43,153]]]],"class","form-group label-floating","property","comments"],["loc",[null,[43,16],[43,209]]]],
                    ["block","each",[["get","env.APP.plugins",["loc",[null,[45,24],[45,39]]]]],[],0,null,["loc",[null,[45,16],[47,25]]]],
                    ["element","action",["removeSubscription",["get","item",["loc",[null,[51,61],[51,65]]]]],[],["loc",[null,[51,31],[51,67]]]]
                  ],
                  locals: [],
                  templates: [child0]
                };
              }());
              return {
                meta: {
                  "fragmentReason": false,
                  "revision": "Ember@2.3.1",
                  "loc": {
                    "source": null,
                    "start": {
                      "line": 34,
                      "column": 10
                    },
                    "end": {
                      "line": 54,
                      "column": 10
                    }
                  },
                  "moduleName": "tiny/components/user-form/template.hbs"
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
                  ["block","default-box",[],["title",["subexpr","t",["member"],["fullname",["get","item.fullname",["loc",[null,[35,54],[35,67]]]]],["loc",[null,[35,33],[35,68]]]]],0,null,["loc",[null,[35,12],[53,28]]]]
                ],
                locals: [],
                templates: [child0]
              };
            }());
            return {
              meta: {
                "fragmentReason": false,
                "revision": "Ember@2.3.1",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 21,
                    "column": 8
                  },
                  "end": {
                    "line": 55,
                    "column": 8
                  }
                },
                "moduleName": "tiny/components/user-form/template.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createComment("");
                dom.appendChild(el0, el1);
                var el1 = dom.createComment("");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var morphs = new Array(2);
                morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
                morphs[1] = dom.createMorphAt(fragment,1,1,contextualElement);
                dom.insertBoundary(fragment, 0);
                dom.insertBoundary(fragment, null);
                return morphs;
              },
              statements: [
                ["block","if",[["subexpr","and",[["subexpr","eq",[["get","item.creator",["loc",[null,[22,25],[22,37]]]],false],[],["loc",[null,[22,21],[22,44]]]],["subexpr","not-eq",[["get","myselfSubscribed",["loc",[null,[22,53],[22,69]]]],true],[],["loc",[null,[22,45],[22,75]]]],["subexpr","eq",[["get","item.position",["loc",[null,[22,80],[22,93]]]],0],[],["loc",[null,[22,76],[22,96]]]]],[],["loc",[null,[22,16],[22,97]]]]],[],0,null,["loc",[null,[22,10],[33,17]]]],
                ["block","if",[["subexpr","or",[["subexpr","eq",[["get","item.creator",["loc",[null,[34,24],[34,36]]]],false],[],["loc",[null,[34,20],[34,43]]]],["subexpr","eq",[["get","item.creator",["loc",[null,[34,48],[34,60]]]],true],[],["loc",[null,[34,44],[34,66]]]]],[],["loc",[null,[34,16],[34,67]]]]],[],1,null,["loc",[null,[34,10],[54,17]]]]
              ],
              locals: [],
              templates: [child0, child1]
            };
          }());
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.3.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 5,
                  "column": 6
                },
                "end": {
                  "line": 56,
                  "column": 6
                }
              },
              "moduleName": "tiny/components/user-form/template.hbs"
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
              ["block","if",[["get","item.hasToChooseCreator",["loc",[null,[6,14],[6,37]]]]],[],0,1,["loc",[null,[6,8],[55,15]]]]
            ],
            locals: [],
            templates: [child0, child1]
          };
        }());
        var child1 = (function() {
          var child0 = (function() {
            var child0 = (function() {
              return {
                meta: {
                  "fragmentReason": false,
                  "revision": "Ember@2.3.1",
                  "loc": {
                    "source": null,
                    "start": {
                      "line": 58,
                      "column": 8
                    },
                    "end": {
                      "line": 68,
                      "column": 8
                    }
                  },
                  "moduleName": "tiny/components/user-form/template.hbs"
                },
                isEmpty: false,
                arity: 0,
                cachedFragment: null,
                hasRendered: false,
                buildFragment: function buildFragment(dom) {
                  var el0 = dom.createDocumentFragment();
                  var el1 = dom.createTextNode("          ");
                  dom.appendChild(el0, el1);
                  var el1 = dom.createElement("div");
                  dom.setAttribute(el1,"class","col-md-12");
                  var el2 = dom.createTextNode("\n            ");
                  dom.appendChild(el1, el2);
                  var el2 = dom.createComment("");
                  dom.appendChild(el1, el2);
                  var el2 = dom.createTextNode("\n            ");
                  dom.appendChild(el1, el2);
                  var el2 = dom.createComment("");
                  dom.appendChild(el1, el2);
                  var el2 = dom.createTextNode("\n            ");
                  dom.appendChild(el1, el2);
                  var el2 = dom.createComment("");
                  dom.appendChild(el1, el2);
                  var el2 = dom.createTextNode("\n            ");
                  dom.appendChild(el1, el2);
                  var el2 = dom.createComment("");
                  dom.appendChild(el1, el2);
                  var el2 = dom.createTextNode("\n          ");
                  dom.appendChild(el1, el2);
                  dom.appendChild(el0, el1);
                  var el1 = dom.createTextNode("\n          ");
                  dom.appendChild(el0, el1);
                  var el1 = dom.createElement("div");
                  dom.setAttribute(el1,"class","col-md-2 pull-right");
                  var el2 = dom.createTextNode("\n            ");
                  dom.appendChild(el1, el2);
                  var el2 = dom.createElement("a");
                  var el3 = dom.createTextNode("Remove");
                  dom.appendChild(el2, el3);
                  dom.appendChild(el1, el2);
                  var el2 = dom.createTextNode("\n          ");
                  dom.appendChild(el1, el2);
                  dom.appendChild(el0, el1);
                  var el1 = dom.createTextNode("\n");
                  dom.appendChild(el0, el1);
                  return el0;
                },
                buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                  var element5 = dom.childAt(fragment, [1]);
                  var element6 = dom.childAt(fragment, [3, 1]);
                  var morphs = new Array(5);
                  morphs[0] = dom.createMorphAt(element5,1,1);
                  morphs[1] = dom.createMorphAt(element5,3,3);
                  morphs[2] = dom.createMorphAt(element5,5,5);
                  morphs[3] = dom.createMorphAt(element5,7,7);
                  morphs[4] = dom.createElementMorph(element6);
                  return morphs;
                },
                statements: [
                  ["inline","user-form-input",[],["property","fullname","item",["subexpr","@mut",[["get","item",["loc",[null,[60,55],[60,59]]]]],[],[]]],["loc",[null,[60,12],[60,61]]]],
                  ["inline","user-form-input",[],["property","phone","item",["subexpr","@mut",[["get","item",["loc",[null,[61,52],[61,56]]]]],[],[]]],["loc",[null,[61,12],[61,58]]]],
                  ["inline","user-form-input",[],["property","email","item",["subexpr","@mut",[["get","item",["loc",[null,[62,52],[62,56]]]]],[],[]]],["loc",[null,[62,12],[62,58]]]],
                  ["inline","user-form-input",[],["property","comments","item",["subexpr","@mut",[["get","item",["loc",[null,[63,55],[63,59]]]]],[],[]]],["loc",[null,[63,12],[63,61]]]],
                  ["element","action",["removeContact",["get","item",["loc",[null,[66,40],[66,44]]]]],[],["loc",[null,[66,15],[66,46]]]]
                ],
                locals: [],
                templates: []
              };
            }());
            return {
              meta: {
                "fragmentReason": false,
                "revision": "Ember@2.3.1",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 56,
                    "column": 6
                  },
                  "end": {
                    "line": 70,
                    "column": 6
                  }
                },
                "moduleName": "tiny/components/user-form/template.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("\n");
                dom.appendChild(el0, el1);
                var el1 = dom.createComment("");
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n      ");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var morphs = new Array(1);
                morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
                return morphs;
              },
              statements: [
                ["block","default-box",[],["title",["subexpr","t",["contact"],["fullname",["get","item.fullname",["loc",[null,[58,51],[58,64]]]]],["loc",[null,[58,29],[58,65]]]]],0,null,["loc",[null,[58,8],[68,24]]]]
              ],
              locals: [],
              templates: [child0]
            };
          }());
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.3.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 56,
                  "column": 6
                },
                "end": {
                  "line": 70,
                  "column": 6
                }
              },
              "moduleName": "tiny/components/user-form/template.hbs"
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
              ["block","if",[["subexpr","eq",[["get","item.objectType",["loc",[null,[56,20],[56,35]]]],"contact"],[],["loc",[null,[56,16],[56,46]]]]],[],0,null,["loc",[null,[56,6],[70,6]]]]
            ],
            locals: [],
            templates: [child0]
          };
        }());
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.3.1",
            "loc": {
              "source": null,
              "start": {
                "line": 3,
                "column": 4
              },
              "end": {
                "line": 72,
                "column": 4
              }
            },
            "moduleName": "tiny/components/user-form/template.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("      ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element12 = dom.childAt(fragment, [1]);
            var morphs = new Array(2);
            morphs[0] = dom.createAttrMorph(element12, 'id');
            morphs[1] = dom.createMorphAt(element12,1,1);
            return morphs;
          },
          statements: [
            ["attribute","id",["concat",["item-",["get","item.position",["loc",[null,[4,22],[4,35]]]]]]],
            ["block","if",[["subexpr","eq",[["get","item.objectType",["loc",[null,[5,16],[5,31]]]],"subscription"],[],["loc",[null,[5,12],[5,47]]]]],[],0,1,["loc",[null,[5,6],[70,13]]]]
          ],
          locals: ["item"],
          templates: [child0, child1]
        };
      }());
      var child1 = (function() {
        var child0 = (function() {
          var child0 = (function() {
            return {
              meta: {
                "fragmentReason": false,
                "revision": "Ember@2.3.1",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 76,
                    "column": 8
                  },
                  "end": {
                    "line": 84,
                    "column": 8
                  }
                },
                "moduleName": "tiny/components/user-form/template.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("          ");
                dom.appendChild(el0, el1);
                var el1 = dom.createElement("div");
                dom.setAttribute(el1,"class","row");
                var el2 = dom.createTextNode("\n            ");
                dom.appendChild(el1, el2);
                var el2 = dom.createElement("div");
                dom.setAttribute(el2,"class","col-md-4 has-error");
                var el3 = dom.createTextNode("\n              ");
                dom.appendChild(el2, el3);
                var el3 = dom.createElement("div");
                dom.setAttribute(el3,"class","help-block");
                var el4 = dom.createTextNode("\n                Vous devez avoir au moins un contact d'urgence.\n              ");
                dom.appendChild(el3, el4);
                dom.appendChild(el2, el3);
                var el3 = dom.createTextNode("\n            ");
                dom.appendChild(el2, el3);
                dom.appendChild(el1, el2);
                var el2 = dom.createTextNode("\n          ");
                dom.appendChild(el1, el2);
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
              "fragmentReason": false,
              "revision": "Ember@2.3.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 75,
                  "column": 6
                },
                "end": {
                  "line": 102,
                  "column": 6
                }
              },
              "moduleName": "tiny/components/user-form/template.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("        ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("div");
              dom.setAttribute(el1,"class","row");
              var el2 = dom.createTextNode("\n          ");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("div");
              dom.setAttribute(el2,"class","col-md-4");
              var el3 = dom.createTextNode("\n            ");
              dom.appendChild(el2, el3);
              var el3 = dom.createElement("a");
              dom.setAttribute(el3,"class","btn btn-raised btn-default btn-block btn-flat");
              var el4 = dom.createTextNode("\n              ");
              dom.appendChild(el3, el4);
              var el4 = dom.createComment("");
              dom.appendChild(el3, el4);
              var el4 = dom.createTextNode("\n            ");
              dom.appendChild(el3, el4);
              dom.appendChild(el2, el3);
              var el3 = dom.createTextNode("\n          ");
              dom.appendChild(el2, el3);
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n          ");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("div");
              dom.setAttribute(el2,"class","col-md-4");
              var el3 = dom.createTextNode("\n            ");
              dom.appendChild(el2, el3);
              var el3 = dom.createElement("a");
              dom.setAttribute(el3,"class","btn btn-raised btn-default btn-block btn-flat");
              var el4 = dom.createTextNode("\n              ");
              dom.appendChild(el3, el4);
              var el4 = dom.createComment("");
              dom.appendChild(el3, el4);
              var el4 = dom.createTextNode("\n            ");
              dom.appendChild(el3, el4);
              dom.appendChild(el2, el3);
              var el3 = dom.createTextNode("\n          ");
              dom.appendChild(el2, el3);
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n          ");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("div");
              dom.setAttribute(el2,"class","col-md-4");
              var el3 = dom.createTextNode("\n            ");
              dom.appendChild(el2, el3);
              var el3 = dom.createElement("a");
              dom.setAttribute(el3,"class","btn btn-raised btn-primary btn-block btn-flat");
              var el4 = dom.createTextNode("\n              ");
              dom.appendChild(el3, el4);
              var el4 = dom.createComment("");
              dom.appendChild(el3, el4);
              var el4 = dom.createTextNode("\n            ");
              dom.appendChild(el3, el4);
              dom.appendChild(el2, el3);
              var el3 = dom.createTextNode("\n          ");
              dom.appendChild(el2, el3);
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n        ");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var element1 = dom.childAt(fragment, [2]);
              var element2 = dom.childAt(element1, [1, 1]);
              var element3 = dom.childAt(element1, [3, 1]);
              var element4 = dom.childAt(element1, [5, 1]);
              var morphs = new Array(7);
              morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
              morphs[1] = dom.createElementMorph(element2);
              morphs[2] = dom.createMorphAt(element2,1,1);
              morphs[3] = dom.createElementMorph(element3);
              morphs[4] = dom.createMorphAt(element3,1,1);
              morphs[5] = dom.createElementMorph(element4);
              morphs[6] = dom.createMorphAt(element4,1,1);
              dom.insertBoundary(fragment, 0);
              return morphs;
            },
            statements: [
              ["block","if",[["get","hasNoContacts",["loc",[null,[76,14],[76,27]]]]],[],0,null,["loc",[null,[76,8],[84,15]]]],
              ["element","action",["addContact"],[],["loc",[null,[87,69],[87,92]]]],
              ["inline","t",["add-contact"],[],["loc",[null,[88,14],[88,33]]]],
              ["element","action",["addSubscription"],[],["loc",[null,[92,69],[92,98]]]],
              ["inline","t",["add-subscription"],[],["loc",[null,[93,14],[93,38]]]],
              ["element","action",["doShowPaymentOptions"],[],["loc",[null,[97,69],[97,103]]]],
              ["inline","t",["finish"],[],["loc",[null,[98,14],[98,28]]]]
            ],
            locals: [],
            templates: [child0]
          };
        }());
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.3.1",
            "loc": {
              "source": null,
              "start": {
                "line": 74,
                "column": 4
              },
              "end": {
                "line": 103,
                "column": 4
              }
            },
            "moduleName": "tiny/components/user-form/template.hbs"
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
            ["block","default-box",[],["title",""],0,null,["loc",[null,[75,6],[102,22]]]]
          ],
          locals: [],
          templates: [child0]
        };
      }());
      var child2 = (function() {
        var child0 = (function() {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.3.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 106,
                  "column": 6
                },
                "end": {
                  "line": 119,
                  "column": 6
                }
              },
              "moduleName": "tiny/components/user-form/template.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("        ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("div");
              dom.setAttribute(el1,"class","row");
              var el2 = dom.createTextNode("\n          ");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("div");
              dom.setAttribute(el2,"class","col-md-12");
              var el3 = dom.createTextNode("\n            ");
              dom.appendChild(el2, el3);
              var el3 = dom.createComment("");
              dom.appendChild(el2, el3);
              var el3 = dom.createTextNode("\n          ");
              dom.appendChild(el2, el3);
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n        ");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n        ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("div");
              dom.setAttribute(el1,"class","row");
              var el2 = dom.createTextNode("\n          ");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("div");
              dom.setAttribute(el2,"class","col-md-12");
              var el3 = dom.createTextNode("\n            ");
              dom.appendChild(el2, el3);
              var el3 = dom.createElement("a");
              dom.setAttribute(el3,"class","btn btn-raised btn-primary btn-block btn-flat");
              var el4 = dom.createTextNode("\n              ");
              dom.appendChild(el3, el4);
              var el4 = dom.createComment("");
              dom.appendChild(el3, el4);
              var el4 = dom.createTextNode("\n            ");
              dom.appendChild(el3, el4);
              dom.appendChild(el2, el3);
              var el3 = dom.createTextNode("\n          ");
              dom.appendChild(el2, el3);
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n        ");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var element0 = dom.childAt(fragment, [3, 1, 1]);
              var morphs = new Array(3);
              morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 1]),1,1);
              morphs[1] = dom.createElementMorph(element0);
              morphs[2] = dom.createMorphAt(element0,1,1);
              return morphs;
            },
            statements: [
              ["inline","em-select",[],["model",["subexpr","@mut",[["get","owner",["loc",[null,[109,30],[109,35]]]]],[],[]],"cid","paymentOption","label",["subexpr","t",["payment-options"],[],["loc",[null,[109,62],[109,83]]]],"class","form-group label-floating","property","paymentOption","content",["subexpr","@mut",[["get","paymentOptions",["loc",[null,[109,151],[109,165]]]]],[],[]],"propertyIsModel",true,"optionLabelPath","name"],["loc",[null,[109,12],[109,211]]]],
              ["element","action",["submit"],[],["loc",[null,[114,69],[114,88]]]],
              ["inline","t",["finish"],[],["loc",[null,[115,14],[115,28]]]]
            ],
            locals: [],
            templates: []
          };
        }());
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.3.1",
            "loc": {
              "source": null,
              "start": {
                "line": 105,
                "column": 4
              },
              "end": {
                "line": 120,
                "column": 4
              }
            },
            "moduleName": "tiny/components/user-form/template.hbs"
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
            ["block","default-box",[],["title",["subexpr","t",["payment-options"],[],["loc",[null,[106,27],[106,48]]]]],0,null,["loc",[null,[106,6],[119,22]]]]
          ],
          locals: [],
          templates: [child0]
        };
      }());
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": [
              "multiple-nodes",
              "wrong-type"
            ]
          },
          "revision": "Ember@2.3.1",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 124,
              "column": 0
            }
          },
          "moduleName": "tiny/components/user-form/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","row");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element13 = dom.childAt(fragment, [1]);
          var morphs = new Array(4);
          morphs[0] = dom.createMorphAt(element13,1,1);
          morphs[1] = dom.createMorphAt(element13,3,3);
          morphs[2] = dom.createMorphAt(element13,5,5);
          morphs[3] = dom.createMorphAt(fragment,3,3,contextualElement);
          return morphs;
        },
        statements: [
          ["block","each",[["get","items",["loc",[null,[3,12],[3,17]]]]],[],0,null,["loc",[null,[3,4],[72,13]]]],
          ["block","if",[["get","showFinalOptions",["loc",[null,[74,10],[74,26]]]]],["class","final-options"],1,null,["loc",[null,[74,4],[103,11]]]],
          ["block","if",[["get","showPaymentOptions",["loc",[null,[105,10],[105,28]]]]],["class","payment-options"],2,null,["loc",[null,[105,4],[120,11]]]],
          ["content","yield",["loc",[null,[123,2],[123,11]]]]
        ],
        locals: [],
        templates: [child0, child1, child2]
      };
    }());
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": [
            "wrong-type"
          ]
        },
        "revision": "Ember@2.3.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 125,
            "column": 0
          }
        },
        "moduleName": "tiny/components/user-form/template.hbs"
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
        ["block","em-form",[],["submitButton",false],0,null,["loc",[null,[1,0],[124,12]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('tiny/components/user-form-input/component', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Component.extend({
    property: null,
    item: null,
    extraClass: null,
    checkEmptiness: function checkEmptiness() {
      var klass = 'form-group label-floating ' + this.extraClass;
      if (Ember['default'].isEmpty(this.item.get(this.property))) {
        klass += ' is-empty';
      }
      this.set('class', klass);
    },
    init: function init() {
      var _this = this;

      this.checkEmptiness();
      this.item.addObserver(this.property, function () {
        _this.checkEmptiness();
      });
      return this._super.apply(this, arguments);
    },
    dashProperty: Ember['default'].computed('property', function () {
      return this.property.dasherize();
    }),
    canShowErrors: Ember['default'].computed('item', function () {
      return this.item.visibleErrors[this.property];
    }),
    'class': Ember['default'].computed('property', function () {
      return 'form-group label-floating ' + this.extraClass;
    })
  });

});
define('tiny/components/user-form-input/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": [
            "wrong-type"
          ]
        },
        "revision": "Ember@2.3.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 5,
            "column": 0
          }
        },
        "moduleName": "tiny/components/user-form-input/template.hbs"
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
        ["inline","em-input",[],["model",["subexpr","@mut",[["get","item",["loc",[null,[1,17],[1,21]]]]],[],[]],"label",["subexpr","t",[["get","dashProperty",["loc",[null,[1,31],[1,43]]]]],[],["loc",[null,[1,28],[1,44]]]],"property",["subexpr","@mut",[["get","property",["loc",[null,[1,54],[1,62]]]]],[],[]],"canShowErrors",["subexpr","get",[["get","item.visibleErrors",["loc",[null,[2,21],[2,39]]]],["get","property",["loc",[null,[2,40],[2,48]]]]],[],["loc",[null,[2,16],[2,49]]]],"cid",["subexpr","concat",["subscription",["get","item.position",["loc",[null,[3,29],[3,42]]]],"-",["get","dashProperty",["loc",[null,[3,47],[3,59]]]]],[],["loc",[null,[3,6],[3,60]]]],"class",["subexpr","@mut",[["get","class",["loc",[null,[4,8],[4,13]]]]],[],[]]],["loc",[null,[1,0],[4,15]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('tiny/controllers/array', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller;

});
define('tiny/controllers/object', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller;

});
define('tiny/custom-fields/tests/modules/custom-fields/admin/custom_fields/edit/controller.jshint', function () {

  'use strict';

  describe('JSHint - modules/custom-fields/admin/custom_fields/edit/controller.js', function () {
    it('should pass jshint', function () {
      expect(true, 'modules/custom-fields/admin/custom_fields/edit/controller.js should pass jshint.').to.be.ok;
    });
  });

});
define('tiny/custom-fields/tests/modules/custom-fields/admin/custom_fields/edit/route.jshint', function () {

  'use strict';

  describe('JSHint - modules/custom-fields/admin/custom_fields/edit/route.js', function () {
    it('should pass jshint', function () {
      expect(true, 'modules/custom-fields/admin/custom_fields/edit/route.js should pass jshint.').to.be.ok;
    });
  });

});
define('tiny/custom-fields/tests/modules/custom-fields/admin/edit/controller.jshint', function () {

  'use strict';

  describe('JSHint - modules/custom-fields/admin/edit/controller.js', function () {
    it('should pass jshint', function () {
      expect(true, 'modules/custom-fields/admin/edit/controller.js should pass jshint.').to.be.ok;
    });
  });

});
define('tiny/custom-fields/tests/modules/custom-fields/admin/edit/route.jshint', function () {

  'use strict';

  describe('JSHint - modules/custom-fields/admin/edit/route.js', function () {
    it('should pass jshint', function () {
      expect(true, 'modules/custom-fields/admin/edit/route.js should pass jshint.').to.be.ok;
    });
  });

});
define('tiny/custom-fields/tests/modules/custom-fields/components/custom-fields-fields/component.jshint', function () {

  'use strict';

  describe('JSHint - modules/custom-fields/components/custom-fields-fields/component.js', function () {
    it('should pass jshint', function () {
      expect(true, 'modules/custom-fields/components/custom-fields-fields/component.js should pass jshint.').to.be.ok;
    });
  });

});
define('tiny/custom-fields/tests/modules/custom-fields/initializers/modify-models.jshint', function () {

  'use strict';

  describe('JSHint - modules/custom-fields/initializers/modify-models.js', function () {
    it('should pass jshint', function () {
      expect(true, 'modules/custom-fields/initializers/modify-models.js should pass jshint.').to.be.ok;
    });
  });

});
define('tiny/custom-fields/tests/modules/custom-fields/instance-initializers/modify-models.jshint', function () {

  'use strict';

  describe('JSHint - modules/custom-fields/instance-initializers/modify-models.js', function () {
    it('should pass jshint', function () {
      expect(true, 'modules/custom-fields/instance-initializers/modify-models.js should pass jshint.').to.be.ok;
    });
  });

});
define('tiny/custom-fields/tests/modules/custom-fields/utils/route-setup.jshint', function () {

  'use strict';

  describe('JSHint - modules/custom-fields/utils/route-setup.js', function () {
    it('should pass jshint', function () {
      expect(true, 'modules/custom-fields/utils/route-setup.js should pass jshint.').to.be.ok;
    });
  });

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
define('tiny/helpers/ember-power-select-build-selection', ['exports', 'ember-power-select/helpers/ember-power-select-build-selection'], function (exports, ember_power_select_build_selection) {

	'use strict';



	exports['default'] = ember_power_select_build_selection['default'];
	exports.emberPowerSelectBuildSelection = ember_power_select_build_selection.emberPowerSelectBuildSelection;

});
define('tiny/helpers/ember-power-select-option-classes', ['exports', 'ember-power-select/helpers/ember-power-select-option-classes'], function (exports, ember_power_select_option_classes) {

	'use strict';



	exports['default'] = ember_power_select_option_classes['default'];
	exports.emberPowerSelectOptionClasses = ember_power_select_option_classes.emberPowerSelectOptionClasses;

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
define('tiny/helpers/moment-calendar', ['exports', 'ember-moment/helpers/moment-calendar'], function (exports, moment_calendar) {

	'use strict';



	exports['default'] = moment_calendar['default'];
	exports.momentCalendar = moment_calendar.momentCalendar;

});
define('tiny/helpers/moment-duration', ['exports', 'ember-moment/helpers/moment-duration'], function (exports, moment_duration) {

	'use strict';



	exports['default'] = moment_duration['default'];

});
define('tiny/helpers/moment-format', ['exports', 'ember', 'tiny/config/environment', 'ember-moment/helpers/moment-format'], function (exports, Ember, config, FormatHelper) {

  'use strict';

  exports['default'] = FormatHelper['default'].extend({
    globalAllowEmpty: !!Ember['default'].get(config['default'], 'moment.allowEmpty')
  });

});
define('tiny/helpers/moment-from-now', ['exports', 'ember', 'tiny/config/environment', 'ember-moment/helpers/moment-from-now'], function (exports, Ember, config, DurationHelper) {

  'use strict';

  exports['default'] = DurationHelper['default'].extend({
    globalAllowEmpty: !!Ember['default'].get(config['default'], 'moment.allowEmpty')
  });

});
define('tiny/helpers/moment-to-now', ['exports', 'ember', 'tiny/config/environment', 'ember-moment/helpers/moment-to-now'], function (exports, Ember, config, ToNowHelper) {

  'use strict';

  exports['default'] = ToNowHelper['default'].extend({
    globalAllowEmpty: !!Ember['default'].get(config['default'], 'moment.allowEmpty')
  });

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
define('tiny/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, pluralize) {

	'use strict';

	exports['default'] = pluralize['default'];

});
define('tiny/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, singularize) {

	'use strict';

	exports['default'] = singularize['default'];

});
define('tiny/helpers/t', ['exports', 'ember-i18n/helper'], function (exports, helper) {

	'use strict';



	exports['default'] = helper['default'];

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
define('tiny/initializers/active-model-adapter', ['exports', 'active-model-adapter', 'active-model-adapter/active-model-serializer'], function (exports, ActiveModelAdapter, ActiveModelSerializer) {

  'use strict';

  exports['default'] = {
    name: 'active-model-adapter',
    initialize: function initialize() {
      var application = arguments[1] || arguments[0];
      application.register('adapter:-active-model', ActiveModelAdapter['default']);
      application.register('serializer:-active-model', ActiveModelSerializer['default']);
    }
  };

});
define('tiny/initializers/add-env', ['exports', 'tiny/config/environment'], function (exports, env) {

  'use strict';

  exports.initialize = initialize;

  function initialize(container, application) {
    console.log(env['default']);
    application.register('env:main', env['default'], { singleton: true, instantiate: false });
    application.inject('component', 'env', 'env:main');
    application.inject('controller', 'env', 'env:main');
  }

  exports['default'] = {
    name: 'add-env',
    initialize: initialize
  };

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
define('tiny/initializers/data-adapter', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: Ember['default'].K
  };

});
define('tiny/initializers/ember-cli-rails-addon-csrf', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var $ = Ember['default'].$;

  exports['default'] = {
    name: 'ember-cli-rails-addon-csrf',

    initialize: function initialize() {
      $.ajaxPrefilter(function (options, originalOptions, xhr) {
        var token = $('meta[name="csrf-token"]').attr('content');
        xhr.setRequestHeader('X-CSRF-Token', token);
      });
    }
  };

});
define('tiny/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, setupContainer) {

  'use strict';

  exports['default'] = {
    name: 'ember-data',
    initialize: setupContainer['default']
  };

});
define('tiny/initializers/ember-i18n', ['exports', 'tiny/instance-initializers/ember-i18n'], function (exports, instanceInitializer) {

  'use strict';

  exports['default'] = {
    name: instanceInitializer['default'].name,

    initialize: function initialize() {
      var application = arguments[1] || arguments[0]; // depending on Ember version
      if (application.instanceInitializer) {
        return;
      }

      instanceInitializer['default'].initialize(application);
    }
  };

});
define('tiny/initializers/ember-simple-auth', ['exports', 'ember', 'tiny/config/environment', 'ember-simple-auth/configuration', 'ember-simple-auth/initializers/setup-session', 'ember-simple-auth/initializers/setup-session-service'], function (exports, Ember, ENV, Configuration, setupSession, setupSessionService) {

  'use strict';

  exports['default'] = {
    name: 'ember-simple-auth',
    initialize: function initialize(registry) {
      var config = ENV['default']['ember-simple-auth'] || {};
      config.baseURL = ENV['default'].baseURL;
      Configuration['default'].load(config);

      setupSession['default'](registry);
      setupSessionService['default'](registry);
    }
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
define('tiny/initializers/injectStore', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: Ember['default'].K
  };

});
define('tiny/initializers/liquid-fire', ['exports', 'liquid-fire/router-dsl-ext', 'liquid-fire/ember-internals'], function (exports, __dep0__, ember_internals) {

  'use strict';

  // This initializer exists only to make sure that the following
  // imports happen before the app boots.
  ember_internals.registerKeywords();

  exports['default'] = {
    name: 'liquid-fire',
    initialize: function initialize() {}
  };

});
define('tiny/initializers/modify-models', ['exports', 'custom-fields/initializers/modify-models'], function (exports, modify_models) {

	'use strict';



	exports['default'] = modify_models['default'];
	exports.initialize = modify_models.initialize;

});
define('tiny/initializers/store', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: Ember['default'].K
  };

});
define('tiny/initializers/transforms', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: Ember['default'].K
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
define('tiny/instance-initializers/ember-data', ['exports', 'ember-data/-private/instance-initializers/initialize-store-service'], function (exports, initializeStoreService) {

  'use strict';

  exports['default'] = {
    name: "ember-data",
    initialize: initializeStoreService['default']
  };

});
define('tiny/instance-initializers/ember-i18n', ['exports', 'ember', 'ember-i18n/stream', 'ember-i18n/legacy-helper', 'tiny/config/environment'], function (exports, Ember, Stream, legacyHelper, ENV) {

  'use strict';

  exports['default'] = {
    name: 'ember-i18n',

    initialize: function initialize(appOrAppInstance) {
      if (legacyHelper['default'] != null) {
        (function () {
          // Used for Ember < 1.13
          var i18n = appOrAppInstance.container.lookup('service:i18n');

          i18n.localeStream = new Stream['default'](function () {
            return i18n.get('locale');
          });

          Ember['default'].addObserver(i18n, 'locale', i18n, function () {
            this.localeStream.value(); // force the stream to be dirty
            this.localeStream.notify();
          });

          Ember['default'].HTMLBars._registerHelper('t', legacyHelper['default']);
        })();
      }
    }
  };

});
define('tiny/instance-initializers/ember-simple-auth', ['exports', 'ember-simple-auth/instance-initializers/setup-session-restoration'], function (exports, setupSessionRestoration) {

  'use strict';

  exports['default'] = {
    name: 'ember-simple-auth',
    initialize: function initialize(instance) {
      setupSessionRestoration['default'](instance);
    }
  };

});
define('tiny/locales/fr/config', ['exports'], function (exports) {

  'use strict';

  // Ember-I18n includes configuration for common locales. Most users
  // can safely delete this file. Use it if you need to override behavior
  // for a locale or define behavior for a locale that Ember-I18n
  // doesn't know about.
  exports['default'] = {
    // rtl: [true|FALSE],
    //
    // pluralForm: function(count) {
    //   if (count === 0) { return 'zero'; }
    //   if (count === 1) { return 'one'; }
    //   if (count === 2) { return 'two'; }
    //   if (count < 5) { return 'few'; }
    //   if (count >= 5) { return 'many'; }
    //   return 'other';
    // }
  };

});
define('tiny/locales/fr/translations', ['exports'], function (exports) {

  'use strict';

  exports['default'] = {
    "who-do-you-subscribe": "Qui inscrivez vous?",
    "subscribe-myself": "Je m'inscrit",
    "subscribe-someone-else": "J'inscrit quelqu'un",
    "information-principal-contact": "Vos informations",
    "first-name": "Prénom",
    "last-name": "Nom",
    "fullname": "Nom",
    "birth-date": "Date de naissance",
    "phone": "Téléphone",
    "email": "Courriel",
    "comments": "Commentaires",
    "member": "Information du membre {{fullname}}",
    "course": "Cours",
    "contact": "Contact {{fullname}}",
    "next-step": "Prochaine étape",
    "add-contact": "Ajouter un contact",
    "add-subscription": "Ajouter une inscription",
    "finish": "Terminer",
    "payment-options": "Options de paiement"
  };

});
define('tiny/login/route', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({
    session: Ember['default'].inject.service('session'),
    model: function model() {
      return { errors: [] };
    },
    actions: {
      submit: function submit() {
        var _this = this;

        var session = this.get('session');
        var model = this.controller.model;
        session.authenticate('authenticator:api', model.email, model.password).then(function (response) {
          _this.transitionTo('admin');
        }, function (response) {
          model.errors.pushObject(response.errors);
        });
      }
    }
  });

});
define('tiny/login/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        var child0 = (function() {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.3.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 11,
                  "column": 8
                },
                "end": {
                  "line": 13,
                  "column": 8
                }
              },
              "moduleName": "tiny/login/template.hbs"
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
              ["content","error",["loc",[null,[12,10],[12,19]]]]
            ],
            locals: ["error"],
            templates: []
          };
        }());
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.3.1",
            "loc": {
              "source": null,
              "start": {
                "line": 10,
                "column": 6
              },
              "end": {
                "line": 14,
                "column": 6
              }
            },
            "moduleName": "tiny/login/template.hbs"
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
            ["block","each",[["get","model.errors",["loc",[null,[11,16],[11,28]]]]],[],0,null,["loc",[null,[11,8],[13,17]]]]
          ],
          locals: [],
          templates: [child0]
        };
      }());
      var child1 = (function() {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.3.1",
            "loc": {
              "source": null,
              "start": {
                "line": 19,
                "column": 10
              },
              "end": {
                "line": 19,
                "column": 57
              }
            },
            "moduleName": "tiny/login/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("Password forgotten");
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
          "fragmentReason": false,
          "revision": "Ember@2.3.1",
          "loc": {
            "source": null,
            "start": {
              "line": 9,
              "column": 4
            },
            "end": {
              "line": 25,
              "column": 4
            }
          },
          "moduleName": "tiny/login/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","row");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2,"class","col-xs-8");
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2,"class","col-xs-4 pull-right");
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("button");
          dom.setAttribute(el3,"type","submit");
          dom.setAttribute(el3,"class","btn btn-primary btn-block btn-flat");
          var el4 = dom.createTextNode("Sign In");
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
          var morphs = new Array(4);
          morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
          morphs[1] = dom.createMorphAt(fragment,2,2,contextualElement);
          morphs[2] = dom.createMorphAt(fragment,4,4,contextualElement);
          morphs[3] = dom.createMorphAt(dom.childAt(fragment, [6, 1]),1,1);
          dom.insertBoundary(fragment, 0);
          return morphs;
        },
        statements: [
          ["block","if",[["get","model.errors.length",["loc",[null,[10,12],[10,31]]]]],[],0,null,["loc",[null,[10,6],[14,13]]]],
          ["inline","em-input",[],["label","Email","cid","email","property","email"],["loc",[null,[15,6],[15,61]]]],
          ["inline","em-input",[],["model",["subexpr","@mut",[["get","model",["loc",[null,[16,23],[16,28]]]]],[],[]],"label","Password","cid","password","property","password","type","password"],["loc",[null,[16,6],[16,98]]]],
          ["block","link-to",["reset_password"],[],1,null,["loc",[null,[19,10],[19,69]]]]
        ],
        locals: [],
        templates: [child0, child1]
      };
    }());
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.3.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 31,
            "column": 0
          }
        },
        "moduleName": "tiny/login/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","login-box");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","login-logo");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("b");
        var el4 = dom.createTextNode("Admin");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("LTE\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" /.login-logo ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","login-box-body");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        dom.setAttribute(el3,"class","login-box-msg");
        var el4 = dom.createTextNode("Sign in to start your session");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" /.login-box-body ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 5]),3,3);
        return morphs;
      },
      statements: [
        ["block","em-form",[],["model",["subexpr","@mut",[["get","model",["loc",[null,[9,21],[9,26]]]]],[],[]],"submitButton",false],0,null,["loc",[null,[9,4],[25,16]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('tiny/mixins/visible-errors', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Mixin.create({
    init: function init() {
      this._super();
      this.set('visibleErrors', {});
    },
    showErrors: function showErrors() {
      this.changeErrorsVisibility(true);
    },
    hideErrors: function hideErrors() {
      this.changeErrorsVisibility(false);
    },
    changeErrorsVisibility: function changeErrorsVisibility(visible) {
      var _this = this;

      this.eachAttribute(function (key) {
        _this.set('visibleErrors.' + key, visible);
      });
      this.eachRelationship(function (key) {
        _this.set('visibleErrors.' + key, visible);
      });
    }
  });

});
define('tiny/models/admin_user', ['exports', 'ember-data', 'ember-validations', 'tiny/mixins/visible-errors'], function (exports, DS, EmberValidations, VisibleErrors) {

  'use strict';

  exports['default'] = DS['default'].Model.extend(EmberValidations['default'], VisibleErrors['default'], {
    email: DS['default'].attr('string', { defaultValue: '' }),
    password: DS['default'].attr('string'),
    passwordConfirmation: DS['default'].attr('string'),
    validations: {
      'email': { presence: true }
    }
  });

});
define('tiny/models/contact', ['exports', 'ember-data', 'ember-validations', 'tiny/mixins/visible-errors'], function (exports, DS, EmberValidations, VisibleErrors) {

  'use strict';

  exports['default'] = DS['default'].Model.extend(EmberValidations['default'], VisibleErrors['default'], {
    fullname: DS['default'].attr('string', { defaultValue: '' }),
    phone: DS['default'].attr('string', { defaultValue: '' }),
    email: DS['default'].attr('string', { defaultValue: '' }),
    subscription: DS['default'].belongsTo('subscription'),
    _destroy: DS['default'].attr('boolean', { defaultValue: false }),
    validations: {
      fullname: { presence: true },
      phone: { subscriptionPhone: true },
      email: { subscriptionEmail: true }
    }
  });

});
define('tiny/models/course', ['exports', 'ember-data', 'ember-validations', 'tiny/mixins/visible-errors'], function (exports, DS, EmberValidations, VisibleErrors) {

  'use strict';

  exports['default'] = DS['default'].Model.extend(EmberValidations['default'], VisibleErrors['default'], {
    name: DS['default'].attr(),
    price: DS['default'].attr('number'),
    nbPlaces: DS['default'].attr('number'),
    subscriptions: DS['default'].hasMany('subscription'),
    validations: {
      'nbPlaces': { presence: true },
      'price': { presence: true },
      'name': { presence: true }
    }
  });

});
define('tiny/models/custom-field-data', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = DS.Model.extend({});

});
define('tiny/models/custom-field', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = DS.Model.extend({
    type: DS.attr('string', { defaultValue: 'input' }),
    label: DS.attr('string', { defaultValue: '' }),
    options: DS.attr('string', { defaultValue: '' }),
    _destroy: DS.attr('boolean', { defaultValue: false }),
    content: Ember['default'].computed('options', function () {
      var options = this.get('options');
      if (options !== null) {
        return options.split(',').map(function (option) {
          return { value: option };
        });
      }
    }),
    property: Ember['default'].computed('label', function () {
      return this.get('label').dasherize();
    })
  });

});
define('tiny/models/newsletter', ['exports', 'ember-data', 'ember-validations', 'tiny/mixins/visible-errors'], function (exports, DS, EmberValidations, VisibleErrors) {

  'use strict';

  exports['default'] = DS['default'].Model.extend(EmberValidations['default'], VisibleErrors['default'], {
    title: DS['default'].attr('string', { defaultValue: '' }),
    body: DS['default'].attr('string', { defaultValue: '' }),
    hasMany: DS['default'].belongsTo('course'),
    validations: {
      title: { presence: true },
      body: { presence: true }
    }
  });

});
define('tiny/models/payment-option', ['exports', 'ember-data', 'ember-validations', 'tiny/mixins/visible-errors'], function (exports, DS, EmberValidations, VisibleErrors) {

  'use strict';

  exports['default'] = DS['default'].Model.extend(EmberValidations['default'], VisibleErrors['default'], {
    name: DS['default'].attr('string'),
    recurrencies: DS['default'].attr('number'),
    validations: {
      'name': { presence: true },
      'recurrencies': { presence: true }
    }
  });

});
define('tiny/models/subscription', ['exports', 'ember-data', 'ember-validations', 'ember-cli-copyable', 'tiny/mixins/visible-errors', 'moment'], function (exports, DS, ember_validations, Copyable, VisibleErrors, moment) {

  'use strict';

  exports['default'] = DS['default'].Model.extend(ember_validations['default'], VisibleErrors['default'], Copyable['default'], {
    courseId: DS['default'].attr(),
    course: DS['default'].belongsTo('course'),
    paymentOption: DS['default'].belongsTo('paymentOption'),
    email: DS['default'].attr('string'),
    birthDate: DS['default'].attr('date'),
    firstName: DS['default'].attr('string', { defaultValue: '' }),
    lastName: DS['default'].attr('string', { defaultValue: '' }),
    comments: DS['default'].attr('string'),
    phone: DS['default'].attr('string'),
    paid: DS['default'].attr('boolean', { defaultValue: false }),
    contacts: DS['default'].hasMany('contact'),
    fullname: Ember.computed('firstName', 'lastName', function () {
      return this.get('firstName') + ' ' + this.get('lastName');
    }),
    validations: {
      'firstName': { presence: true },
      'lastName': { presence: true },
      'birthDate': { presence: true },
      'email': { subscriptionEmail: true },
      'phone': { subscriptionPhone: true },
      'course': ember_validations.validator(function () {
        if (Ember.isBlank(this.get('course.id'))) {
          return 'Vous devez choisir un cours';
        } else if (this.get('course.subscriptions.length') > this.get('course.nbPlaces')) {
          return 'Plus de places disponibles';
        }
      })
    },
    isAdult: Ember.computed('birthDate', function () {
      return moment['default'](this.get('birthDate')) < moment['default']().subtract(18, 'years');
    }),
    saveWithContacts: function saveWithContacts(callback) {
      var _this = this;

      this.get('contacts').then(function (contacts) {
        var contacts_json = [];
        contacts.forEach(function (contact) {
          contacts_json.push(contact.getProperties('id', 'fullname', 'phone', 'email', '_destroy'));
        });

        var data = {
          subscription: {
            first_name: _this.get('firstName'),
            last_name: _this.get('lastName'),
            phone: _this.get('phone'),
            comments: _this.get('comments'),
            email: _this.get('email'),
            paid: _this.get('paid'),
            custom_data: _this.get('customData'),
            contacts_attributes: contacts_json,
            course_id: _this.get('course.id'),
            payment_option_id: _this.get('paymentOption.id')
          }
        };

        var stripeToken = _this.get('stripeToken');
        if (stripeToken !== null) {
          data.subscription.stripe_token = stripeToken;
        }

        var url;
        var type;

        if (_this.id) {
          url = '' + Tiny.API_HOST + Tiny.API_NAMESPACE + '/subscriptions/' + _this.id;
          type = 'PATCH';
        } else {
          url = '' + Tiny.API_HOST + Tiny.API_NAMESPACE + '/subscriptions/';
          type = 'POST';
        }

        Ember.$.ajax({
          url: url,
          type: type,
          data: data
        }).then(function (data) {
          _this.set('contacts', []);
          if (_this.id === null) {
            _this.set('id', data.subscription.id);
          }
          _this.reload();
          callback(_this);
        }, function (data) {
          var errors = data.responseJSON.errors;
          _this.get('errors').add('course', errors.course);
          _this.get('contacts').forEach(function (contact, index) {
            var error = errors.contacts[index];
            contact.get('errors').add('email', error.email);
            contact.get('errors').add('fullname', error.fullname);
            contact.get('errors').add('phone', error.phone);
          });
        });
      });
    }
  });

});
define('tiny/models/user', ['exports', 'ember-data', 'ember-validations', 'tiny/mixins/visible-errors'], function (exports, DS, EmberValidations, VisibleErrors) {

  'use strict';

  exports['default'] = DS['default'].Model.extend(EmberValidations['default'], VisibleErrors['default'], {
    email: DS['default'].attr('string', { defaultValue: '' }),
    subscriptions: DS['default'].hasMany('subscription'),
    contacts: DS['default'].hasMany('contact'),
    validations: {
      email: { email: true }
    }
  });

});
define('tiny/overrides/subscription', ['exports', 'tiny/models/subscription'], function (exports, Subscription) {

  'use strict';

  exports['default'] = Subscription['default'].reopen({
    customData: Ember.computed(function () {
      return {};
    })
  });

});
define('tiny/reset_password/route', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({
    model: function model() {
      return Ember['default'].Object.create();
    },
    actions: {
      submit: function submit() {
        var _this = this;

        var model = this.controller.model;
        Ember['default'].$.ajax({
          url: '' + Tiny.API_HOST + Tiny.API_NAMESPACE + '/passwords/',
          type: 'POST',
          data: {
            password: {
              email: model.get('email') || ''
            }
          }
        }).then(function (data) {
          _this.transitionTo('login');
        }, function (response) {
          model.set('errors', [response.responseJSON.errors]);
        });
      }
    }
  });

});
define('tiny/reset_password/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        var child0 = (function() {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.3.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 11,
                  "column": 8
                },
                "end": {
                  "line": 13,
                  "column": 8
                }
              },
              "moduleName": "tiny/reset_password/template.hbs"
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
              ["content","error",["loc",[null,[12,10],[12,19]]]]
            ],
            locals: ["error"],
            templates: []
          };
        }());
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.3.1",
            "loc": {
              "source": null,
              "start": {
                "line": 10,
                "column": 6
              },
              "end": {
                "line": 14,
                "column": 6
              }
            },
            "moduleName": "tiny/reset_password/template.hbs"
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
            ["block","each",[["get","model.errors",["loc",[null,[11,16],[11,28]]]]],[],0,null,["loc",[null,[11,8],[13,17]]]]
          ],
          locals: [],
          templates: [child0]
        };
      }());
      var child1 = (function() {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.3.1",
            "loc": {
              "source": null,
              "start": {
                "line": 18,
                "column": 10
              },
              "end": {
                "line": 18,
                "column": 37
              }
            },
            "moduleName": "tiny/reset_password/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("Sign in");
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
          "fragmentReason": false,
          "revision": "Ember@2.3.1",
          "loc": {
            "source": null,
            "start": {
              "line": 9,
              "column": 4
            },
            "end": {
              "line": 24,
              "column": 4
            }
          },
          "moduleName": "tiny/reset_password/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","row");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2,"class","col-xs-6");
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2,"class","col-xs-6 pull-right");
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("button");
          dom.setAttribute(el3,"type","submit");
          dom.setAttribute(el3,"class","btn btn-primary btn-block btn-flat");
          var el4 = dom.createTextNode("Reset Password");
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
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
          morphs[1] = dom.createMorphAt(fragment,2,2,contextualElement);
          morphs[2] = dom.createMorphAt(dom.childAt(fragment, [4, 1]),1,1);
          dom.insertBoundary(fragment, 0);
          return morphs;
        },
        statements: [
          ["block","if",[["get","model.errors.length",["loc",[null,[10,12],[10,31]]]]],[],0,null,["loc",[null,[10,6],[14,13]]]],
          ["inline","em-input",[],["model",["subexpr","@mut",[["get","model",["loc",[null,[15,23],[15,28]]]]],[],[]],"label","Email","property","email"],["loc",[null,[15,6],[15,61]]]],
          ["block","link-to",["login"],[],1,null,["loc",[null,[18,10],[18,49]]]]
        ],
        locals: [],
        templates: [child0, child1]
      };
    }());
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.3.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 30,
            "column": 0
          }
        },
        "moduleName": "tiny/reset_password/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","login-box");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","login-logo");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("b");
        var el4 = dom.createTextNode("Admin");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("LTE\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" /.login-logo ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","login-box-body");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("p");
        dom.setAttribute(el3,"class","login-box-msg");
        var el4 = dom.createTextNode("Sign in to start your session");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" /.login-box-body ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 5]),3,3);
        return morphs;
      },
      statements: [
        ["block","em-form",[],["model",["subexpr","@mut",[["get","model",["loc",[null,[9,21],[9,26]]]]],[],[]],"submitButton",false],0,null,["loc",[null,[9,4],[24,16]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('tiny/router', ['exports', 'ember', 'tiny/config/environment', 'custom-fields/utils/route-setup'], function (exports, Ember, config, setupCustomFieldsRoutes) {

  'use strict';

  var Router = Ember['default'].Router.extend({
    location: config['default'].locationType
  });

  Router.map(function () {
    this.route('admin', function () {
      setupCustomFieldsRoutes['default'](this);
      this.route('dashboard', { path: '/' });
      this.route('admin_users', function () {
        this.route('new');
        this.route('edit', { path: '/:id/edit' });
      });
      this.route('course', { path: '/course/:id/' });
      this.route('newsletter');
      this.route('courses', function () {
        this.route('new');
        this.route('edit', { path: '/:id/edit' });
      });
      this.route('subscription', { path: '/subscription/:id/' });
      this.route('subscriptions', function () {
        this.route('new');
        this.route('edit', { path: '/:id/edit' });
      });
    });
    this.route('subscriptions', { path: '/' }, function () {
      this.route('new', { path: '/' });
      this.route('payment', { path: '/:id/payment' });
      this.route('success', {});
    });
    this.route('admin_users', { path: '/admin_users/:id' }, function () {
      this.route('edit_password', { path: '/edit_password/:token' });
    });
    this.route('registration', function () {
      this.route('login', {});
      this.route('reset_password', function () {
        this.route('new');
      });
    });
    this.route('reset_password', {});
    this.route('login', {});
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
define('tiny/routes/application', ['exports', 'ember', 'ember-simple-auth/mixins/application-route-mixin'], function (exports, Ember, ApplicationRouteMixin) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend(ApplicationRouteMixin['default']);

});
define('tiny/serializers/application', ['exports', 'active-model-adapter'], function (exports, active_model_adapter) {

	'use strict';

	exports['default'] = active_model_adapter.ActiveModelSerializer.extend();

});
define('tiny/services/create-subscriptions', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Service.extend({
    stripeToken: null,
    paymentOption: null,
    user: null,
    contacts: [],
    subscriptions: [],
    toJSON: function toJSON() {
      var _this = this;

      var subscriptionsAttributes = this.get('subscriptions').map(function (subscription) {
        var subscriptionJson = subscription.serialize();
        subscriptionJson.contacts_attributes = _this.get('contacts').map(function (contact) {
          return contact.serialize();
        });
        subscriptionJson.course_id = subscription.get('course.id');
        return subscriptionJson;
      });

      var userJson = this.get('user').serialize();
      userJson.subscriptions_attributes = subscriptionsAttributes;
      return userJson;
    },
    save: function save(callback) {
      var url = '' + Tiny.API_HOST + Tiny.API_NAMESPACE + '/users/';
      var type = 'POST';
      Ember['default'].$.ajax({
        url: url,
        type: 'POST',
        data: {
          user: this.toJSON(),
          stripe_token: this.get('stripeToken'),
          payment_option: this.get('paymentOption')
        },
        success: callback
      });
    }
  });

});
define('tiny/services/i18n', ['exports', 'ember-i18n/services/i18n'], function (exports, i18n) {

	'use strict';



	exports['default'] = i18n['default'];

});
define('tiny/services/liquid-fire-modals', ['exports', 'liquid-fire/modals'], function (exports, Modals) {

	'use strict';

	exports['default'] = Modals['default'];

});
define('tiny/services/liquid-fire-transitions', ['exports', 'liquid-fire/transition-map'], function (exports, TransitionMap) {

	'use strict';

	exports['default'] = TransitionMap['default'];

});
define('tiny/services/moment', ['exports', 'ember', 'tiny/config/environment', 'ember-moment/services/moment'], function (exports, Ember, config, MomentService) {

  'use strict';

  exports['default'] = MomentService['default'].extend({
    defaultFormat: Ember['default'].get(config['default'], 'moment.outputFormat')
  });

});
define('tiny/services/session', ['exports', 'ember-simple-auth/services/session'], function (exports, SessionService) {

	'use strict';

	exports['default'] = SessionService['default'];

});
define('tiny/services/validations', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var set = Ember['default'].set;

  exports['default'] = Ember['default'].Service.extend({
    init: function init() {
      set(this, 'cache', {});
    }
  });

});
define('tiny/session-stores/application', ['exports', 'ember-simple-auth/session-stores/adaptive'], function (exports, Adaptive) {

	'use strict';

	exports['default'] = Adaptive['default'].extend();

});
define('tiny/subscriptions/new/route', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({
    createSubscriptions: Ember['default'].inject.service(),
    setupController: function setupController(controller, model) {
      this._super(controller, model);

      var subscription = this.get('store').createRecord('subscription');
      subscription.set('objectType', 'subscription');
      subscription.set('position', 0);
      subscription.set('hasToChooseCreator', true);
      this.controller.set('items', [subscription]);
      this.controller.set('subscriptions', [subscription]);
      this.controller.set('contacts', []);
    },
    actions: {
      submit: function submit(subscriptions, contacts, owner) {
        var _this = this;

        var prices = subscriptions.mapBy('course.price');
        var price = prices.reduce(function (a, b) {
          return a + b;
        }, 0);
        var checkout = StripeCheckout.configure({
          key: "pk_test_sQlqVzfDGPAeGYhYcxWKga2D",
          locale: 'fr'
        }).open({
          email: owner.get('email'),
          amount: price,
          token: function token(result) {
            var user = _this.store.createRecord('user', { email: owner.get('email') });
            user.set('subscriptions', subscriptions);
            user.set('contacts', contacts);
            var createSubscriptions = _this.get('createSubscriptions');
            createSubscriptions.set('user', user);
            createSubscriptions.set('subscriptions', subscriptions);
            createSubscriptions.set('contacts', contacts);
            createSubscriptions.set('stripeToken', result.id);
            createSubscriptions.set('paymentOption', owner.get('paymentOption.id'));
            createSubscriptions.save(function () {
              _this.transitionTo('subscriptions.success');
            });
          }
        });
      },
      didTransition: function didTransition() {
        Ember['default'].run.scheduleOnce('afterRender', this, function () {
          $.material.init({ validate: false });
        });
      }
    }
  });

});
define('tiny/subscriptions/new/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": [
            "multiple-nodes",
            "wrong-type"
          ]
        },
        "revision": "Ember@2.3.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 7,
            "column": 0
          }
        },
        "moduleName": "tiny/subscriptions/new/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","row");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","col-md-12 well");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h1");
        var el4 = dom.createTextNode("Club de Judo Torii");
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
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,2,2,contextualElement);
        return morphs;
      },
      statements: [
        ["inline","user-form",[],["items",["subexpr","@mut",[["get","items",["loc",[null,[6,18],[6,23]]]]],[],[]],"subscriptions",["subexpr","@mut",[["get","subscriptions",["loc",[null,[6,38],[6,51]]]]],[],[]],"contacts",["subexpr","@mut",[["get","contacts",["loc",[null,[6,61],[6,69]]]]],[],[]],"submit","submit"],["loc",[null,[6,0],[6,87]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('tiny/subscriptions/success/route', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({});

});
define('tiny/subscriptions/success/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.3.1",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 0
            },
            "end": {
              "line": 2,
              "column": 56
            }
          },
          "moduleName": "tiny/subscriptions/success/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Add another subscription");
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
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": [
            "wrong-type",
            "multiple-nodes"
          ]
        },
        "revision": "Ember@2.3.1",
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
        "moduleName": "tiny/subscriptions/success/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("Success!\n");
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
        ["block","link-to",["subscriptions.new"],[],0,null,["loc",[null,[2,0],[2,68]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('tiny/subscriptions/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.3.1",
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
        "moduleName": "tiny/subscriptions/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","container");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]),1,1);
        return morphs;
      },
      statements: [
        ["content","outlet",["loc",[null,[2,2],[2,12]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('tiny/templates/application', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": [
            "wrong-type"
          ]
        },
        "revision": "Ember@2.3.1",
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
    var child0 = (function() {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.3.1",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 2
            },
            "end": {
              "line": 6,
              "column": 2
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
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","box-header");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("h3");
          dom.setAttribute(el2,"class","box-title");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 1]),0,0);
          return morphs;
        },
        statements: [
          ["content","title",["loc",[null,[4,28],[4,37]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": [
            "multiple-nodes",
            "wrong-type"
          ]
        },
        "revision": "Ember@2.3.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 20,
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
        dom.setAttribute(el1,"class","box well bs-component");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" /.box-header ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","box-body");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","dt-bootstrap");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","row");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","col-md-12");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
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
        var el2 = dom.createTextNode("\n  ");
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
        morphs[0] = dom.createMorphAt(element0,1,1);
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [5, 1, 1, 1]),1,1);
        return morphs;
      },
      statements: [
        ["block","if",[["subexpr","not-eq",[["get","title",["loc",[null,[2,16],[2,21]]]],""],[],["loc",[null,[2,8],[2,25]]]]],[],0,null,["loc",[null,[2,2],[6,9]]]],
        ["content","yield",["loc",[null,[12,10],[12,19]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('tiny/templates/components/liquid-bind', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        var child0 = (function() {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.3.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 5,
                  "column": 4
                },
                "end": {
                  "line": 7,
                  "column": 4
                }
              },
              "moduleName": "tiny/templates/components/liquid-bind.hbs"
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
              ["inline","yield",[["get","version",["loc",[null,[6,15],[6,22]]]]],[],["loc",[null,[6,6],[6,26]]]]
            ],
            locals: [],
            templates: []
          };
        }());
        var child1 = (function() {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.3.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 7,
                  "column": 4
                },
                "end": {
                  "line": 9,
                  "column": 4
                }
              },
              "moduleName": "tiny/templates/components/liquid-bind.hbs"
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
              ["content","version",["loc",[null,[8,6],[8,20]]]]
            ],
            locals: [],
            templates: []
          };
        }());
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.3.1",
            "loc": {
              "source": null,
              "start": {
                "line": 2,
                "column": 2
              },
              "end": {
                "line": 11,
                "column": 0
              }
            },
            "moduleName": "tiny/templates/components/liquid-bind.hbs"
          },
          isEmpty: false,
          arity: 1,
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
            ["block","if",[["get","hasBlock",["loc",[null,[5,11],[5,19]]]]],[],0,1,["loc",[null,[5,4],[9,12]]]]
          ],
          locals: ["version"],
          templates: [child0, child1]
        };
      }());
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": [
              "wrong-type"
            ]
          },
          "revision": "Ember@2.3.1",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 12,
              "column": 0
            }
          },
          "moduleName": "tiny/templates/components/liquid-bind.hbs"
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
          ["block","liquid-versions",[],["value",["subexpr","@mut",[["get","attrs.value",["loc",[null,[2,28],[2,39]]]]],[],[]],"use",["subexpr","@mut",[["get","use",["loc",[null,[2,44],[2,47]]]]],[],[]],"outletName",["subexpr","@mut",[["get","attrs.outletName",["loc",[null,[3,32],[3,48]]]]],[],[]],"name","liquid-bind","renderWhenFalse",true,"class",["subexpr","@mut",[["get","class",["loc",[null,[4,67],[4,72]]]]],[],[]]],0,null,["loc",[null,[2,2],[11,22]]]]
        ],
        locals: [],
        templates: [child0]
      };
    }());
    var child1 = (function() {
      var child0 = (function() {
        var child0 = (function() {
          var child0 = (function() {
            return {
              meta: {
                "fragmentReason": false,
                "revision": "Ember@2.3.1",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 25,
                    "column": 6
                  },
                  "end": {
                    "line": 27,
                    "column": 6
                  }
                },
                "moduleName": "tiny/templates/components/liquid-bind.hbs"
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
                ["inline","yield",[["get","version",["loc",[null,[26,17],[26,24]]]]],[],["loc",[null,[26,8],[26,28]]]]
              ],
              locals: [],
              templates: []
            };
          }());
          var child1 = (function() {
            return {
              meta: {
                "fragmentReason": false,
                "revision": "Ember@2.3.1",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 27,
                    "column": 6
                  },
                  "end": {
                    "line": 29,
                    "column": 6
                  }
                },
                "moduleName": "tiny/templates/components/liquid-bind.hbs"
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
                ["content","version",["loc",[null,[28,8],[28,22]]]]
              ],
              locals: [],
              templates: []
            };
          }());
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.3.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 21,
                  "column": 4
                },
                "end": {
                  "line": 31,
                  "column": 4
                }
              },
              "moduleName": "tiny/templates/components/liquid-bind.hbs"
            },
            isEmpty: false,
            arity: 1,
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
              ["block","if",[["get","hasBlock",["loc",[null,[25,13],[25,21]]]]],[],0,1,["loc",[null,[25,6],[29,14]]]]
            ],
            locals: ["version"],
            templates: [child0, child1]
          };
        }());
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.3.1",
            "loc": {
              "source": null,
              "start": {
                "line": 13,
                "column": 2
              },
              "end": {
                "line": 32,
                "column": 2
              }
            },
            "moduleName": "tiny/templates/components/liquid-bind.hbs"
          },
          isEmpty: false,
          arity: 1,
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
            ["block","liquid-versions",[],["value",["subexpr","@mut",[["get","attrs.value",["loc",[null,[21,30],[21,41]]]]],[],[]],"notify",["subexpr","@mut",[["get","container",["loc",[null,[21,49],[21,58]]]]],[],[]],"use",["subexpr","@mut",[["get","use",["loc",[null,[21,63],[21,66]]]]],[],[]],"outletName",["subexpr","@mut",[["get","attrs.outletName",["loc",[null,[22,34],[22,50]]]]],[],[]],"name","liquid-bind","renderWhenFalse",true],0,null,["loc",[null,[21,4],[31,26]]]]
          ],
          locals: ["container"],
          templates: [child0]
        };
      }());
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.3.1",
          "loc": {
            "source": null,
            "start": {
              "line": 12,
              "column": 0
            },
            "end": {
              "line": 33,
              "column": 0
            }
          },
          "moduleName": "tiny/templates/components/liquid-bind.hbs"
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
          ["block","liquid-container",[],["id",["subexpr","@mut",[["get","id",["loc",[null,[14,9],[14,11]]]]],[],[]],"class",["subexpr","@mut",[["get","class",["loc",[null,[15,12],[15,17]]]]],[],[]],"growDuration",["subexpr","@mut",[["get","growDuration",["loc",[null,[16,19],[16,31]]]]],[],[]],"growPixelsPerSecond",["subexpr","@mut",[["get","growPixelsPerSecond",["loc",[null,[17,26],[17,45]]]]],[],[]],"growEasing",["subexpr","@mut",[["get","growEasing",["loc",[null,[18,17],[18,27]]]]],[],[]],"enableGrowth",["subexpr","@mut",[["get","enableGrowth",["loc",[null,[19,19],[19,31]]]]],[],[]]],0,null,["loc",[null,[13,2],[32,25]]]]
        ],
        locals: [],
        templates: [child0]
      };
    }());
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": [
            "wrong-type"
          ]
        },
        "revision": "Ember@2.3.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 34,
            "column": 0
          }
        },
        "moduleName": "tiny/templates/components/liquid-bind.hbs"
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
        ["block","if",[["get","containerless",["loc",[null,[1,6],[1,19]]]]],[],0,1,["loc",[null,[1,0],[33,7]]]]
      ],
      locals: [],
      templates: [child0, child1]
    };
  }()));

});
define('tiny/templates/components/liquid-container', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": [
            "wrong-type"
          ]
        },
        "revision": "Ember@2.3.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 14
          }
        },
        "moduleName": "tiny/templates/components/liquid-container.hbs"
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
        ["inline","yield",[["get","this",["loc",[null,[1,8],[1,12]]]]],[],["loc",[null,[1,0],[1,14]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('tiny/templates/components/liquid-if', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        var child0 = (function() {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.3.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 4,
                  "column": 4
                },
                "end": {
                  "line": 6,
                  "column": 4
                }
              },
              "moduleName": "tiny/templates/components/liquid-if.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("      ");
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
              ["content","yield",["loc",[null,[5,6],[5,15]]]]
            ],
            locals: [],
            templates: []
          };
        }());
        var child1 = (function() {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.3.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 6,
                  "column": 4
                },
                "end": {
                  "line": 8,
                  "column": 4
                }
              },
              "moduleName": "tiny/templates/components/liquid-if.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("      ");
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
              ["inline","yield",[],["to","inverse"],["loc",[null,[7,6],[7,28]]]]
            ],
            locals: [],
            templates: []
          };
        }());
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.3.1",
            "loc": {
              "source": null,
              "start": {
                "line": 2,
                "column": 2
              },
              "end": {
                "line": 9,
                "column": 2
              }
            },
            "moduleName": "tiny/templates/components/liquid-if.hbs"
          },
          isEmpty: false,
          arity: 1,
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
            ["block","if",[["get","valueVersion",["loc",[null,[4,10],[4,22]]]]],[],0,1,["loc",[null,[4,4],[8,11]]]]
          ],
          locals: ["valueVersion"],
          templates: [child0, child1]
        };
      }());
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": [
              "wrong-type"
            ]
          },
          "revision": "Ember@2.3.1",
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
          "moduleName": "tiny/templates/components/liquid-if.hbs"
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
          ["block","liquid-versions",[],["value",["subexpr","@mut",[["get","showFirstBlock",["loc",[null,[2,27],[2,41]]]]],[],[]],"name",["subexpr","@mut",[["get","helperName",["loc",[null,[2,47],[2,57]]]]],[],[]],"use",["subexpr","@mut",[["get","use",["loc",[null,[3,27],[3,30]]]]],[],[]],"renderWhenFalse",["subexpr","hasBlock",["inverse"],[],["loc",[null,[3,47],[3,67]]]],"class",["subexpr","@mut",[["get","class",["loc",[null,[3,74],[3,79]]]]],[],[]]],0,null,["loc",[null,[2,2],[9,22]]]]
        ],
        locals: [],
        templates: [child0]
      };
    }());
    var child1 = (function() {
      var child0 = (function() {
        var child0 = (function() {
          var child0 = (function() {
            return {
              meta: {
                "fragmentReason": false,
                "revision": "Ember@2.3.1",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 21,
                    "column": 6
                  },
                  "end": {
                    "line": 23,
                    "column": 6
                  }
                },
                "moduleName": "tiny/templates/components/liquid-if.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("        ");
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
                ["content","yield",["loc",[null,[22,8],[22,17]]]]
              ],
              locals: [],
              templates: []
            };
          }());
          var child1 = (function() {
            return {
              meta: {
                "fragmentReason": false,
                "revision": "Ember@2.3.1",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 23,
                    "column": 6
                  },
                  "end": {
                    "line": 25,
                    "column": 6
                  }
                },
                "moduleName": "tiny/templates/components/liquid-if.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("        ");
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
                ["inline","yield",[],["to","inverse"],["loc",[null,[24,8],[24,30]]]]
              ],
              locals: [],
              templates: []
            };
          }());
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.3.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 19,
                  "column": 4
                },
                "end": {
                  "line": 26,
                  "column": 4
                }
              },
              "moduleName": "tiny/templates/components/liquid-if.hbs"
            },
            isEmpty: false,
            arity: 1,
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
              ["block","if",[["get","valueVersion",["loc",[null,[21,12],[21,24]]]]],[],0,1,["loc",[null,[21,6],[25,13]]]]
            ],
            locals: ["valueVersion"],
            templates: [child0, child1]
          };
        }());
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.3.1",
            "loc": {
              "source": null,
              "start": {
                "line": 11,
                "column": 2
              },
              "end": {
                "line": 27,
                "column": 2
              }
            },
            "moduleName": "tiny/templates/components/liquid-if.hbs"
          },
          isEmpty: false,
          arity: 1,
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
            ["block","liquid-versions",[],["value",["subexpr","@mut",[["get","showFirstBlock",["loc",[null,[19,29],[19,43]]]]],[],[]],"notify",["subexpr","@mut",[["get","container",["loc",[null,[19,51],[19,60]]]]],[],[]],"name",["subexpr","@mut",[["get","helperName",["loc",[null,[19,66],[19,76]]]]],[],[]],"use",["subexpr","@mut",[["get","use",["loc",[null,[20,8],[20,11]]]]],[],[]],"renderWhenFalse",["subexpr","hasBlock",["inverse"],[],["loc",[null,[20,28],[20,48]]]]],0,null,["loc",[null,[19,4],[26,24]]]]
          ],
          locals: ["container"],
          templates: [child0]
        };
      }());
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.3.1",
          "loc": {
            "source": null,
            "start": {
              "line": 10,
              "column": 0
            },
            "end": {
              "line": 28,
              "column": 0
            }
          },
          "moduleName": "tiny/templates/components/liquid-if.hbs"
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
          ["block","liquid-container",[],["id",["subexpr","@mut",[["get","id",["loc",[null,[12,9],[12,11]]]]],[],[]],"class",["subexpr","@mut",[["get","class",["loc",[null,[13,12],[13,17]]]]],[],[]],"growDuration",["subexpr","@mut",[["get","growDuration",["loc",[null,[14,19],[14,31]]]]],[],[]],"growPixelsPerSecond",["subexpr","@mut",[["get","growPixelsPerSecond",["loc",[null,[15,26],[15,45]]]]],[],[]],"growEasing",["subexpr","@mut",[["get","growEasing",["loc",[null,[16,17],[16,27]]]]],[],[]],"enableGrowth",["subexpr","@mut",[["get","enableGrowth",["loc",[null,[17,19],[17,31]]]]],[],[]]],0,null,["loc",[null,[11,2],[27,23]]]]
        ],
        locals: [],
        templates: [child0]
      };
    }());
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": [
            "wrong-type"
          ]
        },
        "revision": "Ember@2.3.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 29,
            "column": 0
          }
        },
        "moduleName": "tiny/templates/components/liquid-if.hbs"
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
        ["block","if",[["get","containerless",["loc",[null,[1,6],[1,19]]]]],[],0,1,["loc",[null,[1,0],[28,7]]]]
      ],
      locals: [],
      templates: [child0, child1]
    };
  }()));

});
define('tiny/templates/components/liquid-modal', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.3.1",
            "loc": {
              "source": null,
              "start": {
                "line": 2,
                "column": 2
              },
              "end": {
                "line": 6,
                "column": 2
              }
            },
            "moduleName": "tiny/templates/components/liquid-modal.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1,"role","dialog");
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n    ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var morphs = new Array(4);
            morphs[0] = dom.createAttrMorph(element0, 'class');
            morphs[1] = dom.createAttrMorph(element0, 'aria-labelledby');
            morphs[2] = dom.createAttrMorph(element0, 'aria-label');
            morphs[3] = dom.createMorphAt(element0,1,1);
            return morphs;
          },
          statements: [
            ["attribute","class",["concat",["lf-dialog ",["get","cc.options.dialogClass",["loc",[null,[3,28],[3,50]]]]]]],
            ["attribute","aria-labelledby",["get","cc.options.ariaLabelledBy",["loc",[null,[3,86],[3,111]]]]],
            ["attribute","aria-label",["get","cc.options.ariaLabel",["loc",[null,[3,127],[3,147]]]]],
            ["inline","lf-vue",[["get","cc.view",["loc",[null,[4,15],[4,22]]]]],["dismiss","dismiss"],["loc",[null,[4,6],[4,42]]]]
          ],
          locals: [],
          templates: []
        };
      }());
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": [
              "wrong-type",
              "multiple-nodes"
            ]
          },
          "revision": "Ember@2.3.1",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 8,
              "column": 0
            }
          },
          "moduleName": "tiny/templates/components/liquid-modal.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
          morphs[1] = dom.createMorphAt(fragment,2,2,contextualElement);
          dom.insertBoundary(fragment, 0);
          return morphs;
        },
        statements: [
          ["block","lm-container",[],["action","escape","clickAway","outsideClick"],0,null,["loc",[null,[2,2],[6,19]]]],
          ["content","lf-overlay",["loc",[null,[7,2],[7,16]]]]
        ],
        locals: ["cc"],
        templates: [child0]
      };
    }());
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": [
            "wrong-type"
          ]
        },
        "revision": "Ember@2.3.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 9,
            "column": 0
          }
        },
        "moduleName": "tiny/templates/components/liquid-modal.hbs"
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
        ["block","liquid-versions",[],["name","liquid-modal","value",["subexpr","@mut",[["get","currentContext",["loc",[null,[1,45],[1,59]]]]],[],[]],"renderWhenFalse",false],0,null,["loc",[null,[1,0],[8,20]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('tiny/templates/components/liquid-outlet', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        var child0 = (function() {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.3.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 15,
                  "column": 6
                },
                "end": {
                  "line": 17,
                  "column": 6
                }
              },
              "moduleName": "tiny/templates/components/liquid-outlet.hbs"
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
              ["inline","outlet",[["get","outletName",["loc",[null,[16,17],[16,27]]]]],[],["loc",[null,[16,8],[16,29]]]]
            ],
            locals: [],
            templates: []
          };
        }());
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.3.1",
            "loc": {
              "source": null,
              "start": {
                "line": 2,
                "column": 2
              },
              "end": {
                "line": 19,
                "column": 2
              }
            },
            "moduleName": "tiny/templates/components/liquid-outlet.hbs"
          },
          isEmpty: false,
          arity: 1,
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
            ["block","set-outlet-state",[["get","outletName",["loc",[null,[15,26],[15,36]]]],["get","version.outletState",["loc",[null,[15,37],[15,56]]]]],[],0,null,["loc",[null,[15,6],[17,28]]]]
          ],
          locals: ["version"],
          templates: [child0]
        };
      }());
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": [
              "wrong-type"
            ]
          },
          "revision": "Ember@2.3.1",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 20,
              "column": 0
            }
          },
          "moduleName": "tiny/templates/components/liquid-outlet.hbs"
        },
        isEmpty: false,
        arity: 1,
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
          ["block","liquid-bind",[["get","outletState",["loc",[null,[2,17],[2,28]]]]],["id",["subexpr","@mut",[["get","id",["loc",[null,[3,9],[3,11]]]]],[],[]],"class",["subexpr","@mut",[["get","class",["loc",[null,[4,12],[4,17]]]]],[],[]],"use",["subexpr","@mut",[["get","use",["loc",[null,[5,10],[5,13]]]]],[],[]],"name","liquid-outlet","outletName",["subexpr","@mut",[["get","outletName",["loc",[null,[7,17],[7,27]]]]],[],[]],"containerless",["subexpr","@mut",[["get","containerless",["loc",[null,[8,20],[8,33]]]]],[],[]],"growDuration",["subexpr","@mut",[["get","growDuration",["loc",[null,[9,19],[9,31]]]]],[],[]],"growPixelsPerSecond",["subexpr","@mut",[["get","growPixelsPerSecond",["loc",[null,[10,26],[10,45]]]]],[],[]],"growEasing",["subexpr","@mut",[["get","growEasing",["loc",[null,[11,17],[11,27]]]]],[],[]],"enableGrowth",["subexpr","@mut",[["get","enableGrowth",["loc",[null,[12,19],[12,31]]]]],[],[]]],0,null,["loc",[null,[2,2],[19,20]]]]
        ],
        locals: ["outletState"],
        templates: [child0]
      };
    }());
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": [
            "wrong-type"
          ]
        },
        "revision": "Ember@2.3.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 21,
            "column": 0
          }
        },
        "moduleName": "tiny/templates/components/liquid-outlet.hbs"
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
        ["block","get-outlet-state",[["get","outletName",["loc",[null,[1,21],[1,31]]]]],[],0,null,["loc",[null,[1,0],[20,21]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('tiny/templates/components/liquid-versions', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        var child0 = (function() {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.3.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 3,
                  "column": 4
                },
                "end": {
                  "line": 5,
                  "column": 4
                }
              },
              "moduleName": "tiny/templates/components/liquid-versions.hbs"
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
              ["inline","yield",[["get","version.value",["loc",[null,[4,14],[4,27]]]]],[],["loc",[null,[4,6],[4,31]]]]
            ],
            locals: [],
            templates: []
          };
        }());
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.3.1",
            "loc": {
              "source": null,
              "start": {
                "line": 2,
                "column": 2
              },
              "end": {
                "line": 6,
                "column": 2
              }
            },
            "moduleName": "tiny/templates/components/liquid-versions.hbs"
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
            ["block","liquid-child",[],["version",["subexpr","@mut",[["get","version",["loc",[null,[3,28],[3,35]]]]],[],[]],"liquidChildDidRender","childDidRender","class",["subexpr","@mut",[["get","class",["loc",[null,[3,80],[3,85]]]]],[],[]]],0,null,["loc",[null,[3,4],[5,21]]]]
          ],
          locals: [],
          templates: [child0]
        };
      }());
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": [
              "wrong-type"
            ]
          },
          "revision": "Ember@2.3.1",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 7,
              "column": 0
            }
          },
          "moduleName": "tiny/templates/components/liquid-versions.hbs"
        },
        isEmpty: false,
        arity: 1,
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
          ["block","if",[["get","version.shouldRender",["loc",[null,[2,8],[2,28]]]]],[],0,null,["loc",[null,[2,2],[6,9]]]]
        ],
        locals: ["version"],
        templates: [child0]
      };
    }());
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": [
            "wrong-type"
          ]
        },
        "revision": "Ember@2.3.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 8,
            "column": 0
          }
        },
        "moduleName": "tiny/templates/components/liquid-versions.hbs"
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
        ["block","each",[["get","versions",["loc",[null,[1,8],[1,16]]]]],["key","@identity"],0,null,["loc",[null,[1,0],[7,9]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('tiny/templates/components/liquid-with', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.3.1",
            "loc": {
              "source": null,
              "start": {
                "line": 2,
                "column": 2
              },
              "end": {
                "line": 4,
                "column": 2
              }
            },
            "moduleName": "tiny/templates/components/liquid-with.hbs"
          },
          isEmpty: false,
          arity: 1,
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
            ["inline","yield",[["get","version",["loc",[null,[3,13],[3,20]]]]],[],["loc",[null,[3,4],[3,24]]]]
          ],
          locals: ["version"],
          templates: []
        };
      }());
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": [
              "wrong-type"
            ]
          },
          "revision": "Ember@2.3.1",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 5,
              "column": 0
            }
          },
          "moduleName": "tiny/templates/components/liquid-with.hbs"
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
          ["block","liquid-versions",[],["value",["subexpr","@mut",[["get","attrs.value",["loc",[null,[2,28],[2,39]]]]],[],[]],"use",["subexpr","@mut",[["get","use",["loc",[null,[2,44],[2,47]]]]],[],[]],"name",["subexpr","@mut",[["get","name",["loc",[null,[2,53],[2,57]]]]],[],[]],"class",["subexpr","@mut",[["get","class",["loc",[null,[2,64],[2,69]]]]],[],[]]],0,null,["loc",[null,[2,2],[4,23]]]]
        ],
        locals: [],
        templates: [child0]
      };
    }());
    var child1 = (function() {
      var child0 = (function() {
        var child0 = (function() {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.3.1",
              "loc": {
                "source": null,
                "start": {
                  "line": 14,
                  "column": 4
                },
                "end": {
                  "line": 16,
                  "column": 4
                }
              },
              "moduleName": "tiny/templates/components/liquid-with.hbs"
            },
            isEmpty: false,
            arity: 1,
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
              ["inline","yield",[["get","version",["loc",[null,[15,15],[15,22]]]]],[],["loc",[null,[15,6],[15,26]]]]
            ],
            locals: ["version"],
            templates: []
          };
        }());
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.3.1",
            "loc": {
              "source": null,
              "start": {
                "line": 6,
                "column": 2
              },
              "end": {
                "line": 17,
                "column": 2
              }
            },
            "moduleName": "tiny/templates/components/liquid-with.hbs"
          },
          isEmpty: false,
          arity: 1,
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
            ["block","liquid-versions",[],["value",["subexpr","@mut",[["get","attrs.value",["loc",[null,[14,30],[14,41]]]]],[],[]],"notify",["subexpr","@mut",[["get","container",["loc",[null,[14,49],[14,58]]]]],[],[]],"use",["subexpr","@mut",[["get","use",["loc",[null,[14,63],[14,66]]]]],[],[]],"name",["subexpr","@mut",[["get","name",["loc",[null,[14,72],[14,76]]]]],[],[]]],0,null,["loc",[null,[14,4],[16,25]]]]
          ],
          locals: ["container"],
          templates: [child0]
        };
      }());
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.3.1",
          "loc": {
            "source": null,
            "start": {
              "line": 5,
              "column": 0
            },
            "end": {
              "line": 18,
              "column": 0
            }
          },
          "moduleName": "tiny/templates/components/liquid-with.hbs"
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
          ["block","liquid-container",[],["id",["subexpr","@mut",[["get","id",["loc",[null,[7,9],[7,11]]]]],[],[]],"class",["subexpr","@mut",[["get","class",["loc",[null,[8,12],[8,17]]]]],[],[]],"growDuration",["subexpr","@mut",[["get","growDuration",["loc",[null,[9,19],[9,31]]]]],[],[]],"growPixelsPerSecond",["subexpr","@mut",[["get","growPixelsPerSecond",["loc",[null,[10,26],[10,45]]]]],[],[]],"growEasing",["subexpr","@mut",[["get","growEasing",["loc",[null,[11,17],[11,27]]]]],[],[]],"enableGrowth",["subexpr","@mut",[["get","enableGrowth",["loc",[null,[12,19],[12,31]]]]],[],[]]],0,null,["loc",[null,[6,2],[17,23]]]]
        ],
        locals: [],
        templates: [child0]
      };
    }());
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": [
            "wrong-type"
          ]
        },
        "revision": "Ember@2.3.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 19,
            "column": 0
          }
        },
        "moduleName": "tiny/templates/components/liquid-with.hbs"
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
        ["block","if",[["get","containerless",["loc",[null,[1,6],[1,19]]]]],[],0,1,["loc",[null,[1,0],[18,7]]]]
      ],
      locals: [],
      templates: [child0, child1]
    };
  }()));

});
define('tiny/templates/components/summer-note', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.3.1",
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
        "moduleName": "tiny/templates/components/summer-note.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"id","summernote");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(1);
        morphs[0] = dom.createAttrMorph(element0, 'class');
        return morphs;
      },
      statements: [
        ["attribute","class",["get","classNames",["loc",[null,[1,29],[1,39]]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('tiny/tests/adapters/application.jshint', function () {

  'use strict';

  describe('JSHint - adapters/application.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'adapters/application.js should pass jshint.').to.be.ok; 
  })});

});
define('tiny/tests/admin/admin_users/controller.jshint', function () {

  'use strict';

  describe('JSHint - admin/admin_users/controller.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'admin/admin_users/controller.js should pass jshint.').to.be.ok; 
  })});

});
define('tiny/tests/admin/admin_users/edit/controller.jshint', function () {

  'use strict';

  describe('JSHint - admin/admin_users/edit/controller.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'admin/admin_users/edit/controller.js should pass jshint.').to.be.ok; 
  })});

});
define('tiny/tests/admin/admin_users/edit/route.jshint', function () {

  'use strict';

  describe('JSHint - admin/admin_users/edit/route.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'admin/admin_users/edit/route.js should pass jshint.').to.be.ok; 
  })});

});
define('tiny/tests/admin/admin_users/new/controller.jshint', function () {

  'use strict';

  describe('JSHint - admin/admin_users/new/controller.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'admin/admin_users/new/controller.js should pass jshint.').to.be.ok; 
  })});

});
define('tiny/tests/admin/admin_users/new/route.jshint', function () {

  'use strict';

  describe('JSHint - admin/admin_users/new/route.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'admin/admin_users/new/route.js should pass jshint.').to.be.ok; 
  })});

});
define('tiny/tests/admin/admin_users/route.jshint', function () {

  'use strict';

  describe('JSHint - admin/admin_users/route.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'admin/admin_users/route.js should pass jshint.').to.be.ok; 
  })});

});
define('tiny/tests/admin/course/route.jshint', function () {

  'use strict';

  describe('JSHint - admin/course/route.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'admin/course/route.js should pass jshint.').to.be.ok; 
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
define('tiny/tests/admin/dashboard/route.jshint', function () {

  'use strict';

  describe('JSHint - admin/dashboard/route.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'admin/dashboard/route.js should pass jshint.').to.be.ok; 
  })});

});
define('tiny/tests/admin/newsletter/controller.jshint', function () {

  'use strict';

  describe('JSHint - admin/newsletter/controller.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'admin/newsletter/controller.js should pass jshint.').to.be.ok; 
  })});

});
define('tiny/tests/admin/newsletter/route.jshint', function () {

  'use strict';

  describe('JSHint - admin/newsletter/route.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'admin/newsletter/route.js should pass jshint.').to.be.ok; 
  })});

});
define('tiny/tests/admin/route.jshint', function () {

  'use strict';

  describe('JSHint - admin/route.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'admin/route.js should pass jshint.').to.be.ok; 
  })});

});
define('tiny/tests/admin/subscription/route.jshint', function () {

  'use strict';

  describe('JSHint - admin/subscription/route.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'admin/subscription/route.js should pass jshint.').to.be.ok; 
  })});

});
define('tiny/tests/admin/subscriptions/controller.jshint', function () {

  'use strict';

  describe('JSHint - admin/subscriptions/controller.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'admin/subscriptions/controller.js should pass jshint.').to.be.ok; 
  })});

});
define('tiny/tests/admin/subscriptions/edit/route.jshint', function () {

  'use strict';

  describe('JSHint - admin/subscriptions/edit/route.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'admin/subscriptions/edit/route.js should pass jshint.').to.be.ok; 
  })});

});
define('tiny/tests/admin/subscriptions/new/route.jshint', function () {

  'use strict';

  describe('JSHint - admin/subscriptions/new/route.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'admin/subscriptions/new/route.js should pass jshint.').to.be.ok; 
  })});

});
define('tiny/tests/admin/subscriptions/route.jshint', function () {

  'use strict';

  describe('JSHint - admin/subscriptions/route.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'admin/subscriptions/route.js should pass jshint.').to.be.ok; 
  })});

});
define('tiny/tests/admin_users/edit_password/route.jshint', function () {

  'use strict';

  describe('JSHint - admin_users/edit_password/route.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'admin_users/edit_password/route.js should pass jshint.').to.be.ok; 
  })});

});
define('tiny/tests/app.jshint', function () {

  'use strict';

  describe('JSHint - app.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'app.js should pass jshint.').to.be.ok; 
  })});

});
define('tiny/tests/authenticators/api.jshint', function () {

  'use strict';

  describe('JSHint - authenticators/api.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'authenticators/api.js should pass jshint.').to.be.ok; 
  })});

});
define('tiny/tests/authorizers/api.jshint', function () {

  'use strict';

  describe('JSHint - authorizers/api.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'authorizers/api.js should pass jshint.').to.be.ok; 
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
define('tiny/tests/components/subscription-form/component.jshint', function () {

  'use strict';

  describe('JSHint - components/subscription-form/component.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'components/subscription-form/component.js should pass jshint.').to.be.ok; 
  })});

});
define('tiny/tests/components/user-form/component.jshint', function () {

  'use strict';

  describe('JSHint - components/user-form/component.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'components/user-form/component.js should pass jshint.').to.be.ok; 
  })});

});
define('tiny/tests/components/user-form-input/component.jshint', function () {

  'use strict';

  describe('JSHint - components/user-form-input/component.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'components/user-form-input/component.js should pass jshint.').to.be.ok; 
  })});

});
define('tiny/tests/helpers/ember-i18n/test-helpers', ['ember'], function (Ember) {

  'use strict';

  Ember['default'].Test.registerHelper('t', function (app, key, interpolations) {
    var i18n = app.__container__.lookup('service:i18n');
    return i18n.t(key, interpolations);
  });

  // example usage: expectTranslation('.header', 'welcome_message');
  Ember['default'].Test.registerHelper('expectTranslation', function (app, element, key, interpolations) {
    var text = app.testHelpers.t(key, interpolations);

    assertTranslation(element, key, text);
  });

  var assertTranslation = (function () {
    if (typeof QUnit !== 'undefined' && typeof ok === 'function') {
      return function (element, key, text) {
        ok(find(element + ':contains(' + text + ')').length, 'Found translation key ' + key + ' in ' + element);
      };
    } else if (typeof expect === 'function') {
      return function (element, key, text) {
        var found = !!find(element + ':contains(' + text + ')').length;
        expect(found).to.equal(true);
      };
    } else {
      return function () {
        throw new Error("ember-i18n could not find a compatible test framework");
      };
    }
  })();

});
define('tiny/tests/helpers/ember-power-select', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports.triggerKeydown = triggerKeydown;
  exports.typeInSearch = typeInSearch;
  exports.clickTrigger = clickTrigger;

  function typeText(selector, text) {
    $(selector).val(text);
    $(selector).trigger('input');
  }

  function triggerKeydown(domElement, k) {
    var oEvent = document.createEvent("Events");
    oEvent.initEvent('keydown', true, true);
    $.extend(oEvent, {
      view: window,
      ctrlKey: false,
      altKey: false,
      shiftKey: false,
      metaKey: false,
      keyCode: k,
      charCode: k
    });
    Ember['default'].run(function () {
      domElement.dispatchEvent(oEvent);
    });
  }

  function typeInSearch(text) {
    Ember['default'].run(function () {
      typeText('.ember-power-select-search input, .ember-power-select-trigger-multiple-input', text);
    });
  }

  function clickTrigger(scope) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var selector = '.ember-power-select-trigger';
    if (scope) {
      selector = scope + ' ' + selector;
    }
    var event = new window.Event('mousedown', { bubbles: true, cancelable: true, view: window });
    Object.keys(options).forEach(function (key) {
      return event[key] = options[key];
    });
    Ember['default'].run(function () {
      return Ember['default'].$(selector)[0].dispatchEvent(event);
    });
  }

  // Helpers for acceptance tests

  exports['default'] = function () {
    var isEmberOne = Ember['default'].VERSION.match(/1\.13/);

    Ember['default'].Test.registerAsyncHelper('selectChoose', function (app, cssPath, value) {
      var id = find(cssPath).find('.ember-power-select-trigger').attr('class').match(/ember-power-select-trigger-ember(\d+)/)[1];
      // If the dropdown is closed, open it
      if (Ember['default'].$('.ember-power-select-dropdown-ember' + id).length === 0) {
        click(cssPath + ' .ember-power-select-trigger');
      }

      // Select the option with the given text
      click('.ember-power-select-dropdown-ember' + id + ' .ember-power-select-option:contains("' + value + '")');
    });

    Ember['default'].Test.registerAsyncHelper('selectSearch', function (app, cssPath, value) {
      var id = find(cssPath).find('.ember-power-select-trigger').attr('class').match(/ember-power-select-trigger-ember(\d+)/)[1];
      var isMultipleSelect = Ember['default'].$(cssPath + ' .ember-power-select-trigger-multiple-input').length > 0;

      var dropdownIsClosed = Ember['default'].$('.ember-power-select-dropdown-ember' + id).length === 0;
      if (dropdownIsClosed) {
        click(cssPath + ' .ember-power-select-trigger');
      }

      if (isMultipleSelect) {
        fillIn(cssPath + ' .ember-power-select-trigger-multiple-input', value);
        if (isEmberOne) {
          triggerEvent(cssPath + ' .ember-power-select-trigger-multiple-input', 'input');
        }
      } else {
        fillIn('.ember-power-select-search input', value);
        if (isEmberOne) {
          triggerEvent('.ember-power-select-dropdown-ember' + id + ' .ember-power-select-search input', 'input');
        }
      }
    });
  }

});
define('tiny/tests/helpers/ember-simple-auth', ['exports', 'ember-simple-auth/authenticators/test'], function (exports, Test) {

  'use strict';

  exports.authenticateSession = authenticateSession;
  exports.currentSession = currentSession;
  exports.invalidateSession = invalidateSession;

  var TEST_CONTAINER_KEY = 'authenticator:test';

  function ensureAuthenticator(app, container) {
    var authenticator = container.lookup(TEST_CONTAINER_KEY);
    if (!authenticator) {
      app.register(TEST_CONTAINER_KEY, Test['default']);
    }
  }

  function authenticateSession(app, sessionData) {
    var container = app.__container__;

    var session = container.lookup('service:session');
    ensureAuthenticator(app, container);
    session.authenticate(TEST_CONTAINER_KEY, sessionData);
    return wait();
  }

  ;

  function currentSession(app) {
    return app.__container__.lookup('service:session');
  }

  ;

  function invalidateSession(app) {
    var session = app.__container__.lookup('service:session');
    if (session.get('isAuthenticated')) {
      session.invalidate();
    }
    return wait();
  }

  ;

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
define('tiny/tests/helpers/validate-properties', ['exports', 'ember', 'ember-qunit'], function (exports, Ember, ember_qunit) {

  'use strict';

  exports.testValidPropertyValues = testValidPropertyValues;
  exports.testInvalidPropertyValues = testInvalidPropertyValues;

  var run = Ember['default'].run;

  function validateValues(object, propertyName, values, isTestForValid) {
    var promise = null;
    var validatedValues = [];

    values.forEach(function (value) {
      function handleValidation(errors) {
        var hasErrors = object.get('errors.' + propertyName + '.firstObject');
        if (hasErrors && !isTestForValid || !hasErrors && isTestForValid) {
          validatedValues.push(value);
        }
      }

      run(object, 'set', propertyName, value);

      var objectPromise = null;
      run(function () {
        objectPromise = object.validate().then(handleValidation, handleValidation);
      });

      // Since we are setting the values in a different run loop as we are validating them,
      // we need to chain the promises so that they run sequentially. The wrong value will
      // be validated if the promises execute concurrently
      promise = promise ? promise.then(objectPromise) : objectPromise;
    });

    return promise.then(function () {
      return validatedValues;
    });
  }

  function testPropertyValues(propertyName, values, isTestForValid, context) {
    var validOrInvalid = isTestForValid ? 'Valid' : 'Invalid';
    var testName = validOrInvalid + ' ' + propertyName;

    ember_qunit.test(testName, function (assert) {
      var object = this.subject();

      if (context && typeof context === 'function') {
        context(object);
      }

      // Use QUnit.dump.parse so null and undefined can be printed as literal 'null' and
      // 'undefined' strings in the assert message.
      var valuesString = QUnit.dump.parse(values).replace(/\n(\s+)?/g, '').replace(/,/g, ', ');
      var assertMessage = 'Expected ' + propertyName + ' to have ' + validOrInvalid.toLowerCase() + ' values: ' + valuesString;

      return validateValues(object, propertyName, values, isTestForValid).then(function (validatedValues) {
        assert.deepEqual(validatedValues, values, assertMessage);
      });
    });
  }

  function testValidPropertyValues(propertyName, values, context) {
    testPropertyValues(propertyName, values, true, context);
  }

  function testInvalidPropertyValues(propertyName, values, context) {
    testPropertyValues(propertyName, values, false, context);
  }

});
define('tiny/tests/initializers/add-env.jshint', function () {

  'use strict';

  describe('JSHint - initializers/add-env.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'initializers/add-env.js should pass jshint.').to.be.ok; 
  })});

});
define('tiny/tests/integration/user-form-input/component-test', ['chai', 'ember-mocha'], function (chai, ember_mocha) {

  'use strict';

  /* jshint expr:true */
  ember_mocha.describeComponent('user-form-input', 'Integration: UserFormInputComponent', {
    integration: true
  }, function () {
    ember_mocha.it('renders', function () {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#user-form-input}}
      //     template content
      //   {{/user-form-input}}
      // `);

      this.render(Ember.HTMLBars.template((function () {
        return {
          meta: {
            'fragmentReason': {
              'name': 'missing-wrapper',
              'problems': ['wrong-type']
            },
            'revision': 'Ember@2.3.1',
            'loc': {
              'source': null,
              'start': {
                'line': 1,
                'column': 0
              },
              'end': {
                'line': 1,
                'column': 19
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
          statements: [['content', 'user-form-input', ['loc', [null, [1, 0], [1, 19]]]]],
          locals: [],
          templates: []
        };
      })()));
      chai.expect(this.$()).to.have.length(1);
    });
  });

});
define('tiny/tests/integration/user-form-input/component-test.jshint', function () {

  'use strict';

  describe('JSHint - integration/user-form-input/component-test.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'integration/user-form-input/component-test.js should pass jshint.').to.be.ok; 
  })});

});
define('tiny/tests/locales/fr/config.jshint', function () {

  'use strict';

  describe('JSHint - locales/fr/config.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'locales/fr/config.js should pass jshint.').to.be.ok; 
  })});

});
define('tiny/tests/locales/fr/translations.jshint', function () {

  'use strict';

  describe('JSHint - locales/fr/translations.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'locales/fr/translations.js should pass jshint.').to.be.ok; 
  })});

});
define('tiny/tests/login/route.jshint', function () {

  'use strict';

  describe('JSHint - login/route.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'login/route.js should pass jshint.').to.be.ok; 
  })});

});
define('tiny/tests/mixins/visible-errors.jshint', function () {

  'use strict';

  describe('JSHint - mixins/visible-errors.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'mixins/visible-errors.js should pass jshint.').to.be.ok; 
  })});

});
define('tiny/tests/models/admin_user.jshint', function () {

  'use strict';

  describe('JSHint - models/admin_user.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'models/admin_user.js should pass jshint.').to.be.ok; 
  })});

});
define('tiny/tests/models/contact.jshint', function () {

  'use strict';

  describe('JSHint - models/contact.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'models/contact.js should pass jshint.').to.be.ok; 
  })});

});
define('tiny/tests/models/course.jshint', function () {

  'use strict';

  describe('JSHint - models/course.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'models/course.js should pass jshint.').to.be.ok; 
  })});

});
define('tiny/tests/models/newsletter.jshint', function () {

  'use strict';

  describe('JSHint - models/newsletter.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'models/newsletter.js should pass jshint.').to.be.ok; 
  })});

});
define('tiny/tests/models/payment-option.jshint', function () {

  'use strict';

  describe('JSHint - models/payment-option.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'models/payment-option.js should pass jshint.').to.be.ok; 
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
define('tiny/tests/reset_password/route.jshint', function () {

  'use strict';

  describe('JSHint - reset_password/route.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'reset_password/route.js should pass jshint.').to.be.ok; 
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
define('tiny/tests/routes/application.jshint', function () {

  'use strict';

  describe('JSHint - routes/application.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'routes/application.js should pass jshint.').to.be.ok; 
  })});

});
define('tiny/tests/serializers/application.jshint', function () {

  'use strict';

  describe('JSHint - serializers/application.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'serializers/application.js should pass jshint.').to.be.ok; 
  })});

});
define('tiny/tests/services/create-subscriptions.jshint', function () {

  'use strict';

  describe('JSHint - services/create-subscriptions.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'services/create-subscriptions.js should pass jshint.').to.be.ok; 
  })});

});
define('tiny/tests/subscriptions/new/route.jshint', function () {

  'use strict';

  describe('JSHint - subscriptions/new/route.js', function(){
  it('should pass jshint', function() { 
    expect(false, 'subscriptions/new/route.js should pass jshint.\nsubscriptions/new/route.js: line 44, col 43, Missing semicolon.\n\n1 error').to.be.ok; 
  })});

});
define('tiny/tests/subscriptions/success/route.jshint', function () {

  'use strict';

  describe('JSHint - subscriptions/success/route.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'subscriptions/success/route.js should pass jshint.').to.be.ok; 
  })});

});
define('tiny/tests/test-helper', ['tiny/tests/helpers/resolver', 'ember-mocha'], function (resolver, ember_mocha) {

	'use strict';

	ember_mocha.setResolver(resolver['default']);

});
define('tiny/tests/test-helper.jshint', function () {

  'use strict';

  describe('JSHint - test-helper.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'test-helper.js should pass jshint.').to.be.ok; 
  })});

});
define('tiny/tests/transitions.jshint', function () {

  'use strict';

  describe('JSHint - transitions.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'transitions.js should pass jshint.').to.be.ok; 
  })});

});
define('tiny/tests/unit/initializers/add-plugins-test', ['chai', 'mocha', 'ember', 'tiny/initializers/add-plugins'], function (chai, mocha, Ember, add_plugins) {

  'use strict';

  /* jshint expr:true */
  mocha.describe('AddPluginsInitializer', function () {
    var container = undefined,
        application = undefined;

    mocha.beforeEach(function () {
      Ember['default'].run(function () {
        application = Ember['default'].Application.create();
        container = application.__container__;
        application.deferReadiness();
      });
    });

    // Replace this with your real tests.
    mocha.it('works', function () {
      add_plugins.initialize(container, application);

      // you would normally confirm the results of the initializer here
      chai.expect(true).to.be.ok;
    });
  });

});
define('tiny/tests/unit/initializers/add-plugins-test.jshint', function () {

  'use strict';

  describe('JSHint - unit/initializers/add-plugins-test.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'unit/initializers/add-plugins-test.js should pass jshint.').to.be.ok; 
  })});

});
define('tiny/tests/unit/models/subscription-test', ['chai', 'ember-mocha'], function (chai, ember_mocha) {

  'use strict';

  /* jshint expr:true */
  ember_mocha.describeModel('subscription', 'Subscription', {
    needs: ['model:course', 'model:payment-option', 'model:contact']
  }, function () {
    ember_mocha.it('say if its an adult', function () {
      var model = this.subject();
      model.set('birthDate', '2016-01-01');
      chai.expect(model.get('isAdult')).to.be.equal(false);

      model.set('birthDate', '1990-01-01');
      chai.expect(model.get('isAdult')).to.be.equal(true);
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
define('tiny/tests/unit/services/create-subscriptions-test', ['chai', 'ember-mocha', 'tiny/tests/helpers/start-app', 'sinon', 'ember'], function (chai, ember_mocha, startApp, sinon, Ember) {

  'use strict';

  /* jshint expr:true */
  var app, container, store;

  ember_mocha.describeModule('service:create-subscriptions', 'CreateSubscriptionsService', {
    needs: []
  }, function () {
    before(function () {
      app = startApp['default']();
      container = app.__container__;
      store = container.lookup('service:store');
    }), ember_mocha.it('returns items in json format', function () {
      var service = this.subject();

      var user = store.createRecord('user', { email: 'bla@bla.com' });
      service.set('user', user);

      var course = store.createRecord('course', { id: 1 });
      var subscription = store.createRecord('subscription', { email: 'test@test.com', course: course, firstName: 'Guirec',
        user: user });
      service.subscriptions.pushObject(subscription);

      var contact = store.createRecord('contact', { fullname: 'Guirec Corbel' });
      service.contacts.pushObject(contact);

      var result = service.toJSON();
      var subscriptionsAttributes = result.subscriptions_attributes[0];
      var contactsAttributes = subscriptionsAttributes.contacts_attributes[0];

      chai.expect(result.email).to.equal('bla@bla.com');
      chai.expect(subscriptionsAttributes.first_name).to.equal('Guirec');
      chai.expect(subscriptionsAttributes.email).to.equal('test@test.com');
      chai.expect(subscriptionsAttributes.course_id).to.equal('1');
      chai.expect(contactsAttributes.fullname).to.equal('Guirec Corbel');
    }), ember_mocha.it('saves items', function () {
      var service = this.subject();
      var mock = sinon['default'].mock(Ember['default'].$);

      var user = store.createRecord('user', { email: 'bla@bla.com' });
      var course = store.createRecord('course', { id: 2 });
      var subscription = store.createRecord('subscription', { email: 'test@test.com', course: course, firstName: 'Guirec', user: user });
      service.set('user', user);
      service.subscriptions.pushObject(subscription);

      mock.expects('ajax').once();
      service.save();
      mock.verify();
    }), ember_mocha.it('trigger the callback', function () {
      var service = this.subject();
      var flag = false;
      var user = store.createRecord('user', { email: 'bla@bla.com' });

      sinon['default'].stub(Ember['default'].$, 'ajax').yieldsTo('success');

      service.set('user', user);
      service.save(function () {
        flag = true;
      });

      chai.expect(flag).to.be['true'];
    });
  });

});
define('tiny/tests/unit/services/create-subscriptions-test.jshint', function () {

  'use strict';

  describe('JSHint - unit/services/create-subscriptions-test.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'unit/services/create-subscriptions-test.js should pass jshint.').to.be.ok; 
  })});

});
define('tiny/tests/validators/email.jshint', function () {

  'use strict';

  describe('JSHint - validators/email.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'validators/email.js should pass jshint.').to.be.ok; 
  })});

});
define('tiny/tests/validators/phone.jshint', function () {

  'use strict';

  describe('JSHint - validators/phone.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'validators/phone.js should pass jshint.').to.be.ok; 
  })});

});
define('tiny/tests/validators/subscription-email.jshint', function () {

  'use strict';

  describe('JSHint - validators/subscription-email.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'validators/subscription-email.js should pass jshint.').to.be.ok; 
  })});

});
define('tiny/tests/validators/subscription-phone.jshint', function () {

  'use strict';

  describe('JSHint - validators/subscription-phone.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'validators/subscription-phone.js should pass jshint.').to.be.ok; 
  })});

});
define('tiny/transitions/cross-fade', ['exports', 'liquid-fire'], function (exports, liquid_fire) {

  'use strict';


  exports['default'] = crossFade;
  // BEGIN-SNIPPET cross-fade-definition
  function crossFade() {
    var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    liquid_fire.stop(this.oldElement);
    return liquid_fire.Promise.all([liquid_fire.animate(this.oldElement, { opacity: 0 }, opts), liquid_fire.animate(this.newElement, { opacity: [opts.maxOpacity || 1, 0] }, opts)]);
  }

  // END-SNIPPET

});
define('tiny/transitions/default', ['exports', 'liquid-fire'], function (exports, liquid_fire) {

  'use strict';


  exports['default'] = defaultTransition;
  function defaultTransition() {
    if (this.newElement) {
      this.newElement.css({ visibility: '' });
    }
    return liquid_fire.Promise.resolve();
  }

});
define('tiny/transitions/explode', ['exports', 'ember', 'liquid-fire'], function (exports, Ember, liquid_fire) {

  'use strict';



  exports['default'] = explode;

  function explode() {
    var _this = this;

    var seenElements = {};
    var sawBackgroundPiece = false;

    for (var _len = arguments.length, pieces = Array(_len), _key = 0; _key < _len; _key++) {
      pieces[_key] = arguments[_key];
    }

    var promises = pieces.map(function (piece) {
      if (piece.matchBy) {
        return matchAndExplode(_this, piece, seenElements);
      } else if (piece.pick || piece.pickOld || piece.pickNew) {
        return explodePiece(_this, piece, seenElements);
      } else {
        sawBackgroundPiece = true;
        return runAnimation(_this, piece);
      }
    });
    if (!sawBackgroundPiece) {
      if (this.newElement) {
        this.newElement.css({ visibility: '' });
      }
      if (this.oldElement) {
        this.oldElement.css({ visibility: 'hidden' });
      }
    }
    return liquid_fire.Promise.all(promises);
  }

  function explodePiece(context, piece, seen) {
    var childContext = Ember['default'].copy(context);
    var selectors = [piece.pickOld || piece.pick, piece.pickNew || piece.pick];
    var cleanupOld, cleanupNew;

    if (selectors[0] || selectors[1]) {
      cleanupOld = _explodePart(context, 'oldElement', childContext, selectors[0], seen);
      cleanupNew = _explodePart(context, 'newElement', childContext, selectors[1], seen);
      if (!cleanupOld && !cleanupNew) {
        return liquid_fire.Promise.resolve();
      }
    }

    return runAnimation(childContext, piece)["finally"](function () {
      if (cleanupOld) {
        cleanupOld();
      }
      if (cleanupNew) {
        cleanupNew();
      }
    });
  }

  function _explodePart(context, field, childContext, selector, seen) {
    var child, childOffset, width, height, newChild;
    var elt = context[field];

    childContext[field] = null;
    if (elt && selector) {
      child = elt.find(selector).filter(function () {
        var guid = Ember['default'].guidFor(this);
        if (!seen[guid]) {
          seen[guid] = true;
          return true;
        }
      });
      if (child.length > 0) {
        childOffset = child.offset();
        width = child.outerWidth();
        height = child.outerHeight();
        newChild = child.clone();

        // Hide the original element
        child.css({ visibility: 'hidden' });

        // If the original element's parent was hidden, hide our clone
        // too.
        if (elt.css('visibility') === 'hidden') {
          newChild.css({ visibility: 'hidden' });
        }
        newChild.appendTo(elt.parent());
        newChild.outerWidth(width);
        newChild.outerHeight(height);
        var newParentOffset = newChild.offsetParent().offset();
        newChild.css({
          position: 'absolute',
          top: childOffset.top - newParentOffset.top,
          left: childOffset.left - newParentOffset.left,
          margin: 0
        });

        // Pass the clone to the next animation
        childContext[field] = newChild;
        return function cleanup() {
          newChild.remove();
          child.css({ visibility: '' });
        };
      }
    }
  }

  function animationFor(context, piece) {
    var name, args, func;
    if (!piece.use) {
      throw new Error("every argument to the 'explode' animation must include a followup animation to 'use'");
    }
    if (Ember['default'].isArray(piece.use)) {
      name = piece.use[0];
      args = piece.use.slice(1);
    } else {
      name = piece.use;
      args = [];
    }
    if (typeof name === 'function') {
      func = name;
    } else {
      func = context.lookup(name);
    }
    return function () {
      return liquid_fire.Promise.resolve(func.apply(this, args));
    };
  }

  function runAnimation(context, piece) {
    return new liquid_fire.Promise(function (resolve, reject) {
      animationFor(context, piece).apply(context).then(resolve, reject);
    });
  }

  function matchAndExplode(context, piece, seen) {
    if (!context.oldElement || !context.newElement) {
      return liquid_fire.Promise.resolve();
    }

    // reduce the matchBy scope
    if (piece.pick) {
      context.oldElement = context.oldElement.find(piece.pick);
      context.newElement = context.newElement.find(piece.pick);
    }

    if (piece.pickOld) {
      context.oldElement = context.oldElement.find(piece.pickOld);
    }

    if (piece.pickNew) {
      context.newElement = context.newElement.find(piece.pickNew);
    }

    // use the fastest selector available
    var selector;

    if (piece.matchBy === 'id') {
      selector = function (attrValue) {
        return "#" + attrValue;
      };
    } else if (piece.matchBy === 'class') {
      selector = function (attrValue) {
        return "." + attrValue;
      };
    } else {
      selector = function (attrValue) {
        var escapedAttrValue = attrValue.replace(/'/g, "\\'");
        return "[" + piece.matchBy + "='" + escapedAttrValue + "']";
      };
    }

    var hits = Ember['default'].A(context.oldElement.find("[" + piece.matchBy + "]").toArray());
    return liquid_fire.Promise.all(hits.map(function (elt) {
      var attrValue = Ember['default'].$(elt).attr(piece.matchBy);

      // if there is no match for a particular item just skip it
      if (attrValue === "" || context.newElement.find(selector(attrValue)).length === 0) {
        return liquid_fire.Promise.resolve();
      }

      return explodePiece(context, {
        pick: selector(attrValue),
        use: piece.use
      }, seen);
    }));
  }

});
define('tiny/transitions/fade', ['exports', 'liquid-fire'], function (exports, liquid_fire) {

  'use strict';


  exports['default'] = fade;

  // BEGIN-SNIPPET fade-definition
  function fade() {
    var _this = this;

    var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var firstStep;
    var outOpts = opts;
    var fadingElement = findFadingElement(this);

    if (fadingElement) {
      // We still have some older version that is in the process of
      // fading out, so out first step is waiting for it to finish.
      firstStep = liquid_fire.finish(fadingElement, 'fade-out');
    } else {
      if (liquid_fire.isAnimating(this.oldElement, 'fade-in')) {
        // if the previous view is partially faded in, scale its
        // fade-out duration appropriately.
        outOpts = { duration: liquid_fire.timeSpent(this.oldElement, 'fade-in') };
      }
      liquid_fire.stop(this.oldElement);
      firstStep = liquid_fire.animate(this.oldElement, { opacity: 0 }, outOpts, 'fade-out');
    }
    return firstStep.then(function () {
      return liquid_fire.animate(_this.newElement, { opacity: [opts.maxOpacity || 1, 0] }, opts, 'fade-in');
    });
  }

  function findFadingElement(context) {
    for (var i = 0; i < context.older.length; i++) {
      var entry = context.older[i];
      if (liquid_fire.isAnimating(entry.element, 'fade-out')) {
        return entry.element;
      }
    }
    if (liquid_fire.isAnimating(context.oldElement, 'fade-out')) {
      return context.oldElement;
    }
  }
  // END-SNIPPET

});
define('tiny/transitions/flex-grow', ['exports', 'liquid-fire'], function (exports, liquid_fire) {

  'use strict';


  exports['default'] = flexGrow;
  function flexGrow(opts) {
    liquid_fire.stop(this.oldElement);
    return liquid_fire.Promise.all([liquid_fire.animate(this.oldElement, { 'flex-grow': 0 }, opts), liquid_fire.animate(this.newElement, { 'flex-grow': [1, 0] }, opts)]);
  }

});
define('tiny/transitions/fly-to', ['exports', 'liquid-fire'], function (exports, liquid_fire) {

  'use strict';



  exports['default'] = flyTo;
  function flyTo() {
    var _this = this;

    var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    if (!this.newElement) {
      return liquid_fire.Promise.resolve();
    } else if (!this.oldElement) {
      this.newElement.css({ visibility: '' });
      return liquid_fire.Promise.resolve();
    }

    var oldOffset = this.oldElement.offset();
    var newOffset = this.newElement.offset();

    if (opts.movingSide === 'new') {
      var motion = {
        translateX: [0, oldOffset.left - newOffset.left],
        translateY: [0, oldOffset.top - newOffset.top],
        outerWidth: [this.newElement.outerWidth(), this.oldElement.outerWidth()],
        outerHeight: [this.newElement.outerHeight(), this.oldElement.outerHeight()]
      };
      this.oldElement.css({ visibility: 'hidden' });
      return liquid_fire.animate(this.newElement, motion, opts);
    } else {
      var motion = {
        translateX: newOffset.left - oldOffset.left,
        translateY: newOffset.top - oldOffset.top,
        outerWidth: this.newElement.outerWidth(),
        outerHeight: this.newElement.outerHeight()
      };
      this.newElement.css({ visibility: 'hidden' });
      return liquid_fire.animate(this.oldElement, motion, opts).then(function () {
        _this.newElement.css({ visibility: '' });
      });
    }
  }

});
define('tiny/transitions/move-over', ['exports', 'liquid-fire'], function (exports, liquid_fire) {

  'use strict';



  exports['default'] = moveOver;

  function moveOver(dimension, direction, opts) {
    var _this = this;

    var oldParams = {},
        newParams = {},
        firstStep,
        property,
        measure;

    if (dimension.toLowerCase() === 'x') {
      property = 'translateX';
      measure = 'width';
    } else {
      property = 'translateY';
      measure = 'height';
    }

    if (liquid_fire.isAnimating(this.oldElement, 'moving-in')) {
      firstStep = liquid_fire.finish(this.oldElement, 'moving-in');
    } else {
      liquid_fire.stop(this.oldElement);
      firstStep = liquid_fire.Promise.resolve();
    }

    return firstStep.then(function () {
      var bigger = biggestSize(_this, measure);
      oldParams[property] = bigger * direction + 'px';
      newParams[property] = ["0px", -1 * bigger * direction + 'px'];

      return liquid_fire.Promise.all([liquid_fire.animate(_this.oldElement, oldParams, opts), liquid_fire.animate(_this.newElement, newParams, opts, 'moving-in')]);
    });
  }

  function biggestSize(context, dimension) {
    var sizes = [];
    if (context.newElement) {
      sizes.push(parseInt(context.newElement.css(dimension), 10));
      sizes.push(parseInt(context.newElement.parent().css(dimension), 10));
    }
    if (context.oldElement) {
      sizes.push(parseInt(context.oldElement.css(dimension), 10));
      sizes.push(parseInt(context.oldElement.parent().css(dimension), 10));
    }
    return Math.max.apply(null, sizes);
  }

});
define('tiny/transitions/scale', ['exports', 'liquid-fire'], function (exports, liquid_fire) {

  'use strict';



  exports['default'] = scale;
  function scale() {
    var _this = this;

    var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    return liquid_fire.animate(this.oldElement, { scale: [0.2, 1] }, opts).then(function () {
      return liquid_fire.animate(_this.newElement, { scale: [1, 0.2] }, opts);
    });
  }

});
define('tiny/transitions/scroll-then', ['exports', 'ember', 'liquid-fire/is-browser'], function (exports, Ember, isBrowser) {

  'use strict';

  exports['default'] = function (nextTransitionName, options) {
    for (var _len = arguments.length, rest = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      rest[_key - 2] = arguments[_key];
    }

    var _this = this;

    if (isBrowser['default']()) {
      Ember['default'].assert("You must provide a transition name as the first argument to scrollThen. Example: this.use('scrollThen', 'toLeft')", 'string' === typeof nextTransitionName);

      var el = document.getElementsByTagName('html');
      var nextTransition = this.lookup(nextTransitionName);
      if (!options) {
        options = {};
      }

      Ember['default'].assert("The second argument to scrollThen is passed to Velocity's scroll function and must be an object", 'object' === typeof options);

      // set scroll options via: this.use('scrollThen', 'ToLeft', {easing: 'spring'})
      options = Ember['default'].merge({ duration: 500, offset: 0 }, options);

      // additional args can be passed through after the scroll options object
      // like so: this.use('scrollThen', 'moveOver', {duration: 100}, 'x', -1);

      return window.$.Velocity(el, 'scroll', options).then(function () {
        nextTransition.apply(_this, rest);
      });
    }
  }

});
define('tiny/transitions/to-down', ['exports', 'tiny/transitions/move-over'], function (exports, moveOver) {

  'use strict';

  exports['default'] = function (opts) {
    return moveOver['default'].call(this, 'y', 1, opts);
  }

});
define('tiny/transitions/to-left', ['exports', 'tiny/transitions/move-over'], function (exports, moveOver) {

  'use strict';

  exports['default'] = function (opts) {
    return moveOver['default'].call(this, 'x', -1, opts);
  }

});
define('tiny/transitions/to-right', ['exports', 'tiny/transitions/move-over'], function (exports, moveOver) {

  'use strict';

  exports['default'] = function (opts) {
    return moveOver['default'].call(this, 'x', 1, opts);
  }

});
define('tiny/transitions/to-up', ['exports', 'tiny/transitions/move-over'], function (exports, moveOver) {

  'use strict';

  exports['default'] = function (opts) {
    return moveOver['default'].call(this, 'y', -1, opts);
  }

});
define('tiny/transitions/wait', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = function (ms) {
    var _this = this;

    var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    return new Ember['default'].RSVP.Promise(function (resolve) {
      setTimeout(function () {
        resolve(_this.lookup(opts.then || 'default').call(_this));
      }, ms);
    });
  }

});
define('tiny/transitions', ['exports'], function (exports) {

  'use strict';

  exports['default'] = function () {
    this.transition(this.hasClass('final-options'), this.use('fade', { duration: 1000 }));
    this.transition(this.hasClass('payment-options'), this.use('fade', { duration: 1000 }));
    this.transition(this.hasClass('choose-subscriber'), this.use('fade', { duration: 1000 }));
    this.transition(this.inHelper('liquid-with'), this.use('fade', { duration: 1000 }));
  }

});
define('tiny/utils/i18n/compile-template', ['exports', 'ember-i18n/utils/i18n/compile-template'], function (exports, compile_template) {

	'use strict';



	exports['default'] = compile_template['default'];

});
define('tiny/utils/i18n/missing-message', ['exports', 'ember-i18n/utils/i18n/missing-message'], function (exports, missing_message) {

	'use strict';



	exports['default'] = missing_message['default'];

});
define('tiny/validators/email', ['exports', 'ember-validations/validators/base'], function (exports, Base) {

  'use strict';

  exports['default'] = Base['default'].extend({
    call: function call() {
      var email = this.model.get(this.property);
      if (!email) {
        this.errors.pushObject("must include an email");
      } else if (!email.match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)) {
        this.errors.pushObject("must be formatted like an email");
      }
    }
  });

});
define('tiny/validators/phone', ['exports', 'ember-validations/validators/base'], function (exports, Base) {

  'use strict';

  exports['default'] = Base['default'].extend({
    call: function call() {
      var phone = this.model.get(this.property);
      if (Ember.isBlank(phone)) {
        this.errors.pushObject("must include an phone");
      } else if (!phone.match(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/)) {
        this.errors.pushObject("must be formatted like a phone number ( 418 123 1234 )");
      }
    }
  });

});
define('tiny/validators/subscription-email', ['exports', 'ember-validations/validators/base', 'ember'], function (exports, Base, Ember) {

  'use strict';

  exports['default'] = Base['default'].extend({
    init: function init() {
      // this call is necessary, don't forget it!
      this._super();

      this.dependentValidationKeys.pushObject('phone');
    },
    call: function call() {
      var email = this.get('email');
      if (Ember['default'].isBlank(email)) {
        if (this.get('creator')) {
          this.errors.pushObject("must have an email address");
        } else {
          if (Ember['default'].isBlank(this.get('phone'))) {
            this.errors.pushObject("must have an email address or a phone number");
          }
        }
      } else if (!email.match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)) {
        this.errors.pushObject("must be formatted like an email address");
      }
    }
  });

});
define('tiny/validators/subscription-phone', ['exports', 'ember-validations/validators/base', 'ember'], function (exports, Base, Ember) {

  'use strict';

  exports['default'] = Base['default'].extend({
    init: function init() {
      // this call is necessary, don't forget it!
      this._super();

      this.dependentValidationKeys.pushObject('email');
    },
    call: function call() {
      var phone = this.get('phone');
      if (Ember['default'].isBlank(phone)) {
        if (Ember['default'].isBlank(this.get('email'))) {
          this.errors.pushObject("must have an email address or a phone number");
        }
      } else if (!phone.match(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/)) {
        this.errors.pushObject("must be formatted like a phone number ( 418 123 1234 )");
      }
    }
  });

});
/* jshint ignore:start */

/* jshint ignore:end */

/* jshint ignore:start */

define('tiny/config/environment', ['ember'], function(Ember) {
  return { 'default': {"exportApplicationGlobal":true,"modulePrefix":"tiny","environment":"development","baseURL":"/","locationType":"auto","EmberENV":{"FEATURES":{}},"APP":{"plugins":[{"component":"custom-fields-fields","routes":[{"route":"admin.custom_fields.edit","label":"Changer le formulaire"}]}],"API_HOST":"http://localhost:5000","API_NAMESPACE":"","name":"tiny","version":"0.0.0+"},"contentSecurityPolicy":{"default-src":"'self' https://checkout.stripe.com","script-src":"'self' https://cdn.mxpnl.com https://checkout.stripe.com","font-src":"'self' http://fonts.gstatic.com","connect-src":"'self' http://localhost:9001 http://localhost:3001 http://localhost:5000 http://192.203.9.104:5000 https://checkout.stripe.com","img-src":"'self' https://q.stripe.com","style-src":"'self' 'unsafe-inline' https://fonts.googleapis.com","media-src":"'self'"},"stripe":{"key":"pk_test_sQlqVzfDGPAeGYhYcxWKga2D"},"i18n":{"defaultLocale":"fr"},"contentSecurityPolicyHeader":"Content-Security-Policy-Report-Only","browserify":{"tests":true}}};
});

if (runningTests) {
  require("tiny/tests/test-helper");
} else {
  require("tiny/app")["default"].create({"plugins":[{"component":"custom-fields-fields","routes":[{"route":"admin.custom_fields.edit","label":"Changer le formulaire"}]}],"API_HOST":"http://localhost:5000","API_NAMESPACE":"","name":"tiny","version":"0.0.0+"});
}

/* jshint ignore:end */
//# sourceMappingURL=tiny.map