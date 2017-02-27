/**
 * Answers.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  			name: {
  				type: 'string',
  				defaultsTo: 'Jane Doe'
  			},
  			email: {
  				type: 'string',
  				defaultsTo: 'jane.doe@strict.nl'
  			},
  			answers: {
  				type: 'json'
  			}
  }
};

