'use strict';

/**
 * welcome-section service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::welcome-section.welcome-section');
