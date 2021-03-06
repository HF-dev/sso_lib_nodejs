"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expressRouterApi_service = void 0;
const utils_1 = require("@leandredev/utils");
const express = require("express");
function expressRouterApi_service(currentApp, plateforme) {
    var toJsonRes = currentApp.toJsonRes;
    var toErrRes = currentApp.toErrRes;
    var router = express.Router();
    var bdd_plateforme = plateforme;
    var secu;
    if (!currentApp.secu) {
        currentApp.secu = new utils_1.UtilsSecu(currentApp);
    }
    secu = currentApp.secu;
    var parseBody = (req, res, next) => {
        let buffer = '';
        req.on('data', (buf) => {
            buffer += buf.toString();
        });
        req.on('end', () => {
            try {
                req.body = JSON.parse(buffer);
                next();
            }
            catch (e) {
                next('parseBody error');
            }
        });
    };
    router.get('/collection/protoschema/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.protoschema.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/protoschema/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.protoschema.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/protoschema/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.protoschema.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/protoschema', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.protoschema.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/protoschema/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.protoschema.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/protoschema/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_protoschema.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/protoschema/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_protoschema.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/oidc_account/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.oidc_account.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/oidc_account/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.oidc_account.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/oidc_account/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.oidc_account.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/oidc_account', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.oidc_account.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/oidc_account/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.oidc_account.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/oidc_account/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_oidc_account.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/oidc_account/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_oidc_account.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.get('/collection/oidc_Client/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.oidc_Client.get(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.post('/collection/oidc_Client/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.oidc_Client.post(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.put('/collection/oidc_Client/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.oidc_Client.put(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/collection/oidc_Client', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.oidc_Client.patch(req.body);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/collection/oidc_Client/:id', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.oidc_Client.delete(req.params.id);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.patch('/admin/oidc_Client/*', parseBody, (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_oidc_Client.patch(req.body, req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    router.delete('/admin/oidc_Client/*', (req, res) => {
        Promise.resolve()
            .then(() => {
            return bdd_plateforme.collections.admin_oidc_Client.delete(req.params[0]);
        })
            .then(data => {
            res.send(data);
        })
            .catch(err => {
            return res.send(this.toErrRes(err, 500, req));
        });
    });
    return router;
}
exports.expressRouterApi_service = expressRouterApi_service;
//# sourceMappingURL=ApiExpressRouter.js.map